# API References

Comprehensive API documentation and reference guides for developers.

## Overview

Welcome to the API Reference documentation. This guide provides detailed information about our APIs, including endpoints, authentication, request/response formats, and code examples.

## Getting Started

### API Authentication

#### Authentication Methods
- **API Keys** - Simple key-based authentication
- **OAuth 2.0** - Industry-standard authorization
- **JWT Tokens** - JSON Web Token authentication
- **Basic Auth** - Username and password

#### Getting API Keys
1. Sign up for an account
2. Navigate to API Settings
3. Generate new API key
4. Store securely (never commit to version control)

#### Making Authenticated Requests
```bash
# Using API Key
curl -H "X-API-Key: your_api_key_here" \
  https://api.techdocs.co.in/v1/docs

# Using Bearer Token
curl -H "Authorization: Bearer your_token_here" \
  https://api.techdocs.co.in/v1/docs
```

## API Endpoints

### Base URL
```
https://api.techdocs.co.in/v1
```

### Rate Limits
- **Free Tier**: 100 requests/hour
- **Pro Tier**: 1,000 requests/hour
- **Enterprise**: Unlimited

### Documentation API

#### Get All Documents
```http
GET /api/v1/documents
```

**Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | No | Page number (default: 1) |
| limit | integer | No | Items per page (default: 10) |
| category | string | No | Filter by category |
| search | string | No | Search query |

**Response**
```json
{
  "data": [
    {
      "id": "doc-001",
      "title": "Getting Started Guide",
      "description": "Introduction to our platform",
      "category": "guides",
      "author": "John Doe",
      "created_at": "2025-12-01T10:00:00Z",
      "updated_at": "2025-12-15T14:30:00Z",
      "url": "/docs/getting-started"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 50,
    "items_per_page": 10
  }
}
```

**Example Request**
```javascript
// JavaScript
fetch('https://api.techdocs.co.in/v1/documents?page=1&limit=10', {
  headers: {
    'X-API-Key': 'your_api_key_here'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

```python
# Python
import requests

response = requests.get(
    'https://api.techdocs.co.in/v1/documents',
    headers={'X-API-Key': 'your_api_key_here'},
    params={'page': 1, 'limit': 10}
)
data = response.json()
```

#### Get Single Document
```http
GET /api/v1/documents/{id}
```

**Response**
```json
{
  "id": "doc-001",
  "title": "Getting Started Guide",
  "content": "# Getting Started\n\nWelcome to...",
  "metadata": {
    "author": "John Doe",
    "category": "guides",
    "tags": ["tutorial", "beginner"],
    "version": "1.0.0"
  },
  "timestamps": {
    "created_at": "2025-12-01T10:00:00Z",
    "updated_at": "2025-12-15T14:30:00Z"
  }
}
```

#### Create Document
```http
POST /api/v1/documents
```

**Request Body**
```json
{
  "title": "New Documentation",
  "content": "# Your content here",
  "category": "guides",
  "tags": ["new", "guide"],
  "metadata": {
    "author": "Jane Smith",
    "version": "1.0.0"
  }
}
```

**Response**
```json
{
  "id": "doc-002",
  "title": "New Documentation",
  "status": "created",
  "url": "/docs/new-documentation",
  "created_at": "2025-12-16T10:00:00Z"
}
```

**Example Request**
```javascript
// JavaScript
fetch('https://api.techdocs.co.in/v1/documents', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your_api_key_here'
  },
  body: JSON.stringify({
    title: 'New Documentation',
    content: '# Your content here',
    category: 'guides'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Update Document
```http
PUT /api/v1/documents/{id}
```

**Request Body**
```json
{
  "title": "Updated Title",
  "content": "# Updated content",
  "tags": ["updated"]
}
```

#### Delete Document
```http
DELETE /api/v1/documents/{id}
```

**Response**
```json
{
  "message": "Document deleted successfully",
  "id": "doc-001"
}
```

### Search API

#### Search Documents
```http
GET /api/v1/search
```

**Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| q | string | Yes | Search query |
| category | string | No | Filter by category |
| limit | integer | No | Max results (default: 20) |

**Response**
```json
{
  "query": "api documentation",
  "results": [
    {
      "id": "doc-001",
      "title": "API Reference Guide",
      "excerpt": "Learn how to use our API...",
      "score": 0.95,
      "url": "/docs/api-reference"
    }
  ],
  "total_results": 15,
  "search_time_ms": 23
}
```

### User API

#### Get User Profile
```http
GET /api/v1/users/me
```

**Response**
```json
{
  "id": "user-001",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "editor",
  "created_at": "2025-01-01T00:00:00Z",
  "api_key": "key_xxxxxxxxxx",
  "subscription": {
    "tier": "pro",
    "expires_at": "2026-01-01T00:00:00Z"
  }
}
```

#### Update User Profile
```http
PATCH /api/v1/users/me
```

**Request Body**
```json
{
  "name": "John Updated",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}
```

### Analytics API

#### Get Document Analytics
```http
GET /api/v1/analytics/documents/{id}
```

**Response**
```json
{
  "document_id": "doc-001",
  "views": {
    "total": 1250,
    "last_7_days": 145,
    "last_30_days": 520
  },
  "engagement": {
    "avg_time_on_page": "3m 45s",
    "bounce_rate": 0.35,
    "feedback_score": 4.5
  }
}
```

## Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid",
    "status": 401,
    "timestamp": "2025-12-16T10:00:00Z",
    "request_id": "req_abc123"
  }
}
```

### HTTP Status Codes
| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

### Common Errors

#### Invalid API Key
```json
{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "API key is invalid or expired",
    "status": 401
  }
}
```

#### Rate Limit Exceeded
```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Try again in 3600 seconds",
    "status": 429,
    "retry_after": 3600
  }
}
```

## SDKs & Libraries

### Official SDKs

#### JavaScript/Node.js
```bash
npm install @techdocs/api-client
```

```javascript
const TechDocs = require('@techdocs/api-client');

