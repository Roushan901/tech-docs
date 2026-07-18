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

    const brevoApiKey = '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';

    try {
      // Send email via Brevo
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': brevoApiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender: { name: formData.name, email: formData.email },
          to: [{ email: 'contact@techdocs.co.in', name: 'TechDocs Team' }],
          subject: `Contact Form: ${formData.subject}`,
          htmlContent: `
            <h2>New Contact Message</h2>
            <p><strong>From:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <hr/>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          `
        })
      });

      if (!response.ok) throw new Error('Failed to send');

      // Discord notification
      fetch('https://discord.com/api/webhooks/1265155621505994803/mWxUVPmOXQXFa3t7Qn6w2pKzL8vN3jZ4r5sT9uW2xY', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `💬 **New Contact Message**\n**From:** ${formData.name} (${formData.email})\n**Subject:** ${formData.subject}\n**Message:** ${formData.message.substring(0, 100)}...`
        })
      }).catch(err => console.error(err));

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
