import React from 'react';
import styles from './styles.module.css';

export default function Testimonials() {
  const successStories = [
    {
      metric: '40%',
      outcome: 'Faster Onboarding',
      description: 'Teams using TechDocs reduce new engineer onboarding time',
      icon: 'Growth',
    },
    {
      metric: '3-6 months',
      outcome: 'Skill Progression',
      description: 'Average time to master cloud platform fundamentals through structured paths',
      icon: 'Path',
    },
    {
      metric: '95%',
      outcome: 'Learning Completion',
      description: 'Structured learning paths with high completion and mastery rates',
      icon: 'Complete',
    },
    {
      metric: '50+ guides',
      outcome: 'Real-World Applicable',
      description: 'Comprehensive, production-tested content for immediate professional use',
      icon: 'Value',
    },
    {
      metric: '4.9/5',
      outcome: 'Learner-Approved',
      description: 'Consistently high ratings from professionals and teams',
      icon: 'Rating',
    },
    {
      metric: '10k+',
      outcome: 'Active Learning Community',
      description: 'Growing network of engineers improving their craft daily',
      icon: 'Community',
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Measurable Results, Real Impact</h2>
          <p className={styles.subtitle}>
            Join professionals who are mastering technical documentation and transforming their careers
          </p>
        </div>

        <div className={styles.grid}>
          {successStories.map((story, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{story.icon}</div>
              <div className={styles.metric}>{story.metric}</div>
              <div className={styles.outcome}>{story.outcome}</div>
              <p className={styles.text}>{story.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>50+</div>
            <div className={styles.statText}>Guides Published</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10k+</div>
            <div className={styles.statText}>Active Learners</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>5+</div>
            <div className={styles.statText}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statText}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
