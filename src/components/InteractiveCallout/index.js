import React from 'react';
import styles from './styles.module.css';

/**
 * InteractiveCallout - Display different types of callouts/alerts
 * Perfect for showcasing notification styles and alert patterns
 */
export default function InteractiveCallout({
  type = 'info',
  title,
  children,
  icon,
  dismissible = false,
  onDismiss
}) {
  const [isDismissed, setIsDismissed] = React.useState(false);

  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    danger: '🚫',
    tip: '💡',
    note: '📝'
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    if (onDismiss) onDismiss();
  };

  if (isDismissed) return null;

  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      <div className={styles.calloutHeader}>
        <span className={styles.calloutIcon}>
          {icon || icons[type] || icons.info}
        </span>
        {title && <span className={styles.calloutTitle}>{title}</span>}
        {dismissible && (
          <button 
            onClick={handleDismiss}
            className={styles.dismissButton}
            aria-label="Dismiss"
          >
            ✕
          </button>
        )}
      </div>
      {children && (
        <div className={styles.calloutContent}>
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * CalloutShowcase - Displays all callout types for documentation
 */
export function CalloutShowcase() {
  const examples = [
    {
      type: 'info',
      title: 'Information',
      content: 'This is an informational message that provides helpful context or details.'
    },
    {
      type: 'success',
      title: 'Success',
      content: 'Great job! The operation completed successfully. Everything is working as expected.'
    },
    {
      type: 'warning',
      title: 'Warning',
      content: 'Proceed with caution. This action may have important implications that you should consider.'
    },
    {
      type: 'danger',
      title: 'Danger',
      content: 'Critical alert! This is a serious issue that requires immediate attention.'
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      content: 'Here\'s a useful tip that can help you work more efficiently and effectively.'
    },
    {
      type: 'note',
      title: 'Note',
      content: 'Please note this important information for future reference.'
    }
  ];

  return (
    <div className={styles.showcase}>
      {examples.map((example, index) => (
        <InteractiveCallout
          key={index}
          type={example.type}
          title={example.title}
          dismissible={true}
        >
          <p>{example.content}</p>
        </InteractiveCallout>
      ))}
    </div>
  );
}
