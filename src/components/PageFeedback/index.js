import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * PageFeedback component - Collects like/dislike feedback for documentation pages
 * Helps improve documentation quality and identify helpful resources
 */
export default function PageFeedback() {
  const [feedback, setFeedback] = useState(null);
  const [message, setMessage] = useState('');

  const handleFeedback = (type) => {
    setFeedback(type);
    setMessage(type === 'like' ? '✨ Glad this helped!' : '💭 We\'ll make it better');
    setTimeout(() => {
      setMessage('');
      setFeedback(null);
    }, 2000);
  };

  return (
    <div className={styles.pageFeedback}>
      <div className={styles.feedbackPrompt}>
        <p>Was this tutorial helpful for your writing?</p>
      </div>
      <div className={styles.feedbackButtons}>
        <button
          className={`${styles.feedbackBtn} ${styles.likeBtn} ${feedback === 'like' ? styles.active : ''}`}
          onClick={() => handleFeedback('like')}
          aria-label="Mark this tutorial as helpful"
        >
          ✨ Helpful
        </button>
        <button
          className={`${styles.feedbackBtn} ${styles.dislikeBtn} ${feedback === 'dislike' ? styles.active : ''}`}
          onClick={() => handleFeedback('dislike')}
          aria-label="Mark this tutorial as not helpful"
        >
          💭 Needs Work
        </button>
      </div>
      {message && (
        <div className={styles.feedbackMessage}>
          {message}
        </div>
      )}
    </div>
  );
}
