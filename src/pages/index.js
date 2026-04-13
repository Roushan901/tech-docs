import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(e, i) { console.error(e, i); }
  render() {
    if (this.state.hasError) return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Something went wrong.</h2>
        <button onClick={() => this.setState({ hasError: false })}
          style={{ marginTop: "1rem", padding: "10px 24px", background: "#c9191e", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Retry
        </button>
      </div>
    );
    return this.props.children;
  }
}

/* SVG Icons */
const Icons = {
  blog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  guides: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  ),
  writing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  ),
};

const FEATURES = [
  { to: "/blog", title: "Blog", description: "Lessons learned from real documentation programs, tooling rollouts, and developer experience work.", icon: Icons.blog },
  { to: "/docs/user-guides", title: "Technical Guides", description: "Task-oriented guides for setup, integration, operations, and day-to-day team workflows.", icon: Icons.guides },
  { to: "/docs/installation-guides", title: "Documentation Tools", description: "Setup patterns and implementation guidance for modern documentation platforms.", icon: Icons.tools },
  { to: "/docs/cloud-devops", title: "Cloud Computing", description: "Cloud architecture and deployment guidance for AWS, Azure, and GCP environments.", icon: Icons.cloud },
  { to: "/docs/devops", title: "DevOps", description: "Operational guidance for CI/CD, containers, observability, and infrastructure as code.", icon: Icons.devops },
  { to: "/docs/writing-best-practices", title: "Writing Best Practices", description: "Practical writing standards for clarity, consistency, quality review, and maintainability.", icon: Icons.writing },
];

const ROLE_PREVIEWS = [
  {
    id: "developer",
    label: "Developer",
    focus: "Ship integrations faster",
    summary: "Start with API references and implementation-focused guides for setup, auth, payload design, and troubleshooting.",
    primaryCta: "Open API references",
    primaryTo: "/docs/api-references",
    secondaryCta: "Open technical guides",
    secondaryTo: "/docs/user-guides",
  },
  {
    id: "writer",
    label: "Technical Writer",
    focus: "Improve content quality and consistency",
    summary: "Use writing standards, review workflows, and docs-as-code patterns to keep documentation clear across releases.",
    primaryCta: "Open writing standards",
    primaryTo: "/docs/writing-best-practices",
    secondaryCta: "Open review checklist",
    secondaryTo: "/docs/writing-best-practices/review-checklist",
  },
  {
    id: "platform",
    label: "Platform / DevOps",
    focus: "Increase reliability in delivery",
    summary: "Work through cloud architecture and DevOps operations guidance for deployment safety, observability, and scale.",
    primaryCta: "Open DevOps docs",
    primaryTo: "/docs/devops",
    secondaryCta: "Open cloud docs",
    secondaryTo: "/docs/cloud-devops",
  },
];

const STATS = [
  { label: "Documentation Guides", value: "50+" },
  { label: "Implementation Examples", value: "100+" },
  { label: "DevOps Patterns", value: "25+" },
];

