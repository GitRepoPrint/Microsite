import React from 'react';
import Layout from '@theme/Layout';

const teamMembers = [
  {
    name: 'Margarida Cardoso',
    role: 'Team Manager',
    image: '/img/team/margarida.png',
    github: 'https://github.com/',
  },
  {
    name: 'Gil Ernesto',
    role: 'Architect',
    image: '/img/team/gil.png',
    github: 'https://github.com/',
  },
  {
    name: 'Tiago Costa',
    role: 'DevOps Master',
    image: '/img/team/tiago.jpeg',
    github: 'https://github.com/',
  },
  {
    name: 'Nuno Nuno',
    role: 'Architect',
    image: '/img/team/nuno.jpeg',
    github: 'https://github.com/',
  },
  {
    name: 'Artur Yaski',
    role: 'Product Owner',
    image: '/img/team/artur.png',
    github: 'https://github.com/',
  },
];

const advisors = [
  {
    name: 'João Almeida',
    role: 'Orientador',
    image: '/img/team/joao.png',
    email: 'joao.rafael.almeida@ua.pt',
  },
  {
    name: 'Raquel Paradinha',
    role: 'Orientadora',
    image: '/img/team/raquel.png',
    email: '',
  },
  {
    name: 'José Gameiro',
    role: 'Orientador',
    image: '/img/team/jose.png',
    email: '',
  },
];

function MemberCard({ name, role, image, github, email }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img
        src={image}
        alt={name}
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1.2rem',
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '700' }}>{name}</h3>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}>
            <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        )}
      </div>
      <p style={{ margin: '0.4rem 0', color: '#94a3b8', fontSize: '0.95rem' }}>{role}</p>
      {email && <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>{email}</p>}
    </div>
  );
}

export default function Team() {
  return (
    <Layout title="About Us">
      <main style={{ backgroundColor: '#021526', color: '#ffffff', minHeight: '100vh', padding: '4rem 2rem' }}>
        
        {/* Header Principal */}
        <section style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '5rem' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 0.8rem 0' }}>
            ABOUT US
          </p>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 1.5rem 0', color: '#ffffff' }}>
            Meet Our Team
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#cbd5e1', margin: 0 }}>
            We are a group of students from University of Aveiro. Passionate about software engineering and security, our goal is to improve Git repository analysis and auditing with RepoPrint.
          </p>
        </section>

        {/* Secção Our Team */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 6rem auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.4rem', fontWeight: '700', marginBottom: '3.5rem', color: '#ffffff' }}>
            Our Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3.5rem' }}>
            {teamMembers.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Secção Orientadores */}
        <section style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: '700', marginBottom: '3.5rem', color: '#ffffff' }}>
            Advisors
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
            {advisors.map((advisor, index) => (
              <MemberCard key={index} {...advisor} />
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}