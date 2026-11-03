---
id: use-cases
title: Use Cases & User Stories
sidebar_label: Use Cases
slug: /documentation/use-cases
---

# Use Cases & User Stories

Every use case derives from a specific user story and persona requirement. The primary workflows across all user roles are detailed below.

### Software development team manager
- **UC01 Create account** (all actors): *to access a more detailed report.* Register or log in, with OAuth options, and land on a personal dashboard.
- **UC02 GitHub account connection** (manager, developer): *to audit private repositories.* The user is redirected to GitHub, approves access, and RepoPrint receives a token to analyse private repositories.
- **UC03 Git data tracking:** *to understand how developers interact with the project.* A scanned link returns commits, pull requests, active contributors and average merge time as visual indicators.
- **UC04 Security and privacy analysis** (manager, developer): *to mitigate detected threats.* The system clones the repository structure, maps data interactions and evaluates STRIDE and LINDDUN threats.
- **UC05 Git data and vulnerability report** (manager, developer): *to get a concise, shareable file.* Metrics, findings, DFD, hygiene and AI mitigations are compiled into a document with preview and download.
- **UC06 Previous analyses** (manager, developer): *to track security progress over time.* Pick an earlier scan from a dropdown and see the metrics and vulnerabilities of that moment.

### Developer
- **UC07 Interactive DFD:** *to pinpoint where architectural vulnerabilities are.* Navigate, zoom and select elements, with threat-affected nodes and flows highlighted.
- **UC08 False positives:** *to dismiss irrelevant alerts.* Mark a finding, justify it in a modal, suppress it and send the feedback to the False Positive Learner.
- **UC09 Adjust DFD:** *to correct missing architectural links.* Edit nodes, flows and boundaries, validate against DFD consistency rules and update the threat model.
- **UC10 AI assistant:** *to understand threats and their mitigations.* A chat panel loaded with the report context, where the SLM explains findings and recommends fixes, with follow-up questions.

### Open-source software user
- **UC11 Browser extension scanning:** *to get a summary of critical risks without leaving the current workflow.* Fill in the URL, scan, read the preliminary threat summary and open the full report on the web app.

---

## MVP Scope & Delivery Phasing (Milestone 3)

During Milestone 3, the team formally partitioned the use cases into target MVP deliverables for the Construction phase and secondary capabilities scheduled for subsequent iterations:

| Use Case | Title | Scope Phase | Implementation Rationale |
| :--- | :--- | :---: | :--- |
| **UC01** | Create Account | **MVP** | Core identity management and session state via Keycloak. |
| **UC02** | GitHub Account Connection | **MVP** | Necessary for authenticated analysis of private codebases. |
| **UC03** | Git Data Tracking | **MVP** | Extracts Git commit, PR, and hygiene dynamics. |
| **UC04** | Security and Privacy Analysis | **MVP** | Essential engine: AST parsing, automated DFD inference, STRIDE & LINDDUN threat detection. |
| **UC05** | Git Data & Vulnerability Report | **MVP** | Core exportable deliverable summarizing risks and posture. |
| **UC06** | Previous Analyses | **MVP** | Longitudinal security tracking across repository commits. |
| **UC07** | Interactive DFD | **MVP** | Visualizing architectural topology with threat highlighting. |
| **UC08** | False Positives Management | **MVP** | Mandatory triage mechanism to suppress false alarms. |
| **UC09** | Adjust DFD (Manual Topology Editing) | **Post-MVP (M4)** | Interactive in-canvas node and flow manipulation deferred to stabilization phase. |
| **UC10** | AI Assistant (Interactive Chatbot) | **Post-MVP (M4)** | Real-time conversational assistant scheduled for final SLM optimization. |
| **UC11** | Browser Extension Scanning | **Post-MVP (M4)** | Lightweight client extension integration scheduled for Milestone 4. |
