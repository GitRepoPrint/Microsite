import React from 'react';
import Layout from '@theme/Layout';

export default function MilestoneM1() {
  const presentationEmbedUrl =
    'https://www.canva.com/design/DAHWeXtaOFQ/gYBiIX7EinNjmZ1vBhBaBg/view?embed';

  return (
    <Layout title="Milestone 1 – Inception" description="Milestone 1 overview and presentation.">
      <main className="milestone-page">
        <div className="milestone-page__header">
          <h1>Milestone 1 – Inception</h1>
        </div>

        <div className="milestone-embed-shell">
          <iframe
            className="milestone-embed"
            src={presentationEmbedUrl}
            title="Milestone 1 – Inception presentation"
            loading="lazy"
            allow="fullscreen"
            allowFullScreen={true}
          />
        </div>
      </main>
    </Layout>
  );
}
