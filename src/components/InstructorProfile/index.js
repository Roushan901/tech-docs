import React from 'react';
import styles from './styles.module.css';

export default function InstructorProfile() {
  const helpItems = [
    {
      icon: '✎',
      title: 'Technical Writing Excellence',
      text: 'Create clear, concise, and user-focused content that users can understand and act on.',
    },
    {
      icon: '◫',
      title: 'Documentation Strategy',
      text: 'Design scalable documentation frameworks, information architecture, and content workflows.',
    },
    {
      icon: '☁',
      title: 'Cloud & DevOps Knowledge',
      text: 'Understand cloud, DevOps, infrastructure, and modern architecture concepts.',
    },
    {
      icon: '◌',
      title: 'Mentorship & Guidance',
      text: 'Build practical skills, grow your career, and succeed in technical writing.',
    },
  ];

  const stats = [
    {
      value: '35%',
      label: 'Reduced Support Effort',
      icon: '◌',
      description: 'Reduce repetitive support requests and self-serve documentation.',
    },
    {
      value: '120+',
      label: 'Time Saved / Month',
      icon: '◔',
      description: 'Reduce time spent answering repetitive questions and clarifying product concepts.',
    },
    {
      value: '60%',
      label: 'Increase in Self-Service',
      icon: '▤',
      description: 'Help users find accurate information and complete tasks with confidence.',
    },
    {
      value: '45%',
      label: 'Faster Issue Resolution',
      icon: '⚡',
      description: 'Make relevant information easier to find and resolve issues faster.',
    },
    {
      kind: 'insight',
      title: 'Enhanced Chatbot Response',
      icon: '◍',
      description: 'Create structured, consistent, and AI-ready content that enables chatbots to provide accurate and relevant answers.',
    },
    {
      kind: 'insight',
      title: 'Documentation Usage & Business Growth',
      icon: '▣',
      description: 'Increase content engagement, product adoption, and customer satisfaction which drives business growth.',
    },
  ];

  const skills = [
    'Technical Writing',
    'Documentation Architecture',
    'Content Strategy',
    'Cloud Computing',
    'DevOps & CI/CD',
    'Kubernetes & Containers',
    'Infrastructure as Code',
    'Docs-as-Code',
    'Information Architecture',
    'Documentation Best Practices',
    'AI-Ready Documentation',
  ];

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileMain}>
          <div className={styles.profilePhotoCard}>
            <img
              className={styles.profileImage}
              src="/img/roushan-profile.png"
              alt="Roushan Gupta portrait"
              onError={(event) => {
                if (event.target.src !== window.location.origin + '/img/roushan-profile.svg') {
                  event.target.src = '/img/roushan-profile.svg';
                }
              }}
            />
          </div>

          <div className={styles.profileInfo}>
            <h2 className={styles.name}>Roushan Gupta</h2>
            <p className={styles.title}>Documentation Architect & Technical Writer</p>
            <p className={styles.bio}>
              With 10+ years of experience in technical writing, documentation architecture,
              and content strategy, I help teams create clear, consistent, and scalable
              documentation that improves user experience and delivers measurable business value.
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

        <aside className={styles.helpPanel}>
          <h3 className={styles.helpTitle}>I Can Help You With</h3>
          <ul className={styles.helpList}>
            {helpItems.map((item) => (
              <li key={item.title} className={styles.helpItem}>
                <span className={styles.helpIcon} aria-hidden="true">{item.icon}</span>
                <div>
                  <p className={styles.helpItemTitle}>{item.title}</p>
                  <p className={styles.helpItemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className={styles.metricsSection}>
        <h3 className={styles.metricsTitle}>Documentation Impact</h3>
        <div className={styles.metricsGrid}>
          {stats.map((stat) => (
            <div key={stat.label || stat.title} className={styles.metricCard}>
              <div className={styles.metricIcon} aria-hidden="true">{stat.icon}</div>
              {stat.kind === 'insight' ? (
                <>
                  <div className={styles.metricTitle}>{stat.title}</div>
                  <div className={styles.metricDescription}>{stat.description}</div>
                </>
              ) : (
                <>
                  <div className={styles.metricValue}>{stat.value}</div>
                  <div className={styles.metricLabel}>{stat.label}</div>
                  <div className={styles.metricDescription}>{stat.description}</div>
                </>
              )}
            </div>
          ))}
        </div>
        <p className={styles.impactSummary}>Impact varies by product and team. Metrics based on documentation improvements and analytics.</p>
      </div>

      <div className={styles.expertise}>
        <h3 className={styles.expertiseTitle}>Areas of Expertise</h3>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill} className={styles.skill}>{skill}</div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaLeft}>
          <div className={styles.ctaIcon}>✦</div>
          <div>
            <p className={styles.ctaTitle}>Have questions or want to collaborate?</p>
            <p className={styles.ctaSubtitle}>Let&apos;s connect and achieve your learning goals together.</p>
          </div>
        </div>
        <a href="mailto:contact@techdocs.co.in" className={styles.ctaButton}>
          Get in Touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
