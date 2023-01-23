# Contribution Guide

### Introduction

Thank you for using Vant.

Below are the guidelines for submitting feedback or code to Vant. Please take a few minutes to read the following before submitting an issue or PR to Vant.

### Issue Specification

- If you encountered a problem, please first confirm whether the problem has been recorded in the issue or has been fixed.
- When submitting an issue, please describe the problem you encountered in a short language, and add the environment and reproduction steps when the problem occurs.

## Participate in development

### Local development

Before developing locally, please make sure that [Node.js >= 14.19.0](https://nodejs.org) is installed in your development environment.

Follow the steps below to develop Vant components locally.

```bash
# Clone repository
git clone git@github.com:vant-ui/vant.git

# Enable pnpm package manager
corepack enable

# If you can't use corepack, you can also install pnpm manually
npm install -g pnpm@7

# Install dependencies
pnpm i

# Start development
pnpm dev
```

Different branches of the repository correspond to different Vant versions, please switch to the appropriate branch for development:

- The main branch corresponds to the Vant 4 version, suitable for Vue 3
- 3.x branch corresponds to Vant 3 version, suitable for Vue 3
- 2.x branch corresponds to Vant 2 version, suitable for Vue 2

### Mirror repository

If GitHub cloning is slow, you can also directly clone Vant's [mirror repository](https://gitee.com/vant-contrib/vant) directly on gitee:

```bash
git clone git@gitee.com:vant-contrib/vant.git
```

The mirror repository is only used to speed up local access, please do not submit issues and pull requests to the mirror repository.

### Directory Structure

Vant uses monorepo for code management, and all subpackages are in the `packages/vant` directory:

```
root
└─ packages
   ├─ vant        # Component library
   ├─ vant-cli    # Scaffolding
   ├─ vant-icons  # Icon library
   ├─ vant-use    # Composition API
   └─ ....        # Other npm packages
```

Among them, the `packages/vant` directory is the core code of the component library:

```
vant
├─ docs             # Documentation
├─ src              # Component source code
├─ test             # Test utils
└─ vant.config.mjs  # Document configuration
```

The `packages/vant/src` directory contains the source code of each component, and each folder corresponds to a component:

```
src
└─ button
   ├─ demo             # Demo code
   ├─ test             # Unit test
   ├─ Component.tsx    # Component
   ├─ index.ts         # Component entry
   ├─ index.less       # Styles
   ├─ README.md        # English document
   └─ README.zh-CN.md  # Chinese document
```

### Code Specification

When writing code, please note:

- Make sure the code can pass the repository's ESLint check.
- Make sure the code format is standardized, use prettier for code formatting.
- Make sure you don't use incompatible APIs like `async`, `await`.

## Submitting a Pull Request

### Reference Guide

If this is your first time submitting a pull request on GitHub, you can learn from the following article:

- [First participation in open source](https://github.com/firstcontributions/first-contributions)

### Pull Request Specification

When submitting a Pull Request, please note:

- Keep your PRs small enough that a PR only addresses a single issue or adds a single feature.
- When adding new components or modifying original components, remember to add or modify the corresponding unit tests to ensure the stability of the code.
- Please include an appropriate description in the PR, and link related issues.

### Pull Request Process

1. Fork the main repository. If you have already forked, please synchronize the latest code from the main repository.
2. Create a new branch based on the main branch of the repository after the fork, such as `feature/button_color`.
3. Develop on the new branch. When development is complete, submit a pull request to the main branch of the main repository.
4. The pull request is merged into the main repository after the review is approved.
5. Wait for Vant to release a new version, usually once a week.

### Synchronize the latest code

Before submitting a Pull Request, please synchronize the latest code of the main repository according to the following process:

```bash
# Add the main repository to remote
git remote add upstream git@github.com:vant-ui/vant.git

# Pull the latest code from the main repository
git fetch upstream

# Switch to the main branch
git checkout main

# Merge the code from the main repository
git merge upstream/main
```
