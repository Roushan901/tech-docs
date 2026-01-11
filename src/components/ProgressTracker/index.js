import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * ProgressTracker - Interactive progress tracker for tutorials and multi-step guides
 * Perfect for showing completion status of learning paths
 */
export default function ProgressTracker({ 
  steps = [],
  title = 'Your Progress'
}) {
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const toggleStep = (index) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const progress = steps.length > 0 
    ? Math.round((completedSteps.size / steps.length) * 100)
    : 0;

  if (!steps || steps.length === 0) {
    return <div>No steps provided</div>;
  }

  return (
    <div className={styles.trackerContainer}>
      <div className={styles.trackerHeader}>
        <h3>{title}</h3>
        <div className={styles.progressInfo}>
          <span className={styles.progressText}>
            {completedSteps.size} of {steps.length} completed
          </span>
        </div>
      </div>

      <div className={styles.progressBarContainer}>
        <div 
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        >
          <span className={styles.progressLabel}>{progress}%</span>
        </div>
      </div>

      <div className={styles.stepsList}>
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(index);
          
          return (
            <div 
              key={index}
              className={`${styles.step} ${isCompleted ? styles.completed : ''}`}
              onClick={() => toggleStep(index)}
            >
              <div className={styles.stepIcon}>
                {isCompleted ? '✓' : index + 1}
              </div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                {step.description && (
                  <p className={styles.stepDescription}>{step.description}</p>
                )}
                {step.duration && (
                  <span className={styles.stepDuration}>⏱️ {step.duration}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {progress === 100 && (
        <div className={styles.completionBadge}>
          🎉 Congratulations! You've completed all steps!
        </div>
      )}
    </div>
  );
}
