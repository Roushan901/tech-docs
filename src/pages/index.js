import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import FeedbackForm from "@site/src/components/FeedbackForm";
import ContactSupport from "@site/src/components/ContactSupport";
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
              <div className={styles.kicker}>📖 Welcome to Tech Docs • Documentation • Cloud Services</div>
              <h1 className={styles.title}>Master Technical Writing & Documentation</h1>
              <p className={styles.subtitle}>
                Learn professional documentation techniques, writing best practices,
                cloud services integration, and tools to create clear, effective technical content.
                Explore real-world examples, industry insights, and grow as a technical writer.
              </p>

              <div className={styles.buttons}>
                <Link className={styles.primaryBtn} to="/docs/intro">
                  Start Learning
                </Link>
                <Link className={styles.secondaryBtn} to="/blog">
                  Explore Blog & Insights
                </Link>
                <Link className={styles.ghostBtn} to="/docs/tutorial-basics/create-a-document">
                  Documentation Guides
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
        {/* Welcome Section */}
        <section className={styles.welcomeSection}>
          <div className={styles.container}>
            <div className={styles.welcomeContent}>
              <h2>Welcome to Your Documentation Learning Hub</h2>
              <p>
                Whether you're writing API documentation, cloud service guides, or user manuals,
                we provide comprehensive resources to help you excel. Learn from industry experts,
                explore best practices for AWS, Azure, and GCP, and master the art of clear technical communication.
              </p>
              <div className={styles.welcomeHighlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlightIcon}>📖</span>
                  <strong>Documentation Techniques</strong>
                  <p>Master writing patterns for modern tech</p>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightIcon}>☁️</span>
                  <strong>Cloud Services</strong>
                  <p>AWS, Azure, GCP guides & patterns</p>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightIcon}>💡</span>
                  <strong>Insights & Trends</strong>
                  <p>Industry expert tips and case studies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>What You'll Learn</h2>

          <div className={styles.featuresGrid}>
            <Link to="/docs/intro" className={styles.cardLink} aria-label="Documentation Essentials">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>📚</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Documentation Essentials</h3>
                  <p>Fundamentals of technical writing, clarity, audience analysis, and structure.</p>
                </div>
                <div className={styles.cardAccent} />
              </div>
            </Link>

            <Link to="/docs/tutorial-basics/create-a-document" className={styles.cardLink} aria-label="Writing Techniques">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>✍️</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Writing Techniques</h3>
                  <p>Professional strategies for writing clear, concise, and user-focused documentation.</p>
                </div>
                <div className={styles.cardAccent} />
              </div>
            </Link>

            <Link to="/docs/tutorial-basics/create-a-page" className={styles.cardLink} aria-label="Tools & Cloud Services">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>☁️</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Cloud Services & Tools</h3>
                  <p>AWS, Azure, GCP documentation patterns, cloud architecture, and deployment guides.</p>
                </div>
                <div className={styles.cardAccent} />
              </div>
            </Link>

            <Link to="/blog" className={styles.cardLink} aria-label="Industry Insights">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconLarge}>💡</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>Industry Insights</h3>
                  <p>Expert tips, case studies, and evolving trends in technical documentation.</p>
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

        {/* Feedback Section */}
        <section className={styles.feedbackSection}>
          <div className={styles.container}>
            <div className={styles.feedbackHeader}>
              <h2>📝 Help Improve Our Resources</h2>
              <p>Share your feedback to help us create better technical writing guides and tutorials</p>
            </div>
            <FeedbackForm />
          </div>
        </section>

        {/* Contact Support Section */}
        <ContactSupport />
      </main>
    </Layout>
  );
}
