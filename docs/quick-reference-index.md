---
id: quick-reference-index
---

<!-- Last updated: January 11, 2026, 12:00 PM -->

# Quick Reference Index

Use this page as a navigation hub for the most-used documentation assets.

---

## Quick Links

### Core docs
- **[MDX Features Reference](/docs/mdx-features-reference)** - syntax and authoring patterns
- **[All Interactive Components](/docs/all-interactive-components)** - complete component catalog
- **[Quick Start Components](/docs/quick-start-components)** - implementation quick start
- **[Markdown Features](/docs/tutorial-basics/markdown-features)** - practical markdown examples

### Component Documentation
- **[Original 5 Components](/docs/interactive-components)** - First components created

---

## What is available

### Markdown and MDX
- Standard Markdown: headings, lists, tables, links, and images
- MDX: React components within content flow
- Admonitions: structured notes, warnings, and cautions
- Code blocks: syntax, titles, line highlights
- Math: KaTeX support for formulas

 **See**: [MDX Features Reference](/docs/mdx-features-reference)

---

## Interactive Components (11 total)

### Learning & Education
1. **InteractiveQuiz** - Test knowledge with scoring
2. **ProgressTracker** - Track tutorial completion

### Code & Development
3. **InteractiveCodeEditor** - Live JavaScript execution
4. **TerminalSimulator** - CLI demonstrations
5. **InteractiveTabs** - Multi-language examples

### Data & Information
6. **SearchableTable** - Sortable data tables
7. **LiveSearch** - Real-time filtering
8. **InteractiveAccordion** - Collapsible FAQs

### API & Integration
9. **APISimulator** - API endpoint testing

### Visual & Media
10. **ImageComparison** - Before/after sliders
11. **InteractiveCallout** - Styled alerts

 **See**: [All Interactive Components](/docs/all-interactive-components)

---

## By use case

### For Tutorials
- ProgressTracker - Track completion
- InteractiveCodeEditor - Live coding
- InteractiveQuiz - Test knowledge
- TerminalSimulator - CLI commands

### For API Documentation
- APISimulator - Test endpoints
- InteractiveTabs - Multi-language examples
- SearchableTable - Endpoint reference
- CodeTabs - Request/response examples

### For User Guides
- InteractiveAccordion - FAQs
- InteractiveCallout - Important notes
- ImageComparison - Before/after
- LiveSearch - Content discovery

### For Technical Writing
- Code blocks with highlighting
- Docusaurus admonitions
- Math equations (KaTeX)
- Tables and diagrams

---

## Quick start

### 1) Choose content type

**Static Content (`.md`)**
- Pure markdown
- No interactive components
- Faster to write

**Interactive Content (`.mdx`)**
- Markdown + React components
- All 11 interactive components available
- More engaging

### 2) Add frontmatter

```yaml
---
title: My Page Title
description: Page description
sidebar_position: 1
---
```

### 3) Import components (for `.mdx`)

```jsx
import InteractiveQuiz from '@site/src/components/InteractiveQuiz';
import TerminalSimulator from '@site/src/components/TerminalSimulator';
```

### 4) Draft content

Mix markdown with components:

```markdown
# My Tutorial

Regular markdown content here...

<InteractiveQuiz questions={[...]} />

More content...

<TerminalSimulator commands={{...}} />
```

### 5) Preview

```bash
npm start
```

Visit: `http://localhost:3000`

---

## Cheat sheet

### Most Used Syntax

```md
# Heading
**bold** *italic* `code`
[link](url)
![image](url)
- list item
> blockquote
```

### Most Used Components

```jsx
// Code execution
<InteractiveCodeEditor initialCode="..." />

// Multi-language
<CodeTabs examples={[...]} />

// FAQs
<FAQAccordion faqs={[...]} />

// Alerts
<InteractiveCallout type="warning" title="...">
```

### Most Used Admonitions

```md
:::tip
Helpful tip here
:::

:::warning
Important warning
:::

:::note
Additional information
:::
```

---

## File structure

```
docs/
├── mdx-features-reference.md           Complete syntax guide
├── all-interactive-components.mdx      All 11 components
├── interactive-components.mdx         Original 5 components
├── quick-start-components.md          Quick guide
└── tutorial-basics/
    └── markdown-features.mdx          Examples & tutorials
```

---

## Learning path

**Beginner**
1. Read [MDX Features Reference](/docs/mdx-features-reference)
2. Try basic markdown syntax
3. Add simple components (Callout, Tabs)

**Intermediate**
4. Use [Quick Start Guide](/docs/quick-start-components)
5. Implement Accordion, LiveSearch
6. Combine multiple components

**Advanced**
7. Create interactive tutorials with Quiz + Progress
8. Build API docs with Simulator + Tabs
9. Customize component styling

---

## Pro tips

- Bookmark this page for daily use.
- Start with the MDX reference before composing complex pages.
- Copy from working examples and adapt with intent.
- Test responsive behavior before publishing.
- Keep interactive content focused on user outcomes.

---

## Find what you need

### "I want to..."

**...see all syntax** → [MDX Features Reference](/docs/mdx-features-reference)  
**...use components** → [All Interactive Components](/docs/all-interactive-components)  
**...start quickly** → [Quick Start Guide](/docs/quick-start-components)  
**...see examples** → [Markdown Features](/docs/tutorial-basics/markdown-features)

### "I need..."

**...a quiz** → InteractiveQuiz  
**...code examples** → CodeTabs or InteractiveCodeEditor  
**...FAQs** → InteractiveAccordion  
**...API docs** → APISimulator  
**...data tables** → SearchableTable  
**...search** → LiveSearch  
**...alerts** → InteractiveCallout  
**...terminal** → TerminalSimulator  
**...comparisons** → ImageComparison  

---

## Support

**Need Help?**
- Email: contact@techdocs.co.in
- Check examples in documentation
- Review component showcase

---

## Summary

This index is your fastest route to syntax references, component docs, and implementation guides.
