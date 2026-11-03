import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Figure({ src, alt, caption, narrow = false }) {
  const url = useBaseUrl(src);
  return (
    <figure className={`milestone-figure${narrow ? ' milestone-figure--narrow' : ''}`}>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={url} alt={alt} loading="lazy" />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Gallery({ items }) {
  return (
    <div className="milestone-gallery">
      {items.map((item) => (
        <Figure key={item.src} {...item} />
      ))}
    </div>
  );
}

export default function MilestoneM3() {
  const presentationEmbedUrl =
    'https://www.canva.com/design/DAHZmYR7Wyk/s4w-RSxZ1GaoyvESPSFG8Q/view?embed';

  return (
    <Layout title="Milestone 3 - Construction" description="Milestone 3 overview and presentation.">
      <main className="milestone-page">
        <div className="milestone-page__header">
          <h1>Milestone 3 - Construction</h1>
        </div>

        <div className="milestone-embed-shell">
          <iframe
            className="milestone-embed"
            src={presentationEmbedUrl}
            title="Milestone 3 - Construction presentation"
            loading="lazy"
            allow="fullscreen"
            allowFullScreen={true}
          />
        </div>

        <article className="milestone-summary">
          <p className="milestone-summary__date"><strong>Date:</strong> 03/11/2026</p>

          <section className="milestone-summary__section">
            <h2>Introduction &amp; Milestone Goals</h2>
            <ul>
              <li><strong>Construction Phase Inception:</strong> Milestone 3 marks the formal launch of the implementation phase, translating the architectural and UX blueprints from Milestone 2 into executable system modules.</li>
              <li><strong>Regulatory &amp; Legal Foundation:</strong> In-depth alignment with the General Data Protection Regulation (GDPR), the EU AI Act, the Portuguese Cybercrime Law, and sector-specific cybersecurity directives (NIS 2, Cyber Resilience Act).</li>
              <li><strong>Licensing &amp; IP Protection:</strong> Complete audit of third-party open-source dependencies across backend and frontend repositories, establishing legal compliance guardrails.</li>
              <li><strong>UI/UX &amp; Accessibility Evolution:</strong> Iterative redesign of user interfaces incorporating advisor review feedback, paired with a Web Content Accessibility Guidelines (WCAG 2.1/2.2) audit for universal access.</li>
              <li><strong>MVP Scope Definition:</strong> Prioritization of core use cases for the initial release to ensure robust delivery of critical threat modeling capabilities.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>GDPR &amp; Privacy Architecture</h2>
            <p>RepoPrint enforces privacy-by-design principles across every tier of data acquisition, processing, and persistence.</p>
            <h3>Personal Data Collected</h3>
            <ul>
              <li><strong>Authentication, Authorization, Security &amp; Audit:</strong> Full name, email address, GitHub username, OAuth access tokens, client IP addresses, and secure session cookies managed by Keycloak.</li>
              <li><strong>Code Committers:</strong> Author name, author email, and commit timestamps extracted from Git repository metadata during repository profiling.</li>
            </ul>

            <h3>Data Pseudonymization &amp; Anonymization</h3>
            <ul>
              <li><strong>Pseudonymization:</strong> Author names and email addresses are transformed into pseudonymous identifiers during analysis, preserving Git interaction graphs without exposing individual contributor identities.</li>
              <li><strong>Irreversible Anonymization:</strong>
                <ul>
                  <li><strong>Aggregated Metrics:</strong> Team dynamics and hygiene indicators (commit cadence, review ratios, merge latency) are calculated as global statistics decoupled from individual contributors.</li>
                  <li><strong>Log Scrubbing:</strong> Operational audit logs automatically redact IP addresses and user IDs, replacing them with fixed/null values once the mandatory 90-day retention window expires.</li>
                </ul>
              </li>
            </ul>

            <h3>Right to Be Forgotten: Data Erasure Procedure</h3>
            <ul>
              <li><strong>Automated Self-Service Workflow:</strong> Users can trigger complete data erasure directly through the application settings interface.</li>
              <li><strong>Erasure Steps:</strong>
                <ol>
                  <li>Revoke GitHub OAuth access tokens via the GitHub API.</li>
                  <li>Invalidate all active user sessions and clear associated authentication cookies.</li>
                  <li>Permanently delete user records, associated repository references, and all historical threat analysis reports from PostgreSQL.</li>
                </ol>
              </li>
              <li><strong>Operational Audit Log Exception:</strong> System operational logs are preserved for a 90-day retention window under GDPR Art. 6(1)(f) (Legitimate Interest) exclusively for fraud prevention, cybersecurity monitoring, and infrastructure defense.</li>
            </ul>

            <h3>Privacy Policy Guarantees</h3>
            <ul>
              <li><strong>Zero Commercialization:</strong> User data and analyzed repository content are never sold, monetized, or shared with third parties.</li>
              <li><strong>GitHub API Scope:</strong> Token permissions are restricted strictly to querying authorized repository metadata and source trees.</li>
              <li><strong>Hosting &amp; Storage:</strong> Hosted exclusively within IEETA infrastructure in an isolated, encrypted university computing environment.</li>
              <li><strong>Local Artificial Intelligence:</strong> The Small Language Model (SLM) executes on-premise using Ollama, guaranteeing that source code and vulnerability findings are never transmitted to external cloud AI providers.</li>
            </ul>

            <h3>Data Protection &amp; Security Measures</h3>
            <ul>
              <li><strong>Encryption in Transit:</strong> Strict HTTPS/TLS enforced by a Docker reverse proxy terminating external traffic.</li>
              <li><strong>Encryption at Rest:</strong> User credentials and GitHub OAuth tokens are encrypted using AES-256 via PostgreSQL's <code>pgcrypto</code> module.</li>
              <li><strong>Storage Layer:</strong> Persistent Docker volumes reside on encrypted virtual machine disk partitions.</li>
              <li><strong>Access Control &amp; Ephemeral Processing:</strong> Keycloak provides centralized Role-Based Access Control (RBAC); cloned repository source trees are purged from disk immediately upon analysis completion.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Software Licensing &amp; Dependency Analysis</h2>
            <p>An audit of third-party software dependencies was conducted across the backend, frontend, and supporting tooling to ensure full legal compliance.</p>
            <ul>
              <li><strong>Permissive Licenses:</strong> The majority of dependencies utilize permissive licenses (196 MIT, 23 ISC, 23 Apache-2.0, 19 BSD-2-Clause, 11 BSD-3-Clause, 1 0BSD), allowing integration and linking without copyleft restrictions.</li>
              <li><strong>Cautionary Compliance Requirements:</strong>
                <ul>
                  <li><strong>LGPL-3.0 or Later:</strong> Any libraries under LGPL must be linked dynamically and remain user-replaceable, preventing copyleft contamination of RepoPrint's core logic.</li>
                  <li><strong>MPL-2.0 (Mozilla Public License):</strong> Files governed by MPL-2.0 must be utilized in their original form; any source modifications must remain open under MPL-2.0.</li>
                </ul>
              </li>
            </ul>
            <details className="milestone-details">
              <summary>Detailed Dependency License Inventory (283 packages)</summary>
              <ul>
                <li><strong>MIT:</strong> 11 Backend, 182 Frontend, 3 Other (Total: 196)</li>
                <li><strong>ISC:</strong> 0 Backend, 23 Frontend, 0 Other (Total: 23)</li>
                <li><strong>Apache-2.0:</strong> 1 Backend, 19 Frontend, 3 Other (Total: 23)</li>
                <li><strong>BSD-2-Clause:</strong> 0 Backend, 19 Frontend, 0 Other (Total: 19)</li>
                <li><strong>BSD-3-Clause:</strong> 6 Backend, 5 Frontend, 0 Other (Total: 11)</li>
                <li><strong>MPL-2.0:</strong> 1 Backend, 2 Frontend, 0 Other (Total: 3)</li>
                <li><strong>PSF-2.0 / Python-2.0:</strong> 2 Backend, 1 Frontend, 1 Other (Total: 3)</li>
                <li><strong>PostgreSQL, 0BSD, LGPL-3.0, CC-BY-4.0:</strong> 5 packages across components</li>
              </ul>
            </details>
          </section>

          <section className="milestone-summary__section">
            <h2>Sector-Specific Regulations &amp; Legal Framework</h2>
            <ul>
              <li><strong>EU AI Act (Regulation (EU) 2024/1689, Art. 50):</strong> RepoPrint's AI assistant functions as a limited-risk system. In compliance with Article 50, all SLM-generated mitigations and conversational answers are explicitly labeled as AI-generated, users are warned that outputs require human validation, and the model is strictly prevented from profiling or rating individual developers.</li>
              <li><strong>Portuguese Cybercrime Law (Lei n.º 109/2009):</strong> Strictly prohibits unauthorized access and intrusive system disruption. RepoPrint enforces this by only inspecting public repositories or private repositories explicitly authorized through OAuth tokens, adhering strictly to non-destructive static analysis.</li>
              <li><strong>ISO/IEC 27001 &amp; ISO 20000 / ITIL:</strong> Voluntary architectural standards. Threat findings are mapped to ISO/IEC 27001 Annex A controls, while CI/CD automation and pull request review gates implement structured change management controls.</li>
              <li><strong>NIS 2 Directive (DL 125/2025, CNCS) &amp; Cyber Resilience Act (CRA):</strong> While RepoPrint is exempt as a non-commercial academic open-source project, its findings and audit reports are explicitly mapped against NIS 2 Art. 21 cybersecurity measures so enterprise users can leverage the platform for compliance evidence.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Terms and Conditions</h2>
            <ul>
              <li><strong>Operating Modes:</strong> Defines two clear operational contracts: <em>Anonymous Mode</em> (instant scanning of public repositories, zero persistence, immediate memory purge) and <em>Authenticated Mode</em> (GitHub OAuth, encrypted token retention, private repository analysis, and historical report tracking).</li>
              <li><strong>Permitted &amp; Prohibited Use:</strong> Authorized repository analysis only; strict prohibition against using RepoPrint for malicious reconnaissance, unauthorized vulnerability scanning, or automated denial of service against GitHub endpoints.</li>
              <li><strong>Disclaimers &amp; Liability Cap:</strong> Provided "as is" without warranty. Reports reflect automated static analysis heuristics and do not constitute formal legal or regulatory certifications.</li>
              <li><strong>Intellectual Property:</strong> Users retain 100% intellectual property ownership of their source code. RepoPrint only obtains temporary operational rights necessary to clone, filter, and analyze the designated branch.</li>
              <li><strong>Jurisdiction:</strong> Governed by Portuguese law, with dispute resolution assigned to the Judicial District of Aveiro (<em>Tribunal da Comarca de Aveiro</em>).</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>UI/UX Improvements</h2>
            <p>Following feedback from project advisors in Milestone 2, the user interface underwent substantial refinements to improve clarity, accessibility, and metric consistency:</p>
            <ul>
              <li><strong>Public Scanning Page:</strong> Enhanced dropdown visibility, improved visual hierarchy, and introduced a normalized 0–100 security score with contextual explanation.</li>
              <li><strong>Metric Standardization:</strong> Unified all security scoring to a consistent 0–100 numerical scale across both public and authenticated dashboards, eliminating confusing letter grades.</li>
              <li><strong>Dashboard Organization:</strong> Clearly separated <strong>Team Dynamics</strong> and <strong>Repository Hygiene</strong> into dedicated cards, enlarged section headers, and reduced unnecessary whitespace.</li>
              <li><strong>Risk Overview Refinement:</strong> Removed redundant file labels and renamed "Probability" to <strong>Remediation Effort</strong>, better communicating the engineering work required to address findings.</li>
            </ul>
          </section>

          <Gallery
            items={[
              { src: '/img/m3/ui-public-before.png', alt: 'Public scan interface before advisor feedback', caption: 'Public Scan: Before advisor feedback.' },
              { src: '/img/m3/ui-public-after.png', alt: 'Public scan interface after advisor feedback', caption: 'Public Scan: After redesign with 0–100 score.' },
              { src: '/img/m3/ui-dashboard-before.png', alt: 'Dashboard risk overview before redesign', caption: 'Dashboard Risk: Before redesign.' },
              { src: '/img/m3/ui-dashboard-after.png', alt: 'Dashboard risk overview after redesign', caption: 'Dashboard Risk: After redesign with Remediation Effort.' },
              { src: '/img/m3/ui-team-before.png', alt: 'Team dynamics and hygiene combined before redesign', caption: 'Team & Hygiene: Before separation.' },
              { src: '/img/m3/ui-team-after.png', alt: 'Team dynamics and hygiene separated after redesign', caption: 'Team & Hygiene: Separated into dedicated sections.' },
              { src: '/img/m3/ui-dfd-before.png', alt: 'DFD interface before accessibility improvements', caption: 'Interactive DFD: Before improvements.' },
              { src: '/img/m3/ui-dfd-after.png', alt: 'DFD interface after accessibility improvements', caption: 'Interactive DFD: After improvements.' },
            ]}
          />

          <section className="milestone-summary__section">
            <h2>Usability &amp; Accessibility (WCAG 2.1/2.2)</h2>
            <p>An accessibility assessment identified key interaction barriers within the interactive Data Flow Diagram (DFD), resulting in concrete technical remediations:</p>
            <ul>
              <li><strong>DFD Arrows &amp; Trust Boundaries (WCAG 1.1.1 Non-text Content — High Severity):</strong>
                <ul>
                  <li><em>Issue:</em> Blind and visually impaired screen reader users were unable to perceive data flow directions and security trust boundaries.</li>
                  <li><em>Solution:</em> Introduced an accompanying structured data flows table, descriptive ARIA labels, and live region announcements for input/output transitions.</li>
                </ul>
              </li>
              <li><strong>Component Connection Creation (WCAG 2.1.1 Keyboard &amp; 2.5.7 Dragging Movements — High Severity):</strong>
                <ul>
                  <li><em>Issue:</em> Creating data flow edges originally required precise mouse drag-and-drop interactions, locking out keyboard-only and motor-impaired users.</li>
                  <li><em>Solution:</em> Added keyboard-accessible component selection controls to create and sever connections directly via dropdowns and buttons, complete with status announcements.</li>
                </ul>
              </li>
              <li><strong>Threat Severity Indicators (WCAG 1.4.1 Use of Color — Medium Severity):</strong>
                <ul>
                  <li><em>Issue:</em> Threat severity levels (High, Medium, Low) relied exclusively on red/orange/yellow color coding, creating barriers for color-blind users.</li>
                  <li><em>Solution:</em> Multi-modal encoding combining distinctive stroke patterns (solid outlines for High, dashed for Medium) with explicit text badges.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>MVP Scope Definition</h2>
            <p>To guarantee a stable and timely delivery during the Construction phase, the functional scope was partitioned into target MVP features and secondary roadmap capabilities:</p>
            <h3>Included in MVP (Construction Target)</h3>
            <ul>
              <li><strong>UC01 Create Account:</strong> User registration, authentication, and session handling.</li>
              <li><strong>UC02 GitHub Account Connection:</strong> OAuth token delegation to enable private repository scanning.</li>
              <li><strong>UC03 Git Data Tracking:</strong> Mining commit history, contributor metrics, and pull request activity.</li>
              <li><strong>UC04 Security and Privacy Analysis:</strong> AST parsing, automated DFD inference, and STRIDE/LINDDUN threat detection.</li>
              <li><strong>UC05 Git Data and Vulnerability Report:</strong> Generation and export of comprehensive security audit reports.</li>
              <li><strong>UC06 Previous Analyses:</strong> Historical run tracking, metric diffs, and security posture evolution.</li>
              <li><strong>UC07 Interactive DFD:</strong> Interactive canvas rendering the system architecture with threat-highlighted nodes.</li>
              <li><strong>UC08 False Positives Management:</strong> Triage mechanism allowing developers to flag and justify false alarms.</li>
            </ul>
            <h3>Post-MVP Roadmap (Deferred to M4)</h3>
            <ul>
              <li><strong>UC09 Adjust DFD:</strong> In-browser interactive editing and manual topology manipulation of DFD nodes.</li>
              <li><strong>UC10 AI Assistant:</strong> Interactive chat panel with the local SLM for real-time remediation advice.</li>
              <li><strong>UC11 Browser Extension Scanning:</strong> Lightweight browser extension for scanning repositories directly on GitHub.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Planning &amp; Execution Calendar</h2>
            <p>The construction phase follows an agile sprint schedule focused on backend parser integration, threat engine synthesis, frontend dashboard delivery, and end-to-end testing.</p>
          </section>

          <Figure
            src="/img/m3/calendar.png"
            alt="Milestone 3 construction phase roadmap and sprint calendar"
            caption="Construction Phase Roadmap and Execution Calendar. Click to view full size."
          />
        </article>
      </main>
    </Layout>
  );
}
