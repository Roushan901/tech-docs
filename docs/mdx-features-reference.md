<!-- Last updated: January 11, 2026, 12:00 PM -->

# Complete MDX & Markdown Features Reference

**One-stop reference for ALL supported features in TechDocs**

This document contains every feature you can use in your `.md` and `.mdx` files.

---

## 📑 Table of Contents

1. [Basic Markdown Syntax](#basic-markdown-syntax)
2. [MDX - React Components in Markdown](#mdx---react-components-in-markdown)
3. [Docusaurus Admonitions](#docusaurus-admonitions)
4. [Code Blocks](#code-blocks)
5. [Math Equations (KaTeX)](#math-equations-katex)
6. [Tables](#tables)
7. [Links and References](#links-and-references)
8. [Images](#images)
9. [Lists](#lists)
10. [Interactive Components (All 11)](#interactive-components-all-11)
11. [Frontmatter](#frontmatter)
12. [Advanced Features](#advanced-features)

---

## Basic Markdown Syntax

### Headings

```md
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

### Text Formatting

```md
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
`Inline code`
```

**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
`Inline code`

### Blockquotes

```md
> This is a blockquote
> It can span multiple lines
>> Nested blockquote
```

> This is a blockquote
> It can span multiple lines

### Horizontal Rules

```md
---
***
___
```

---

## MDX - React Components in Markdown

MDX allows you to use React components directly in Markdown:

### Import Components

```jsx
import MyComponent from '@site/src/components/MyComponent';
```

### Use Components

```jsx
<MyComponent prop="value" />

<MyComponent>
  Children content here
</MyComponent>
```

### Inline JSX

```jsx
export const Highlight = ({children, color}) => (
  <span style={{
    backgroundColor: color,
    borderRadius: '2px',
    color: '#fff',
    padding: '0.2rem',
  }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">highlighted text</Highlight>!
```

---

## Docusaurus Admonitions

### All Admonition Types

```md
:::note
This is a note
:::

:::tip
This is a helpful tip
:::

:::info
This is informational
:::

:::warning
This is a warning
:::

:::danger
This is dangerous/critical
:::
```

:::note
This is a note
:::

:::tip
This is a helpful tip
:::

:::info
This is informational
:::

:::warning
This is a warning
:::

:::danger
This is dangerous/critical
:::

### With Custom Titles

```md
:::tip Pro Tip
You can customize the title!
:::

:::danger BREAKING CHANGE
This will break your code!
:::
```

:::tip Pro Tip
You can customize the title!
:::

### Nested Content

```md
:::warning Important
You can include **formatted text**, `code`, and even:

- Lists
- Multiple paragraphs

```js
code blocks
```
:::
```

---

## Code Blocks

### Basic Code Block

````md
```
Plain text code
```
````

### With Syntax Highlighting

````md
```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

```python
def greet():
    print("Hello, World!")
```

```bash
npm install
npm start
```
````

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

### With Title

````md
```javascript title="src/app.js"
function App() {
  return <h1>Hello!</h1>;
}
```
````

```javascript title="src/app.js"
function App() {
  return <h1>Hello!</h1>;
}
```

### With Line Numbers

````md
```javascript showLineNumbers
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
````

### Highlighting Lines

````md
```javascript {2-3}
function example() {
  const a = 1;  // highlighted
  const b = 2;  // highlighted
  return a + b;
}
```
````

### Live Code Editor (Docusaurus)

````md
```jsx live
function Clock() {
  const [time, setTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  return <div>Current time: {time.toLocaleTimeString()}</div>;
}
```
````

---

## Math Equations (KaTeX)

### Inline Math

```md
The formula is $E = mc^2$
```

The formula is $E = mc^2$

### Block Math

```md
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### Complex Equations

```md
$$
f(x) = \begin{cases}
  x^2 & \text{if } x > 0 \\
  0   & \text{if } x = 0 \\
  -x^2 & \text{if } x < 0
\end{cases}
$$
```

---

## Tables

### Basic Table

```md
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Aligned Columns

```md
| Left | Center | Right |
|:-----|:------:|------:|
| A    | B      | C     |
| 1    | 2      | 3     |
```

| Left | Center | Right |
|:-----|:------:|------:|
| A    | B      | C     |
| 1    | 2      | 3     |

### With Formatting

```md
| Component | **Status** | `Version` |
|-----------|------------|-----------|
| React     | ✅ Active  | `18.0`    |
| Vue       | ⚠️ Beta    | `3.2`     |
```

---

## Links and References

### External Links

```md
[Visit TechDocs](https://techdocs.co.in)
[Google](https://google.com "Google Homepage")
```

### Internal Links

```md
[About Page](/docs/intro)
[Relative Link](./other-page)
```

### Reference Links

```md
[Link text][reference]

[reference]: https://example.com "Title"
```

### Auto Links

```md
https://techdocs.co.in
contact@techdocs.co.in
```

---

## Images

### Basic Image

```md
![Alt text](/img/logo.png)
```

### With Title

```md
![Alt text](/img/logo.png "Image Title")
```

### Using HTML for Sizing

```html
<img src="/img/logo.png" alt="Logo" width="200" />
```

### Relative Images

```md
![Diagram](./img/diagram.png)
```

---

## Lists

### Unordered Lists

```md
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3
```

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered Lists

```md
1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item
```

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task Lists

```md
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

### Definition Lists

```md
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

---

## Interactive Components (All 11)

### 1. Interactive Code Editor

```jsx
import InteractiveCodeEditor from '@site/src/components/InteractiveCodeEditor';

<InteractiveCodeEditor 
  title="Try JavaScript"
  initialCode={`console.log("Hello!");
const sum = [1, 2, 3].reduce((a, b) => a + b);
console.log('Sum:', sum);`}
/>
```

### 2. Interactive Tabs

```jsx
import InteractiveTabs, { CodeTabs } from '@site/src/components/InteractiveTabs';

<CodeTabs 
  examples={[
    { label: 'JavaScript', code: 'console.log("Hello");' },
    { label: 'Python', code: 'print("Hello")' },
    { label: 'Java', code: 'System.out.println("Hello");' }
  ]}
/>
```

### 3. Interactive Accordion

```jsx
import InteractiveAccordion, { FAQAccordion } from '@site/src/components/InteractiveAccordion';

<FAQAccordion 
  faqs={[
    { question: 'What is this?', answer: 'This is an accordion!' },
    { question: 'How does it work?', answer: 'Click to expand!' }
  ]}
/>
```

### 4. API Simulator

```jsx
import APISimulator from '@site/src/components/APISimulator';

<APISimulator 
  endpoint="/api/users"
  method="GET"
  description="Fetch users from API"
  initialParams={{ "page": "1", "limit": "10" }}
/>
```

### 5. Progress Tracker

```jsx
import ProgressTracker from '@site/src/components/ProgressTracker';

<ProgressTracker 
  title="Tutorial Progress"
  steps={[
    { title: 'Step 1', description: 'First step', duration: '5 mins' },
    { title: 'Step 2', description: 'Second step', duration: '10 mins' }
  ]}
/>
```

### 6. Interactive Quiz

```jsx
import InteractiveQuiz from '@site/src/components/InteractiveQuiz';

<InteractiveQuiz 
  title="Knowledge Test"
  questions={[
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      explanation: 'Basic math: 2 + 2 = 4'
    }
  ]}
/>
```

### 7. Terminal Simulator

```jsx
import TerminalSimulator from '@site/src/components/TerminalSimulator';

<TerminalSimulator 
  title="$ Terminal"
  commands={{
    'ls': () => 'file1.txt file2.txt folder/',
    'pwd': () => '/home/user/docs',
    'echo hello': (args) => args.join(' ')
  }}
/>
```

### 8. Image Comparison

```jsx
import ImageComparison from '@site/src/components/ImageComparison';

<ImageComparison 
  beforeImage="/img/before.jpg"
  afterImage="/img/after.jpg"
  beforeLabel="Before"
  afterLabel="After"
/>
```

### 9. Searchable Table

```jsx
import SearchableTable from '@site/src/components/SearchableTable';

<SearchableTable 
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'value', label: 'Value' },
    { key: 'status', label: 'Status' }
  ]}
  data={[
    { name: 'Item 1', value: '100', status: 'Active' },
    { name: 'Item 2', value: '200', status: 'Inactive' }
  ]}
  itemsPerPage={5}
/>
```

### 10. Live Search

```jsx
import LiveSearch from '@site/src/components/LiveSearch';

<LiveSearch 
  placeholder="Search items..."
  items={[
    { name: 'Item 1', description: 'Description 1', category: 'Type A' },
    { name: 'Item 2', description: 'Description 2', category: 'Type B' }
  ]}
  searchFields={['name', 'description']}
/>
```

### 11. Interactive Callout

```jsx
import InteractiveCallout from '@site/src/components/InteractiveCallout';

<InteractiveCallout type="info" title="Information">
  This is an informational message.
</InteractiveCallout>

<InteractiveCallout type="warning" title="Warning" dismissible={true}>
  This is a warning that can be dismissed.
</InteractiveCallout>

// Types: info, success, warning, danger, tip, note
```

---

## Frontmatter

### Document Frontmatter

```yaml
---
title: My Document Title
description: Document description for SEO
sidebar_position: 1
tags: [tutorial, beginner, react]
keywords: [docs, documentation, technical writing]
---
```

### Blog Post Frontmatter

```yaml
---
slug: my-blog-post
title: Blog Post Title
authors: [roushan]
tags: [tutorial, docusaurus]
date: 2026-01-11
---
```

### Common Frontmatter Options

```yaml
---
# General
title: Page Title
description: Page description
id: custom-page-id
slug: /custom-url

# Sidebar
sidebar_position: 1
sidebar_label: Custom Label
sidebar_class_name: custom-class

# Display
hide_title: false
hide_table_of_contents: false

# Metadata
tags: [tag1, tag2]
keywords: [keyword1, keyword2]
image: /img/social-card.jpg

# Blog specific
authors: [author1, author2]
date: 2026-01-11
---
```

---

## Advanced Features

### HTML in Markdown

```html
<div style={{padding: '20px', background: '#f0f0f0'}}>
  Custom HTML with inline styles
</div>

<details>
  <summary>Click to expand</summary>
  Hidden content here
</details>
```

<details>
  <summary>Click to expand</summary>
  Hidden content here
</details>

### Tabs (Docusaurus)

First import the components:

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Then use them in your content:

```jsx
<Tabs>
  <TabItem value="js" label="JavaScript">
    JavaScript content here
  </TabItem>
  <TabItem value="py" label="Python">
    Python content here
  </TabItem>
</Tabs>
```

### Footnotes

```md
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

### Emoji

```md
:tada: :rocket: :sparkles:
```

:tada: :rocket: :sparkles:

### Escape Characters

```md
\*Not italic\*
\`Not code\`
\[Not a link\]
```

### Line Breaks

```md
Line 1\
Line 2

Line 3<br/>Line 4
```

### Comment Syntax

```md
<!-- This is a comment and won't be displayed -->

{/* This is a JSX comment */}
```

---

## Quick Reference Cheatsheet

### Most Common Syntax

| Element | Syntax |
|---------|--------|
| Heading | `# H1`, `## H2`, `### H3` |
| Bold | `**bold**` |
| Italic | `*italic*` |
| Code | `` `code` `` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| List | `- item` or `1. item` |
| Blockquote | `> quote` |
| Code block | ` ```lang ... ``` ` |
| Table | `\| col1 \| col2 \|` |

### Component Import Pattern

```jsx
// 1. Import at top of file
import Component from '@site/src/components/Component';

// 2. Use in content
<Component prop="value" />
```

### File Types

- **`.md`** - Plain Markdown (no JSX)
- **`.mdx`** - Markdown + JSX (can use React components)

---

## 💡 Pro Tips

1. **Use MDX for interactive content** - Any file with components should be `.mdx`
2. **Preview changes** - Always run `npm start` to see live updates
3. **Check errors** - Watch the terminal for build errors
4. **Organize imports** - Keep all imports at the top of the file
5. **Test responsive** - Check on mobile, tablet, and desktop
6. **Use admonitions** - Better than plain text for callouts
7. **Combine features** - Mix components, code blocks, and text
8. **Keep it simple** - Don't overuse interactive elements

---

## 📚 Related Documentation

- [All Interactive Components Demo](/docs/all-interactive-components)
- [Quick Start Components Guide](/docs/quick-start-components)
- [Docusaurus Markdown Guide](https://docusaurus.io/docs/markdown-features)

---

## 📧 Need Help?

- **Email**: contact@techdocs.co.in
- **Issues**: Check component documentation
- **Examples**: See `/docs/tutorial-basics/markdown-features`

---

**Last Updated**: January 11, 2026

This document contains ALL supported features. Bookmark it for quick reference!
