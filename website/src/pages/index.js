import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { hero, overview, features } from '../content/home.mdx';

function FeatureIcon({ type }) {
  const icons = {
    layers: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 9h6M15 15h6" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7.5" r="4" /><polyline points="17 11 19 13 23 9" /></>,
  };

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {icons[type]}
    </svg>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="RepoPrint - Continuous Git Repository Fingerprinting">
      <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        
        {/* Hero */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center', gap: '3rem' }}>
          <div>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {hero.tagline}
            </span>
            <h1 style={{ fontSize: '3.6rem', fontWeight: '900', lineHeight: '1.15', margin: '1rem 0 1.5rem 0', color: 'var(--ifm-heading-color)' }}>
              {hero.title}
            </h1>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#64748b', marginBottom: '2.5rem' }}>
              {hero.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/docs/milestones" style={{ backgroundColor: '#2dd4bf', color: '#ffffff', fontWeight: '700', padding: '0.85rem 2rem', borderRadius: '30px', textDecoration: 'none' }}>
                Get Started
              </Link>
              <Link to="/team" style={{ border: '1.5px solid #cbd5e1', color: 'inherit', fontWeight: '600', padding: '0.85rem 2rem', borderRadius: '30px', textDecoration: 'none' }}>
                Learn more
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/img/hero-illustration.svg" alt="RepoPrint Illustration" style={{ width: '100%', maxWidth: '480px', height: 'auto' }} onError={(e) => { e.target.src = '/img/undraw_docusaurus_react.svg'; }} />
          </div>
        </section>

        {/* Overview */}
        <section style={{ backgroundColor: '#f1f7fe', padding: '5rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0f172a' }}>
              {overview.title}
            </h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#475569', margin: 0 }}>
              {overview.text}
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section style={{ maxWidth: '1150px', margin: '0 auto', padding: '6rem 2rem 7rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <h2 style={{ fontSize: '2.6rem', fontWeight: '800', color: 'var(--ifm-heading-color)', margin: '0 0 0.8rem 0' }}>
              Main features
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b', margin: 0 }}>
              Comprehensive Git auditing from code to compliance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '3.5rem 3rem' }}>
            {features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: '#2dd4bf', color: '#ffffff', borderRadius: '50%', minWidth: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(45, 212, 191, 0.3)' }}>
                  <FeatureIcon type={feat.icon} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.4rem' }}>{feat.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}