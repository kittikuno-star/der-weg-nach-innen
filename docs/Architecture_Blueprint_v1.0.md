# Architecture Blueprint v1.0

**Project:** DER-WEG-NACH-INNEN-WEB

> Living Document -- This blueprint defines the architectural principles
> for the entire project.

------------------------------------------------------------------------

# 1. Vision

The project is not only a website. It is the foundation of a reusable
digital platform for Buddhist organizations.

## Goals

-   Build a scalable architecture.
-   Reuse components across all pages.
-   Separate content from presentation.
-   Keep long-term maintainability as the highest priority.

------------------------------------------------------------------------

# 2. Architectural Principles

## Separation of Concerns

    Content
        ↓
    Data
        ↓
    Page
        ↓
    Section
        ↓
    UI

Each layer has a single responsibility.

## Reusability

Generic components are preferred over page-specific implementations.

Examples:

-   `PageHero`
-   `PageSection`
-   `ImageTextSection`
-   `FeatureGrid`
-   `Timeline`
-   `PageCTA`

## Consistency

Every page should follow the same structure.

    Hero
    ↓
    Content Sections
    ↓
    CTA
    ↓
    Footer

------------------------------------------------------------------------

# 3. Folder Architecture

``` text
app/
components/
content/
data/
docs/
lib/
public/
types/
```

Each folder has a clearly defined responsibility.

------------------------------------------------------------------------

# 4. Design Philosophy

The experience should feel:

-   Calm
-   Premium
-   Minimal
-   Timeless
-   Accessible

Avoid unnecessary visual effects.

------------------------------------------------------------------------

# 5. Component Rules

-   UI components contain no business logic.
-   Sections compose pages.
-   Pages orchestrate sections.
-   Data lives in `/data`.
-   Shared types live in `/types`.
-   Shared utilities live in `/lib`.

------------------------------------------------------------------------

# 6. Coding Standards

-   Strong TypeScript typing.
-   Predictable naming.
-   Small focused components.
-   No duplicated content.
-   Documentation accompanies architectural changes.

------------------------------------------------------------------------

# 7. Current Assessment

  Area                  Status
  --------------------- -----------
  Folder Structure      Excellent
  Component Structure   Excellent
  Data Layer            Excellent
  Scalability           Excellent
  Reusability           Excellent
  Refactoring Need      Low

Current recommendation:

**Standardize the architecture instead of performing large
refactoring.**

------------------------------------------------------------------------

# 8. Long-Term Roadmap

## Version 1

-   Core pages
-   Design System
-   Markdown articles

## Version 2

-   Multi-language
-   Advanced SEO
-   Search

## Version 3

-   Shared framework for multiple temples
-   CMS integration
-   Reusable deployment template

------------------------------------------------------------------------

# 9. Living Document

This document will evolve together with the project. Every architectural
decision should be reflected here before major implementation changes.