const client = new TechDocs({
  apiKey: 'your_api_key_here'
});

// Get documents
const docs = await client.documents.list({ limit: 10 });

// Create document
const newDoc = await client.documents.create({
  title: 'New Doc',
  content: '# Content'
});
```

#### Python
```bash
pip install techdocs-api
```

```python
from techdocs import TechDocsClient

client = TechDocsClient(api_key='your_api_key_here')

# Get documents
docs = client.documents.list(limit=10)

# Create document
new_doc = client.documents.create(
    title='New Doc',
    content='# Content'
)
```

#### PHP
```bash
composer require techdocs/api-client
```

```php
<?php
use TechDocs\ApiClient;

$client = new ApiClient('your_api_key_here');

// Get documents
$docs = $client->documents->list(['limit' => 10]);

// Create document
$newDoc = $client->documents->create([
    'title' => 'New Doc',
    'content' => '# Content'
]);
```

## Webhooks

### Webhook Events

#### Available Events
- `document.created` - New document created
- `document.updated` - Document modified
- `document.deleted` - Document removed
- `user.created` - New user registered

### Setup Webhook
```http
POST /api/v1/webhooks
```

**Request**
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["document.created", "document.updated"],
  "secret": "your_webhook_secret"
}
```

### Webhook Payload
```json
{
  "event": "document.created",
  "timestamp": "2025-12-16T10:00:00Z",
  "data": {
    "id": "doc-001",
    "title": "New Document",
    "author": "John Doe"
  }
}
```

### Verify Webhook Signature
```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return hash === signature;
}
```

## Testing

### Test Environment
```
https://api-test.techdocs.co.in/v1
```

### API Testing Tools
- **Postman** - API development platform
- **Insomnia** - REST client
- **curl** - Command line tool
- **HTTPie** - User-friendly CLI

### Example Test Script
```bash
#!/bin/bash
# Test API endpoints

API_KEY="your_test_api_key"
BASE_URL="https://api-test.techdocs.co.in/v1"

# Test authentication
curl -H "X-API-Key: $API_KEY" $BASE_URL/documents

# Test document creation
curl -X POST $BASE_URL/documents \
  -H "X-API-Key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Doc", "content": "Test content"}'
```

## Best Practices

### API Security
- Never expose API keys in client-side code
- Use environment variables for credentials
- Rotate API keys regularly
- Implement request signing for critical operations

### Performance
- Cache responses when possible
- Use pagination for large datasets
- Implement request batching
- Monitor API usage

### Error Handling
- Always check status codes
- Implement retry logic with exponential backoff
- Log errors for debugging
- Provide meaningful error messages

## Support

### API Documentation
- [Interactive API Explorer](#)
- [Postman Collection](#)
- [OpenAPI Specification](#)

### Getting Help
- [API FAQ](#)
- [Developer Forum](#)
- [Contact Support](mailto:api@techdocs.co.in)

## Changelog

### Version 1.0.0 (Current)
- Initial API release
- Core CRUD operations
- Search functionality
- User management

### Upcoming Features
- GraphQL API
- Real-time subscriptions
- Batch operations
- Advanced filtering

## Next Steps

- [Integration Guides](/docs/integration-guides)
- [Code Examples](#)
- [API Best Practices](#)
