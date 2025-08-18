# React Component Development Assignment

Two reusable components built with React, TypeScript, Tailwind, and Storybook.

- **InputField**: flexible input with variants, sizes, states, clear button, password toggle.
- **DataTable**: tabular data with sorting, row selection, loading and empty states.

## Tech
- React + TypeScript + Vite
- Tailwind CSS
- Storybook 8 (react-vite)
- Vitest + Testing Library

## Getting Started

```bash
# 1) Install deps
npm install

# 2) Run the app
npm run dev

# 3) Storybook
npm run storybook

# 4) Tests
npm test
```

## Folder Structure

```
src/
  components/
    DataTable.tsx
    InputField.tsx
    __tests__/
      DataTable.test.tsx
      InputField.test.tsx
  stories/
    DataTable.stories.tsx
    InputField.stories.tsx
  App.tsx
  index.css
  main.tsx
  setupTests.ts
.storybook/
  main.ts
  preview.ts
```

## Accessibility
- Input uses `aria-invalid`, `aria-busy`, and associates label with input via `htmlFor`.
- Table headers expose `aria-sort`. Rows use `aria-selected` when selected.

## Deploy Storybook
- Chromatic or Vercel will work. Build with `npm run build-storybook`.
- Deploy the generated `storybook-static` folder.

## Notes
- The DataTable expects rows to have an `id` for selection. If missing, it will fallback to index keys.
- Adjust Tailwind design tokens in `tailwind.config.ts` as needed.
