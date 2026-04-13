---
id: installation-guides
sidebar: guidesSidebar
---

<!-- Last updated: December 26, 2025 at 11:47 PM -->

# Installation Guides

Use this section to bootstrap documentation tooling quickly and consistently across local and team environments.

## Scope

- Local setup for documentation projects
- Baseline toolchain for authors and reviewers
- Cross-platform install commands and validation checks
- Common setup failures and practical fixes

## Recommended baseline

For this portal, standardize on:

- Node.js LTS (or newer supported version)
- Yarn or npm
- Git
- VS Code with Markdown linting/spellcheck extensions

## Prerequisites

- Terminal access with install permissions
- Basic familiarity with command-line workflows
- Network access for package installation

## Docusaurus setup (primary path)

### 1) Install Node.js
```bash
# Windows (using Chocolatey)
choco install nodejs

# macOS (using Homebrew)
brew install node

# Linux (Ubuntu/Debian)
sudo apt install nodejs npm
```

### 2) Verify
```bash
node --version
npm --version
```

### 3) Create and run
```bash
npx create-docusaurus@latest my-website classic
cd my-website
npm start
```

The local site runs at `http://localhost:3000`.

## Alternative stack: MkDocs

### Quick setup
```bash
pip install mkdocs
pip install mkdocs-material
mkdocs new my-project
cd my-project
mkdocs serve
```

## Editor setup (VS Code)

### Recommended Extensions
- **Markdown All in One** - Enhanced Markdown support
- **markdownlint** - Markdown linting
- **Code Spell Checker** - Spell checking
- **Prettier** - Code formatting
- **GitLens** - Git integration

### Install Extensions
```bash
code --install-extension yzhang.markdown-all-in-one
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension streetsidesoftware.code-spell-checker
```

## Troubleshooting quick fixes

### Common Issues

### Node version mismatch
```bash
# Use nvm to manage Node versions
nvm install 18
nvm use 18
```

### Permission errors
```bash
# Fix npm permissions on Linux/macOS
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Port in use
```bash
npm start -- --port 3001
```

## Next Steps

1. [Create your first document](/docs/tutorial-basics/create-a-document)
2. [Learn Markdown features](/docs/tutorial-basics/markdown-features)
3. [Deploy your site](/docs/tutorial-basics/deploy-your-site)

## Support

Need help with setup? Contact [support](mailto:contact@techdocs.co.in).
