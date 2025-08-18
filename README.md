# Lumina UI


**Lumina UI** is a mini React component library built with **React**, **TypeScript**, **Tailwind CSS**, and **Storybook**.  
It showcases an **InputField** and a **DataTable** component with support for light and dark themes, accessibility, and testing.

---

## 🚀 Tech Stack
- **React** (with TypeScript)
- **Tailwind CSS** (utility-first styling)
- **Storybook** (component documentation & preview)
- **Jest + React Testing Library** (unit tests)
- **Vercel / GitHub Pages** (deployment)

---

## 📂 Project Structure
src/
├─ components/
│ ├─ InputField.tsx
│ ├─ DataTable.tsx
│ └─ ...
| ├─ __tests__/ (Jest + RTL tests)
├─ stories/ (Storybook stories)

└─ index.css (global styles with theme variables)


---

## ✨ Features
- **InputField**
  - Variants: Outlined, Filled, Ghost
  - Sizes: Small, Medium, Large
  - States: Disabled, Invalid, Loading
  - Optional Clear button & Password toggle
  - Accessible with labels, helper text, and error messages

- **DataTable**
  - Sortable column headers
  - Row selection with checkboxes
  - Light & Dark mode support
  - Empty state & loading state
  - Accessible with roles & labels

- **Theme Support**
  - Light and Dark mode using CSS variables
  - Customizable colors (`index.css`)

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/lumina-ui.git
cd lumina-ui
```
### 2. Install dependencies
```bash
npm install
```

### 3. Run Storybook
```bash
npm run storybook
```
`Storybook will start at http://localhost:6006.`

### 4. Run tests
```bash
npm test
```

### 5. Build Storybook (for deployment)
```bash
npm run build-storybook
```

## 🌐 Deployment
The Storybook build (storybook-static/) can be deployed on:
- Vercel (recommended)
- GitHub Pages
- Netlify

## 👤 Author

Name: CHINMAYA CHIDAMBER SAHOO
GitHub: @Chinmaya-Chidamber
