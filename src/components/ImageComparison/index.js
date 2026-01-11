import React, { useState, useRef } from 'react';
import styles from './styles.module.css';

/**
 * ImageComparison - Before/after image comparison slider
 * Perfect for showing design changes, optimizations, or differences
 */
export default function ImageComparison({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  defaultPosition = 50
}) {
  const [sliderPosition, setSliderPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  if (!beforeImage || !afterImage) {
    return <div className={styles.error}>Please provide both before and after images</div>;
  }

  return (
    <div 
      className={styles.comparisonContainer}
      ref={containerRef}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.imageContainer}>
        {/* After Image (Background) */}
        <div className={styles.afterImage}>
          <img src={afterImage} alt={afterLabel} draggable="false" />
          <div className={styles.imageLabel}>{afterLabel}</div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div 
          className={styles.beforeImage}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={beforeImage} alt={beforeLabel} draggable="false" />
          <div className={styles.imageLabel}>{beforeLabel}</div>
        </div>

        {/* Slider */}
        <div 
          className={styles.slider}
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <div className={styles.sliderButton}>
            <div className={styles.sliderArrow}>‹</div>
            <div className={styles.sliderLine}></div>
            <div className={styles.sliderArrow}>›</div>
          </div>
        </div>
      </div>
    </div>
  );
}
