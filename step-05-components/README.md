# Step 5: Advanced Component Patterns

## Overview

Refactor the To-Do app from Step 4 to use advanced Vue component patterns including slots, composables, and provide/inject.

## Prerequisites

- Completed Step 4 (Vue 3 To-Do app)

## Learning Goals

- Understand and use slots for flexible components
- Create reusable composables
- Use provide/inject for dependency injection
- Apply component design best practices

## Requirements

### Slots
- [ ] Add a default slot to TaskList for custom task rendering
- [ ] Use named slots for header/footer sections
- [ ] Implement scoped slots to expose task data

### Composables
- [ ] Extract task logic into `useTask` composable
- [ ] Create `useLocalStorage` composable for persistence
- [ ] Build `useFilter` composable for filtering logic

### Provide/Inject
- [ ] Provide theme or configuration at app level
- [ ] Inject and use in child components

### Refactoring
- [ ] Improve component API and props design
- [ ] Add proper TypeScript types
- [ ] Document component usage

## Success Criteria

- [ ] TaskList uses slots for flexible rendering
- [ ] At least 2 composables extracted and reused
- [ ] Code is cleaner and more maintainable than Step 4
- [ ] Components are documented with usage examples

## AI Practice

- Compare AI-generated component patterns with your own
- Ask AI to review your composable design
- Use AI to understand advanced Vue patterns
