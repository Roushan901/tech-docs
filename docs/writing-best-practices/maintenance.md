---
sidebar_position: 8
---

<!-- Last updated: February 28, 2026 -->

# Maintenance

**Estimated reading time:** 3 min  
**Skill level:** Intermediate

## What you'll learn

- Strategies for keeping documentation up to date
- How to handle deprecation notices

### Keeping Documentation Current

**Regular audits:**
- Quarterly content review
- Update version-specific information
- Remove deprecated content
- Refresh screenshots and examples

**Set up alerts for:**
- API changes
- Breaking changes in dependencies
- UI/UX updates
- Security patches

### Deprecation Notices

When features are deprecated:

:::warning Deprecated
This API endpoint is deprecated as of v2.0 and will be removed in v3.0.
Use the new `/api/v2/users` endpoint instead.
:::

## Migration Guide

Follow these steps to migrate to the new endpoint:
1. Update base URL to `/api/v2`
2. Modify authentication header format
3. Test with new response schema
