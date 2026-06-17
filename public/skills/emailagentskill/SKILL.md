---
name: emailagentskill
description: "Use when Codex, Hermes, OpenClaw, Claude Code, Cowork, or another AI agent needs to plan, review, implement, audit, or improve email work focused on agentic email planning, tool handoffs, safe execution, review loops, and multi-agent coordination. Triggers include requests about agent task routing, approval gates, multi-tool email workflows, delegation plans, operator handoffs, and agent-safe execution policies."
---

# Email Agent Skill

Design the agent workflow before asking any tool to act. Keep authority, evidence, and approval explicit at every handoff.

## When To Use

Use this skill for agentic email planning, tool handoffs, safe execution, review loops, and multi-agent coordination. It is designed for agent workflows where email work must be specific, reviewable, and safe across planning, drafting, implementation, QA, or operational handoff.

## Operating Workflow

1. Classify the agent's role: researcher, strategist, copywriter, implementer, QA reviewer, analyst, or operator.
2. Define what the agent may read, draft, change, and execute, and what requires human approval.
3. Break the request into tool-safe handoffs with inputs, outputs, acceptance criteria, and risk level.
4. Use checkpoints after high-variance work such as segmentation, legal claims, production edits, or performance interpretation.
5. Preserve an audit trail of assumptions, source files, decisions, and rejected options.
6. Return the next action in a way another agent can continue without redoing the investigation.

## Review Criteria

- The agent is not granted production authority by implication.
- Tool calls are justified by the task, not convenience.
- Human review happens before irreversible actions.
- The workflow separates strategy, content, implementation, QA, and execution.
- Final output includes enough context for Codex, Hermes, OpenClaw, Claude Code, Cowork, or another agent to proceed.

## Output Pattern

Return agent routing plans, approval matrices, tool handoff specs, review loops, execution checklists, and audit-friendly status reports. Keep recommendations concrete. Separate analysis from live-system actions, and require explicit approval before sending email, importing contacts, changing DNS, altering suppression rules, or editing production automations.
