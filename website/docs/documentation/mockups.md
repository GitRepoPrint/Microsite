---
id: mockups
title: UI Mockups & Accessibility
sidebar_label: UI Mockups
slug: /documentation/mockups
---

# UI Mockups & Interface Evolution

This document presents the visual interface mockups for the RepoPrint platform, the interactive prototype, and the **Milestone 3 UI refinements and accessibility enhancements (WCAG 2.1/2.2)**.

---

## 1. Core Platform Mockups

- **Browser Extension:** Paste a public repository URL, run the scan, and inspect the posture score, STRIDE/LINDDUN indicators, and critical findings, with a direct link to the comprehensive web report.
- **Web App:** Landing page, user sign-in, repository inventory with normalized security scores, and a per-repository dashboard covering: Threat Modeling & Architectural Posture, Inferred Architecture & DFD, and Team Dynamics & Repository Hygiene.
- **Exportable Audit Report:** Formal compliance document containing executive summaries, STRIDE and LINDDUN threat matrices, DFD diagrams, team hygiene metrics, and AI-recommended remediations.

### Browser Extension
![Browser Extension: welcome screen and scan result](/img/m2/mockup-extension.png)

### Web Application Interfaces
![Landing page](/img/m2/web-landing.jpg)

![Sign-in with GitHub or account](/img/m2/web-login.jpg)

![Repository overview with security scores](/img/m2/web-repositories.jpg)

![Dashboard: threat modeling and posture](/img/m2/web-dashboard.jpg)

![Dashboard: inferred architecture and DFD](/img/m2/web-dfd.jpg)

![Dashboard: team dynamics and hygiene](/img/m2/web-team.jpg)

### Exportable Audit Report
![PDF audit report, page 1](/img/m2/web-report-1.jpg)

![PDF audit report, page 2](/img/m2/web-report-2.jpg)

---

## 2. Interactive Prototype

- Alongside the static mockups, a clickable web prototype (React and Vite) was constructed to validate the entire end-to-end user journey: landing, sign-in, repository selection, dashboard analysis, and report generation.
- **Live Demo:** [interactive mockup](https://noise-plot-73663438.figma.site/).
- **Key Features Demonstrated:**
  - Branch selector, scan trigger, and historical analysis comparison;
  - False positive triage modal with mandatory technical justifications;
  - Context-aware chatbot panel providing mitigation recommendations;
  - DFD canvas allowing inspection of entities, processes, and data stores;
  - Audit report carrying GDPR, NIS 2, and ISO/IEC 27001 regulatory mappings.

---

## 3. Milestone 3 UI Refinements (Advisor Review)

Following feedback from project advisors during Milestone 2 reviews, the user interface underwent targeted iterations:

- **Public Scan Interface:** Improved dropdown menu visibility and contrast, added clear explanatory text for calculation ranges, and standardized a 0–100 score.
- **Score Normalization:** Replaced letter grades with a standardized 0–100 numerical security score across all screens for seamless cognitive continuity between unauthenticated and authenticated views.
- **Dashboard Modularization:** Separated **Team Dynamics** and **Repository Hygiene** into two distinct, dedicated cards, reducing clutter and clarifying operational boundaries.
- **Remediation Effort Label:** In the Executive Summary and Risk Overview, replaced "Probability" with **Remediation Effort**, reflecting the practical engineering effort required to resolve each threat.

| View | Before (Milestone 2) | After (Milestone 3) |
| :--- | :--- | :--- |
| **Public Scan Page** | ![Public scan before](/img/m3/ui-public-before.png) | ![Public scan after](/img/m3/ui-public-after.png) |
| **Dashboard Risk Overview** | ![Dashboard risk before](/img/m3/ui-dashboard-before.png) | ![Dashboard risk after](/img/m3/ui-dashboard-after.png) |
| **Team Dynamics & Hygiene** | ![Team dynamics before](/img/m3/ui-team-before.png) | ![Team dynamics after](/img/m3/ui-team-after.png) |
| **Interactive DFD View** | ![DFD before](/img/m3/ui-dfd-before.png) | ![DFD after](/img/m3/ui-dfd-after.png) |

---

## 4. Usability & Accessibility Enhancements (WCAG 2.1/2.2)

To ensure universal accessibility and compliance with European accessibility mandates, an audit of the interactive DFD component was conducted in Milestone 3:

| Screen Element | Affected Profile | Problem Identified | WCAG Criterion | Severity | Proposed Technical Fix |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **DFD Arrows & Trust Boundaries** | Blind & Screen Reader Users | Data flow vectors and trust boundaries lacked non-visual text descriptions. | **1.1.1 Non-text Content** | High | Introduced an accompanying structured data flows table, descriptive ARIA labels, and live region announcements for input/output transitions. |
| **Connecting Components** | Motor Impairments, Keyboard Users | Data flow connections could previously only be created via mouse drag-and-drop. | **2.1.1 Keyboard**<br/>**2.5.7 Dragging Movements** | High | Implemented accessible component selection dropdowns and buttons allowing creation and removal of connections solely via keyboard. |
| **Diagram Nodes & Severity** | Color Blindness | Threat severity levels (High, Medium, Low) relied solely on color differentiation. | **1.4.1 Use of Color** | Medium | Implemented multi-modal styling: solid outlines for High severity, dashed outlines for Medium severity, combined with visible text badges. |
