import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

/**
 * Homepage component for Tech Docs
 */
export default function Home() {
  return (
    <Layout title="Tech Docs" description="Modern documentation site">
      <header className={styles.heroBanner}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.kicker}>Documentation • Guides • Examples</div>
              <h1 className={styles.title}>Tech Docs — Beautiful, Fast Docs</h1>
              <p className={styles.subtitle}>
                Ship better docs faster. Clean reading experience, powerful
                search and developer-friendly workflows.
              </p>

              <div className={styles.buttons}>
                <Link className={styles.primaryBtn} to="/docs/intro">
                  Get Started
                </Link>
                <Link className={styles.secondaryBtn} to="/blog">
                  Read the Blog
                </Link>
                <Link className={styles.ghostBtn} to="/docs/intro#features">
                  Explore Features
                </Link>
              </div>

              {/* trust logos removed to keep focus on writing resources */}
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

          <div className={styles.decorative} aria-hidden="true">
            <div className={styles.blob1} />
            <div className={styles.blob2} />
          </div>
        </div>
      </header>

      <main>
        <section id="features" className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>

          <div className={styles.featuresGrid}>
            <Link to="/docs/intro" className={styles.cardLink} aria-label="Fast & Lightweight - Docs">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>🚀</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Fast & Lightweight</h3>
                  <p>Built with performance in mind — fast builds and instant navigation.</p>
                </div>
                <div className={styles.cardAccent} />
              </div>
            </Link>

            <Link to="/docs/create-a-document" className={styles.cardLink} aria-label="Easy Documentation - Docs">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>✍️</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Easy Authoring</h3>
                  <p>Write in Markdown or MDX, version docs, and deploy from Git.</p>
                </div>
                <div className={styles.cardAccent} />
              </div>
            </Link>

            <Link to="/docs/create-a-page" className={styles.cardLink} aria-label="Customizable UI - Docs">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>🎨</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Beautiful UI</h3>
                  <p>Modern themes, clean typography, and customizable components.</p>
                </div>
                <div className={styles.cardAccent} />
              </div>
            </Link>

            <Link to="/blog" className={styles.cardLink} aria-label="Community & Plugins">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>🔌</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Extensible</h3>
                  <p>Plugins and integrations to adapt the docs to your workflow.</p>
                </div>
                <div className={styles.cardAccent} />
              </div>
            </Link>
          </div>
        </section>

        {/* Technical Writing Resources Section */}
        <section className={styles.techWritingSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Technical Writing Resources</h2>
            <p className={styles.sectionSubtitle}>Learn best practices, doc types, tools, and cloud services for technical writers</p>

            <div className={styles.techWritingGrid}>
              <div className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <span className={styles.techIcon}>✍️</span>
                  <h3>Best Practices</h3>
                </div>
                <ul className={styles.techList}>
                  <li>Clear, concise language</li>
                  <li>User-focused documentation</li>
                  <li>Consistency in style & tone</li>
                  <li>SEO optimization</li>
                  <li>Accessibility standards</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <span className={styles.techIcon}>📚</span>
                  <h3>Documentation Types</h3>
                </div>
                <ul className={styles.techList}>
                  <li>API Documentation</li>
                  <li>User Guides & Tutorials</li>
                  <li>Getting Started Guides</li>
                  <li>FAQ & Troubleshooting</li>
                  <li>Release Notes & Changelog</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <span className={styles.techIcon}>🛠️</span>
                  <h3>Writing Tools</h3>
                </div>
                <ul className={styles.techList}>
                  <li>Docusaurus</li>
                  <li>Read the Docs</li>
                  <li>Sphinx & MkDocs</li>
                  <li>GitBook</li>
                  <li>Swagger/OpenAPI</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <span className={styles.techIcon}>☁️</span>
                  <h3>Cloud Services</h3>
                </div>
                <ul className={styles.techList}>
                  <li>AWS & Azure Documentation</li>
                  <li>Google Cloud Guides</li>
                  <li>GitHub Pages Hosting</li>
                  <li>Netlify & Vercel Deploy</li>
                  <li>CDN & Distribution</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <span className={styles.techIcon}>🎓</span>
                  <h3>Learning Resources</h3>
                </div>
                <ul className={styles.techList}>
                  <li>Technical writing courses</li>
                  <li>Industry certifications</li>
                  <li>Community forums</li>
                  <li>Best practices guides</li>
                  <li>Case studies & examples</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <span className={styles.techIcon}>🎯</span>
                  <h3>Doc Strategy</h3>
                </div>
                <ul className={styles.techList}>
                  <li>Information architecture</li>
                  <li>Content planning</li>
                  <li>Versioning strategy</li>
                  <li>Analytics & feedback</li>
                  <li>Maintenance workflow</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials removed to maintain focus on technical writing resources */}
      </main>
    </Layout>
  );
}
