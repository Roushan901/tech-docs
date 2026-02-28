---
sidebar_position: 4
---

<!-- Last updated: February 28, 2026 -->

# Style Guide

**Estimated reading time:** 5 min  
**Skill level:** Beginner – Intermediate

## What you'll learn

- How to maintain consistent voice, tone, and grammar
- Formatting rules for code, lists, and tables
- When to choose tutorials, how‑tos, and API references
- Useful tools and style guide resources

### Voice and Tone

**Active Voice Example:**
```
 "The system processes the request"
 "The request is processed by the system"
```

**Appropriate Tone:**
- **Instructional:** Confident and direct
- **Explanatory:** Clear and educational  
- **Error Messages:** Helpful and actionable
- **Release Notes:** Professional and informative

### Grammar and Punctuation

**Serial Comma (Oxford Comma):**
```
 "Install Node.js, Python, and Docker"
 "Install Node.js, Python and Docker"
```

**Contractions:**
- Generally avoid in formal docs ("do not" vs "don't")
- OK for conversational tutorials and blog posts
- Maintain consistency within each document type

### Formatting Conventions

#### Code and Commands

**Inline code:** Use backticks for file names, commands, variables
```markdown
Run `npm install` to install dependencies.
Edit the `config.json` file.
Set the `API_KEY` environment variable.
```

**Code blocks:** Include language identifier for syntax highlighting
````markdown
```bash
npm run build
npm start
```

```javascript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};
```
````
