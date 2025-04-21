Dragons be here. Very much WIP.
For me: // framework comparison

// Preact
// Solid

---

- Uniform components (JSX ideally)
- Async calls during init (fetch during mount)
- Async event handlers

---

- SSR support
- Bundle size / embedding

---

## Summary:

1. We are sort-of biased towards Solid
2. SSR is "hackable"
   1. Long-term, it's definitely "standards" solvable, so we're not locking ourselves out of anything
3. Bundle size is in favor of Solid
4. Async stuff _feels_ nicer in Solid (think react-query)
5. Moving _fully_ to Solid is a non-trivial amount of work, but doable

## Full vs. partial

- Partial:
  - Users suffer only an increased bundle size (until the transition is complete)
  - It's harder to maintain (basically, two codebases)
  - A potential path to this would be compile to web components from Solid, replace React components in the SDK.
- Full:
  - A lot of upfront work
  - A single transition (to a single codebase)
  - Feature halt or duplicated work until the transition is complete
