import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/email-agent/SKILL.md",
  "skills/email-agent/agents/openai.yaml",
  "skills/email-agent/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/email-agent/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: email-agent\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add email-agent")) throw new Error("Missing install shortcut");
console.log("emailagentskill.com ok");
