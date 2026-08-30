---
name: rstack-cli-docs
description: Consult installed, version-matched Rstack docs only for user-facing `rs` command behavior, `rstack.config.*` semantics, or public `rstack` APIs. Do not use for purely internal implementation, tests, performance, or repository maintenance.
---

# Rstack CLI Docs

Rstack CLI is the `rstack` package, exposed through the `rs` binaries. It provides one CLI, one config file, and a consistent workflow for the Rstack JavaScript toolchain.

It covers web app, library, docs, test, lint, formatting, Git hook, and staged-file workflows.

## Read installed docs when this skill applies

When this skill applies, find and read the relevant Markdown documentation shipped with the installed `rstack` package.

Model knowledge can be outdated; the installed documentation is the source of truth for the project's Rstack version.

1. Start with `node_modules/rstack/docs/llms.txt`, then read only the linked pages relevant to the task before proposing or making changes.

2. For exact CLI flags and behavior, also run `rs -h` or `rs <command> -h` when supported.

If the bundled docs are not available at that path, locate the installed `rstack` package.

If they are still unavailable, verify that `rstack` is installed, and use CLI help plus the online [Rstack documentation](https://rstack.rs/) as a fallback.
