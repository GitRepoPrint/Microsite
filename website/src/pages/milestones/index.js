import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const milestones = [
  {
    phase: 'M1',
    title: 'Inception',
    path: '/milestones/m1',
    description: 'Discovery, scope definition, and early project foundations.',
  },
  {
    phase: 'M2',
    title: 'Elaboration',
    path: '/milestones/m2',
    description: 'Requirements refinement, architecture decisions, and planning validation.',
  },
  {
    phase: 'M3',
    title: 'Construction',
    path: '/milestones/m3',
    description: 'Implementation, testing, and iterative delivery of the product.',
  },
  {
    phase: 'M4',
    title: 'Construction',
    path: '/milestones/m4',
    description: 'Final integration, stabilization, and release preparation.',
  },
];

export default function MilestonesOverview() {
  return (
    <Layout title="Project Milestones" description="Overview of the project milestones and roadmap.">
      <main className="milestones-page">
        <section className="milestones-hero">
          <h1>Project Milestones</h1>

        </section>

        <section className="milestone-grid" aria-label="Project milestones overview">
          {milestones.map((milestone) => (
            <Link
              key={milestone.phase}
              to={milestone.path}
              className="milestone-card"
            >
              <span className="milestone-card__phase">{milestone.phase}</span>
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
