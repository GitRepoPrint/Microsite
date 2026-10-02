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

        <article className="milestone-summary">
          <p className="milestone-summary__date"><strong>Date:</strong> 29/09/2026</p>

          <section className="milestone-summary__section">
            <h2>Introduction</h2>
            <ul>
              <li>RepoPrint is an automated architectural security and intelligence platform designed to extract security insights directly from Git workflows. It bridges the gap between source code analysis and continuous threat modeling by constructing architectural Data Flow Diagrams (DFDs), evaluating development hygiene, and identifying risks in real time.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Contextualization</h2>
            <ul>
              <li>Modern Git repositories contain rich operational and structural information beyond code, but this data remains scattered and isolated.</li>
              <li>Security and data privacy reviews are still conducted predominantly by hand, introducing bottlenecks and human error.</li>
              <li><strong>Core Frameworks &amp; Standards:</strong>
                <ul>
                  <li><strong>STRIDE:</strong> Industry framework applied to detect cybersecurity threats (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege).</li>
                  <li><strong>LINDDUN:</strong> Systematic threat modeling framework focused on data privacy risks (Linkability, Identifiability, Non-repudiation, Detectability, Disclosure of information, Unawareness, Non-compliance).</li>
                  <li><strong>Regulations &amp; Norms:</strong> Continuous alignment with GDPR, NIS 2, and ISO/IEC 27001 requirements.</li>
                  <li><strong>Data Flow Diagrams (DFDs):</strong> Foundational architectural models used to represent system boundaries, entities, data stores, and data flows.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Problems</h2>
            <ul>
              <li><strong>Lack of compliance:</strong> Growing difficulty in continuously enforcing security and privacy norms throughout agile delivery cycles.</li>
              <li><strong>Proliferation of AI-generated code:</strong> Massive surge of low-quality or untrusted machine-generated code committed directly to production repositories.</li>
              <li><strong>Escalating cyber threats:</strong> Sharp increase in complex attacks targeting supply chains and application vulnerabilities.</li>
              <li><strong>Outdated security tooling:</strong> Existing security systems operate as isolated post-commit scanners rather than continuous, architecture-aware companions.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Goals &amp; Expected Results</h2>
            <ul>
              <li><strong>Git Activity &amp; Team Profiling:</strong> Evaluate repository health through commit velocity, pull request hygiene, and contributor dynamics.</li>
              <li><strong>Semi-automated DFD Construction:</strong> Parse source code and Infrastructure as Code (IaC) to reconstruct interactive, editable architectural Data Flow Diagrams.</li>
              <li><strong>Automated Threat &amp; Privacy Modeling:</strong> Map inferred data flows automatically against STRIDE and LINDDUN threat engines.</li>
              <li><strong>SLM Support:</strong> Integrate Small Language Models to deliver contextual risk summaries and mitigation advice with high privacy.</li>
              <li><strong>Dual Delivery Channels:</strong> Provide insights through both a comprehensive Web Application and a lightweight Browser Extension for rapid repository inspection.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>State of the Art Comparison</h2>
            <ul>
              <li><strong>GitHub Advanced Security:</strong> Covers code and hygiene quality; lacks threat/privacy modeling, team dynamics analysis, and automated DFD generation.</li>
              <li><strong>OWASP Threat Dragon:</strong> Supports STRIDE threat modeling, but requires entirely manual diagram creation and lacks Git integration.</li>
              <li><strong>Sonar:</strong> Strong static analysis and code quality focus; no architectural DFD extraction or threat modeling.</li>
              <li><strong>PullRank:</strong> Evaluates Git activity and team dynamics; does not address security architecture or privacy modeling.</li>
              <li><strong>RepoPrint Advantage:</strong> Integrates all four pillars - Code Hygiene, Git Dynamics, STRIDE/LINDDUN Modeling, and Automated DFD Synthesis - in a unified platform.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Team Roles</h2>
            <ul>
              <li><strong>Artur Yavorskyy:</strong> Product Owner</li>
              <li><strong>Gil Guedes:</strong> Quality Assurance</li>
              <li><strong>Margarida Cardoso:</strong> Team Manager</li>
              <li><strong>Nuno Costa:</strong> Architect</li>
              <li><strong>Tiago Costa:</strong> DevOps</li>
              <li><strong>Advisors:</strong> João Almeida, Raquel Paradinha, José Gameiro</li>
            </ul>
          </section>
        </article>
      </main>
    </Layout>
  );
}
