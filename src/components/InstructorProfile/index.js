import React from 'react';
import styles from './styles.module.css';

export default function InstructorProfile() {
  const helpItems = [
    {
      icon: '✎',
      title: 'Technical Writing',
      text: 'Clear, concise, user-focused content that helps users understand products and complete tasks successfully.',
    },
    {
      icon: '▣',
      title: 'Documentation Architecture',
      text: 'Scalable information architecture, navigation, governance, and documentation workflows.',
    },
    {
      icon: '☁',
      title: 'Cloud & DevOps',
      text: 'Practical understanding of cloud platforms, Kubernetes, infrastructure, CI/CD, and modern architecture concepts.',
    },
    {
      icon: '◍',
      title: 'AI-Ready Documentation',
      text: 'Structured, discoverable content designed for search, RAG, AI assistants, and improved chatbot responses.',
    },
  ];

  const stats = [
    {
      value: '35%',
      label: 'Reduced Support Effort',
      icon: '◌',
      description: 'Lower repetitive support requests through clearer self-serve content.',
    },
    {
      value: '120+',
      label: 'Hours Saved / Month',
      icon: '◔',
      description: 'Reduce recurring support and clarification time across teams.',
    },
    {
      value: '60%',
      label: 'Increase in Self-Service',
      icon: '▤',
      description: 'Help users find answers quickly and complete tasks with confidence.',
    },
    {
      value: '45%',
      label: 'Faster Issue Resolution',
      icon: '⚡',
      description: 'Improve discoverability and help teams resolve issues faster.',
    },
    {
      kind: 'insight',
      title: 'Enhanced Chatbot Responses',
      icon: '◍',
      description: 'Better AI/RAG answer quality through structured, discoverable documentation.',
    },
    {
      kind: 'insight',
      title: 'Documentation Usage & Business Growth',
      icon: '▣',
      description: 'Increase engagement, adoption, discoverability, and content usage.',
    },
  ];

  const skillGroups = [
    {
      title: 'Documentation',
      items: [
        'Technical Writing',
        'Documentation Architecture',
        'Content Strategy',
        'Information Architecture',
        'Documentation Best Practices',
        'Docs-as-Code',
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        'Cloud Computing',
        'DevOps & CI/CD',
        'Kubernetes & Containers',
        'Infrastructure as Code',
      ],
    },
    {
      title: 'AI & Modern Documentation',
      items: [
        'AI-Ready Documentation',
        'RAG & Knowledge Retrieval',
        'Documentation Analytics',
        'AI-Assisted Content Development',
      ],
    },
  ];

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileIntro}>
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

        <div className={styles.profileContent}>
          <p className={styles.profileEyebrow}>About My Work</p>
          <h3 className={styles.aboutHeading}>I turn complex technology into documentation people can actually use.</h3>
          <p className={styles.bio}>
            With 10+ years of experience in technical writing, documentation architecture, and content strategy,
            I help teams create clear, consistent, scalable documentation that improves user experience and
            delivers measurable business value.
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

      <div className={styles.helpSection}>
        <h3 className={styles.helpTitle}>How I Can Help</h3>
        <div className={styles.helpGrid}>
          {helpItems.map((item) => (
            <div key={item.title} className={styles.helpItem}>
              <span className={styles.helpIcon} aria-hidden="true">{item.icon}</span>
              <div className={styles.helpTextWrap}>
                <p className={styles.helpItemTitle}>{item.title}</p>
                <p className={styles.helpItemText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.metricsSection}>
        <div className={styles.metricsHeader}>
          <h3 className={styles.metricsTitle}>Documentation Impact</h3>
          <p className={styles.metricsIntro}>
            Documentation is more than content. It can reduce support effort, improve self-service,
            accelerate resolution, and enable better AI experiences.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {stats.map((stat) => {
            const isStrategic = stat.kind === 'insight';
            const flowText = stat.title === 'Enhanced Chatbot Responses'
              ? 'Better content → Better retrieval → Better answers'
              : 'Discoverability → Engagement → Adoption';

            return (
              <div
                key={stat.label || stat.title}
                className={`${styles.metricCard} ${isStrategic ? styles.metricNarrative : styles.primaryMetric}`}
              >
                <div className={styles.metricIcon} aria-hidden="true">{stat.icon}</div>
                {isStrategic ? (
                  <>
                    <div className={styles.metricTitle}>{stat.title}</div>
                    <div className={styles.metricDescription}>{stat.description}</div>
                    <div className={styles.metricFlow}>{flowText}</div>
                  </>
                ) : (
                  <>
                    <div className={styles.metricValue}>{stat.value}</div>
                    <div className={styles.metricLabel}>{stat.label}</div>
                    <div className={styles.metricDescription}>{stat.description}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.expertise}>
        <h3 className={styles.expertiseTitle}>Areas of Expertise</h3>
        <div className={styles.expertiseGrid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>{group.title}</h4>
              <div className={styles.skillsRow}>
                {group.items.map((skill) => (
                  <span key={skill} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <p className={styles.ctaTitle}>Build Better Documentation. Create Greater Impact.</p>
          <p className={styles.ctaSubtitle}>Have a documentation challenge, learning goal, or collaboration opportunity? Let&apos;s connect.</p>
        </div>
        <a href="mailto:contact@techdocs.co.in" className={styles.ctaButton}>
          Get in Touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
