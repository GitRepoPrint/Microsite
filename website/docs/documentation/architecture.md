---
id: architecture
title: Architecture
sidebar_label: Architecture
slug: /documentation/architecture
---

# System & Database Architecture

This document details RepoPrint's system architecture, asynchronous pipeline, interaction sequences, technology choices, database models, and the **security, privacy, and encryption architecture established in Milestone 3**.

---

## 1. System Architecture

- **Frontend:** A Web App and a Browser Extension. Both dispatch repository scan requests to the backend API.
- **Authentication & Identity:** Delegated to a self-hosted **Keycloak** service (OIDC / OAuth 2.0). The backend API only validates JSON Web Tokens (JWT).
- **Repository Access:** The GitHub API supplies commit logs, active contributors, branches, and pull request metadata. The target repository is cloned temporarily into an ephemeral container and filtered down to architectural files (`src/`, `app/`, `Dockerfile`, IaC manifests).
- **Backend Pipeline:**
  - **Activity Analyzer:** Evaluates commits, active contributors, branches, and PR hygiene. Automatically pseudonymizes author identities to preserve privacy.
  - **DFD Generator:** Multi-language detection, AST parsing via **Tree-sitter**, and configuration analysis feed the DFD Builder.
  - **Security & Privacy Analysis:** **STRIDE** and **LINDDUN** engines evaluate threats across inferred components and data flows; a Data Unifier merges findings into a normalized JSON payload.
  - **Risk Classification:** Evaluates severity by combining threat impact with **Remediation Effort** and repository hygiene indicators.
  - **Local SLM Layer:** A local Small Language Model (via Ollama) converts prioritized threats into actionable remediation steps and powers conversational explanations.
  - **Report Builder:** Merges activity metrics, DFD topology, threat findings, and AI remediations into an exportable audit report.
- **False Positive Learner:** Stores user triage feedback and justification notes to suppress or adjust threat weights in future scans.
- **Persistence:** Full scan reports and historical evolutions are stored in PostgreSQL only for authenticated users; unauthenticated scans operate statelessly.
- **Asynchronous Execution:** Scans run asynchronously in isolated background workers (Celery/Redis); the frontend polls for pipeline progress.

![High-level architecture. Click to open in full size.](/img/m2/architecture-overview.png)

![Detailed view of the main backend components.](/img/m2/architecture-components.png)

---

## 2. Security, Privacy & Encryption Architecture (Milestone 3)

In Milestone 3, RepoPrint's architecture was hardened with multi-tier cryptographic and privacy-by-design controls:

- **Encryption in Transit:** All client-server traffic is terminated via a secure Docker reverse proxy enforcing **HTTPS/TLS 1.3**.
- **Encryption at Rest:** Sensitive provider tokens (GitHub OAuth access tokens) and user credentials are encrypted in PostgreSQL using **AES-256** via the `pgcrypto` extension.
- **Storage Isolation:** Persistent Docker storage volumes reside on encrypted virtual machine disk partitions within the IEETA infrastructure.
- **Zero Source Code Persistence:** Cloned repositories exist only during active parsing and are **permanently wiped immediately after analysis** from ephemeral storage.
- **Local AI Air-Gap:** The Small Language Model (SLM) executes on-premise using **Ollama**. Code snippets, architectural models, and threat findings are **never transmitted to external cloud AI providers**.
- **Role-Based Access Control (RBAC):** Centralized identity management and granular user permissions enforced via Keycloak.

---

## 3. Interaction Flows

- **Repository Analysis Flow:** The backend fetches Git metadata from GitHub and clones filtered source files, executes the analyzers, runs STRIDE and LINDDUN rule sets, prioritizes findings, generates SLM mitigations, and saves the report if authenticated.
- **False Positive Feedback Flow:** An authenticated user flags a finding with a mandatory technical justification; the feedback is recorded, the learner adjusts scoring heuristics, and the refreshed report is served.

![Sequence of a repository analysis.](/img/m2/flow-analysis.png)

![Sequence of the false positive feedback flow.](/img/m2/flow-false-positive.png)

---

## 4. Technology Stack

- **Web Frontend:** Next.js (SSR, file routing, Turbopack) with React and Tailwind CSS. **React Flow** renders the interactive DFD and **Dagre** provides automated hierarchical layout.
- **Browser Extension:** **WXT** framework built on Vite, generating cross-browser manifests for Chrome, Firefox, Edge, and Safari while sharing frontend utilities.
- **Authentication:** Self-hosted **Keycloak** (OIDC, OAuth 2.0) with GitHub identity brokering.
- **Backend API:** **FastAPI (Python)**, selected for the rich ecosystem of code parsing tools (Tree-sitter), security scanners, and native SLM integrations.
- **Asynchronous Tasks:** **Celery** with **Redis** as message broker, monitored in real time using **Flower**.
- **Database:** **PostgreSQL** with `JSONB` for flexible graph serialization and `pgcrypto` for AES-256 field encryption.
- **Local SLM:** **Ollama** using `ollama-python`, with **Pydantic** and **Instructor** enforcing structured JSON output schemas.
- **Code to DFD:** **Tree-sitter** for multi-language AST extraction and **PyYAML** for Infrastructure-as-Code parsing.
- **Git Statistics & Secrets:** **GitPython** for repository history analysis and integrated secret detection engines.
- **Hosting Environment:** Dedicated virtual machines hosted at **IEETA (Universidade de Aveiro)**.

---

## 5. Database Architecture

- Relational schema in PostgreSQL structured around individual **analysis runs** per repository scan.
- **repositories:** URL, provider, default branch, visibility, and owner references.
- **analysis_runs:** Status, commit SHA, branch, and execution timestamps of each scan.
- **threat_findings:** STRIDE/LINDDUN category, threat type, source file and line, linked DFD node, description, and remediation advice.
- **dfd_graphs:** DFD topology stored as JSON nodes, trust boundaries, and edges.
- **activity_metrics:** Active contributors, total commits, review ratios, and average PR merge latency.
- **Additional Tables (13 total):** User accounts, encrypted OAuth tokens, teams, roles, false-positive feedback with technical justifications, chatbot session histories, and immutable security audit logs (subject to the 90-day retention schedule).

![Domain model.](/img/m2/domain-model.jpg)

![Conceptual ER diagram.](/img/m2/db-er.jpg)

![Physical database schema. Click to open in full size.](/img/m2/db-schema.png)
