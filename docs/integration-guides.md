# Integration Guides

Complete guides for integrating various tools and services with your documentation platform.

## Overview

Learn how to integrate third-party services, APIs, and tools to enhance your documentation platform's functionality and user experience.

## Quick Start

### Integration Prerequisites
- API credentials for services
- Basic understanding of REST APIs
- Node.js and npm installed
- Git for version control

## Available Integrations

### Content Management
- GitHub/GitLab integration
- Confluence synchronization
- Jira ticket linking
- Slack notifications

### Search & Analytics
- Algolia search
- Google Analytics
- Mixpanel
- Hotjar

### Deployment & Hosting
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## GitHub Integration

### Setup GitHub Authentication

#### 1. Create GitHub App
1. Go to GitHub Settings → Developer settings
2. Click "New GitHub App"
3. Fill in application details
4. Set webhook URL (optional)
5. Generate client secret

#### 2. Configure Environment Variables
```bash
# .env
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
GITHUB_REPO_OWNER=your-username
GITHUB_REPO_NAME=your-repo
```

#### 3. Install GitHub Plugin
```bash
npm install @docusaurus/plugin-github
```

#### 4. Update Configuration
```javascript
// docusaurus.config.js
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-github',
      {
        owner: process.env.GITHUB_REPO_OWNER,
        repo: process.env.GITHUB_REPO_NAME,
      },
    ],
  ],
};
```

### GitHub Actions CI/CD

#### Deploy on Push
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Algolia Search Integration

### Setup Algolia

#### 1. Create Algolia Account
- Sign up at [algolia.com](https://www.algolia.com/)
- Create new application
- Get API keys

#### 2. Install Algolia Plugin
```bash
npm install @easyops-cn/docusaurus-search-local
```

#### 3. Configure Search
```javascript
// docusaurus.config.js
themes: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      language: ["en"],
      docsRouteBasePath: '/docs',
      blogRouteBasePath: '/blog',
    },
  ],
],
```

### Index Content
```bash
# Run Algolia crawler
docker run -it --env-file=.env -e "CONFIG=$(cat algolia-config.json | jq -r tostring)" algolia/docsearch-scraper
```

## Google Analytics Integration

### Setup GA4

#### 1. Create GA4 Property
1. Go to Google Analytics
2. Create new GA4 property
3. Get Measurement ID (G-XXXXXXXXXX)

#### 2. Install Plugin
```bash
npm install @docusaurus/plugin-google-gtag
```

#### 3. Configure
```javascript
// docusaurus.config.js
plugins: [
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-XXXXXXXXXX',
      anonymizeIP: true,
    },
  ],
],
```

### Custom Event Tracking
```javascript
// Track custom events
import { trackEvent } from '@docusaurus/useGlobalData';

function trackDownload() {
  gtag('event', 'download', {
    event_category: 'documentation',
    event_label: 'user_guide_pdf',
  });
}
```

## Slack Integration

### Webhook Setup

#### 1. Create Slack Webhook
1. Go to your Slack workspace
2. Navigate to Apps → Incoming Webhooks
3. Add to channel
4. Copy webhook URL

#### 2. Configure Notifications
```javascript
// notify-slack.js
const fetch = require('node-fetch');

async function notifySlack(message) {
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: message }),
  });
}

// Usage
notifySlack('📚 New documentation published!');
```

#### 3. Automate with GitHub Actions
```yaml
# .github/workflows/notify-slack.yml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Documentation build completed'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## Jira Integration

### Link Jira Issues

#### 1. Install Jira Plugin
```bash
npm install docusaurus-plugin-jira-link
```

#### 2. Configure
```javascript
// docusaurus.config.js
plugins: [
  [
    'docusaurus-plugin-jira-link',
    {
      jiraBaseUrl: 'https://your-domain.atlassian.net',
      projectKeys: ['DOC', 'TECH'],
    },
  ],
],
```

#### 3. Use in Markdown
```markdown
See issue DOC-123 for more details.
This feature resolves TECH-456.
```

## Netlify Deployment

### Setup Netlify

#### 1. Connect Repository
1. Log in to Netlify
2. Click "New site from Git"
3. Select repository
4. Configure build settings

#### 2. Build Configuration
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

#### 3. Environment Variables
```bash
# Set in Netlify dashboard
ALGOLIA_API_KEY=xxxxx
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Deploy Preview
```toml
# netlify.toml
[context.deploy-preview]
  command = "npm run build"

[context.branch-deploy]
  command = "npm run build"
```

## Vercel Deployment

### Setup Vercel

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Deploy
```bash
vercel --prod
```

#### 3. Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installCommand": "npm install",
  "framework": "docusaurus",
  "env": {
    "NODE_VERSION": "18"
  }
}
```

## API Integration Examples

### REST API Integration

#### Fetch Data from API
```javascript
// src/components/ApiData.js
import React, { useEffect, useState } from 'react';

export default function ApiData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/docs')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data && JSON.stringify(data)}</div>;
}
```

### GraphQL Integration
```javascript
// src/utils/graphql.js
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://api.example.com/graphql');

export async function fetchDocs() {
  const query = `{
    docs {
      title
      content
    }
  }`;
  
  return await client.request(query);
}
```

## Monitoring & Error Tracking

### Sentry Integration

#### 1. Install Sentry
```bash
npm install @sentry/react @sentry/tracing
```

#### 2. Initialize
```javascript
// src/theme/Root.js
import React from 'react';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});

export default function Root({children}) {
  return <>{children}</>;
}
```

## Testing Integrations

### Integration Tests
```javascript
// tests/integration.test.js
describe('GitHub Integration', () => {
  it('should fetch repository data', async () => {
    const data = await fetchGitHubRepo();
    expect(data).toHaveProperty('name');
  });
});

describe('Search Integration', () => {
  it('should return search results', async () => {
    const results = await searchDocs('api');
    expect(results.length).toBeGreaterThan(0);
  });
});
```

## Troubleshooting

### Common Issues

#### API Rate Limits
```javascript
// Implement retry logic
async function fetchWithRetry(url, retries = 3) {
  try {
    return await fetch(url);
  } catch (error) {
    if (retries > 0) {
      await new Promise(r => setTimeout(r, 1000));
      return fetchWithRetry(url, retries - 1);
    }
    throw error;
  }
}
```

#### CORS Issues
```javascript
// docusaurus.config.js
plugins: [
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(existingPath) {
        // Add CORS headers
      },
    },
  ],
],
```

#### Authentication Errors
- Verify API keys
- Check token expiration
- Review permission scopes

## Best Practices

### Security
- Store secrets in environment variables
- Use API key rotation
- Implement rate limiting
- Validate webhook signatures

### Performance
- Cache API responses
- Use CDN for assets
- Lazy load integrations
- Monitor bundle size

### Maintenance
- Keep dependencies updated
- Monitor integration health
- Document integration changes
- Test after updates

## Support

Need help with integrations?
- [Integration FAQ](#)
- [API Documentation](#)
- [Contact Support](mailto:contact@techdocs.co.in)

## Next Steps

- [Deploy Your Site](/docs/tutorial-basics/deploy-your-site)
- [API References](/docs/tutorial-extras/manage-docs-versions)
- [Advanced Configuration](#)
