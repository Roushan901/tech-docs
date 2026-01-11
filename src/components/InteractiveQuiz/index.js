import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * InteractiveQuiz - Quiz component for testing knowledge
 * Perfect for educational content and assessments
 */
export default function InteractiveQuiz({ 
  title = 'Quiz',
  questions = [],
  showResults = true
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  if (!questions || questions.length === 0) {
    return <div>No questions provided</div>;
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleCheckAnswer = (questionIndex) => {
    setShowAnswer({
      ...showAnswer,
      [questionIndex]: true
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowAnswer({});
    setIsComplete(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length };
  };

  if (isComplete && showResults) {
    const { correct, total } = calculateScore();
    const percentage = Math.round((correct / total) * 100);
    
    return (
      <div className={styles.quizContainer}>
        <div className={styles.resultsContainer}>
          <h2>🎉 Quiz Complete!</h2>
          <div className={styles.scoreDisplay}>
            <div className={styles.scoreCircle}>
              <span className={styles.scoreNumber}>{percentage}%</span>
            </div>
            <p className={styles.scoreText}>
              You got <strong>{correct}</strong> out of <strong>{total}</strong> correct!
            </p>
          </div>
          
          <div className={styles.reviewSection}>
            <h3>Review Your Answers</h3>
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div key={index} className={`${styles.reviewItem} ${isCorrect ? styles.correct : styles.incorrect}`}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewIcon}>{isCorrect ? '✓' : '✗'}</span>
                    <span className={styles.reviewLabel}>Question {index + 1}</span>
                  </div>
                  <p className={styles.reviewQuestion}>{q.question}</p>
                  <p className={styles.reviewAnswer}>
                    <strong>Your answer:</strong> {q.options[userAnswer] || 'Not answered'}
                  </p>
                  {!isCorrect && (
                    <p className={styles.correctAnswer}>
                      <strong>Correct answer:</strong> {q.options[q.correctAnswer]}
                    </p>
                  )}
                  {q.explanation && (
                    <p className={styles.explanation}>
                      <strong>💡 Explanation:</strong> {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          
          <button onClick={handleReset} className={styles.retryButton}>
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const hasSelected = selectedAnswers[currentQuestion] !== undefined;
  const hasChecked = showAnswer[currentQuestion];
  const isCorrect = selectedAnswers[currentQuestion] === question.correctAnswer;

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizHeader}>
        <h3>{title}</h3>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <p className={styles.questionCounter}>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <div className={styles.questionContainer}>
        <h4 className={styles.question}>{question.question}</h4>
        
        <div className={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion] === index;
            const isCorrectOption = index === question.correctAnswer;
            const showCorrect = hasChecked && isCorrectOption;
            const showIncorrect = hasChecked && isSelected && !isCorrect;
            
            return (
              <button
                key={index}
                className={`${styles.option} ${isSelected ? styles.selected : ''} ${showCorrect ? styles.correctOption : ''} ${showIncorrect ? styles.incorrectOption : ''}`}
                onClick={() => !hasChecked && handleAnswerSelect(currentQuestion, index)}
                disabled={hasChecked}
              >
                <span className={styles.optionLabel}>{String.fromCharCode(65 + index)}</span>
                <span className={styles.optionText}>{option}</span>
                {showCorrect && <span className={styles.checkMark}>✓</span>}
                {showIncorrect && <span className={styles.crossMark}>✗</span>}
              </button>
            );
          })}
        </div>

        {hasChecked && question.explanation && (
          <div className={`${styles.feedback} ${isCorrect ? styles.correctFeedback : styles.incorrectFeedback}`}>
            <strong>{isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className={styles.quizActions}>
          {!hasChecked ? (
            <button
              onClick={() => handleCheckAnswer(currentQuestion)}
              disabled={!hasSelected}
              className={styles.checkButton}
            >
              Check Answer
            </button>
          ) : (
            <div className={styles.navigationButtons}>
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={styles.prevButton}
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                className={styles.nextButton}
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
