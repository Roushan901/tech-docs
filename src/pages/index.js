import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import styles from "./index.module.css";

/**
 * Enhanced Error Boundary Component
 * Catches JavaScript errors in its child component tree, logs those errors, and displays a fallback UI.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>Something went wrong.</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Home component - Entry point for the homepage.
 * Provides navigation, search functionality, and interactive UI elements.
 */
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    // Cleanup logic to prevent DOM manipulation errors
    return () => {
      console.log("Component unmounted, cleaning up resources.");
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      history.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleButtonClick = () => {
    try {
      console.log("Button clicked successfully.");
      // Simulate a potential error for debugging
      if (Math.random() < 0.1) {
        throw new Error("Simulated error for debugging.");
      }
    } catch (error) {
      console.error("Error during button click:", error);
      throw error; // Re-throw the error to be caught by ErrorBoundary
    }
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Tech Docs",
    "url": "https://techdocs.co.in",
    "logo": "https://techdocs.co.in/img/logo.png",
    "description": "Master technical writing, API documentation, and modern DevOps practices. Your comprehensive resource for creating professional documentation that developers love.",
    "sameAs": [
      "https://www.linkedin.com/in/roushan-g-99242299/"
    ],
    "author": {
      "@type": "Person",
      "name": "Roushan Gupta",
      "url": "https://www.linkedin.com/in/roushan-g-99242299/"
    }
  };

  // Custom Dropdown Component
  function Dropdown({ label, items }) {
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          style={{
            backgroundColor: "#d32f2f",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {label}
        </button>
        <div
          style={{
            display: "none",
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          }}
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "block",
                padding: "10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Layout
        title="Tech Docs - Professional Technical Writing Hub"
        description="Master technical writing, API documentation, and modern DevOps practices. Your comprehensive resource for creating professional documentation that developers love."
      >
        {/* Enhanced SEO Meta Tags */}
        <Head>
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techdocs.co.in" />
          <meta property="og:title" content="Tech Docs - Professional Technical Writing Hub" />
          <meta property="og:description" content="Master technical writing, API documentation, and modern DevOps practices. Learn from real-world examples and professional documentation templates." />
          <meta property="og:image" content="https://techdocs.co.in/img/logo.png" />
          <meta property="og:site_name" content="Tech Docs" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://techdocs.co.in" />
          <meta name="twitter:title" content="Tech Docs - Professional Technical Writing Hub" />
          <meta name="twitter:description" content="Master technical writing, API documentation, and modern DevOps practices. Learn from real-world examples." />
          <meta name="twitter:image" content="https://techdocs.co.in/img/logo.png" />
          
          {/* Additional SEO */}
          <meta name="keywords" content="technical writing, API documentation, DevOps, documentation tools, Docusaurus, technical writer, developer documentation, cloud computing, AWS, Azure, GCP" />
          <meta name="author" content="Roushan Gupta" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://techdocs.co.in" />
          
          {/* Mobile Optimization */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          <meta name="mobile-web-app-capable" content="yes" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Head>
        <header className={styles.heroBanner}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              {/* Left Side - Content */}
              <div className={styles.heroLeft}>
                <h1 className={styles.title}>
                  Tech<span className={styles.highlightText}>DOCS</span>
                </h1>
                <p className={styles.heroDescription}>
                  Professional technical writing resources for developers and technical writers
                </p>
                
                <div className={styles.searchWrapper}>
                  <form onSubmit={handleSearch} className={styles.searchBoxWrapper}>
                    <svg className={styles.searchIconSvg} width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
                      <path d="M13 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className={styles.heroRight}>
                <div className={styles.videoContainer}>
                  <div className={styles.videoBorderFrame}>
                    <div className={styles.videoInnerFrame}>
                      <div className={styles.shineEffect}></div>
                      <iframe
                        className={styles.videoIframe}
                        src="https://www.youtube.com/embed/-aCKsD70V2E?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&autoplay=0&mute=0&loop=0&vq=hd1080"
                        title="TechDOCS Introduction"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main style={{ marginTop: "80px" }}>
          <section className={styles.exploreSection}>
            <div
              className={styles.container}
              style={{
                padding: "64px 40px",
                backgroundColor: "#fafafa",
                borderRadius: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                border: "1px solid #e5e7eb",
              }}
            >
              <h2
                className={styles.exploreTitle}
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#0f172a",
                  textAlign: "center",
                  marginBottom: "60px",
                  letterSpacing: "-0.02em",
                }}
              >
                Explore TechDOCS Resources
              </h2>
              <div className={styles.featuresGrid}>
                <Link
                  to="/blog"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "18px",
                    padding: "36px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "all 0.3s ease",
                    border: "2px solid transparent",
                  }}
                  onClick={handleButtonClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.borderColor = "#0ea5e9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <h3 style={{ marginBottom: "12px", fontSize: "1.4rem", fontWeight: "700", color: "#0f172a" }}>Blog</h3>
                  <p style={{ lineHeight: "1.6", color: "#64748b", margin: 0 }}>Latest insights on technical writing trends, documentation tools, and industry best practices from experts.</p>
                </Link>
                <Link
                  to="/docs/user-guides"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "18px",
                    padding: "36px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "all 0.3s ease",
                    border: "2px solid transparent",
                  }}
                  onClick={handleButtonClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.borderColor = "#0ea5e9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <h3 style={{ marginBottom: "12px", fontSize: "1.4rem", fontWeight: "700", color: "#0f172a" }}>Technical Guides</h3>
                  <p style={{ lineHeight: "1.6", color: "#64748b", margin: 0 }}>Comprehensive guides covering installation, integration, and best practices for technical documentation projects.</p>
                </Link>
                <Link
                  to="/docs/installation-guides"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "18px",
                    padding: "36px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "all 0.3s ease",
                    border: "2px solid transparent",
                  }}
                  onClick={handleButtonClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.borderColor = "#0ea5e9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <h3 style={{ marginBottom: "12px", fontSize: "1.4rem", fontWeight: "700", color: "#0f172a" }}>Documentation Tools</h3>
                  <p style={{ lineHeight: "1.6", color: "#64748b", margin: 0 }}>Explore Docusaurus, Swagger, MkDocs, and modern platforms for building scalable documentation sites.</p>
                </Link>
                <Link
                  to="/docs/cloud-devops/aws"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "28px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "all 0.3s ease",
                    border: "2px solid transparent",
                  }}
                  onClick={handleButtonClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.borderColor = "#0ea5e9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <h3 style={{ marginBottom: "12px", fontSize: "1.4rem", fontWeight: "700", color: "#0f172a" }}>Cloud Computing</h3>
                  <p style={{ lineHeight: "1.6", color: "#64748b", margin: 0 }}>Deep dive into AWS, Azure, and GCP with architecture patterns, deployment strategies, and cloud-native solutions.</p>
                </Link>
                <Link
                  to="/docs/integration-guides"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "28px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "all 0.3s ease",
                    border: "2px solid transparent",
                  }}
                  onClick={handleButtonClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.borderColor = "#0ea5e9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <h3 style={{ marginBottom: "12px", fontSize: "1.4rem", fontWeight: "700", color: "#0f172a" }}>DevOps</h3>
                  <p style={{ lineHeight: "1.6", color: "#64748b", margin: 0 }}>Master CI/CD pipelines, Docker, Kubernetes, and infrastructure as code with practical automation examples.</p>
                </Link>
                <Link
                  to="/docs/api-references"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "28px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "all 0.3s ease",
                    border: "2px solid transparent",
                  }}
                  onClick={handleButtonClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.borderColor = "#0ea5e9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <h3 style={{ marginBottom: "12px", fontSize: "1.4rem", fontWeight: "700", color: "#0f172a" }}>Writing Best Practices</h3>
                  <p style={{ lineHeight: "1.6", color: "#64748b", margin: 0 }}>Learn professional writing techniques, style guides, and standards for creating clear, effective documentation.</p>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
}
