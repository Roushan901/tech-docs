---
sidebar: guidesSidebar
---

<!-- Last updated: December 26, 2025 at 11:47 PM -->

# Installation Guides

**Who This Is For:** Developers, technical writers, and DevOps engineers setting up documentation tools and development environments.

**When to Use This Guide:** You're starting a new documentation project, migrating to a new platform, setting up local development environments, or deploying documentation sites to production.

**What You'll Learn:** Step-by-step installation procedures for popular documentation tools (Docusaurus, MkDocs, Jekyll, Hugo), environment configuration, dependency management, and troubleshooting common installation issues.

## Overview

Setting up documentation tools shouldn't be complicated. This guide provides clear, tested installation instructions for the most popular documentation platforms, helping you go from zero to a running documentation site in minutes, not hours.

**Real-World Scenario:** Your team has decided to migrate from Confluence to a docs-as-code approach using Docusaurus. You need to set up local development environments for 10 engineers, configure CI/CD pipelines, and ensure everyone can preview changes before deployment. This guide covers everything from Node.js installation to production deployment configurations.

## Prerequisites

Before you begin, ensure you have:
- A computer with internet access
- Basic command line knowledge
- Administrator/sudo access
- 4GB+ RAM recommended

## Quick Start

### Choose Your Platform
Select the tool that best fits your documentation needs:
- **Docusaurus** - Modern static site generator
- **MkDocs** - Python-based documentation
- **Jekyll** - Ruby static site generator
- **Hugo** - Fast Go-based generator

## Docusaurus Installation

### System Requirements
- Node.js version 18.0 or above
- npm or Yarn package manager
- Git for version control

### Installation Steps

#### 1. Install Node.js
```bash
# Windows (using Chocolatey)
choco install nodejs

# macOS (using Homebrew)
brew install node

# Linux (Ubuntu/Debian)
sudo apt install nodejs npm
```

#### 2. Verify Installation
```bash
node --version
npm --version
```

#### 3. Create New Docusaurus Site
```bash
npx create-docusaurus@latest my-website classic
cd my-website
```

#### 4. Start Development Server
```bash
npm start
```

Your site will be available at `http://localhost:3000`

### Configuration

Edit `docusaurus.config.js` to customize:
- Site title and tagline
- Navigation menu
- Footer content
- Theme settings

## MkDocs Installation

### Requirements
- Python 3.8 or higher
- pip package manager

### Installation Steps

```bash
# Install MkDocs
pip install mkdocs

# Install Material theme (optional)
pip install mkdocs-material

# Create new project
mkdocs new my-project
cd my-project

# Start development server
mkdocs serve
```

## Visual Studio Code Setup

### Install VS Code
Download from [code.visualstudio.com](https://code.visualstudio.com/)

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

## Git Installation

### Windows
Download from [git-scm.com](https://git-scm.com/)

### macOS
```bash
brew install git
```

### Linux
```bash
sudo apt install git
```

### Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Docker Installation (Optional)

For containerized documentation builds:

### Install Docker Desktop
Download from [docker.com](https://www.docker.com/)

### Verify Installation
```bash
docker --version
docker-compose --version
```

## Troubleshooting

### Common Issues

#### Node.js Version Issues
```bash
# Use nvm to manage Node versions
nvm install 18
nvm use 18
```

#### Permission Errors
```bash
# Fix npm permissions on Linux/macOS
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

#### Port Already in Use
```bash
# Use different port
npm start -- --port 3001
```

## Next Steps

After installation:
1. [Create your first document](/docs/tutorial-basics/create-a-document)
2. [Learn Markdown features](/docs/tutorial-basics/markdown-features)
3. [Deploy your site](/docs/tutorial-basics/deploy-your-site)

## Additional Resources

- [Official Docusaurus Documentation](https://docusaurus.io/)
- [MkDocs Documentation](https://www.mkdocs.org/)
- [Markdown Guide](https://www.markdownguide.org/)

## Support

Need help with installation?
- Check our [FAQ](#)
- Join our [Community](#)
- [Contact Support](mailto:contact@techdocs.co.in) or [LinkedIn](https://www.linkedin.com/in/roushan-gupta-a42a6a8a/)
