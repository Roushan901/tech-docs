import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * InteractiveCodeEditor - A live code editor with instant preview
 * Perfect for demonstrating JavaScript/React code in documentation
 */
export default function InteractiveCodeEditor({ 
  initialCode = '// Write your code here\nconsole.log("Hello, TechDocs!");',
  language = 'javascript',
  title = 'Live Code Editor'
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const runCode = () => {
    setError('');
    setOutput('');
    
    // Capture console.log outputs
    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '));
      originalLog(...args);
    };

    try {
      // Execute the code
      // eslint-disable-next-line no-eval
      eval(code);
      setOutput(logs.join('\n') || '✓ Code executed successfully (no output)');
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      console.log = originalLog;
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setError('');
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>
        <h3>{title}</h3>
        <div className={styles.editorActions}>
          <button onClick={runCode} className={styles.runButton}>
            ▶ Run Code
          </button>
          <button onClick={resetCode} className={styles.resetButton}>
            ↻ Reset
          </button>
        </div>
      </div>
      
      <div className={styles.editorBody}>
        <div className={styles.codeSection}>
          <div className={styles.sectionLabel}>Code</div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={styles.codeTextarea}
            spellCheck="false"
            placeholder="Write your code here..."
          />
        </div>
        
        <div className={styles.outputSection}>
          <div className={styles.sectionLabel}>Output</div>
          <pre className={`${styles.outputArea} ${error ? styles.errorOutput : ''}`}>
            {error || output || 'Click "Run Code" to see output...'}
          </pre>
        </div>
      </div>
    </div>
  );
}
