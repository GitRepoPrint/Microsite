---
id: architecture
title: Architecture
sidebar_label: Architecture
slug: /documentation/architecture
---

# System & Database Architecture

## System Architecture
- **Frontend:** a Web App and a Browser Extension. Both send a repository link to the backend.
- **Authentication:** delegated to an external auth service. The backend only validates the token.
- **Repository access:** the GitHub API provides commit, contributor, branch and pull request metadata. The repository is cloned and filtered down to the relevant files (`src/`, `app/`, `Dockerfile`).
- **Backend pipeline:**
  - **Activity Analyzer:** commits, contributors, branches and pull requests.
  - **DFD Generator:** language detection, Tree-sitter parsing and syntax tree analysis feed a DFD Builder.
  - **Security & Privacy Analysis:** STRIDE and LINDDUN run over the DFD, and a Data Unifier merges both outputs into one JSON.
  - **Risk Classification:** an Impact Analyzer and a Probability Analyzer feed a Priority Ranker that scores each threat.
  - **SLM layer:** a Small Language Model turns the prioritized risks into recommendations and powers the ChatBot.
  - **Report Builder:** joins activity, DFD, STRIDE and LINDDUN findings, risk overview and recommendations into the final report.
- **False Positive Learner:** stores the feedback and adjusts or suppresses scores in the Risk Classification.
- **Storage:** the report is saved in a relational database only if the user is authenticated.
- The analysis runs asynchronously: the Web App submits the request and polls its status instead of waiting for the response.

![High-level architecture. Click to open in full size.](/img/m2/architecture-overview.png)

![Detailed view of the main backend components.](/img/m2/architecture-components.png)

---

## Interaction flows
- **Repository analysis:** the backend fetches the repository metadata from GitHub and clones the filtered files, then runs the analyzers, the security and privacy analysis and the SLM ranking. The report is saved only for authenticated users.
- **False positive feedback:** login and token validation, the user flags a finding, the feedback is stored, the learner computes an adjusted score and the updated report returns.

![Sequence of a repository analysis.](/img/m2/flow-analysis.png)

![Sequence of the false positive feedback flow.](/img/m2/flow-false-positive.png)

---

## Technology stack
- **Web frontend:** Next.js (server-side rendering, routing, Turbopack) with React and Tailwind. **React Flow** makes the DFD interactive and **Dagre** lays it out automatically.
- **Browser extension:** **WXT**, a Vite-based framework that generates the manifest and compiles for Chrome, Firefox, Edge and Safari, sharing the web stack minus Next.js.
- **Authentication:** **Keycloak**, fully self-hosted. NextAuth.js was considered and dropped.
- **Backend:** **FastAPI**, chosen for the Python ecosystem (code parsing, ASTs, security scanners, SLM tooling) and because the same code runs serverless or as a stateful Uvicorn container, which fits the two operating modes.
- **Serverless deployment:** **Azure Container Apps**, which scales to zero and uses the team's Azure student subscription.
- **Database:** **PostgreSQL**, with JSONB available for the DFD graphs.
- **SLM:** **Ollama** with `ollama-python`, plus Pydantic and Instructor to force valid JSON output.
- **Code to DFD:** **tree-sitter** for source code and **PyYAML** for IaC files.
- **Git statistics and security checks:** **GitPython** for history, with Semgrep, Bandit and TruffleHog under evaluation for threat and secret detection.
- **Optional, for long-running jobs:** **Celery** with Redis as queue, monitored with **Flower**.
- **Scope decisions:** GitHub only (GitLab dropped), analysis of the latest commit of the given branch, pull requests left out for now, no hardcoded scoring rules, and support for scheduled analyses.
- **Repositories:** one repository per component (frontend and backend) coordinated through Git submodules.

---

## Database Architecture
- Relational schema in PostgreSQL, designed around one **analysis run** per repository scan.
- **repositories:** URL, provider, default branch, visibility and owner.
- **analysis_runs:** status, commit SHA, branch and timestamps of each scan.
- **threat_findings:** STRIDE/LINDDUN category, threat type, file and line, linked DFD node, description and recommendation.
- **dfd_graphs:** the DFD stored as JSON nodes and edges, so it can be rendered interactively.
- **activity_metrics:** active contributors, total commits, average PR merge time and open issues.
- The full schema has 13 tables. Besides the ones above it models users and OAuth tokens, teams and roles, false-positive feedback with justification, chatbot conversations tied to a finding, and the audit logs required by the security requirements.
- The schema was derived from a **domain model** and a **conceptual entity-relationship diagram**.

![Domain model.](/img/m2/domain-model.jpg)

![Conceptual ER diagram.](/img/m2/db-er.jpg)

![Physical database schema. Click to open in full size.](/img/m2/db-schema.png)
