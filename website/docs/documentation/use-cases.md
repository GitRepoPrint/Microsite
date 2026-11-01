---
id: use-cases
title: Use Cases & User Stories
sidebar_label: Use Cases
slug: /documentation/use-cases
---

# Use Cases & User Stories

Every use case comes from one user story. The main flow of each one is summarized below.

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
