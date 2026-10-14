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

function Actor({ src, name, role, children }) {
  const url = useBaseUrl(src);
  return (
    <div className="milestone-actor">
      <img src={url} alt={`${name}, ${role}`} loading="lazy" />
      <div>
        <h3>{role}</h3>
        <p className="milestone-actor__name">{name}</p>
        <p>{children}</p>
      </div>
    </div>
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

export default function MilestoneM2() {
  const presentationEmbedUrl =
    'https://www.canva.com/design/DAHXohIAYgA/6UlaOEN4G8S7WQtra1Opww/view?embed';

  return (
    <Layout title="Milestone 2 - Elaboration" description="Milestone 2 overview and presentation.">
      <main className="milestone-page">
        <div className="milestone-page__header">
          <h1>Milestone 2 - Elaboration</h1>
        </div>

        <div className="milestone-embed-shell">
          <iframe
            className="milestone-embed"
            src={presentationEmbedUrl}
            title="Milestone 2 - Elaboration presentation"
            loading="lazy"
            allow="fullscreen"
            allowFullScreen={true}
          />
        </div>

        <article className="milestone-summary">
          <p className="milestone-summary__date"><strong>Date:</strong> 13/10/2026</p>

          <section className="milestone-summary__section">

          </section>

          <section className="milestone-summary__section">
            <h2>Actors</h2>
            <div className="milestone-actors">
              <Actor src="/img/m2/actor-manager.jpg" name="João Paulo, 37, engineering manager" role="Software development team manager">
                Oversees several distributed teams and is accountable for delivery speed, code quality and compliance. He wants continuous supervision of team activity, automated threat assessments and a historical audit trail. At the start of a sprint he reviews commit and pull request evolution, generates a STRIDE and LINDDUN report and archives it for executive review.
              </Actor>
              <Actor src="/img/m2/actor-developer.jpg" name="Gabriel Costa, 32, self-employed developer" role="Developer">
                Wants to automate privacy and security reviews on his private GitHub repositories and keep a history of his analyses. After a commit he scans the repository, traces a data leak on the interactive DFD, asks the chatbot for a fix and saves the updated analysis.
              </Actor>
              <Actor src="/img/m2/actor-opensource.jpg" name="Ana Rita, 20, Computer Science student" role="Open-source software user">
                Relies on open-source libraries but has no time to audit them. She pastes two candidate repository URLs, without logging in, compares their threat fingerprints and picks the one with no unmitigated STRIDE or LINDDUN issues.
              </Actor>
            </div>
          </section>

          <section className="milestone-summary__section">
            <h2>Use Cases &amp; User Stories</h2>
            <p>Every use case comes from one user story. The main flow of each one is summarized below.</p>
            <h3>Software development team manager</h3>
            <ul>
              <li><strong>UC01 Create account</strong> (all actors): <em>to access a more detailed report.</em> Register or log in, with OAuth options, and land on a personal dashboard.</li>
              <li><strong>UC02 GitHub account connection</strong> (manager, developer): <em>to audit private repositories.</em> The user is redirected to GitHub, approves access, and RepoPrint receives a token to analyse private repositories.</li>
              <li><strong>UC03 Git data tracking:</strong> <em>to understand how developers interact with the project.</em> A scanned link returns commits, pull requests, active contributors and average merge time as visual indicators.</li>
              <li><strong>UC04 Security and privacy analysis</strong> (manager, developer): <em>to mitigate detected threats.</em> The system clones the repository structure, maps data interactions and evaluates STRIDE and LINDDUN threats.</li>
              <li><strong>UC05 Git data and vulnerability report</strong> (manager, developer): <em>to get a concise, shareable file.</em> Metrics, findings, DFD, hygiene and AI mitigations are compiled into a document with preview and download.</li>
              <li><strong>UC06 Previous analyses</strong> (manager, developer): <em>to track security progress over time.</em> Pick an earlier scan from a dropdown and see the metrics and vulnerabilities of that moment.</li>
            </ul>
            <h3>Developer</h3>
            <ul>
              <li><strong>UC07 Interactive DFD:</strong> <em>to pinpoint where architectural vulnerabilities are.</em> Navigate, zoom and select elements, with threat-affected nodes and flows highlighted.</li>
              <li><strong>UC08 False positives:</strong> <em>to dismiss irrelevant alerts.</em> Mark a finding, justify it in a modal, suppress it and send the feedback to the False Positive Learner.</li>
              <li><strong>UC09 Adjust DFD:</strong> <em>to correct missing architectural links.</em> Edit nodes, flows and boundaries, validate against DFD consistency rules and update the threat model.</li>
              <li><strong>UC10 AI assistant:</strong> <em>to understand threats and their mitigations.</em> A chat panel loaded with the report context, where the SLM explains findings and recommends fixes, with follow-up questions.</li>
            </ul>
            <h3>Open-source software user</h3>
            <ul>
              <li><strong>UC11 Browser extension scanning:</strong> <em>to get a summary of critical risks without leaving the current workflow.</em> Fill in the URL, scan, read the preliminary threat summary and open the full report on the web app.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Functional Requirements</h2>
            <ul>
              <li><strong>Instant analysis:</strong> scan a public repository without authentication.</li>
              <li><strong>Secret detection:</strong> find leaked credentials, private keys and API tokens.</li>
              <li><strong>Code parsing:</strong> use Tree-sitter to extract APIs, databases and external services from the source.</li>
              <li><strong>DFD generation:</strong> build the Data Flow Diagram from code and configuration.</li>
              <li><strong>STRIDE:</strong> identify and categorize security threats from the DFD.</li>
              <li><strong>LINDDUN:</strong> identify and categorize privacy risks across data flows and storage.</li>
              <li><strong>AI assistant:</strong> guide remediation from the audit report.</li>
              <li><strong>PDF report:</strong> aggregate all findings and diagrams into an exportable report.</li>
            </ul>
            <details className="milestone-details">
              <summary>The complete specification: 23 functional requirements</summary>
              <ul>
                <li><strong>Instant analysis:</strong> FR1 instant public repository analysis.</li>
                <li><strong>Authentication and repository management:</strong> FR2 third-party OAuth (GitHub) with no local credentials, FR3 private repository association, FR4 user accounts and access control.</li>
                <li><strong>Repository and team dynamics:</strong> FR5 Git metadata extraction, FR6 team activity metrics (cadence, active contributors, PR merge time, review ratios, issue resolution), FR7 repository hygiene (branch protection, languages, dependencies, tests, CI/CD), FR8 secret detection in Git history.</li>
                <li><strong>Code parsing and DFD:</strong> FR9 language detection and structural filtering, FR10 AST parsing with Tree-sitter, FR11 automated DFD generation, FR12 interactive DFD canvas (auto-layout, zoom, positioning, trust boundaries), FR13 manual DFD topology editing.</li>
                <li><strong>Threat modeling and risk:</strong> FR14 STRIDE detection, FR15 LINDDUN assessment, FR16 contextual risk prioritization that crosses findings with repository activity.</li>
                <li><strong>SLM and remediation:</strong> FR17 mitigation recommendations from a local SLM, FR18 conversational assistant, FR19 false-positive triage with justifications and score adjustment.</li>
                <li><strong>Persistence and reporting:</strong> FR20 historical analysis persistence, FR21 evolution tracking across commits and pull requests, FR22 extension summary view, FR23 continuous document report exported as PDF.</li>
              </ul>
            </details>
          </section>

          <section className="milestone-summary__section">
            <h2>Non-Functional Requirements</h2>
            <ul>
              <li><strong>Reliability:</strong> availability, fault isolation between analyses, automatic recovery.</li>
              <li><strong>Security:</strong> TLS, secure session cookies, Keycloak (OIDC/OAuth 2.0), encrypted tokens, audit logs, analysis limits.</li>
              <li><strong>GDPR &amp; privacy compliance:</strong> account deletion, data minimization, data portability, log retention.</li>
              <li><strong>Deployment:</strong> Docker containers, reproducible environments, configuration through environment variables.</li>
              <li><strong>Maintainability:</strong> analysis engines decoupled from each other.</li>
              <li><strong>Compatibility:</strong> Chromium, Firefox and Safari engines.</li>
            </ul>
            <details className="milestone-details">
              <summary>The complete specification: 19 non-functional requirements</summary>
              <ul>
                <li><strong>Reliability:</strong> NFR1 at least 99.0% availability, NFR2 analysis failures isolated in asynchronous workers, NFR3 automatic restart of FastAPI, Redis, PostgreSQL and Keycloak containers.</li>
                <li><strong>Security:</strong> NFR4 cloned source code purged once the analysis ends, NFR5 TLS/HTTPS everywhere, NFR6 session tokens only in HttpOnly, Secure, SameSite=Lax cookies, NFR7 Keycloak for login, sessions and roles (OIDC, OAuth 2.0), NFR8 GitHub tokens encrypted at rest and never exposed by the API, NFR9 audit logs of every inspection, NFR10 execution timeout and file limit per analysis.</li>
                <li><strong>GDPR and privacy:</strong> NFR11 account deletion within 48 hours, NFR12 data minimization, NFR13 JSON export of profile and history, NFR14 logs with user identifiers deleted or anonymized after 90 days.</li>
                <li><strong>Deployment:</strong> NFR15 all services in Docker containers, NFR16 Docker Compose for development and production, NFR17 configuration and secrets only through environment variables.</li>
                <li><strong>Maintainability:</strong> NFR18 decoupled analysis engines, so STRIDE or DFD extraction can be updated independently.</li>
                <li><strong>Compatibility:</strong> NFR19 consistent behavior in Chromium-based browsers, Firefox and Safari on desktop.</li>
              </ul>
            </details>
          </section>

          <section className="milestone-summary__section">
            <h2>System Architecture</h2>
            <ul>
              <li><strong>Frontend:</strong> a Web App and a Browser Extension. Both send a repository link to the backend.</li>
              <li><strong>Authentication:</strong> delegated to an external auth service. The backend only validates the token.</li>
              <li><strong>Repository access:</strong> the GitHub API provides commit, contributor, branch and pull request metadata. The repository is cloned and filtered down to the relevant files (<code>src/</code>, <code>app/</code>, <code>Dockerfile</code>).</li>
              <li><strong>Backend pipeline:</strong>
                <ul>
                  <li><strong>Activity Analyzer:</strong> commits, contributors, branches and pull requests.</li>
                  <li><strong>DFD Generator:</strong> language detection, Tree-sitter parsing and syntax tree analysis feed a DFD Builder.</li>
                  <li><strong>Security &amp; Privacy Analysis:</strong> STRIDE and LINDDUN run over the DFD, and a Data Unifier merges both outputs into one JSON.</li>
                  <li><strong>Risk Classification:</strong> an Impact Analyzer and a Probability Analyzer feed a Priority Ranker that scores each threat.</li>
                  <li><strong>SLM layer:</strong> a Small Language Model turns the prioritized risks into recommendations and powers the ChatBot.</li>
                  <li><strong>Report Builder:</strong> joins activity, DFD, STRIDE and LINDDUN findings, risk overview and recommendations into the final report.</li>
                </ul>
              </li>
              <li><strong>False Positive Learner:</strong> stores the feedback and adjusts or suppresses scores in the Risk Classification.</li>
              <li><strong>Storage:</strong> the report is saved in a relational database only if the user is authenticated.</li>
              <li>The analysis runs asynchronously: the Web App submits the request and polls its status instead of waiting for the response.</li>
            </ul>
          </section>

          <Figure
            src="/img/m2/architecture-overview.png"
            alt="RepoPrint high-level architecture diagram"
            caption="High-level architecture. Click to open in full size."
          />

          <Figure
            src="/img/m2/architecture-components.png"
            alt="Internal structure of the Risk Classification, DFD Generator, Report Builder and Activity Analyzer components"
            caption="Detailed view of the main backend components."
            narrow
          />

          <section className="milestone-summary__section">
            <h3>Interaction flows</h3>
            <ul>
              <li><strong>Repository analysis:</strong> the backend fetches the repository metadata from GitHub and clones the filtered files, then runs the analyzers, the security and privacy analysis and the SLM ranking. The report is saved only for authenticated users.</li>
              <li><strong>False positive feedback:</strong> login and token validation, the user flags a finding, the feedback is stored, the learner computes an adjusted score and the updated report returns.</li>
            </ul>
          </section>

          <Figure
            src="/img/m2/flow-analysis.png"
            alt="Sequence diagram of a repository analysis"
            caption="Sequence of a repository analysis."
          />

          <Figure
            src="/img/m2/flow-false-positive.png"
            alt="Sequence diagram of the false positive feedback flow"
            caption="Sequence of the false positive feedback flow."
            narrow
          />

          <section className="milestone-summary__section">
            <h3>Technology stack</h3>
            <ul>
              <li><strong>Web frontend:</strong> Next.js (server-side rendering, routing, Turbopack) with React and Tailwind. <strong>React Flow</strong> makes the DFD interactive and <strong>Dagre</strong> lays it out automatically.</li>
              <li><strong>Browser extension:</strong> <strong>WXT</strong>, a Vite-based framework that generates the manifest and compiles for Chrome, Firefox, Edge and Safari, sharing the web stack minus Next.js.</li>
              <li><strong>Authentication:</strong> <strong>Keycloak</strong>, fully self-hosted. NextAuth.js was considered and dropped.</li>
              <li><strong>Backend:</strong> <strong>FastAPI</strong>, chosen for the Python ecosystem (code parsing, ASTs, security scanners, SLM tooling) and because the same code runs serverless or as a stateful Uvicorn container, which fits the two operating modes.</li>
              <li><strong>Serverless deployment:</strong> <strong>Azure Container Apps</strong>, which scales to zero and uses the team's Azure student subscription.</li>
              <li><strong>Database:</strong> <strong>PostgreSQL</strong>, with JSONB available for the DFD graphs.</li>
              <li><strong>SLM:</strong> <strong>Ollama</strong> with <code>ollama-python</code>, plus Pydantic and Instructor to force valid JSON output.</li>
              <li><strong>Code to DFD:</strong> <strong>tree-sitter</strong> for source code and <strong>PyYAML</strong> for IaC files.</li>
              <li><strong>Git statistics and security checks:</strong> <strong>GitPython</strong> for history, with Semgrep, Bandit and TruffleHog under evaluation for threat and secret detection.</li>
              <li><strong>Optional, for long-running jobs:</strong> <strong>Celery</strong> with Redis as queue, monitored with <strong>Flower</strong>.</li>
              <li><strong>Scope decisions:</strong> GitHub only (GitLab dropped), analysis of the latest commit of the given branch, pull requests left out for now, no hardcoded scoring rules, and support for scheduled analyses.</li>
              <li><strong>Repositories:</strong> one repository per component (frontend and backend) coordinated through Git submodules.</li>
            </ul>
          </section>

          <section className="milestone-summary__section">
            <h2>Database Architecture</h2>
            <ul>
              <li>Relational schema in PostgreSQL, designed around one <strong>analysis run</strong> per repository scan.</li>
              <li><strong>repositories:</strong> URL, provider, default branch, visibility and owner.</li>
              <li><strong>analysis_runs:</strong> status, commit SHA, branch and timestamps of each scan.</li>
              <li><strong>threat_findings:</strong> STRIDE/LINDDUN category, threat type, file and line, linked DFD node, description and recommendation.</li>
              <li><strong>dfd_graphs:</strong> the DFD stored as JSON nodes and edges, so it can be rendered interactively.</li>
              <li><strong>activity_metrics:</strong> active contributors, total commits, average PR merge time and open issues.</li>
              <li>The full schema has 13 tables. Besides the ones above it models users and OAuth tokens, teams and roles, false-positive feedback with justification, chatbot conversations tied to a finding, and the audit logs required by the security requirements.</li>
              <li>The schema was derived from a <strong>domain model</strong> and a <strong>conceptual entity-relationship diagram</strong>.</li>
            </ul>
          </section>

          <Gallery
            items={[
              { src: '/img/m2/domain-model.jpg', alt: 'Domain model', caption: 'Domain model.' },
              { src: '/img/m2/db-er.jpg', alt: 'Conceptual entity-relationship diagram', caption: 'Conceptual ER diagram.' },
            ]}
          />

          <Figure
            src="/img/m2/db-schema.png"
            alt="Physical database schema"
            caption="Physical database schema. Click to open in full size."
          />

          <section className="milestone-summary__section">
            <h2>UI Mockups</h2>
            <ul>
              <li><strong>Browser Extension:</strong> paste a public repository URL, run the scan and get a posture score, STRIDE and LINDDUN indicators and the critical findings, with a link to the full report on the website.</li>
              <li><strong>Web App:</strong> landing page, sign-in, list of repositories with security scores, and a per-repository dashboard with three views: Threat Modeling &amp; Architectural Posture, Inferred Architecture &amp; DFD, and Team Dynamics &amp; Repository Hygiene.</li>
              <li><strong>Exportable report:</strong> a formal audit document with executive summary, STRIDE and LINDDUN tables, DFD, team hygiene and SLM mitigations.</li>
              <li>Every screen has a chatbot button for the AI assistant, and the interface supports light and dark mode.</li>
            </ul>
          </section>

          <Figure
            src="/img/m2/mockup-extension.png"
            alt="Browser extension mockups: welcome screen and scan result"
            caption="Browser Extension: welcome screen and scan result."
          />

          <Gallery
            items={[
              { src: '/img/m2/web-landing.jpg', alt: 'Web App landing page mockup', caption: 'Landing page.' },
              { src: '/img/m2/web-login.jpg', alt: 'Web App sign-in mockup', caption: 'Sign-in with GitHub or account.' },
              { src: '/img/m2/web-repositories.jpg', alt: 'Repositories list mockup', caption: 'Repository overview with security scores.' },
              { src: '/img/m2/web-dashboard.jpg', alt: 'Repository dashboard mockup, threat modeling tab', caption: 'Dashboard: threat modeling and posture.' },
              { src: '/img/m2/web-dfd.jpg', alt: 'Interactive DFD mockup', caption: 'Dashboard: inferred architecture and DFD.' },
              { src: '/img/m2/web-team.jpg', alt: 'Team dynamics mockup', caption: 'Dashboard: team dynamics and hygiene.' },
            ]}
          />

          <Gallery
            items={[
              { src: '/img/m2/web-report-1.jpg', alt: 'Audit report mockup, page 1', caption: 'PDF audit report, page 1.' },
              { src: '/img/m2/web-report-2.jpg', alt: 'Audit report mockup, page 2', caption: 'PDF audit report, page 2.' },
            ]}
          />

          <section className="milestone-summary__section">
            <h3>Interactive prototype</h3>
            <ul>
              <li>Besides the static mockups, we built a clickable web prototype (React and Vite) that covers the whole journey: landing, sign-in, repositories, dashboard and report.</li>
              <li><strong>Try it:</strong> <a href="https://noise-plot-73663438.figma.site/" target="_blank" rel="noreferrer">interactive mockup</a>.</li>
              <li>Branch selector, analysis history and a scan trigger.</li>
              <li>Mark as False Positive with a mandatory technical justification.</li>
              <li>A chatbot panel that answers questions about the findings.</li>
              <li>A DFD canvas where entities, processes and data stores can be added and moved.</li>
              <li>A printable audit report where each finding carries its GDPR, NIS 2 and ISO/IEC 27001 references.</li>
            </ul>
          </section>

        </article>
      </main>
    </Layout>
  );
}
