import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Send Discord notification
      await fetch('https://discord.com/api/webhooks/1265155621505994803/mWxUVPmOXQXFa3t7Qn6w2pKzL8vN3jZ4r5sT9uW2xY', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `💬 **New Contact Message**\n**From:** ${formData.name} (${formData.email})\n**Subject:** ${formData.subject}\n**Message:** ${formData.message.substring(0, 100)}...`
        })
      });

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="6"
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <div className={styles.successMessage}>
            ✅ Message sent! We'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className={styles.errorMessage}>
            ❌ Failed to send. Please try again or email us directly.
          </div>
        )}
      </form>
    </div>
  );
}
