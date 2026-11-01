---
id: mockups
title: UI Mockups
sidebar_label: UI Mockups
slug: /documentation/mockups
---

# UI Mockups

- **Browser Extension:** paste a public repository URL, run the scan and get a posture score, STRIDE and LINDDUN indicators and the critical findings, with a link to the full report on the website.
- **Web App:** landing page, sign-in, list of repositories with security scores, and a per-repository dashboard with three views: Threat Modeling & Architectural Posture, Inferred Architecture & DFD, and Team Dynamics & Repository Hygiene.
- **Exportable report:** a formal audit document with executive summary, STRIDE and LINDDUN tables, DFD, team hygiene and SLM mitigations.
- Every screen has a chatbot button for the AI assistant, and the interface supports light and dark mode.

### Browser Extension
![Browser Extension: welcome screen and scan result](/img/m2/mockup-extension.png)

### Web App
![Landing page](/img/m2/web-landing.jpg)

![Sign-in with GitHub or account](/img/m2/web-login.jpg)

![Repository overview with security scores](/img/m2/web-repositories.jpg)

![Dashboard: threat modeling and posture](/img/m2/web-dashboard.jpg)

![Dashboard: inferred architecture and DFD](/img/m2/web-dfd.jpg)

![Dashboard: team dynamics and hygiene](/img/m2/web-team.jpg)

### Exportable report
![PDF audit report, page 1](/img/m2/web-report-1.jpg)

![PDF audit report, page 2](/img/m2/web-report-2.jpg)

---

## Interactive prototype
- Besides the static mockups, we built a clickable web prototype (React and Vite) that covers the whole journey: landing, sign-in, repositories, dashboard and report.
- **Try it:** [interactive mockup](https://noise-plot-73663438.figma.site/).
- Branch selector, analysis history and a scan trigger.
- Mark as False Positive with a mandatory technical justification.
- A chatbot panel that answers questions about the findings.
- A DFD canvas where entities, processes and data stores can be added and moved.
- A printable audit report where each finding carries its GDPR, NIS 2 and ISO/IEC 27001 references.
