import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * InteractiveTabs - A tabbed interface for showing multiple code examples or content
 * Perfect for comparing different approaches or languages
 */
export default function InteractiveTabs({ 
  tabs = [], 
  defaultTab = 0,
  className = '' 
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!tabs || tabs.length === 0) {
    return <div>No tabs provided</div>;
  }

  return (
    <div className={`${styles.tabContainer} ${className}`}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
          >
            {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className={styles.tabContent}>
        {tabs[activeTab] && (
          <div className={styles.tabPanel} role="tabpanel">
            {tabs[activeTab].content}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * CodeTabs - Pre-configured tabs specifically for code examples
 * Usage: <CodeTabs examples={[{label: 'JavaScript', code: '...'}, ...]} />
 */
export function CodeTabs({ examples = [] }) {
  const tabs = examples.map(example => ({
    label: example.label,
    icon: example.icon,
    content: (
      <pre className={styles.codeBlock}>
        <code>{example.code}</code>
      </pre>
    )
  }));

  return <InteractiveTabs tabs={tabs} />;
}
