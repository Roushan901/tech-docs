import React from 'react';
import Layout from '@theme/Layout';
import styles from './blog-cards.module.css';

export default function BlogCardsPage() {
  const blogs = [
    {
      id: 1,
      slug: 'welcome-to-tech-docs',
      title: 'Welcome to Tech Docs',
      description: 'An introduction to Tech Docs, including the goals behind the platform and what you can expect across writing, cloud, and DevOps content.',
      date: 'November 23, 2025',
      readTime: '5 min'
    },
    {
      id: 2,
      slug: 'ai-powered-documentation-search',
      title: 'Turn Your Documentation Search Box into SuperSmart Search',
      description: 'Discover how to implement AI-powered search in your documentation using Docusaurus and Algolia Ask AI for intelligent, conversational answers.',
      date: 'November 21, 2025',
      readTime: '8 min'
    },
    {
      id: 3,
      slug: 'docs-as-code-approach',
      title: 'Docs as Code Approach',
      description: 'Learn what Docs as Code means, why it has become widely adopted, and how it supports maintainable developer documentation.',
      date: 'November 23, 2025',
      readTime: '10 min'
    },
    {
      id: 4,
      slug: 'cloud-computing-basics',
      title: 'Cloud Computing Basics',
      description: 'Understand the fundamentals of cloud computing, cloud services, and how cloud technology is transforming business operations and enabling scalability.',
      date: 'November 24, 2025',
      readTime: '7 min'
    },
    {
      id: 5,
      slug: 'documentation-helps-businesses-scale',
      title: 'How Great Documentation Helps Businesses and Users Scale Worldwide',
      description: 'Explore how quality documentation drives business growth, improves user adoption, and enables companies to scale globally with confidence.',
      date: 'December 4, 2025',
      readTime: '9 min'
    }
  ];

  return (
    <Layout title="Blog" description="Tech Docs blog covering technical writing, documentation strategy, cloud, and DevOps">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>TechDOCS Blog</h1>
          <p className={styles.subtitle}>
            Insights on technical writing, documentation best practices, cloud computing, and DevOps
          </p>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <a key={blog.id} href={`/blog/${blog.slug}`} className={styles.card}>
              <h3>{blog.title}</h3>
              <p className={styles.description}>{blog.description}</p>
              <div className={styles.meta}>
                <span className={styles.date}>{blog.date}</span>
                <span className={styles.readTime}>{blog.readTime} read</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
