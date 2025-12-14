import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * FeedbackForm component - Collects feedback from technical writers
 * Includes rating system and open feedback for improving resources
 */
export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setTimeout(() => {
        setSubmitted(true);
        setName('');
        setEmail('');
        setFeedback('');
        setRating(0);
        setLoading(false);
        
        setTimeout(() => setSubmitted(false), 5000);
      }, 800);
    } catch (error) {
      console.error('Feedback submission error:', error);
      setLoading(false);
    }
  };

  const renderStars = () => {
    return (
      <div className={styles.starRating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`${styles.star} ${rating >= star ? styles.starActive : ''}`}
            onClick={() => setRating(star)}
            aria-label={`Rate ${star} out of 5`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  if (submitted) {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h3>Thank You!</h3>
        <p>Your feedback helps us create better technical writing resources.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.feedbackForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Your Name (optional)</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email (optional)</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
      </div>

      <div className={styles.formGroup}>
        <label>How helpful are our resources?</label>
        {renderStars()}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="feedback">Your Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your thoughts, suggestions, or ideas for improvement..."
          rows="5"
        />
      </div>

      <button 
        type="submit" 
        className={styles.submitBtn}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Submit Feedback'}
      </button>
    </form>
  );
}
