import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useHistory } from '@docusaurus/router';
import styles from "./index.module.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

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

  return (
    <>
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
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1 className={styles.title}>Tech Docs</h1>
              <p className={styles.heroDescription}>
                Master technical writing, API documentation, and modern DevOps practices. Your comprehensive resource for creating professional documentation that developers love.
              </p>
              <div className={styles.ctaWrapper}>
                <Link to="/docs/intro" className={styles.primaryCta}>
                  Start Learning
                </Link>
                <Link to="/blog" className={styles.secondaryCta}>
                  Explore Documentation
                </Link>
              </div>
              <p className={styles.subtitle}>
                Search documentation…
              </p>

              <div className={styles.searchWrapper}>
                <form onSubmit={handleSearch} className={styles.searchBoxWrapper}>
                  <svg className={styles.searchIconSvg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder=""
                    className={styles.searchBox}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search documentation"
                  />
                  <button type="submit" className={styles.searchSubmitBtn} aria-label="Submit search">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M6 8h4m0 0l-2-2m2 2l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <div className={styles.heroRight}>
              <h3 className={styles.videoHeading}>Welcome to TechDOCS</h3>
              <div className={styles.heroImageWrapper}>
                <div className={styles.heroVideo}>
                  <div className={styles.aspectRatio}>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/QVxv3q_OVb8"
                      title="Tech Docs Introduction Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>

        <section className={styles.exploreSection}>
          <div className={styles.container}>
            <h2 className={styles.exploreTitle}>Learn Technical Writing, Documentation, and Cloud & DevOps</h2>
            
            <div className={styles.featuresGrid}>
              <Link to="/blog" className={styles.featureCard}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop" 
                    alt="Blog"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>Blog</h3>
                  <p>Learn industry-standard techniques for clarity, conciseness, and user-focused documentation with real-world examples.</p>
                  <span className={styles.cardLink}>Explore →</span>
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
                  <p>Master API documentation, user guides, and tutorials with practical examples that improve developer experience.</p>
                  <span className={styles.cardLink}>Explore →</span>
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
                  <p>Discover Docusaurus, Swagger, MkDocs, and other platforms to build scalable, maintainable documentation.</p>
                  <span className={styles.cardLink}>Explore →</span>
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
                  <p>Understand AWS, Azure, and GCP documentation with practical cloud architecture patterns and deployment guides.</p>
                  <span className={styles.cardLink}>Explore →</span>
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
                  <p>Learn CI/CD pipeline documentation and infrastructure as code with hands-on automation workflow examples.</p>
                  <span className={styles.cardLink}>Explore →</span>
                </div>
              </Link>

              <Link to="/docs/intro" className={styles.featureCard}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=300&fit=crop" 
                    alt="Sample"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>Sample</h3>
                  <p>Browse professional documentation templates and real-world examples to accelerate your technical writing projects.</p>
                  <span className={styles.cardLink}>Explore →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>


      </main>
      </Layout>
    </>
  );
}
