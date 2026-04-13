---
id: quick-start-components
---

<!-- Last updated: January 11, 2026, 12:00 PM -->

# Quick Start: Using Interactive Components

Use this guide when you need to add interactive elements to `.mdx` pages without breaking readability or performance.

## Basic Usage

### 1) Import the component

Add imports at the top of your file:

```jsx
import InteractiveCodeEditor from '@site/src/components/InteractiveCodeEditor';
```

### 2) Render the component

Place the component near the section where users need it:

```jsx
<InteractiveCodeEditor 
  title="Example"
  initialCode="console.log('Hello!');"
/>
```

### 3) Validate locally

Run local preview:

```bash
npm start
```

Open `http://localhost:3000` and validate keyboard, mobile, and dark-mode behavior.

## Common patterns

### Code Tutorial

```jsx
import InteractiveCodeEditor from '@site/src/components/InteractiveCodeEditor';

<InteractiveCodeEditor 
  title="Learn JavaScript Arrays"
  initialCode={`const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);
fruits.push('grape');
console.log(fruits);`}
/>
```

### Multi-Language Examples

```jsx
import { CodeTabs } from '@site/src/components/InteractiveTabs';

<CodeTabs 
  examples={[
    {
      label: 'JavaScript',
      code: 'console.log("Hello");'
    },
    {
      label: 'Python',
      code: 'print("Hello")'
    }
  ]}
/>
```

### FAQ Section

```jsx
import { FAQAccordion } from '@site/src/components/InteractiveAccordion';

<FAQAccordion 
  faqs={[
    {
      question: 'How do I get started?',
      answer: 'Simply import the component and use it in your MDX file!'
    }
  ]}
/>
```

### API Documentation

```jsx
import APISimulator from '@site/src/components/APISimulator';

<APISimulator 
  endpoint="/api/data"
  method="GET"
  description="Fetch data from the API"
/>
```

### Tutorial Progress

```jsx
import ProgressTracker from '@site/src/components/ProgressTracker';

<ProgressTracker 
  title="Complete This Tutorial"
  steps={[
    { title: 'Step 1', description: 'First step', duration: '5 mins' },
    { title: 'Step 2', description: 'Second step', duration: '10 mins' }
  ]}
/>
```

## Authoring recommendations

- Keep one component per learning objective.
- Use realistic sample data and commands.
- Prefer clarity over visual density.
- Add fallback text for users who skip interactive blocks.
- Validate accessibility before publishing.

## Need Help?

- [Full Documentation](/docs/interactive-components)
- [Contact Support](mailto:contact@techdocs.co.in)
- See [Markdown Features](/docs/tutorial-basics/markdown-features) for additional examples

---

Ship interactive content intentionally, not decoratively.
