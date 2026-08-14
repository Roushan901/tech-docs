import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import Testimonials from "../components/Testimonials";
import InstructorProfile from "../components/InstructorProfile";
import ChatBot from "../components/ChatBot";
import styles from "./index.module.css";

const CONTACT_EMAIL = "contact@techdocs.co.in";

function buildMailtoLink(subject, body) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

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
  { to: "/blog", title: "Insights & Case Studies", description: "Real implementation lessons from documentation modernization, developer onboarding, and documentation program improvements.", icon: Icons.blog },
  { to: "/docs/user-guides", title: "Technical Guides", description: "Task-focused implementation guides for engineering teams covering setup, integration, operations, and support workflows.", icon: Icons.guides },
  { to: "/docs/writing-best-practices", title: "Technical Writing Standards", description: "Professional writing standards, editorial workflows, and review checklists used to keep docs accurate, scalable, and user-friendly.", icon: Icons.writing },
  { to: "/docs/cloud-devops", title: "Cloud Architecture", description: "Production-ready architecture guidance for AWS, Azure, and GCP with clear patterns for resilience, security, and scale.", icon: Icons.cloud },
  { to: "/docs/devops", title: "DevOps Delivery", description: "CI/CD, containers, infrastructure as code, and observability practices for consistent, low-risk releases.", icon: Icons.devops },
  { to: "/docs/installation-guides", title: "Platform Tooling", description: "Practical reference for documentation tooling, publishing workflows, and maintainable docs-as-code systems.", icon: Icons.tools },
];

const ROLE_PREVIEWS = [
  {
    id: "writer",
    label: "Technical Writing",
    focus: "Write clear, consistent documentation that drives trust and adoption.",
    summary: "Learn structured writing methods, style governance, docs-as-code workflows, and editorial QA practices that scale across products and teams.",
    primaryCta: "Explore Writing Standards",
    primaryTo: "/docs/writing-best-practices",
    secondaryCta: "Review Checklist",
    secondaryTo: "/docs/writing-best-practices/writing-best-practices-review-checklist",
  },
  {
    id: "cloud",
    label: "Cloud",
    focus: "Build a strong foundation in cloud computing",
    summary: "Learn cloud fundamentals, architecture, networking, security, storage, compute, scalability, reliability, and cost optimization through practical guides and resources.",
    primaryCta: "Explore Cloud Guides",
    primaryTo: "/docs/cloud-devops",
    secondaryCta: "Cloud Architecture",
    secondaryTo: "/docs/cloud-devops",
  },
  {
    id: "devops",
    label: "DevOps",
    focus: "Build, automate, and deliver software with confidence.",
    summary: "Learn DevOps concepts, practices, tools, and workflows for building reliable and efficient software delivery processes.",
    primaryCta: "Explore DevOps Guides",
    primaryTo: "/docs/devops",
    secondaryCta: "CI/CD Pipelines",
    secondaryTo: "/docs/devops/cicd",
  },
];

const STATS = [
  { label: "Production-Ready Guides", value: "50+" },
  { label: "Active Learners", value: "10k+" },
  { label: "Cloud & DevOps Modules", value: "25+" },
  { label: "Learner Satisfaction", value: "98%" },
];

const LEARNING_PILLARS = [
  {
    title: "Technical Writing Standards",
    description: "Build durable documentation quality with audience-first writing, content structuring, terminology consistency, and review discipline.",
    outcomes: "Style guides, docs-as-code workflows, review checklists, and maintenance standards.",
    cta: "Start Writing Track",
    to: "/docs/writing-best-practices",
  },
  {
    title: "Cloud Architecture Foundations",
    description: "Understand service design, reliability patterns, and provider-specific decisions across AWS, Azure, and GCP.",
    outcomes: "Reference architectures, deployment strategies, and practical cloud decision frameworks.",
    cta: "Explore Cloud Track",
    to: "/docs/cloud-devops",
  },
  {
    title: "DevOps Delivery Excellence",
    description: "Improve release confidence with CI/CD pipelines, infrastructure automation, and operational observability practices.",
    outcomes: "Deployment patterns, IaC principles, container workflows, and monitoring baselines.",
    cta: "Open DevOps Track",
    to: "/docs/devops",
  },
];

/**
 * Renders the TechDOCS homepage and newsletter call to action.
 */
function Home() {
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
          <meta property="og:image" content="https://techdocs.co.in/img/techdocs-social-card.svg" />
          <meta property="og:image:type" content="image/svg+xml" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="TechDOCS preview card for technical writing, API documentation, cloud architecture, and DevOps guidance" />
          <meta name="twitter:image" content="https://techdocs.co.in/img/techdocs-social-card.svg" />
          <meta name="twitter:image:alt" content="TechDOCS preview card for technical writing, API documentation, cloud architecture, and DevOps guidance" />
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

                  <p className={styles.heroSubtitle}>Learn Technical Writing Best Practices, Cloud & DevOps</p>

                  <p className={styles.heroDescription}>
                    A professional learning platform with practical guides, structured learning paths, implementation examples, and industry standards.
                  </p>

                  <div className={styles.heroCtas}>
                    <Link to="/docs/learning-paths" className={styles.ctaPrimary}>
                      Explore Learning Paths
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link to="/docs/about" className={styles.ctaSecondary}>
                      Professional Profile
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
                        placeholder="Search standards, cloud guides, DevOps workflows..."
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
                  Follow role-based learning routes designed for professionals who want practical growth, consistent standards, and real implementation results.
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
                <h2 className={styles.sectionTitle}>Core Learning Tracks</h2>
                <p className={styles.sectionDescription}>
                  Move from fundamentals to advanced execution with guides built for technical writing excellence, cloud architecture, and DevOps delivery.
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

          <section className={styles.frameworkSection} aria-label="Professional learning framework">
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>What You Will Master</h2>
                <p className={styles.sectionDescription}>
                  A professional curriculum focused on career-impact skills across technical writing standards, cloud systems, and DevOps operations.
                </p>
              </div>

              <div className={styles.frameworkGrid}>
                {LEARNING_PILLARS.map((pillar) => (
                  <article key={pillar.title} className={styles.frameworkCard}>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    <p className={styles.frameworkOutcome}>{pillar.outcomes}</p>
                    <Link to={pillar.to} className={styles.frameworkLink}>{pillar.cta}</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ===== TESTIMONIALS ===== */}
          {/* ===== INSTRUCTOR PROFILE ===== */}
          <section className={styles.instructorSection} aria-label="Meet the instructor">
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Meet the Expert</h2>
                <p className={styles.sectionDescription}>
                  Learn from a practicing documentation professional who helps engineers and writers build practical, job-ready skills that create real impact.
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
                  <p className={styles.ctaFooterDesc}>Get practical weekly insights on technical writing standards, cloud architecture, and DevOps execution. Join professionals building stronger engineering communication and delivery systems.</p>
                </div>
                <div className={styles.ctaFooterForm}>
                  <form method="POST" className={styles.newsletterForm} onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.email.value;

                    window.location.href = buildMailtoLink(
                      'Newsletter subscription request',
                      `Please subscribe this email address to Tech Docs updates:\n\n${email}`
                    );

                    alert('Your email app will open with a subscription request draft.');
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
        <ChatBot />
      </Layout>
    </ErrorBoundary>
  );
}

export default Home;
