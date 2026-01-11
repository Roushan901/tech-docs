# 🎨 Interactive Components for TechDocs

This directory contains **11 reactive, interactive components** that transform your Docusaurus documentation from static to dynamic and engaging.

## 🎯 Component Overview

- **5 Original Components** - Code, tabs, accordion, API, progress
- **6 New Components** - Quiz, terminal, image comparison, searchable table, live search, callouts

## 📦 All Available Components

### 🎓 Learning & Education

#### 1. **InteractiveQuiz**
Interactive quiz component with multiple choice questions, instant feedback, and score tracking.

**Use Case:** Knowledge tests, assessments, learning validation

```jsx
import InteractiveQuiz from '@site/src/components/InteractiveQuiz';

<InteractiveQuiz 
  title="Test Your Knowledge"
  questions={[
    {
      question: 'Question?',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      explanation: 'Because...'
    }
  ]}
/>
```

#### 2. **ProgressTracker**
Track completion progress through tutorials or learning paths.

**Use Case:** Tutorials, courses, multi-step guides

```jsx
import ProgressTracker from '@site/src/components/ProgressTracker';

<ProgressTracker 
  title="Tutorial Progress"
  steps={[
    { title: 'Step 1', description: '...', duration: '5 mins' }
  ]}
/>
```

### 💻 Code & Development

#### 3. **InteractiveCodeEditor**
Live code editor with instant execution and output display.

**Use Case:** Tutorials, coding exercises, live demonstrations

```jsx
import InteractiveCodeEditor from '@site/src/components/InteractiveCodeEditor';

<InteractiveCodeEditor 
  title="Try JavaScript"
  initialCode="console.log('Hello!');"
/>
```

#### 4. **TerminalSimulator**
Interactive command-line terminal simulator for demonstrating CLI commands.

**Use Case:** CLI tutorials, shell command demos, terminal walkthroughs

```jsx
import TerminalSimulator from '@site/src/components/TerminalSimulator';

<TerminalSimulator 
  title="$ Terminal"
  commands={{
    'ls': () => 'file1 file2',
    'git status': () => 'On branch main...'
  }}
/>
```
📊 Data & Information

#### 6. **SearchableTable**
Interactive data table with search, sort, and pagination capabilities.

**Use Case:** Data display, comparison tables, structured information

```jsx
import SearchableTable from '@site/src/components/SearchableTable';

<SearchableTable 
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'value', label: 'Value' }
  ]}
  da🔌 API & Integration

#### 9a={[
    { name: 'Item 1', value: '100' }
  ]}
/>
```

#### 7. **LiveSearch**
Live search with instant filtering and category tags.

**Use Case:** Content discovery, filtering, search demonstrations

```jsx
import LiveSearch from '@site/src/components/LiveSearch';
🎨 Visual & Media

#### 10. **ImageComparison**
Before/after image comparison with interactive slider.

**Use Case:** Design changes, optimizations, visual diffs

```jsx
import ImageComparison from '@site/src/components/ImageComparison';

<ImageComparison 
  beforeImage="/img/before.jpg"
  afterImage="/img/after.jpg"
/>
```

#### 11. **InteractiveCallout**
Styled alerts, tips, warnings, and notifications.

**Use Case:** Important messages, tips, warnings, success messages

```jsx
import InteractiveCallout from '@site/src/components/InteractiveCallout';

<InteractiveCallout type="warning" title="Important">
  Your message here...
</InteractiveCallout*Use Case:** Multi-language code samples, alternative approaches, platform-specific instructions

```jsx
import InteractiveTabs, { CodeTabs } from '@site/src/components/InteractiveTabs';

<CodeTabs 
  examples={[
    { label: 'JavaScript', code: '...' },
    { label: 'Python', code: '...' }
  ]}
/>
```

### 3. **InteractiveAccordion / FAQAccordion**
Collapsible sections for organizing large amounts of information.

**Use Case:** FAQs, detailed explanations, optional content

