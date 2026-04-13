import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import styles from "./index.module.css";

/**
 * Error Boundary — catches JS errors in the tree and shows a fallback UI.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              marginTop: "1rem",
              padding: "10px 24px",
              background: "#d62828",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ============================================================
// Feature cards data — cleaner, easier to maintain
// ============================================================
const FEATURES = [
  {
    to: "/blog",
    title: "Blog",
    description:
      "Latest insights on technical writing trends, documentation tools, and industry best practices from experts.",
    emoji: "✍️",
  },
  {
    to: "/docs/user-guides",
    title: "Technical Guides",
    description:
      "Comprehensive guides covering installation, integration, and best practices for technical documentation projects.",
    emoji: "📚",
  },
  {
    to: "/docs/installation-guides",
    title: "Documentation Tools",
    description:
      "Explore Docusaurus, Swagger, MkDocs, and modern platforms for building scalable documentation sites.",
    emoji: "🛠️",
  },
  {
    to: "/docs/cloud-devops",
    title: "Cloud Computing",
    description:
      "Deep dive into AWS, Azure, and GCP with architecture patterns, deployment strategies, and cloud-native solutions.",
    emoji: "☁️",
  },
  {
    to: "/docs/devops",
    title: "DevOps",
    description:
      "Master CI/CD pipelines, Docker, Kubernetes, and infrastructure as code with practical automation examples.",
    emoji: "⚙️",
  },
  {
    to: "/docs/writing-best-practices",
    title: "Writing Best Practices",
    description:
      "Learn professional writing techniques, style guides, and standards for creating clear, effective documentation.",
    emoji: "🎯",
  },
];

// ============================================================
// Home Component
// ============================================================
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    return () => {
      /* cleanup on unmount */
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      history.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Tech Docs",
    url: "https://techdocs.co.in",
    logo: "https://techdocs.co.in/img/logo.png",
    description:
      "Master technical writing, API documentation, and modern DevOps practices. Your comprehensive resource for creating professional documentation that developers love.",
    sameAs: ["https://www.linkedin.com/in/roushan-g-99242299/"],
    author: {
      "@type": "Person",
      name: "Roushan Gupta",
      url: "https://www.linkedin.com/in/roushan-g-99242299/",
    },
  };

  return (
    <ErrorBoundary>
      <Layout
        title="Tech Docs - Professional Technical Writing Hub"
        description="Master technical writing, API documentation, and modern DevOps practices. Your comprehensive resource for creating professional documentation that developers love."
      >
        {/* ===== SEO Meta Tags ===== */}
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techdocs.co.in" />
          <meta property="og:title" content="Tech Docs - Professional Technical Writing Hub" />
          <meta
            property="og:description"
            content="Master technical writing, API documentation, and modern DevOps practices."
          />
          <meta property="og:image" content="https://techdocs.co.in/img/logo.png" />
          <meta property="og:site_name" content="Tech Docs" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://techdocs.co.in" />
          <meta name="twitter:title" content="Tech Docs - Professional Technical Writing Hub" />
          <meta name="twitter:description" content="Master technical writing, API documentation, and modern DevOps practices." />
          <meta name="twitter:image" content="https://techdocs.co.in/img/logo.png" />
          <meta
            name="keywords"
            content="technical writing, API documentation, DevOps, documentation tools, Docusaurus, technical writer, developer documentation, cloud computing, AWS, Azure, GCP"
          />
          <meta name="author" content="Roushan Gupta" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://techdocs.co.in" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#d62828" />

          {/* Critical Assets Preload */}
          <link rel="preload" href="https://img.youtube.com/vi/-aCKsD70V2E/sddefault.jpg" as="image" fetchpriority="high" />
          <link rel="preconnect" href="https://www.youtube.com" />
          
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Head>

        {/* ===== Hero ===== */}
        <header className={styles.heroBanner}>
          <div className={styles.container}>
            <div className={styles.heroContent}>

              {/* Left — Text + Search */}
              <div className={styles.heroLeft}>
                <h1 className={styles.title}>
                  Tech<span className={styles.highlightText}>DOCS</span>
                </h1>
                <p className={styles.heroDescription}>
                  Professional Technical Writing Resources for Developers and Technical Writers
                </p>
                <div className={styles.searchWrapper}>
                  <form onSubmit={handleSearch} className={styles.searchBoxWrapper}>
                    <svg
                      className={styles.searchIconSvg}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                      <path d="M13 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search documentation..."
                      className={styles.searchBox}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search documentation"
                    />
                    <button
                      type="submit"
                      className={styles.searchSubmitBtn}
                      aria-label="Submit search"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              {/* Right — Video */}
              <div className={styles.heroRight}>
                <div className={styles.videoContainer}>
                  <div className={styles.videoBorderFrame}>
                    <div className={styles.videoInnerFrame}>
                      <div className={styles.shineEffect} aria-hidden="true" />
                      <iframe
                        className={styles.videoIframe}
                        src="https://www.youtube.com/embed/-aCKsD70V2E?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&autoplay=0&mute=0&vq=hd1080"
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img{position:absolute;width:100%;top:0;bottom:0;margin:auto;object-fit:cover;min-height:100%}span{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:68px;height:48px;background:red;border-radius:12px;display:flex;align-items:center;justify-content:center;transition:background 0.2s ease;box-shadow:0 0 10px rgba(0,0,0,0.3)}span::before{content:'';border:solid transparent;border-width:12px 0 12px 20px;border-left-color:white;margin-left:5px}a:hover span{background:#cc0000}</style><a href=https://www.youtube.com/embed/-aCKsD70V2E?autoplay=1&rel=0&modestbranding=1><img src=https://img.youtube.com/vi/-aCKsD70V2E/sddefault.jpg fetchpriority='high' alt='TechDOCS Introduction'><span></span></a>"
                        title="TechDOCS Introduction"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </header>

        {/* ===== Main Content ===== */}
        <main>
          <section className={styles.exploreSection}>
            <div className={styles.container}>
              <h2 className={styles.exploreTitle}>
                Explore TechDOCS Resources
              </h2>
              <div className={styles.featuresGrid}>
                {FEATURES.map((feature) => (
                  <Link
                    key={feature.to}
                    to={feature.to}
                    className={styles.featureCard}
                  >
                    <h3>{feature.emoji && <span style={{ marginRight: "0.5rem" }}>{feature.emoji}</span>}{feature.title}</h3>
                    <p>{feature.description}</p>
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
