import React from "react";
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
  { to: "/blog", title: "Blog", description: "Insights on technical writing trends, documentation tools, and industry best practices.", icon: Icons.blog },
  { to: "/docs/user-guides", title: "Technical Guides", description: "Comprehensive guides covering installation, integration, and documentation project best practices.", icon: Icons.guides },
  { to: "/docs/installation-guides", title: "Documentation Tools", description: "Explore Docusaurus, Swagger, MkDocs, and modern platforms for building scalable doc sites.", icon: Icons.tools },
  { to: "/docs/cloud-devops", title: "Cloud Computing", description: "AWS, Azure, and GCP architecture patterns, deployment strategies, and cloud-native solutions.", icon: Icons.cloud },
  { to: "/docs/devops", title: "DevOps", description: "CI/CD pipelines, Docker, Kubernetes, and infrastructure as code with practical examples.", icon: Icons.devops },
  { to: "/docs/writing-best-practices", title: "Writing Best Practices", description: "Professional writing techniques, style guides, and standards for clear, effective documentation.", icon: Icons.writing },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TechDOCS",
    url: "https://techdocs.co.in",
    description: "Master technical writing, API documentation, and modern DevOps practices.",
    sameAs: ["https://www.linkedin.com/in/roushan-g-99242299/"],
  };

  return (
    <ErrorBoundary>
      <Layout
        title="TechDOCS — Professional Technical Writing Hub"
        description="Master technical writing, API documentation, and modern DevOps practices."
      >
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techdocs.co.in" />
          <meta property="og:title" content="TechDOCS — Professional Technical Writing Hub" />
          <meta property="og:description" content="Master technical writing, API documentation, and modern DevOps practices." />
          <meta property="og:image" content="https://techdocs.co.in/img/logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="keywords" content="technical writing, API documentation, DevOps, Docusaurus, cloud computing, developer docs" />
          <meta name="author" content="Roushan Gupta" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://techdocs.co.in" />
          <meta name="theme-color" content="#0d1117" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Head>

        {/* ===== HERO ===== */}
        <header className={styles.heroBanner}>
          <div className={styles.heroInner}>
            <div className={styles.container}>
              <div className={styles.heroContent}>

                {/* Left — headline + description + CTAs */}
                <div className={styles.heroLeft}>

                  <h1 className={styles.title}>
                    TechDOCS
                  </h1>

                  <p className={styles.heroSubtitle}>
                    Professional Technical Writing Hub
                  </p>

                  <p className={styles.heroDescription}>
                    Learn technical writing, API documentation, DevOps, and cloud computing.
                    Guides and resources built for developers and technical writers worldwide.
                  </p>

                  <div className={styles.heroCtas}>
                    <Link to="/docs/writing-best-practices" className={styles.ctaPrimary}>
                      Browse Docs
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link to="/blog" className={styles.ctaSecondary}>
                      Read Blog
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
                      New to TechDOCS? Watch the intro overview
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* ===== RESOURCES ===== */}
        <main>
          <section className={styles.resourcesSection}>
            <div className={styles.container}>

              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Everything you need</h2>
                <p className={styles.sectionDescription}>
                  From writing fundamentals to cloud infrastructure — all the documentation resources you need.
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
        </main>
      </Layout>
    </ErrorBoundary>
  );
}
