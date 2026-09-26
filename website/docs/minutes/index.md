---
id: index
title: Minutes
sidebar_label: Overview
slug: /minutes
---

import Link from '@docusaurus/Link';

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '1rem' }}>

  {/* Advisors Minutes */}
  <div style={{ border: '2px solid var(--ifm-color-primary)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
    <h2 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1.5rem' }}>Advisors Minutes</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
      <Link
        to="/docs/minutes/advisors/minute-01"
        style={{
          border: '1.5px solid var(--ifm-color-primary)',
          borderRadius: '8px',
          padding: '0.85rem 1rem',
          textDecoration: 'none',
          fontWeight: '600',
          display: 'block'
        }}>
        📑 Minute 01 - 23/09
      </Link>
    </div>
  </div>

  {/* Team Minutes */}
  <div style={{ border: '2px solid var(--ifm-color-primary)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
    <h2 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1.5rem' }}>Team Minutes</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
      <Link
        to="/docs/minutes/team/minute-02"
        style={{
          border: '1.5px solid var(--ifm-color-primary)',
          borderRadius: '8px',
          padding: '0.85rem 1rem',
          textDecoration: 'none',
          fontWeight: '600',
          display: 'block'
        }}>
        📑 Minute 02 - 24/09
      </Link>
    </div>
  </div>

</div>