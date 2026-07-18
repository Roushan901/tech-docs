import React from 'react';
import Layout from '@theme/Layout';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <Layout title="Contact Us" description="Get in touch with the TechDocs team">
      <main style={{ minHeight: '100vh', background: 'var(--ifm-background-color)' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: '0 0 1rem 0', fontSize: '2.5rem', fontWeight: 800 }}>Get in Touch</h1>
          <p style={{ margin: '0', fontSize: '1.2rem', opacity: 0.95 }}>Have questions or feedback? We'd love to hear from you!</p>
        </div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            <ContactForm />
            
            <div style={{
              background: 'var(--ifm-color-emphasis-100)',
              padding: '2rem',
              borderRadius: '12px'
            }}>
              <h2 style={{ marginTop: '0', marginBottom: '1.5rem', color: 'var(--ifm-color-content)' }}>Other Ways to Reach Us</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2rem', flexShrink: 0 }}>📧</span>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Email</h3>
                    <p style={{ margin: '0', color: 'var(--ifm-color-content-secondary)' }}>
                      <a href="mailto:contact@techdocs.co.in" style={{ color: 'var(--ifm-color-primary)', textDecoration: 'none', fontWeight: 600 }}>
                        contact@techdocs.co.in
                      </a>
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2rem', flexShrink: 0 }}>💼</span>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>LinkedIn</h3>
                    <p style={{ margin: '0', color: 'var(--ifm-color-content-secondary)' }}>
                      <a href="https://linkedin.com/in/roushan-g-99242299/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ifm-color-primary)', textDecoration: 'none', fontWeight: 600 }}>
                        Connect with us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
