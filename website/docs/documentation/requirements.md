---
id: requirements
title: Requirements
sidebar_label: Requirements
slug: /documentation/requirements
---

# Requirements Specification

This document details RepoPrint's **Functional Requirements (FR)** and **Non-Functional Requirements (NFR)**, updated with the **Milestone 3 MVP scope partitioning**, **GDPR privacy specifications**, **EU AI Act compliance**, and **WCAG accessibility standards**.

---

## 1. Functional Requirements

### 1.1. Core Overview
- **Instant Analysis:** Scan public repositories statelessly without requiring credentials.
- **Secret Detection:** Identify leaked tokens, private keys, and passwords across Git histories.
- **Code Parsing:** Parse source code using Tree-sitter to identify APIs, databases, routes, and external boundaries.
- **DFD Generation:** Synthesize architectural Data Flow Diagrams automatically from source and configuration files.
- **STRIDE Threat Modeling:** Detect and categorize cybersecurity threats across data flows and entities.
- **LINDDUN Privacy Modeling:** Detect and categorize data privacy risks across data flows and storage nodes.
- **AI-Assisted Remediation:** Provide contextual mitigation guidance powered by a local Small Language Model (SLM).
- **Audit Reporting:** Aggregate architecture, team dynamics, threat tables, and mitigations into an exportable document.

### 1.2. Complete Specification: 23 Functional Requirements

| ID | Requirement Area | Description | Implementation Status |
| :--- | :--- | :--- | :---: |
| **FR1** | Instant Analysis | Instant analysis of public repositories without user login. | **MVP** |
| **FR2** | Authentication | Third-party OAuth 2.0 (GitHub) integration with no local password storage. | **MVP** |
| **FR3** | Repository Management | Associate and manage private repositories authorized via GitHub tokens. | **MVP** |
| **FR4** | User Access Control | User account profiles, organizational workspaces, and role-based access. | **MVP** |
| **FR5** | Git Metadata Mining | Extraction of Git commit history, contributor logs, and branch trees. | **MVP** |
| **FR6** | Team Activity Metrics | Mining cadence, active contributors, PR merge duration, and review ratios. | **MVP** |
| **FR7** | Repository Hygiene | Auditing branch protections, dependency health, test coverage, and CI/CD pipelines. | **MVP** |
| **FR8** | Secret Detection | Automated scanning for leaked secrets and API keys across Git commits. | **MVP** |
| **FR9** | Language Detection | Automatic detection of programming languages and filtering of structural files. | **MVP** |
| **FR10** | AST Parsing | Parsing source syntax trees via Tree-sitter to extract architectural components. | **MVP** |
| **FR11** | Automated DFD Inference | Automatic synthesis of Data Flow Diagrams from extracted components and IaC files. | **MVP** |
| **FR12** | Interactive DFD Canvas | Interactive canvas with auto-layout, zoom, pan, trust boundaries, and threat overlays. | **MVP** |
| **FR13** | Manual DFD Editing | Direct manual editing, node addition, and flow adjustment on the canvas. | **Post-MVP (M4)** |
| **FR14** | STRIDE Detection | Automated rule-based evaluation of STRIDE cybersecurity threats across the DFD. | **MVP** |
| **FR15** | LINDDUN Assessment | Automated rule-based evaluation of LINDDUN privacy risks across data flows. | **MVP** |
| **FR16** | Contextual Prioritization | Scoring threat severity by crossing findings with repository activity and hygiene. | **MVP** |
| **FR17** | SLM Remediation Guidance | Generating contextual mitigation advice for detected threats using a local SLM. | **MVP** |
| **FR18** | Conversational Assistant | Context-aware interactive chatbot panel for live vulnerability queries. | **Post-MVP (M4)** |
| **FR19** | False-Positive Triage | Flagging false positives with mandatory technical justifications and score updates. | **MVP** |
| **FR20** | Historical Persistence | Storing historical analysis runs, findings, and DFD versions for authenticated users. | **MVP** |
| **FR21** | Evolution Tracking | Tracking posture changes, metric diffs, and threat resolution across commits. | **MVP** |
| **FR22** | Extension Summary View | Compact posture badge and critical risk summary inside the browser extension. | **Post-MVP (M4)** |
| **FR23** | Exportable Audit Report | Compiling findings, diagrams, and regulatory mappings into a printable PDF report. | **MVP** |

