---
id: requirements
title: Requirements
sidebar_label: Requirements
slug: /documentation/requirements
---

# Requirements

## Functional Requirements

### Overview
- **Instant analysis:** scan a public repository without authentication.
- **Secret detection:** find leaked credentials, private keys and API tokens.
- **Code parsing:** use Tree-sitter to extract APIs, databases and external services from the source.
- **DFD generation:** build the Data Flow Diagram from code and configuration.
- **STRIDE:** identify and categorize security threats from the DFD.
- **LINDDUN:** identify and categorize privacy risks across data flows and storage.
- **AI assistant:** guide remediation from the audit report.
- **PDF report:** aggregate all findings and diagrams into an exportable report.

### Complete Specification: 23 Functional Requirements

#### Instant analysis
- **FR1:** instant public repository analysis.

#### Authentication and repository management
- **FR2:** third-party OAuth (GitHub) with no local credentials.
- **FR3:** private repository association.
- **FR4:** user accounts and access control.

#### Repository and team dynamics
- **FR5:** Git metadata extraction.
- **FR6:** team activity metrics (cadence, active contributors, PR merge time, review ratios, issue resolution).
- **FR7:** repository hygiene (branch protection, languages, dependencies, tests, CI/CD).
- **FR8:** secret detection in Git history.

#### Code parsing and DFD
- **FR9:** language detection and structural filtering.
- **FR10:** AST parsing with Tree-sitter.
- **FR11:** automated DFD generation.
- **FR12:** interactive DFD canvas (auto-layout, zoom, positioning, trust boundaries).
- **FR13:** manual DFD topology editing.

#### Threat modeling and risk
- **FR14:** STRIDE detection.
- **FR15:** LINDDUN assessment.
- **FR16:** contextual risk prioritization that crosses findings with repository activity.

#### SLM and remediation
- **FR17:** mitigation recommendations from a local SLM.
- **FR18:** conversational assistant.
- **FR19:** false-positive triage with justifications and score adjustment.

#### Persistence and reporting
- **FR20:** historical analysis persistence.
- **FR21:** evolution tracking across commits and pull requests.
- **FR22:** extension summary view.
- **FR23:** continuous document report exported as PDF.

---

## Non-Functional Requirements

### Overview
- **Reliability:** availability, fault isolation between analyses, automatic recovery.
- **Security:** TLS, secure session cookies, Keycloak (OIDC/OAuth 2.0), encrypted tokens, audit logs, analysis limits.
- **GDPR & privacy compliance:** account deletion, data minimization, data portability, log retention.
- **Deployment:** Docker containers, reproducible environments, configuration through environment variables.
- **Maintainability:** analysis engines decoupled from each other.
- **Compatibility:** Chromium, Firefox and Safari engines.

### Complete Specification: 19 Non-Functional Requirements

#### Reliability
- **NFR1:** at least 99.0% availability.
- **NFR2:** analysis failures isolated in asynchronous workers.
- **NFR3:** automatic restart of FastAPI, Redis, PostgreSQL and Keycloak containers.

#### Security
- **NFR4:** cloned source code purged once the analysis ends.
- **NFR5:** TLS/HTTPS everywhere.
- **NFR6:** session tokens only in HttpOnly, Secure, SameSite=Lax cookies.
- **NFR7:** Keycloak for login, sessions and roles (OIDC, OAuth 2.0).
- **NFR8:** GitHub tokens encrypted at rest and never exposed by the API.
- **NFR9:** audit logs of every inspection.
- **NFR10:** execution timeout and file limit per analysis.

#### GDPR and privacy
- **NFR11:** account deletion within 48 hours.
- **NFR12:** data minimization.
- **NFR13:** JSON export of profile and history.
- **NFR14:** logs with user identifiers deleted or anonymized after 90 days.

#### Deployment
- **NFR15:** all services in Docker containers.
- **NFR16:** Docker Compose for development and production.
- **NFR17:** configuration and secrets only through environment variables.

#### Maintainability
- **NFR18:** decoupled analysis engines, so STRIDE or DFD extraction can be updated independently.

#### Compatibility
- **NFR19:** consistent behavior in Chromium-based browsers, Firefox and Safari on desktop.
