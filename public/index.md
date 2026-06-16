# Email Agent Skill

emailagentskill.com

Route email tasks between agents, tools, and human approval without losing control.

An agentic email skill for task routing, tool handoffs, review gates, and multi-agent operating loops across campaign and lifecycle work.

## Install

```bash
npx skills add emailagentskill
```

## Operating Data

- **4**: agent roles
- **10**: handoff fields
- **3**: review loops

## Agent routing board

1. Planner
2. Researcher
3. Builder
4. Reviewer
5. Approver

## Scenarios

### Agent task routing

Decide whether the next step is analysis, copy, implementation, QA, or approval.

### Approval gates

Separate what agents may draft from what humans must authorize.

### Multi-tool workflows

Coordinate briefs, files, dashboards, and sending systems without blending responsibilities.

## Operating Proof

- **Best for**: Teams building repeatable agent workflows for email operations
- **Primary artifact**: Routing plan with owner, tool, input, output, and stop rule
- **Stop condition**: Ambiguous tool permission or unclear owner for live action

## Agent Resources

- Markdown index: /index.md
- Skill discovery JSON: /.well-known/skills/index.json
- Raw SKILL.md: /skills/emailagentskill/SKILL.md
- Articles: /articles/
