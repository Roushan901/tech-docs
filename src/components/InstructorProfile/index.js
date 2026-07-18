import React from 'react';
import styles from './styles.module.css';

export default function InstructorProfile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImageWrapper}>
          <div className={styles.profileImage}>
            <div className={styles.placeholder}>R</div>
          </div>
          <div className={styles.statusBadge}>Active Instructor</div>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>Roushan Gupta</h2>
          <p className={styles.title}>Documentation Architect & Technical Writer</p>
          <p className={styles.bio}>
            Passionate about building exceptional technical documentation and helping engineers master their craft. 
            With years of experience in documentation, cloud architecture, and DevOps, I'm dedicated to sharing 
            practical knowledge and best practices with the community.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/roushan-g-99242299/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
            <a href="https://github.com/Roushan901" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub
            </a>
            <a href="mailto:contact@techdocs.co.in" className={styles.socialLink}>
              Email
            </a>
          </div>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>50+</div>
          <div className={styles.statLabel}>Guides Published</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>10k+</div>
          <div className={styles.statLabel}>Active Learners</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>5+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>98%</div>
          <div className={styles.statLabel}>Satisfaction Rate</div>
        </div>
      </div>

      <div className={styles.expertise}>
        <h3 className={styles.expertiseTitle}>Areas of Expertise</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skill}>Technical Writing</div>
          <div className={styles.skill}>Documentation Architecture</div>
          <div className={styles.skill}>Cloud Computing</div>
          <div className={styles.skill}>DevOps & CI/CD</div>
          <div className={styles.skill}>Infrastructure as Code</div>
          <div className={styles.skill}>Best Practices</div>
        </div>
      </div>

      <div className={styles.cta}>
        <p>Have questions? Reach out to me directly!</p>
        <a href="mailto:contact@techdocs.co.in" className={styles.ctaButton}>
          Contact Me
        </a>
      </div>
    </div>
  );
}
