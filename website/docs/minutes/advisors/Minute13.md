---
id: minute-13
title: Minute 13 - 12/11
sidebar_label: Minute 13 - 12/11
slug: /minutes/minute-13
---

# Minute 13

- **Date:** 12/11/2026
- **Start:** 17h00
- **End:** 18h00
- **Location:** IEETA
- **Participants:**
  - **Team:** Margarida Cardoso, Gil Ernesto, Nuno Costa, Tiago Costa
  - **Advisors:** Raquel Paradinha, João Almeida

## Objective of the meeting
Review technical progress achieved across all development tracks over the past week, evaluate experimental DFD extraction and GitHub metrics integration, discuss threat modeling baselines, and collect advisor feedback on architectural design and system scoping.

## Agenda
1. Review of work completed during the past week across all workstreams.
2. Demonstration of GitHub metrics extraction and frontend integration.
3. Analysis of Tree-sitter DFD generation granularity and abstraction strategies.
4. Threat modeling evaluation: OWASP pytm rules and LINDDUN engine progress.
5. Advisor recommendations on DFD granularity, serverless architecture, and future interaction recording.

## Decisions taken

- **Team Progress & Work Review:**
  - **DFD Extraction (Nuno Costa):** Created experimental DFDs using Tree-sitter, but found that the resulting diagrams were overly detailed and complex for threat modeling.
  - **Git Analysis Engine & Metrics (Gil Ernesto):** Successfully extracted real repository metrics from public GitHub repositories and integrated them into the frontend for dashboard visualization.
  - **Threat Modeling Rules (Tiago Costa):** Discovered and evaluated [OWASP pytm](https://github.com/OWASP/pytm), an open-source Python framework providing threat modeling definitions and rule sets that can serve as a reference for STRIDE threat identification.
  - **LINDDUN Privacy Engine (Margarida Cardoso):** Began development of a dedicated tool for identifying LINDDUN privacy vulnerabilities. Next steps involve refining detection logic and gathering concrete test cases to validate the tool's effectiveness.

- **Advisor Recommendations (Prof. João Almeida):**
  - **DFD Granularity per Endpoint / Action:** To prevent diagrams from becoming overly complex and unreadable, model DFDs scoped around specific **user stories**, **actions**, or **API endpoints** rather than attempting full-codebase single-graph extraction.
  - **Serverless Architecture:** Leverage a **serverless** model for lightweight services and tasks that do not require dedicated, continuous compute, optimizing infrastructure cost and management.
  - **Interaction Recorder (Second Semester Outlook):** For future iterations beyond static analysis, explore an interaction recorder capable of tracking user clicks and application navigation, translating recorded user flows directly into dynamic DFD representations.

## Next meeting
- **Date:** 17/11/2026
- **Time:** 15h30
- **Purpose:** Follow-up on MVP development progress and integration.
