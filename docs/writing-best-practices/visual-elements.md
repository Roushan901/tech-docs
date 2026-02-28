---
sidebar_position: 5
---

<!-- Last updated: February 28, 2026 -->

# Visual Elements

**Estimated reading time:** 3 min  
**Skill level:** Beginner – Intermediate

## What you'll learn

- When to include images and diagrams
- Best practices for screenshots and charts
- How to write effective code examples

### When to Use Images

**Include screenshots for:**
- User interface navigation
- Complex configurations
- Visual verification steps
- Error messages

**Best practices:**
- Use annotations (arrows, highlights)
- Keep file sizes optimized (less than 500KB)
- Use consistent image sizes
- Provide alt text for accessibility

### Diagrams and Charts

**Architecture diagrams:**
```
┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │─────▶│   API    │─────▶│ Database │
└──────────┘      └──────────┘      └──────────┘
```

**Tools for diagrams:**
- Mermaid.js (text-based diagrams)
- Draw.io / Lucidchart
- PlantUML for sequence diagrams
- Excalidraw for hand-drawn style

### Code Examples

**Effective code examples:**
-  Complete and runnable
-  Include relevant context
-  Show realistic use cases
-  Add inline comments for clarity
-  Follow language conventions

```javascript
//  Good Example: Clear, complete, commented
async function fetchUserData(userId) {
  try {
    // Make API request with authentication
    const response = await fetch(`/api/users/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    // Parse and return JSON data
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}
```