```jsx
import InteractiveAccordion, { FAQAccordion } from '@site/src/components/InteractiveAccordion';

<FAQAccordion 
  faqs={[
    { question: 'How?', answer: 'Like this!' }
  ]}
/>
```

### 4. **APISimulator**
Interactive API endpoint tester with request/response simulation.

**Use Case:** API documentation, endpoint testing, request examples

```jsx
import APISimulator from '@site/src/components/APISimulator';

<APISimulator 
  endpoint="/api/users"
  method="GET"
  description="Fetch users"
/>
```

### 5. **ProgressTracker**
Track completion progress through tutorials or learning paths.

**Use Case:** Tutorials, courses, multi-step guides

```jsx
imp🎯 Component Categories Summary

| Category | Components | Count |
|----------|-----------|-------|
| 🎓 Learning | Quiz, Progress Tracker | 2 |
| 💻 Development | Code Editor, Terminal, Tabs | 3 |
| 📊 Data | Table, Live Search, Accordion | 3 |
| 🔌 Integration | API Simulator | 1 |
| 🎨 Visual | Image Comparison, Callouts | 2 |

## 📝 Best Practices

1. **Use Sparingly** - Don't overload pages with too many interactive elements
2. **Provide Context** - Explain what each component does
3. **Set Good Defaults** - Pre-fill with meaningful examples
4. **Test Mobile** - Always test on mobile devices
5. **Maintain Consistency** - Use similar components for similar content
6. **Combine Wisely** - Mix components for rich experiences (e.g., Quiz + Progress Tracker)
/>
```

## 🚀 Quick Start

1. **Import the component** in your MDX file:
   ```jsx
   import ComponentName from '@site/src/components/ComponentName';
   ```

2. **Use it** in your markdown:
   ```jsx
   <ComponentName prop="value" />
   ```

3. **Preview** your documentation with `npm start`
- [Original 5 Components](/docs/interactive-components)
- [All 11 Components Showcase](/docs/all-interactive-components)
- [Quick Start Guide](/docs/quick-start
## 📁 Component Structure

Each component follows this structure:
```
ComponentName/
├── index.js          # Component logic
└── styles.module.css # Component styles
```

## 🎨 Styling

All components use:
- CSS Modules for scoped styling
- CSS variables from Docusaurus theme for consistent appearance
- Responsive design patterns
- Dark mode support via CSS variables

## ♿ Accessibility

All components include:
- Proper ARIA labels
- Keyboard navigation
- Screen reader compatibility
- Focus management

## 📱 Responsive Design

All components are fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🧪 Testing

Test components locally:
```bash
npm start
```

Navigate to the demo page:
```
http://localhost:3000/docs/interactive-components
```

## 📝 Best Practices

1. **Use Sparingly** - Don't overload pages with too many interactive elements
2. **Provide Context** - Explain what each component does
3. **Set Good Defaults** - Pre-fill with meaningful examples
4. **Test Mobile** - Always test on mobile devices
5. **Maintain Consistency** - Use similar components for similar content

## 🔧 Customization

### Overriding Styles

Create a custom CSS file and import it:
```css
/* custom.css */
.customEditor {
  border: 3px solid blue;
}
```

### Extending Components

Create a wrapper component:
```jsx
import InteractiveCodeEditor from '@site/src/components/InteractiveCodeEditor';

export default function MyCustomEditor(props) {
  return <InteractiveCodeEditor {...props} title="My Editor" />;
}
```

## 📚 Documentation

Full documentation with live examples:
[Interactive Components Demo](/docs/interactive-components)

## 🤝 Contributing

To add a new component:

1. Create directory: `src/components/NewComponent/`
2. Add `index.js` with component logic
3. Add `styles.module.css` with styles
4. Update this README
5. Add examples to demo page

## 📧 Support

Questions or issues? Contact: [contact@techdocs.co.in](mailto:contact@techdocs.co.in)

---

**Built with ❤️ for TechDocs**
