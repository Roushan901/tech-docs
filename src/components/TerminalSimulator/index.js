import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

/**
 * TerminalSimulator - Interactive terminal/command line simulator
 * Perfect for demonstrating CLI commands and their outputs
 */
export default function TerminalSimulator({
  title = '$ Terminal',
  commands = {},
  welcomeMessage = 'Welcome to Terminal Simulator. Type "help" for available commands.',
  prompt = '$'
}) {
  const [history, setHistory] = useState([{ type: 'system', content: welcomeMessage }]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const defaultCommands = {
    help: () => {
      const availableCommands = Object.keys({ ...defaultCommands, ...commands }).join(', ');
      return `Available commands: ${availableCommands}`;
    },
    clear: () => {
      setHistory([]);
      return null;
    },
    echo: (args) => args.join(' '),
    date: () => new Date().toLocaleString(),
    whoami: () => 'guest',
    pwd: () => '/home/user/docs',
    ...commands
  };

  const executeCommand = (input) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `${prompt} ${trimmedInput}` }]);
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Parse command
    const parts = trimmedInput.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Execute command
    if (command === 'clear') {
      setHistory([]);
    } else if (defaultCommands[command]) {
      const output = defaultCommands[command](args);
      if (output !== null) {
        setHistory(prev => [...prev, { type: 'output', content: output }]);
      }
    } else {
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${command}. Type "help" for available commands.` 
      }]);
    }

    setCurrentInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={styles.terminalButton} style={{ background: '#ff5f56' }}></span>
          <span className={styles.terminalButton} style={{ background: '#ffbd2e' }}></span>
          <span className={styles.terminalButton} style={{ background: '#27c93f' }}></span>
        </div>
        <div className={styles.terminalTitle}>{title}</div>
        <div className={styles.terminalSpacer}></div>
      </div>

      <div 
        className={styles.terminalBody}
        onClick={handleTerminalClick}
        ref={outputRef}
      >
        {history.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.terminalLine} ${styles[item.type]}`}
          >
            {item.content}
          </div>
        ))}

        <div className={styles.terminalInputLine}>
          <span className={styles.terminalPrompt}>{prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.terminalInput}
            spellCheck="false"
            autoFocus
          />
        </div>
      </div>

      <div className={styles.terminalFooter}>
        <span className={styles.hint}>💡 Tip: Use ↑/↓ arrows for command history, Ctrl+L to clear</span>
      </div>
    </div>
  );
}
