import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * ContactSupport component - Connect with the technical writing community
 * Provides multiple ways to engage, learn, and collaborate
 */
export default function ContactSupport() {
  const [copied, setCopied] = useState(null);

  const contacts = [
    {
      icon: '📧',
      title: 'Email',
      value: 'roushan901@example.com',
      type: 'email',
      action: () => window.location.href = 'mailto:roushan901@example.com'
    },
    {
      icon: '💬',
      title: 'LinkedIn',
      value: 'Connect & Network',
      type: 'linkedin',
      link: 'https://linkedin.com/in/roushan901'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'Contribute & Collaborate',
      type: 'github',
      link: 'https://github.com/Roushan901/tech-docs'
    },
    {
      icon: '💭',
      title: 'Discussions',
      value: 'Share Ideas & Get Help',
      type: 'discussions',
      link: 'https://github.com/Roushan901/tech-docs/discussions'
    }
  ];

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h2>🤝 Join the Community</h2>
          <p>Connect with fellow technical writers, share knowledge, and grow together in the documentation community.</p>
        </div>

        <div className={styles.contactGrid}>
          {contacts.map((contact) => (
            <div key={contact.type} className={styles.contactCard}>
              <div className={styles.contactIcon}>{contact.icon}</div>
              <h3>{contact.title}</h3>
              <p className={styles.contactValue}>{contact.value}</p>
              {contact.action && (
                <button
                  className={styles.contactBtn}
                  onClick={contact.action}
                  aria-label={`Contact via ${contact.title}`}
                >
                  Get in Touch
                </button>
              )}
              {contact.link && (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactBtn}
                >
                  Connect
                </a>
              )}
            </div>
          ))}
        </div>

        <div className={styles.contactInfo}>
          <h3>📖 How We Can Help</h3>
          <ul className={styles.infoList}>
            <li>💬 <strong>Questions About Writing:</strong> Ask in Discussions</li>
            <li>🚀 <strong>Share Your Work:</strong> Contribute resources and examples</li>
            <li>🤝 <strong>Collaboration:</strong> Partner on documentation projects</li>
            <li>📚 <strong>Learning Together:</strong> Join our writing community workshops</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
