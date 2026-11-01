---
id: minute-10
title: Minute 10 - 29/10
sidebar_label: Minute 10 - 29/10
slug: /minutes/minute-10
---

# Minute 10

- **Date:** 29/10/2026
- **Start:** 17h00
- **End:** 18h10
- **Location:** IEETA
- **Participants:**
  - **Team:** Margarida Cardoso, Artur Yavorskyy, Gil Ernesto, Nuno Costa, Tiago Costa
  - **Advisors:** José Gameiro 

## Objective of the meeting
Review UI/UX mockups (both unauthenticated public page and authenticated dashboard), verify LINDDUN licensing requirements, and align on GitHub project organization rules and microsite structure.

## Agenda
1. Review and feedback on the public unauthenticated page.
2. Review and feedback on the authenticated dashboard.
3. LINDDUN framework licensing compliance.
4. GitHub project tracking, issue management, and branch protection rules.
5. Microsite updates and documentation structure.

## Decisions taken

- **Public Page (Without Login):**
  - Improve the visibility of the dropdown menu so it is easily distinguishable.
  - Clarify the grading scale (explicitly indicate the score range and explain how it is calculated).
  - Increase label font sizes and apply bold styling to improve legibility.
  - Ensure full responsiveness across different screen sizes.
  - Define a cohesive color palette that transitions smoothly between light and dark modes.

- **Authenticated Dashboard (With Login):**
  - Enlarge section titles for "Healthy project" and "Need attention", reducing redundant whitespace.
  - Standardize the "Security score" metric: use a consistent 0–100 numerical scale across both public and authenticated views (avoiding letter grades in one and numbers in the other).
  - In "Executive summary and risk overview", remove the file label (apply the same cleanup to the unauthenticated view).
  - In "Executive summary and risk overview", rename "Probability" to a clearer label reflecting the estimated effort/work required for resolution.
  - Separate "Team Dynamics" and "Repository Hygiene" into distinct sections.

- **GitHub & Project Organization:**
  - Keep GitHub Projects board updated continuously.
  - Enforce labels and detailed descriptions for all issues.
  - Configure dedicated project views for each milestone.
  - Enforce branch protection rules on GitHub (no direct commits to `main` and `dev` branches; all changes must go through pull requests).

- **Microsite & Documentation:**
  - Add a link to the microsite in the GitHub repository.
  - Create dedicated tabs/pages for Personas, Functional Requirements, etc., in the microsite.
  - Complete and publish the missing meeting minutes.

## Next meeting
- **Date:** Monday, 02/11/2026
- **Time:** 14h00
