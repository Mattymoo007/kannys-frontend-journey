# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

A 12-week frontend training programme for becoming a full-stack AI-powered frontend developer. Uses Vue 3 + Nuxt 3 stack with AI integration throughout.

## Project Structure

```
├── docs/resources.md           # Curated learning links
├── progress/                   # Weekly logs and milestones
├── step-01-css-layouts/        # Company homepage (HTML/CSS)
├── step-02-javascript/         # RGB Guesser game (vanilla JS)
├── step-03-git-workflow/       # Git/GitHub learning
├── step-04-vue-basics/         # Vue 3 To-Do app
├── step-05-components/         # Slots, composables, provide/inject
├── step-06-state-pinia/        # Pinia state management
├── step-07-nuxt-basics/        # Nuxt 3 conversion
├── step-08-api-integration/    # Weather dashboard with external API
├── step-09-ai-features/        # LLM API integration (Claude/OpenAI)
├── step-10-production/         # Deployment and CI/CD
```

## Current Tech

- **Step 1-2**: Vanilla HTML/CSS/JS (no build tools)
- **Step 4-6**: Vue 3 with Composition API, Pinia
- **Step 7-10**: Nuxt 3

## Workflow

- Each step uses feature branches: `step-XX-name`
- Pull requests for code review
- Weekly check-ins logged in `progress/weekly-log.md`

## Step 2 RGB Game

Located in `step-02-javascript/`. Generates random RGB color, shows 6 options, player has 3 attempts to guess correct color.