export default function Home() {
  const [activeRoleId, setActiveRoleId] = useState(ROLE_PREVIEWS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  
  const activeRole = useMemo(
    () => ROLE_PREVIEWS.find((role) => role.id === activeRoleId) || ROLE_PREVIEWS[0],
    [activeRoleId]
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechDOCS",
    url: "https://techdocs.co.in",
    description: "Production-ready documentation standards, workflows, and guides for engineering teams. Ship better docs faster.",
    sameAs: ["https://www.linkedin.com/in/roushan-g-99242299/"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://techdocs.co.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <ErrorBoundary>
      <Layout
        title="TechDOCS — Ship Better Docs Faster"
        description="Production-ready documentation standards, workflows, and guides for engineering teams. Build clarity at scale with less rework."
      >
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techdocs.co.in" />
          <meta property="og:title" content="TechDOCS — Ship Better Docs Faster" />
          <meta property="og:description" content="Production-ready documentation standards, workflows, and guides for engineering teams. Build clarity at scale with less rework." />
          <meta property="og:image" content="https://techdocs.co.in/img/docusaurus-social-card.jpg" />
          <meta name="twitter:image" content="https://techdocs.co.in/img/docusaurus-social-card.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="keywords" content="technical writing, API documentation, DevOps, Docusaurus, cloud computing, developer docs" />
          <meta name="author" content="Roushan Gupta" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://techdocs.co.in" />
          <meta name="theme-color" content="#0d1117" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Head>

        {/* ===== HERO ===== */}
        <header className={styles.heroBanner} aria-label="Homepage introduction">
          <div className={styles.heroInner}>
            <div className={styles.container}>
              <div className={styles.heroContent}>

                {/* Left — headline + description + CTAs */}
                <div className={styles.heroLeft}>

                  <h1 className={styles.title}>
                    TechDOCS
                  </h1>

                  <p className={styles.heroSubtitle}>Your Docs Probably Break When You Ship</p>

                  <p className={styles.heroDescription}>
                    Here's what we've learned: docs work better with a plan. We collected structures, workflows, and examples from teams that maintain theirs. No magic. Just useful patterns you can steal and adapt.
                  </p>

                  <div className={styles.heroCtas}>
                    <Link to="/docs/writing-best-practices" className={styles.ctaPrimary}>
                      Start with Docs
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link to="/blog" className={styles.ctaSecondary}>
                      Read Insights
                    </Link>
                    <a
                      href="https://www.youtube.com/@TechDocsTutorials"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ctaGhost}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                      </svg>
                      YouTube
                    </a>
                  </div>

                  <div className={styles.heroSearchBox}>
                    <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/search?q=${searchQuery}`; }} className={styles.searchForm}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                      </svg>
                      <input
                        type="search"
                        placeholder="Search guides, API docs, patterns..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search documentation"
                      />
                    </form>
                  </div>

                </div>

                {/* Right — Video */}
                <div className={styles.heroRight}>
                  <div className={styles.videoWrap}>
                    <div className={styles.videoFrame}>
                      <iframe
                        className={styles.videoIframe}
                        src="https://www.youtube.com/embed/-aCKsD70V2E?rel=0&modestbranding=1&controls=1"
                        srcDoc={`<style>
                          *{padding:0;margin:0;overflow:hidden}
                          html,body{height:100%;background:#0d1117}
                          .thumb{position:absolute;width:100%;height:100%;object-fit:cover;opacity:0.85}
                          .play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
                          .play-btn{width:60px;height:42px;background:#c9191e;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:background 0.15s}
                          .play-btn::before{content:'';border:solid transparent;border-width:10px 0 10px 17px;border-left-color:#fff;margin-left:3px}
                          a:hover .play-btn{background:#a01217}
                          .label{position:absolute;bottom:14px;left:16px;color:rgba(255,255,255,0.75);font-family:system-ui,sans-serif;font-size:13px;font-weight:500}
                        </style>
                        <a href="https://www.youtube.com/embed/-aCKsD70V2E?autoplay=1&rel=0">
                          <img class="thumb" src="https://img.youtube.com/vi/-aCKsD70V2E/sddefault.jpg" fetchpriority="high" alt="TechDOCS Introduction">
                          <div class="play"><div class="play-btn"></div></div>
                          <span class="label">Watch intro · 3 min</span>
                        </a>`}
                        title="TechDOCS Introduction"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <p className={styles.videoCaption}>
                      New here? Watch a short platform walkthrough
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* ===== RESOURCES ===== */}
        <main>
          <section className={styles.pathsSection} aria-label="Role-based quick paths">
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Find Your Starting Point</h2>
                <p className={styles.sectionDescription}>
                  Select your role to see curated resources, best practices, and actionable guidance tailored to your workflow.
                </p>
              </div>

              <div className={styles.roleSwitcher} aria-label="Role-based quick planner">
                <div className={styles.roleTabs} role="tablist" aria-label="Select your role">
                  {ROLE_PREVIEWS.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      role="tab"
                      aria-selected={activeRole.id === role.id}
                      className={`${styles.roleTab} ${activeRole.id === role.id ? styles.roleTabActive : ""}`}
                      onClick={() => setActiveRoleId(role.id)}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>

                <div
                  key={activeRole.id}
                  className={`${styles.rolePanel} ${styles.rolePanelAnimated}`}
                  role="tabpanel"
                  aria-live="polite"
                >
                  <p className={styles.rolePanelFocus}>{activeRole.focus}</p>
                  <p className={styles.rolePanelSummary}>{activeRole.summary}</p>
                  <div className={styles.rolePanelCtas}>
                    <Link to={activeRole.primaryTo} className={styles.rolePanelPrimary}>
                      {activeRole.primaryCta}
                    </Link>
                    <Link to={activeRole.secondaryTo} className={styles.rolePanelSecondary}>
                      {activeRole.secondaryCta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resourcesSection} aria-label="Documentation tracks">
            <div className={styles.container}>

              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Explore By Topic</h2>
                <p className={styles.sectionDescription}>
                  Browse focused topic areas and move directly into practical guidance for production environments.
                </p>
              </div>

              <div className={styles.featuresGrid}>
                {FEATURES.map((feature) => (
                  <Link key={feature.to} to={feature.to} className={styles.featureCard}>
                    <div className={styles.cardIcon}>{feature.icon}</div>
                    <div className={styles.cardBody}>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                    <span className={styles.cardArrow} aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>

            </div>
          </section>

          {/* ===== PREMIUM CTA FOOTER ===== */}
          <section className={styles.ctaFooterSection} aria-label="Get updates and resources">
            <div className={styles.container}>
              <div className={styles.ctaFooterContent}>
                <div className={styles.ctaFooterText}>
                  <h2 className={styles.ctaFooterTitle}>Stay Updated</h2>
                  <p className={styles.ctaFooterDesc}>Get the latest guides, patterns, and DevOps insights delivered to your inbox.</p>
                </div>
                <div className={styles.ctaFooterForm}>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! Check your email.'); }} className={styles.newsletterForm}>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className={styles.newsletterInput}
                      required
                      aria-label="Email address"
                    />
                    <button type="submit" className={styles.newsletterButton}>
                      Subscribe
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </form>
                  <p className={styles.ctaFooterPrivacy}>No spam, no marketing emails. Unsubscribe anytime.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
}
