import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import Testimonials from "../components/Testimonials";
import InstructorProfile from "../components/InstructorProfile";
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
  { to: "/blog", title: "Blog & Insights", description: "Industry best practices, lessons learned from documentation programs, and proven strategies for improving developer experience.", icon: Icons.blog },
  { to: "/docs/user-guides", title: "Technical Guides", description: "Comprehensive task-oriented guides for setup, integration, configuration, and day-to-day team operations.", icon: Icons.guides },
  { to: "/docs/installation-guides", title: "Documentation Tools", description: "Implementation patterns and best practices for modern documentation platforms and content management systems.", icon: Icons.tools },
  { to: "/docs/cloud-devops", title: "Cloud Architecture", description: "Proven cloud deployment patterns and architectural guidance for AWS, Azure, GCP, and multi-cloud environments.", icon: Icons.cloud },
  { to: "/docs/devops", title: "DevOps & Operations", description: "Production-ready operational guidance for CI/CD pipelines, containerization, infrastructure as code, and observability.", icon: Icons.devops },
  { to: "/docs/writing-best-practices", title: "Writing Standards", description: "Professional writing guidelines, documentation standards, quality assurance checklists, and content maintenance strategies.", icon: Icons.writing },
];

const ROLE_PREVIEWS = [
  {
    id: "developer",
    label: "Software Developer",
    focus: "Cut integration time in half. Ship features with confidence.",
    summary: "Stop hunting for documentation. Get API references, proven code patterns, and integration guides that actually work. Learn from real examples and reduce debugging time with clear, actionable guidance.",
    primaryCta: "Explore API Documentation",
    primaryTo: "/docs/api-references",
    secondaryCta: "View Code Examples",
    secondaryTo: "/docs/user-guides",
  },
  {
    id: "writer",
    label: "Technical Writer",
    focus: "Write docs that users actually love. Become a documentation expert.",
    summary: "Master the craft of technical writing. Learn proven standards, documentation workflows, and quality checklists. Write clear, consistent docs that reduce support tickets and improve user satisfaction.",
    primaryCta: "Master Writing Standards",
    primaryTo: "/docs/writing-best-practices",
    secondaryCta: "Quality Assurance Guide",
    secondaryTo: "/docs/writing-best-practices/review-checklist",
  },
  {
    id: "platform",
    label: "DevOps Engineer",
    focus: "Deploy with confidence. Master cloud & infrastructure.",
    summary: "Stop reinventing the wheel. Get battle-tested cloud architecture patterns, CI/CD best practices, and infrastructure-as-code templates. Deploy reliably with proven operational guidance from experts.",
    primaryCta: "Explore DevOps Guides",
    primaryTo: "/docs/devops",
    secondaryCta: "Cloud Architecture Patterns",
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

                  <p className={styles.heroSubtitle}>Master Documentation. Master Your Craft.</p>

                  <p className={styles.heroDescription}>
                    Get production-ready standards, proven workflows, and real-world patterns that work. Whether you're a developer, technical writer, or DevOps engineer, learn industry best practices and level up your skills with expert guidance backed by years of experience.
                  </p>

                  <div className={styles.heroCtas}>
                    <Link to="/docs/learning-paths" className={styles.ctaPrimary}>
                      Start Learning Today
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link to="/docs/about" className={styles.ctaSecondary}>
                      How It Works
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
                      Watch Tutorial
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
                        placeholder="Search documentation, API guides, patterns..."
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
                          .play-btn{width:60px;height:42px;background:#10a37f;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:background 0.15s}
                          .play-btn::before{content:'';border:solid transparent;border-width:10px 0 10px 17px;border-left-color:#fff;margin-left:3px}
                          a:hover .play-btn{background:#0d8b6d}
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
                      Take a guided tour of TechDOCS (3 minutes)
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
                <h2 className={styles.sectionTitle}>Pick Your Role & Master Your Skills</h2>
                <p className={styles.sectionDescription}>
                  Curated learning paths designed for your career. Get exactly what you need to become an expert in your field—no fluff, no confusion.
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
                <h2 className={styles.sectionTitle}>Everything You Need to Know</h2>
                <p className={styles.sectionDescription}>
                  From API integration to cloud deployment—find battle-tested guides and practical solutions for real-world challenges.
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

          {/* ===== TESTIMONIALS ===== */}
          <Testimonials />

          {/* ===== INSTRUCTOR PROFILE ===== */}
          <section className={styles.instructorSection} aria-label="Meet the instructor">
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Meet Your Instructor</h2>
                <p className={styles.sectionDescription}>
                  Learn from an experienced professional passionate about documentation excellence and your success.
                </p>
              </div>
              <InstructorProfile />
            </div>
          </section>

          {/* ===== PREMIUM CTA FOOTER ===== */}
          <section className={styles.ctaFooterSection} aria-label="Get updates and resources">
            <div className={styles.container}>
              <div className={styles.ctaFooterContent}>
                <div className={styles.ctaFooterText}>
                  <h2 className={styles.ctaFooterTitle}>Never Miss an Update</h2>
                  <p className={styles.ctaFooterDesc}>Get weekly insights on documentation excellence, cloud architecture trends, and DevOps best practices. Join 10,000+ engineers leveling up their craft.</p>
                </div>
                <div className={styles.ctaFooterForm}>
                  <form method="POST" className={styles.newsletterForm} onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.email.value;
                    
                    // Send Discord notification to admin
                    fetch('https://discord.com/api/webhooks/1265155621505994803/mWxUVPmOXQXFa3t7Qn6w2pKzL8vN3jZ4r5sT9uW2xY', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        content: `📧 **New Newsletter Subscriber**\n**Email:** ${email}`
                      })
                    }).catch(err => console.error(err));
                    
                    alert('✅ Subscribed! Check your email for updates.');
                    e.target.reset();
                  }}>
                    <input 
                      type="email" 
                      name="email"
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
                  <p className={styles.ctaFooterPrivacy}>We respect your inbox. No spam, no marketing emails. Unsubscribe anytime.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
}
