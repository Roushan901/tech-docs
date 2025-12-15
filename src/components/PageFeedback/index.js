import React, { useState } from 'react';
import styles from './styles.module.css';

export default function PageFeedback() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleHelpful = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleNeedsWork = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setRating(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setShowForm(false);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className={styles.feedbackContainer}>
        <div className={styles.thankYou}>
          ✓ Thank you for your feedback!
        </div>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackForm}>
          <h3 className={styles.formTitle}>Help Us Improve This Page</h3>
          <p className={styles.formSubtitle}>Your feedback helps us create better documentation</p>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.ratingSection}>
              <label className={styles.ratingLabel}>How helpful was this page?</label>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`${styles.star} ${star <= rating ? styles.starFilled : ''}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formRow}>
              <input
                type="text"
                placeholder="Your Name (optional)"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Your Email (optional)"
                className={styles.input}
              />
            </div>

            <textarea
              placeholder="What worked well on this page?"
              className={styles.textarea}
              rows="4"
            />

            <textarea
              placeholder="What needs to be improved? Any suggestions?"
              className={styles.textarea}
              rows="4"
            />

            <div className={styles.formActions}>
              <button
                type="button"
                onClick={handleCancel}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.submitBtn}
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.feedbackContainer}>
      <h3 className={styles.feedbackTitle}>Was this page helpful?</h3>
      <div className={styles.feedbackButtons}>
        <button
          onClick={handleHelpful}
          className={`${styles.feedbackBtn} ${styles.helpfulBtn}`}
        >
          👍 Yes, helpful
        </button>
        <button
          onClick={handleNeedsWork}
          className={`${styles.feedbackBtn} ${styles.needsWorkBtn}`}
        >
          👎 Needs work
        </button>
      </div>
    </div>
  );
}
