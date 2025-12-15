import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Tech Docs - Professional Technical Writing Hub" description="Master technical writing, API documentation, and modern documentation tools. Trusted by developers worldwide.">
      <header className={styles.heroBanner}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>📚</span>
                <span>Professional Documentation Platform</span>
              </div>
              <h1 className={styles.title}>
                Master Technical <span className={styles.highlightText}>Writing</span> & Documentation
              </h1>
              <p className={styles.subtitle}>
                Your complete learning hub for <strong>software technical writing</strong>. Master 
                documentation best practices, explore modern tools, and learn 
                Cloud & DevOps documentation strategies. Trusted by developers worldwide.
              </p>

              <div className={styles.searchWrapper}>
                <div className={styles.searchBoxWrapper}>
                  <svg className={styles.searchIconSvg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search documentation, guides, tutorials..."
                    className={styles.searchBox}
                    onClick={(e) => {
                      window.location.href = '/search';
                    }}
                    readOnly
                    aria-label="Search documentation"
                  />
                  <button 
                    className={styles.searchButton}
                    onClick={() => window.location.href = '/search'}
                    aria-label="Search"
                  >
                    <span>Search</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 8h4m0 0l-2-2m2 2l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className={styles.searchHints}>
                  <span className={styles.hintsLabel}>Popular searches:</span>
                  <Link to="/docs/intro" className={styles.hint}>API Docs</Link>
                  <Link to="/blog" className={styles.hint}>Cloud Guide</Link>
                  <Link to="/docs/tutorial-basics/markdown-features" className={styles.hint}>Markdown</Link>
                </div>
              </div>

              <div className={styles.ctaButtons}>
                <Link className={styles.primaryBtn} to="/docs/intro">
                  <span className={styles.btnText}>Get Started</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10h6m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link className={styles.secondaryBtn} to="/blog">
                  <span className={styles.btnText}>Explore Blog</span>
                </Link>
              </div>
              <div className={styles.trustBadge}>
                <span className={styles.trustIcon}>✓</span>
                <span className={styles.trustText}>Free • Open Source • Global Community</span>
              </div>
            </div>

            <div className={styles.heroVideo}>
              <div className={styles.aspectRatio}>
                <iframe
                  src="https://www.youtube.com/embed/yRpLlJmRo2w?rel=0&modestbranding=1"
                  title="Intro video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>

        <section className={styles.exploreSection}>
          <div className={styles.container}>
            <div className={styles.exploreBadge}>EXPLORE RESOURCES</div>
            <h2 className={styles.exploreTitle}>Start Your Learning Journey</h2>
            <p className={styles.exploreSubtitle}>
              Choose your path and dive into comprehensive guides tailored for technical writers
            </p>
            
            <div className={styles.featuresGrid}>
              <Link to="/docs/intro" className={styles.featureCard}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop" 
                    alt="Writing Best Practices"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>Writing Best Practices</h3>
                  <p>Learn industry-standard techniques for clarity, conciseness, and user-focused documentation.</p>
                  <span className={styles.cardLink}>Explore Guides →</span>
                </div>
              </Link>

              <Link to="/docs/tutorial-basics/create-a-document" className={styles.featureCard}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
                    alt="Developer Documentation"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>Developer Documentation</h3>
                  <p>Master API docs, user guides, tutorials, release notes, and troubleshooting guides.</p>
                  <span className={styles.cardLink}>Learn More →</span>
                </div>
              </Link>

              <Link to="/docs/tutorial-basics/create-a-page" className={styles.featureCard}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" 
                    alt="Documentation Tools"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>Documentation Tools</h3>
                  <p>Discover Docusaurus, Swagger, MkDocs, GitBook, and other powerful documentation platforms.</p>
                  <span className={styles.cardLink}>Discover Tools →</span>
                </div>
              </Link>

              <Link to="/blog" className={styles.featureCard}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif" 
                    alt="Cloud Computing"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>Cloud Computing</h3>
                  <p>Learn AWS, Azure, GCP documentation strategies and cloud architecture best practices.</p>
                  <span className={styles.cardLink}>View Resources →</span>
                </div>
              </Link>

              <Link to="/blog" className={styles.featureCard}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=400&h=300&fit=crop" 
                    alt="DevOps"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>DevOps</h3>
                  <p>Master CI/CD pipeline documentation, infrastructure as code guides, and automation workflows.</p>
                  <span className={styles.cardLink}>Explore Guides →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>


      </main>
    </Layout>
  );
}
