# IMDb Watchlist App

This project is an exploration of five different front-end frameworks by creating a Watchlist App similar to IMDb Watchlist in each one with local storage as a mock database. The frameworks used are:
- Vanilla JavaScript
- React
- Angular
- Vue
- Svelte

## Purpose

The purpose of this project is to learn and compare how different frameworks handle common front-end development tasks such as state management, event handling, lifecycle management, and data binding.

## Frameworks Used

### 1. Vanilla JavaScript
**Pros:**
- No dependencies, pure JavaScript.
- Full control over the implementation.

**Cons:**
- More verbose and time-consuming to write.
- Manual DOM manipulation can be error-prone and harder to maintain.

### 2. React
**Pros:**
- Component-based architecture promotes reusability.
- Strong community and ecosystem.
- Excellent for state management with hooks and context.

**Cons:**
- JSX syntax can be confusing for beginners.
- Requires a build step and can be complex to set up initially.

### 3. Angular
**Pros:**
- Comprehensive framework with everything included (routing, state management, HTTP client).
- Strong typing with TypeScript.
- Dependency injection is built-in.

**Cons:**
- Steep learning curve due to its complexity.
- Can be overkill for small projects.

### 4. Vue
**Pros:**
- Simplicity and ease of integration.
- Reactive data binding and computed properties.
- Flexible and progressive framework.

**Cons:**
- Smaller ecosystem compared to React and Angular.
- Can be less performant in very large applications.

### 5. Svelte
**Pros:**
- No virtual DOM, compiles to highly efficient vanilla JavaScript.
- Reactive statements and stores for state management.
- Very simple syntax and smaller bundle size.

**Cons:**
- Smaller community and ecosystem.
- Less mature compared to React, Angular, and Vue.

## State Management

- **Vanilla JavaScript:** State is managed manually using variables and updating the DOM directly.
- **React:** Uses hooks (useState, useReducer) and context API for state management.
- **Angular:** Uses services and RxJS for state management.
- **Vue:** Uses reactive data properties and Vuex for larger state management needs.
- **Svelte:** Uses reactive statements and writable stores for state management.

## Event Handling

- **Vanilla JavaScript:** Event listeners are added manually to DOM elements.
- **React:** Event handlers are added as properties on JSX elements (e.g., `onClick`).
- **Angular:** Uses Angular's event binding syntax (e.g., `(click)="methodName()"`).
- **Vue:** Uses Vue's directive syntax (e.g., `v-on:click="methodName"`).
- **Svelte:** Uses a simple syntax for event handling (e.g., `on:click={methodName}`).

## Lifecycle Management

- **Vanilla JavaScript:** Manual handling of component lifecycle (e.g., setting up and tearing down event listeners).
- **React:** Uses lifecycle methods in class components or hooks (useEffect) in functional components.
- **Angular:** Uses lifecycle hooks (e.g., `ngOnInit`, `ngOnDestroy`).
- **Vue:** Uses lifecycle hooks (e.g., `created`, `mounted`, `destroyed`).
- **Svelte:** Uses lifecycle functions (e.g., `onMount`, `onDestroy`).

## Data Binding

- **Vanilla JavaScript:** Manual DOM manipulation to bind data.
- **React:** One-way data binding with props and state.
- **Angular:** Two-way data binding with `ngModel`.
- **Vue:** Two-way data binding with `v-model`.
- **Svelte:** Two-way data binding with `bind:` syntax.

## My Preference

I liked Svelte the best because of its simplicity and the fact that it compiles to highly efficient vanilla JavaScript. The reactive statements and stores in Svelte make state management straightforward, and the smaller bundle size improves performance. Additionally, the syntax is clean and easy to learn, making development a more enjoyable experience.

## Installation and Usage

To run any of the apps, navigate to the respective directory and follow the instructions in its README or use the following general steps:

1. **Install dependencies**:
   ```sh
   npm install
