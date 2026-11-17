// 每周检查 data.js 里每一条链接是否还活着
// 用法：GITHUB_TOKEN=xxx GITHUB_REPOSITORY=owner/repo node scripts/check-links.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = process.env.GITHUB_REPOSITORY;
const TOKEN = process.env.GITHUB_TOKEN;
if (!REPO || !TOKEN) {
  console.error('缺少 GITHUB_REPOSITORY 或 GITHUB_TOKEN');
  process.exit(1);
}

// ---- 读取数据集 ----
const here = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(here, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const COURSES = sandbox.window.COURSES;

if (!Array.isArray(COURSES)) {
  console.error('data.js 没有正确设置 window.COURSES');
  process.exit(1);
}

const api = (p) => `https://api.github.com${p}`;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'User-Agent': 'cityu-pastpapers-link-check'
};

// ---- 逐个校验 ----
const broken = [];
let checked = 0;

for (const course of COURSES) {
  for (const f of course.files) {
    checked++;
    const encPath = f.p.split('/').map(encodeURIComponent).join('/');
    const url = api(`/repos/${f.r}/contents/${encPath}`);
    let status = 0;
    try {
      const res = await fetch(url, { headers });
      status = res.status;
      if (res.status === 404) {
        broken.push({
          code: course.code,
          file: f.p.split('/').pop(),
          repo: f.r,
          link: `https://github.com/${f.r}/blob/${f.b}/${encPath}`
        });
      } else if (res.status === 403) {
        console.log(`! 速率受限，跳过剩余检查（已查 ${checked}）`);
        break;
      }
    } catch (e) {
      console.log(`! 网络错误 ${f.r}/${f.p}: ${e.message}`);
    }
    // 避免触发二级速率限制
    await new Promise((r) => setTimeout(r, 150));
  }
}

console.log(`检查 ${checked} 条，失效 ${broken.length} 条`);

// ---- 写 step summary ----
const summaryFile = process.env.GITHUB_STEP_SUMMARY;
if (summaryFile) {
  const lines = [
    `### 链接检查`,
    ``,
    `检查 **${checked}** 条，失效 **${broken.length}** 条。`,
    ``
  ];
  if (broken.length) {
    lines.push('| 课程 | 文件 |', '|---|---|');
    for (const b of broken) lines.push(`| ${b.code} | ${b.file} |`);
  }
  fs.appendFileSync(summaryFile, lines.join('\n') + '\n');
}

// ---- 维护 issue（有就更新，没有就新建，修好了就关掉）----
const MARK = '[自动检查]';
const listRes = await fetch(api(`/repos/${REPO}/issues?state=open&per_page=100`), { headers });
const openIssues = listRes.ok ? await listRes.json() : [];
const existing = openIssues.find((i) => i.title.startsWith(MARK));

if (broken.length > 0) {
  const body = [
    `每周自动检查，共 **${checked}** 条链接，其中 **${broken.length}** 条已失效。`,
    ``,
    `| 课程 | 文件 | 原仓库 |`,
    `|---|---|---|`,
    ...broken.map((b) => `| \`${b.code}\` | ${b.file} | [${b.repo}](https://github.com/${b.repo}) |`),
    ``,
    `处理方式：在 \`data.js\` 里删掉或替换这几条，然后提交。下次检查通过后本 issue 会自动关闭。`
  ].join('\n');

  const title = `${MARK} ${broken.length} 条链接失效`;
  if (existing) {
    await fetch(api(`/repos/${REPO}/issues/${existing.number}`), {
      method: 'PATCH',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body })
    });
    console.log(`已更新 issue #${existing.number}`);
  } else {
    const res = await fetch(api(`/repos/${REPO}/issues`), {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body })
    });
    const created = await res.json();
    console.log(res.ok ? `已创建 issue #${created.number}` : `创建失败 ${res.status}`);
  }
} else if (existing) {
  await fetch(api(`/repos/${REPO}/issues/${existing.number}`), {
    method: 'PATCH',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: 'closed', body: '全部链接恢复正常，自动关闭。' })
  });
  console.log(`已关闭 issue #${existing.number}`);
}
