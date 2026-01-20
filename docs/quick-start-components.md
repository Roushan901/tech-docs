<!-- Last updated: January 11, 2026, 12:00 PM -->

# Quick Start: Using Interactive Components

## Getting Started

All interactive components are ready to use in your MDX documentation files. Simply import and use them!

## Basic Usage

### 1. Import the Component

At the top of your MDX file, add the import statement:

```jsx
import InteractiveCodeEditor from '@site/src/components/InteractiveCodeEditor';
```

### 2. Use the Component

Add the component anywhere in your markdown:

```jsx
<InteractiveCodeEditor 
  title="Example"
  initialCode="console.log('Hello!');"
/>
```

### 3. Preview Your Changes

Run the development server:

```bash
npm start
```

Visit `http://localhost:3000` to see your changes.

## Common Examples

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

## Tips

-  Always import at the top of your MDX file
-  Use meaningful titles and descriptions
-  Pre-fill with helpful examples
-  Test on mobile devices
-  Don't overuse - keep it intuitive

## Need Help?

-  [Full Documentation](/docs/interactive-components)
-  [Contact Support](mailto:contact@techdocs.co.in)
-  See [Markdown Features](/docs/tutorial-basics/markdown-features) for more examples

---

**Happy Documenting! **
