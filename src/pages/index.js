import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Tech Docs" description="Modern documentation site">
      <header className={styles.heroBanner}>
        <div className={styles.container}>
          <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={styles.title}>TECH DOCS</h1>
                <p className={styles.subtitle}>
                  Your complete learning hub for <strong>software technical writing</strong>. Master 
                  documentation best practices, explore modern tools, and learn 
                  Cloud & DevOps documentation strategies.
                </p>

                <div className={styles.buttons}>
                  <Link className={styles.primaryBtn} to="/docs/intro">
                    START LEARNING
                  </Link>
                  <Link className={styles.secondaryBtn} to="/blog">
                    READ BLOG
                  </Link>
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

            <div className={styles.searchWrapper}>
              <span className={styles.searchIcon}>🔍</span>
              <h2 className={styles.searchTitle}>Find What You Need</h2>
              <p className={styles.searchSubtitle}>
                Search through our comprehensive documentation, guides, and tutorials
              </p>
              <div className={styles.searchBoxWrapper}>
                <input
                  type="text"
                  placeholder="Search documentation, guides, tutorials..."
                  className={styles.searchBox}
                  onClick={(e) => {
                    window.location.href = '/search';
                  }}
                  readOnly
                />
                <button 
                  className={styles.searchButton}
                  onClick={() => window.location.href = '/search'}
                >
                  Search
                </button>
              </div>
              <div className={styles.searchHints}>
                <span>Try:</span>
                <Link to="/docs/intro" className={styles.hint}>API Documentation</Link>
                <Link to="/blog" className={styles.hint}>Cloud Services</Link>
                <Link to="/docs/tutorial-basics/markdown-features" className={styles.hint}>Markdown Guide</Link>
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
