import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * InteractiveAccordion - Collapsible sections for FAQs and detailed content
 * Perfect for organizing large amounts of information
 */
export default function InteractiveAccordion({ 
  items = [],
  allowMultiple = false,
  defaultExpanded = []
}) {
  const [expandedItems, setExpandedItems] = useState(new Set(defaultExpanded));

  const toggleItem = (index) => {
    setExpandedItems(prev => {
      const newSet = new Set(allowMultiple ? prev : []);
      
      if (prev.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      
      return newSet;
    });
  };

  if (!items || items.length === 0) {
    return <div>No items provided</div>;
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(index);
        
        return (
          <div 
            key={index} 
            className={`${styles.accordionItem} ${isExpanded ? styles.expanded : ''}`}
          >
            <button
              className={styles.accordionHeader}
              onClick={() => toggleItem(index)}
              aria-expanded={isExpanded}
            >
              <span className={styles.accordionTitle}>
                {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
                {item.title}
              </span>
              <span className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}>
                ▼
              </span>
            </button>
            
            {isExpanded && (
              <div className={styles.accordionContent}>
                <div className={styles.accordionBody}>
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * FAQAccordion - Pre-configured accordion for FAQ sections
 * Usage: <FAQAccordion faqs={[{question: '...', answer: '...'}, ...]} />
 */
export function FAQAccordion({ faqs = [] }) {
  const items = faqs.map(faq => ({
    title: faq.question,
    icon: '❓',
    content: <p>{faq.answer}</p>
  }));

  return <InteractiveAccordion items={items} />;
}
