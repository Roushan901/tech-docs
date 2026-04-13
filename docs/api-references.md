---
id: api-references
sidebar: guidesSidebar
---

<!-- Last updated: December 27, 2025 at 12:02 AM -->

# API References

Use this section to publish clear, production-grade API documentation that integration teams can implement without back-and-forth support.

## What to document for every API

1. Authentication model and required headers
2. Endpoint behavior and method semantics
3. Request schema with required/optional fields
4. Response schema with status-code mapping
5. Error contracts with remediation guidance
6. Rate limits, retries, and idempotency expectations
7. Webhook/event delivery behavior (if applicable)

## API Documentation Structure

### Standard Format for Each Endpoint

```markdown
### POST /api/v1/resource

**Description:** Create a resource in the current workspace

**Authentication:** Required - API Key or OAuth 2.0

**Request Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Resource name |
| type | string | No | Resource type |

**Request Example:**
```json
{
  "name": "Example Resource",
  "type": "document"
}
```

**Response (200 OK):**
```json
{
  "id": "res_12345",
  "name": "Example Resource",
  "created_at": "2026-01-20T10:00:00Z"
}
```

**Error Responses:**
- `400 Bad Request` - Invalid parameters
- `401 Unauthorized` - Missing or invalid API key
- `429 Too Many Requests` - Rate limit exceeded
```

## Authoring standards

- Keep endpoint descriptions short and behavior-specific.
- Provide examples that are valid and runnable.
- Include at least one error example per endpoint.
- Keep naming and field casing consistent across all pages.
- Version and deprecation policy must be explicit.

## Integration checklist

Before publishing an API reference page:

- Validate request/response examples against the current implementation.
- Confirm auth steps from a clean environment.
- Verify linked SDK versions and install commands.
- Confirm error-code tables match runtime behavior.

## Next steps

- [Integration Guides](/docs/integration-guides)
- [User Guides](/docs/user-guides)
- [Writing Best Practices](/docs/writing-best-practices)
