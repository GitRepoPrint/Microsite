---
id: minute-06
title: Minute 06 - 06/10
sidebar_label: Minute 06 - 06/10
slug: /minutes/minute-06
---

# Minute 06

- **Date:** 06/10/2026
- **Start:** 10h00
- **End:** 11h00
- **Location:** Open Space IEETA

## Participants
- **Team:** Margarida Cardoso, Artur Yavorskyy, Nuno Costa, Tiago Costa
- **Advisors:** José Gameiro, João Almeida

## Objective of the meeting
Define technical architecture and deployment guidelines, align functional and non-functional requirements and clarify the scope of UI mockups, tooling, and documentation.

## Agenda
1. Architecture diagram refactoring and interaction/deployment diagram specifications.
2. Repository analysis scope and behavior (commits, branches, and PR handling).
3. UI/UX adjustments: Dashboard, mockups, chatbot scope, and analysis scheduling.
4. Structuring non-functional requirements (deployment, security, GDPR) and exclusion of performance metrics.
5. Technology stack selection (Keycloak adoption, exclusion of GitLab and NextAuth.js), tooling evaluation (STRIDE, LINDDUN), and comparative analysis. 


## Decisions taken

- **Architecture & Diagrams:**
  - Simplify architecture diagram using colors, fewer arrows, separate detailed sub-diagrams, and explicit database types (relational).
  - Replace deployment diagram with an interaction diagram showing developer, repository, and machine flows.
  - Produce use case diagrams and use Mermaid for DFD extraction on GitHub.
- **Platform & Analysis Scope:**
  - Analyze only the latest commit of the branch from the provided link; ignore PRs for now.
  - Don't use hardcoded scoring rules (e.g., critical 70 points).
  - Add analysis scheduling support.
- **UI/UX & Mockups:**
  - Reformat dashboard to match the PDF layout with larger font sizes.
  - Avoid showing all elements at once in mockups.
  - Broaden chatbot scope to the general platform rather than just DFD editing.
- **Requirements & Technology Stack:**
  - Write all non-functional requirements now, including deployment, security, and GDPR; remove the performance section.
  - Drop GitLab integration.
  - Adopt Keycloak for authentication; do not use NextAuth.js.
  - Produce a comparative table of researched vs. chosen technologies and review tools categorized by STRIDE and LINDDUN.
- **Organization & Branding:**
  - Use OneDrive for team file sharing.
  - Use catchphrase with only this idea: "threat fingerprinting for Git repositories".

## Next meeting
- **Date:** Wednesday, 12/10/2026
- **Time:** 14h00
- **Purpose:** Rehearsing the Milestone 2 presentation


