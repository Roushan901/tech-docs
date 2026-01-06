import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
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
        <head>
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
        </head>
        <header className={styles.heroBanner}>
          <div
            className={styles.container}
            style={{
              padding: "20px",
              background: "linear-gradient(to right, #d32f2f, #f44336)",
              borderRadius: "15px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className={styles.heroContent}>
              <div className={styles.heroLeft}>
                <h1
                  className={styles.title}
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                    textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  Welcome to Tech Docs
                </h1>
                <p
                  className={styles.heroDescription}
                  style={{ fontSize: "1.2rem", color: "#f0f0f0", lineHeight: "1.6" }}
                >
                  Master technical writing, API documentation, and modern DevOps practices. Your comprehensive resource for creating professional documentation that developers love.
                </p>
                <div
                  className={styles.searchWrapper}
                  style={{ marginTop: "20px", textAlign: "center" }}
                >
                  <form
                    onSubmit={handleSearch}
                    className={styles.searchBoxWrapper}
                  >
                    <input
                      type="text"
                      placeholder="Search documentation..."
                      className={styles.searchBox}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search documentation"
                      style={{
                        padding: "15px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        width: "85%",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                        fontSize: "1.2rem",
                      }}
                    />
                    <button
                      type="submit"
                      className={styles.searchSubmitBtn}
                      aria-label="Submit search"
                      style={{
                        padding: "15px",
                        borderRadius: "10px",
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                        border: "none",
                        marginLeft: "10px",
                        transition: "background-color 0.3s",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                        fontSize: "1.2rem",
                      }}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className={styles.heroRight}>
                <div
                  className={styles.heroImageWrapper}
                  style={{
                    margin: "0 auto",
                    border: "none",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    width: "90%",
                  }}
                >
                  <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/7IFJb-uLEaI"
                    title="Tech Docs Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main style={{ marginTop: "20px" }}>
          <section className={styles.exploreSection}>
            <div
              className={styles.container}
              style={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "15px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2
                className={styles.exploreTitle}
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Learn Technical Writing, Documentation, and Cloud & DevOps
              </h2>
              <div className={styles.featuresGrid}>
                <Link
                  to="/blog"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "transform 0.3s",
                    hover: { transform: "scale(1.05)" },
                  }}
                  onClick={handleButtonClick}
                >
                  <h3>Blog</h3>
                  <p>Learn industry-standard techniques for clarity, conciseness, and user-focused documentation with real-world examples.</p>
                </Link>
                <Link
                  to="/docs/user-guides"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "transform 0.3s",
                    hover: { transform: "scale(1.05)" },
                  }}
                  onClick={handleButtonClick}
                >
                  <h3>Developer Documentation</h3>
                  <p>Master API documentation, user guides, and tutorials with practical examples that improve developer experience.</p>
                </Link>
                <Link
                  to="/docs/installation-guides"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "transform 0.3s",
                    hover: { transform: "scale(1.05)" },
                  }}
                  onClick={handleButtonClick}
                >
                  <h3>Documentation Tools</h3>
                  <p>Discover Docusaurus, Swagger, MkDocs, and other platforms to build scalable, maintainable documentation.</p>
                </Link>
                <Link
                  to="/docs/cloud-devops/aws"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "transform 0.3s",
                    hover: { transform: "scale(1.05)" },
                  }}
                  onClick={handleButtonClick}
                >
                  <h3>Cloud Computing</h3>
                  <p>Understand AWS, Azure, and GCP documentation with practical cloud architecture patterns and deployment guides.</p>
                </Link>
                <Link
                  to="/docs/integration-guides"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "transform 0.3s",
                    hover: { transform: "scale(1.05)" },
                  }}
                  onClick={handleButtonClick}
                >
                  <h3>Cloud</h3>
                  <p>Learn CI/CD pipeline documentation and infrastructure as code with hands-on automation workflow examples.</p>
                </Link>
                <Link
                  to="/docs/api-references"
                  className={styles.featureCard}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    textDecoration: "none",
                    color: "#333",
                    transition: "transform 0.3s",
                    hover: { transform: "scale(1.05)" },
                  }}
                  onClick={handleButtonClick}
                >
                  <h3>API References</h3>
                  <p>Browse professional documentation templates and real-world examples to accelerate your technical writing projects.</p>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
}
