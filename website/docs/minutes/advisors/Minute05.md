---
id: minute-05
title: Minute 05 - 30/09
sidebar_label: Minute 05 - 30/09
slug: /minutes/minute-05
---

# Minute 05

- **Date:** 30/09/2026
- **Start:** 15h30
- **End:** 16h00
- **Location:** Open Space IEETA

## Participants
- **Team:** Margarida Cardoso, Artur Yavorskyy, Gil Ernesto, Nuno Costa, Tiago Costa
- **Advisors:** Raquel Paradinha, José Gameiro

## Objective of the meeting
Review project status, validate high-level architecture decisions, and clarify expectations for Milestone 2 deliverables.

## Agenda
1. Clarification of the Small Language Model (SLM) role within the architecture.
2. Review and validation of the High-Level System Architecture.
3. Definition of Milestone 2 scope: Mockups, Stateless vs. Stateful platform.
4. Deployment requirements, infrastructure, and repository management strategy.
5. Review of slogan/catchphrase and documentation standards for the Microsite.


## Decisions taken
- **SLM Integration:** The SLM will operate both as an interactive chatbot and as an assistive engine embedded in the reporting pipeline to suggest technical mitigations.
- **Architecture & Modeling:** 
  - Adopt architectural principles informed by established references (MotionSuit style, OWASP DFD open-source baseline).
  - High-level architecture and domain baseline must be shared with advisors.
- **Platform & Mockup Priorities:**
  - Editing capabilities for DFDs and historical tracking will be strictly gated behind authentication. Public mode remains stateless and read-only.
- **Deployment & Repositories:**
  - Deployment will rely on Docker containers; server availability confirmed for upcoming milestones.
  - Adopt a multi-repository model (one repository per component) coordinated via Git submodules.

## Next meeting
- **Date:** Tuesday, 06/10/2026
- **Time:** 10h
- **Purpose:** Follow-up on Milestone 2 deliverables and status review.


