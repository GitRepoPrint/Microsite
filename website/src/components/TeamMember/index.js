import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function MemberGrid({ children }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '3rem',
      justifyContent: 'center',
      margin: '2.5rem 0 4rem 0',
      textAlign: 'center'
    }}>
      {children}
    </div>
  );
}

export function Member({ name, role, email, image, github, linkedin }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={useBaseUrl(image)}
        alt={name}
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1.2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>{name}</span>
        {github && (
          <a href={github} target="_blank" rel="noreferrer" style={{ color: 'inherit', display: 'flex' }} title="GitHub">
            <svg height="17" width="17" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer" style={{ color: '#0a66c2', display: 'flex' }} title="LinkedIn">
            <svg height="17" width="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        )}
      </div>
      {email && (
        <a 
          href={`mailto:${email}`} 
          style={{ fontSize: '0.85rem', color: 'var(--ifm-color-primary)', marginTop: '0.2rem', textDecoration: 'none' }}>
          {email}
        </a>
      )}
      <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
        {role}
      </span>
    </div>
  );
}