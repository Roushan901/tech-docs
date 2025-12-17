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
      title: 'Email',
      value: 'support@techdocs.com',
      type: 'email',
      action: () => {
        try {
          window.location.href = 'mailto:support@techdocs.com';
        } catch (error) {
          alert('Unable to open email client. Please copy the email address: support@techdocs.com');
        }
      }
    },
    {
      title: 'LinkedIn',
      value: 'Connect & Network',
      type: 'linkedin',
      link: 'https://linkedin.com/in/techdocs'
    },
    {
      title: 'GitHub',
      value: 'Contribute & Collaborate',
      type: 'github',
      link: 'https://github.com/TechDocsOrg/tech-docs'
    },
    {
      title: 'Discussions',
      value: 'Share Ideas & Get Help',
      type: 'discussions',
      link: 'https://github.com/TechDocsOrg/tech-docs/discussions'
    }
  ];

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h2 style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Join the Community</h2>
          <p style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Connect with fellow technical writers, share knowledge, and grow together in the documentation community.</p>
        </div>

        <div className={styles.contactGrid}>
          {contacts.map((contact) => (
            <div key={contact.type} className={styles.contactCard}>
              <h3 style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>{contact.title}</h3>
              <p className={styles.contactValue} style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>{contact.value}</p>
              {contact.action && (
                <button
                  className={styles.contactBtn}
                  onClick={contact.action}
                  aria-label={`Contact via ${contact.title}`}
                  style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}
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
                  style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}
                >
                  Connect
                </a>
              )}
            </div>
          ))}
        </div>

        <div className={styles.contactInfo}>
          <h3 style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>How We Can Help</h3>
          <ul className={styles.infoList}>
            <li style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}><strong>Questions About Writing:</strong> Ask in Discussions</li>
            <li style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}><strong>Share Your Work:</strong> Contribute resources and examples</li>
            <li style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}><strong>Collaboration:</strong> Partner on documentation projects</li>
            <li style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}><strong>Learning Together:</strong> Join our writing community workshops</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
