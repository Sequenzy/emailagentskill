import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/emailagentskill/SKILL.md",
  "skills/emailagentskill/agents/openai.yaml",
  "skills/emailagentskill/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/emailagentskill/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: emailagentskill\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add emailagentskill")) throw new Error("Missing install shortcut");
console.log("emailagentskill.com ok");
