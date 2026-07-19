import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I can answer questions about our documentation. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Search documentation using window search index
  const searchDocs = (query) => {
    try {
      // Get search index from Docusaurus
      const searchDocs = window.__docusaurus?.versions?.[0]?.docs || [];
      const results = [];

      // Simple text matching against docs
      Object.values(searchDocs).forEach(doc => {
        if (doc.title?.toLowerCase().includes(query.toLowerCase()) ||
            doc.content?.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            title: doc.title,
            excerpt: doc.content?.substring(0, 200) + '...',
            url: doc.url
          });
        }
      });

      return results;
    } catch (e) {
      // Fallback: use generic responses
      return [];
    }
  };

  const generateResponse = (userMessage, docResults) => {
    const lowerMsg = userMessage.toLowerCase();

    // Context-aware responses
    if (lowerMsg.includes('install') || lowerMsg.includes('setup')) {
      return "For installation instructions, check our **Installation Guides** section. We have guides for various platforms and services.";
    }
    if (lowerMsg.includes('api') || lowerMsg.includes('endpoint')) {
      return "You can find API documentation in our **API References** section with detailed endpoint information.";
    }
    if (lowerMsg.includes('cloud') || lowerMsg.includes('aws') || lowerMsg.includes('azure') || lowerMsg.includes('gcp')) {
      return "Check our **Cloud & DevOps** guides for AWS, Azure, and GCP resources and best practices.";
    }
    if (lowerMsg.includes('devops') || lowerMsg.includes('deploy') || lowerMsg.includes('ci/cd')) {
      return "Our **DevOps** section covers CI/CD, containers, and infrastructure as code. Browse our comprehensive guides.";
    }
    if (lowerMsg.includes('help') || lowerMsg.includes('how') || lowerMsg.includes('what')) {
      return "I can help you find information about:\n- **Installation & Setup**\n- **API References**\n- **Cloud Platforms**\n- **DevOps Practices**\n- **Documentation Best Practices**\n\nWhat would you like to know more about?";
    }
    if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else about our documentation.";
    }

    // Default response with suggestions
    return "I can help you find information in our documentation! Try asking about:\n- Installation & setup\n- API endpoints\n- Cloud platforms (AWS, Azure, GCP)\n- DevOps & CI/CD\n- Documentation practices\n\nWhat interests you?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate typing delay
    setTimeout(() => {
      const docResults = searchDocs(input);
      const response = generateResponse(input, docResults);
      
      const botMessage = {
        type: 'bot',
        text: response,
        links: docResults.length > 0 ? docResults : null
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          className={styles.chatButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          title="Ask me anything about docs"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h3>TechDocs Assistant</h3>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              Close
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.message} ${styles[msg.type]}`}>
                <div className={styles.messageText}>
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {msg.links && msg.links.length > 0 && (
                  <div className={styles.docLinks}>
                    {msg.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                        → {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.typing}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