---

## 2. Non-Functional Requirements

### 2.1. Complete Specification: 21 Non-Functional Requirements

#### Reliability & Availability
- **NFR1:** Maintain a minimum of 99.0% service availability.
- **NFR2:** Isolation of analysis pipeline failures inside asynchronous worker sandboxes to prevent server crashes.
- **NFR3:** Automatic restart and health monitoring of FastAPI, Redis, PostgreSQL, and Keycloak containers.

#### Security & Infrastructure Defense
- **NFR4 (Zero Code Persistence):** Cloned repository source code is stored exclusively in ephemeral storage and **permanently wiped immediately after analysis**.
- **NFR5 (Encryption in Transit):** Strict HTTPS/TLS 1.3 enforced across all external network traffic via a secure reverse proxy.
- **NFR6 (Secure Sessions):** Authentication tokens stored exclusively in `HttpOnly`, `Secure`, `SameSite=Lax` cookies.
- **NFR7 (Identity Management):** Centralized identity, single sign-on (SSO), and role-based access control (RBAC) powered by Keycloak.
- **NFR8 (Encryption at Rest):** Sensitive credentials and GitHub OAuth tokens encrypted using **AES-256** via PostgreSQL `pgcrypto`; persistent volumes reside on encrypted virtual machine partitions.
- **NFR9 (Audit Logging):** Immutable operational audit logging of all scan requests and authentication events.
- **NFR10 (Execution Limits):** Hard resource quotas, execution timeouts, and file count limits per repository scan to defend against DoS.

#### GDPR, Privacy & Regulatory Compliance
- **NFR11 (Right to Be Forgotten):** Automated user data erasure workflow executing within **48 hours**, revoking OAuth tokens and scrubbing account records (with operational logs retained for 90 days under Art. 6(1)(f)).
- **NFR12 (Data Minimization):** Strict collection of only necessary operational metadata; author names/emails are pseudonymized during Git profiling.
- **NFR13 (Data Portability):** Support for complete user data export (profile, projects, and findings) in structured **JSON** format.
- **NFR14 (Log Retention Window):** Operational audit logs containing user identifiers and IP addresses are permanently deleted or irreversibly anonymized after **90 days**.
- **NFR15 (AI Transparency & Safety):** Compliance with the **EU AI Act (Art. 50)** — all SLM outputs are explicitly marked as machine-generated, disclaim automated certification, and are prohibited from rating individual developers.

#### Usability & Accessibility (WCAG 2.1/2.2 AA)
- **NFR16 (Universal Accessibility):** Adherence to WCAG 2.1 Level AA across web interfaces, featuring:
  - *Non-Text Content (1.1.1):* Structured data flow table, ARIA labels, and screen reader announcements for DFD trust boundaries.
  - *Keyboard Accessibility (2.1.1 & 2.5.7):* Full keyboard controls to establish and disconnect DFD connections without mouse dragging.
  - *Color Independence (1.4.1):* Multi-modal threat severity styling using distinct stroke patterns (solid vs dashed) and explicit text badges.

#### Deployment, Maintainability & Compatibility
- **NFR17 (Containerization):** 100% of services containerized using Docker, with automated orchestration via Docker Compose.
- **NFR18 (Config Management):** All secrets, credentials, and environment configurations injected strictly through environment variables.
- **NFR19 (Decoupled Engines):** Modular, decoupled analysis engines allowing Tree-sitter grammars, STRIDE, and LINDDUN rules to be updated independently.
- **NFR20 (Cross-Browser Compatibility):** Verified functionality across modern desktop browser engines (Chromium, Firefox, Safari/WebKit).
- **NFR21 (Local AI Air-Gap):** SLM execution powered strictly by local infrastructure (Ollama), ensuring no repository data leaves the host environment.
