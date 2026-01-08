# Tech Docs - AI Coding Agent Instructions

## Project Overview
This is a **Docusaurus v3.9.2** documentation site for technical writing resources, API documentation, and DevOps practices. Built as a static site generator with React, it supports internationalization (English/Spanish), PWA features, local search, and KaTeX math rendering.

**Key Characteristics:**
- Target domain: `https://techdocs.co.in`
- Repository: `Roushan901/tech-docs`
- Node requirement: `>=20.0`
- Uses Red Hat Display & Red Hat Text fonts as typography system

## Project Structure

### Content Organization
- **`/docs`**: Main documentation markdown files (user guides, API references, installation guides, admin guides, cloud/DevOps content)
- **`/blog`**: Blog posts with metadata (authors, tags, dates) - uses `<!--truncate-->` for excerpts
- **`/src/pages`**: Custom React pages (homepage at `index.js`)
- **`/src/components`**: Reusable React components (FeedbackForm, PDFDownload, ContactSupport, PageFeedback, HomepageFeatures)
- **`/src/theme`**: Swizzled Docusaurus theme components - currently only `DocItem/Footer` is customized to add PDF download
- **`/static`**: Static assets (images, manifest.json, robots.txt, CNAME)
- **`/build`**: Generated static site output (committed to repo)

### Configuration Files
- **`docusaurus.config.js`**: Main config - defines navbar, footer, i18n, plugins (@docusaurus/plugin-google-gtag, @easyops-cn/docusaurus-search-local), PWA settings, math support (remark-math, rehype-katex)
- **`sidebars.js`**: Sidebar structure with emoji icons (📚, ☁️, 📖, 🚀) and categories
- **`manifest.json`**: PWA manifest with theme color `#0ea5e9`
- **`update-timestamps.js`**: Chokidar-based file watcher that auto-updates timestamps in markdown files

## Developer Workflows

### Development Commands (npm scripts)
```bash
npm start              # Dev server at http://localhost:3000 with hot reload
npm run build          # Production build to /build directory
npm run serve          # Serve production build locally
npm run deploy         # Deploy to GitHub Pages
npm run clear          # Clear Docusaurus cache
npm run swizzle        # Eject/customize Docusaurus theme components
```

### Build & Deploy
- Task available: `Deploy Tech Docs` runs `npm run build && npm run deploy`
- Deployment target: GitHub Pages for `Roushan901/tech-docs`
- Build output is committed in `/build` folder (unusual but intentional)

### Theme Customization
- Only `src/theme/DocItem/Footer` is currently swizzled (adds PDFDownload component)
- To customize more theme components, use `npm run swizzle` - see [Docusaurus swizzling docs](https://docusaurus.io/docs/swizzling)
- **Critical**: Swizzled components wrap originals, e.g., `import Footer from '@theme-original/DocItem/Footer'`

## Content Conventions

### Documentation Files
- **Always** include HTML timestamp comment at top: `<!-- Last updated: December 26, 2025, 10:00 AM -->`
- Followed by frontmatter with `sidebar_position` for ordering
- The `update-timestamps.js` script auto-manages these timestamps on file changes

### Blog Posts
- Frontmatter requires: `slug`, `title`, `authors` (array matching `/blog/authors.yml`), `tags`, `date` (ISO format)
- Use `<!--truncate-->` to define excerpt cutoff point
- Author references: `[roushan]` maps to `authors.yml`

### Markdown Features
- Math equations: Use `$inline$` or `$$block$$` syntax (KaTeX enabled)
- Code blocks: Use triple backticks with language identifier
- Live code blocks: Available via `@docusaurus/theme-live-codeblock`

## Custom Components

### Component Patterns
All custom components in `/src/components` follow this structure:
- Named exports: `export default function ComponentName()`
- CSS modules: `import styles from './styles.module.css'`
- Self-contained with component-specific styles

### Key Components
- **PDFDownload**: Injected into every doc page footer via swizzled `DocItem/Footer`
- **FeedbackForm**: Standalone feedback collection with star rating (1-5) and form submission
- **ErrorBoundary**: Implemented in homepage `index.js` for error handling
- **HomepageFeatures**: Feature cards on homepage (currently Docusaurus defaults)

## Styling System

### CSS Variables (from `custom.css`)
- Primary color: `--ifm-color-primary: #151515` (black-based theme)
- Typography: Red Hat Display (headings) and Red Hat Text (body)
- Dark mode: Respects `prefers-color-scheme` (see `colorMode.respectPrefersColorScheme: true`)
- Custom color palette includes variants: `--ifm-color-primary-dark`, `--ifm-color-primary-light`, etc.

### Styling Approach
- Use Infima CSS variables for theming consistency
- Component-specific styles in CSS modules
- Global overrides in `src/css/custom.css`

## Internationalization
- Locales: English (default), Spanish (es)
- Locale configs in `docusaurus.config.js` under `i18n`
- Translated content structure: `/build/es/` mirrors `/build/` structure
- Use `npm run write-translations` to extract strings

## Search Configuration
- Using `@easyops-cn/docusaurus-search-local` (local search, no Algolia)
- Indexes: `/docs` and `/blog` routes
- Hashed index: `search-index.json` generated in `/build`
- Language: English only currently indexed

## Common Pitfalls
- **Theme swizzling**: Don't manually edit `node_modules/@docusaurus` - use `npm run swizzle` to properly eject components
- **Math rendering**: Ensure both `remark-math` and `rehype-katex` are configured (already set in preset config)
- **Build output**: The `/build` directory is tracked in git (not gitignored) - intentional for deployment
- **PWA**: Plugin configured but needs proper service worker setup if modifying offline behavior
- **Node version**: Must use Node.js >=20.0 per package.json engines

## External Integrations
- Google Analytics: `trackingID: 'G-XXXXXXXXXX'` (placeholder in config)
- Algolia verification: Meta tag in `headTags` with code `3E578B8FE87612D81`
- Contact email: `contact@techdocs.co.in`
- LinkedIn: Roushan Gupta's profile linked in footer

## Testing & Validation
- **Build validation**: Run `npm run build` to check for broken links (config: `onBrokenLinks: 'throw'`)
- **Local preview**: Use `npm run serve` after building to test production build
- **Hot reload**: `npm start` reflects most changes instantly without restart
