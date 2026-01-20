<!-- Last updated: January 11, 2026, 12:00 PM -->

#  Quick Reference Index

**Fast Access to All TechDocs Resources and Features**

---

##  Quick Links

### Essential Documentation
- **[MDX Features Reference](/docs/mdx-features-reference)** - Complete syntax guide (one file!)
- **[All Interactive Components](/docs/all-interactive-components)** - 11 component showcase
- **[Quick Start Components](/docs/quick-start-components)** - Fast component guide
- **[Markdown Features](/docs/tutorial-basics/markdown-features)** - Examples & tutorials

### Component Documentation
- **[Original 5 Components](/docs/interactive-components)** - First components created

---

##  What's Available?

### Markdown & MDX Syntax
 **Standard Markdown** - Headers, lists, tables, links, images  
 **MDX (React in Markdown)** - Use components anywhere  
 **Docusaurus Admonitions** - Note, tip, info, warning, danger  
 **Code Blocks** - Syntax highlighting, titles, line numbers  
 **Math Equations** - KaTeX support for formulas  
 **Live Code Blocks** - Interactive React examples  

 **See**: [MDX Features Reference](/docs/mdx-features-reference)

---

##  Interactive Components (11 Total)

###  Learning & Education
1. **InteractiveQuiz** - Test knowledge with scoring
2. **ProgressTracker** - Track tutorial completion

###  Code & Development
3. **InteractiveCodeEditor** - Live JavaScript execution
4. **TerminalSimulator** - CLI demonstrations
5. **InteractiveTabs** - Multi-language examples

###  Data & Information
6. **SearchableTable** - Sortable data tables
7. **LiveSearch** - Real-time filtering
8. **InteractiveAccordion** - Collapsible FAQs

###  API & Integration
9. **APISimulator** - API endpoint testing

###  Visual & Media
10. **ImageComparison** - Before/after sliders
11. **InteractiveCallout** - Styled alerts

 **See**: [All Interactive Components](/docs/all-interactive-components)

---

##  By Use Case

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

##  Quick Start

### 1. Choose Your Content Type

**Static Content (`.md`)**
- Pure markdown
- No interactive components
- Faster to write

**Interactive Content (`.mdx`)**
- Markdown + React components
- All 11 interactive components available
- More engaging

### 2. Add Frontmatter

```yaml
---
title: My Page Title
description: Page description
sidebar_position: 1
---
```

### 3. Import Components (if using `.mdx`)

```jsx
import InteractiveQuiz from '@site/src/components/InteractiveQuiz';
import TerminalSimulator from '@site/src/components/TerminalSimulator';
```

### 4. Write Your Content

Mix markdown with components:

```markdown
# My Tutorial

Regular markdown content here...

<InteractiveQuiz questions={[...]} />

More content...

<TerminalSimulator commands={{...}} />
```

### 5. Preview

```bash
npm start
```

Visit: `http://localhost:3000`

---

##  Cheat Sheet

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

##  File Structure

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

##  Learning Path

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

##  Pro Tips

 **Bookmark this page** - Quick access to everything  
 **Start with MDX reference** - One-page syntax guide  
 **Copy from examples** - See working code  
 **Test responsive** - Check mobile view  
 **Use components wisely** - Don't overload pages  
 **Preview changes** - Always run `npm start`  

---

##  Find What You Need

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

##  Support

**Need Help?**
- Email: contact@techdocs.co.in
- Check examples in documentation
- Review component showcase

---

##  Summary

You have access to:
-  Complete MDX/Markdown syntax
-  11 interactive components
-  Docusaurus features
-  Math equations (KaTeX)
-  Live code blocks
-  Comprehensive examples

**Everything in one organized place!**

---

**Last Updated**: January 11, 2026

Bookmark this page for quick access to all TechDocs features! 
