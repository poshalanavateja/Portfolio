# Poshala Navateja — Software Engineer Portfolio

A modern, high-performance personal portfolio website for **Poshala Navateja**, highlighting expertise in **AI/ML, Multi-Agent Systems, and Scalable Full-Stack Engineering**.

Designed with a sleek "Terminal meets Editorial" dark aesthetic, vibrant electric-lime accents, full-width responsive grid layouts, and smooth micro-interactions.

---

## 🌟 Features

- **Full-Width Responsive Layout:** Seamlessly scales across mobile, tablet, and ultra-wide desktop monitors.
- **Terminal Meets Editorial Design:** Clean typography pairing monospace (`JetBrains Mono`) for tags, code indicators, and nav with a bold display font (`Inter Tight`) for headlines.
- **Interactive Projects Bento Grid:** Showcases flagship multi-agent AI systems, full-stack applications, and machine learning models with real metrics and links.
- **Interactive Navigation & Smooth Scroll:** Sticky blur navigation bar with real-time active section tracking (`Work`, `Stack`, `About`, `Contact`).
- **1-Click Email Clipboard Copy:** Interactive email action with feedback state and direct social links.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing & State:** [TanStack Router](https://tanstack.com/router) & [TanStack Query](https://tanstack.com/query)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom OKLCH color design tokens
- **Typography:** Google Fonts (`Inter Tight` & `JetBrains Mono`)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Projects Highlighted

1. **Multi-Agent AI Vendor Bid Evaluation** *(GDG Agentathon 2025 Flagship)*
   - Multi-agent LLM system using LangChain, LangGraph, FastAPI, and Gemini 2.0 Flash for clause-level vendor compliance analysis and report generation.
2. **Zordr — Campus Food Ordering Ecosystem** *(Lead Developer)*
   - Multi-tenant web/mobile application with RBAC, financial settlements, real-time inventory tracking, React Native, Express, and PostgreSQL. Sold MVP to a client company.
3. **Multimodal Parkinson's Disease Prediction** *(Major Project)*
   - Biomolecular ML system fusing EfficientNetB0 CNN handwriting analysis with Random Forest voice classification (92.3% accuracy, 0.97 recall).
4. **Deepfake Video Detection CNN**
   - EfficientNetB0-based classifier trained on Celeb-DF (v2) dataset with 88.5% validation accuracy.

---

## 💻 Installation & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `bun`

### Installation
```bash
git clone https://github.com/poshalanavateja/Portfolio.git
cd Portfolio
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```

### Build for Production
Generate optimized client & serverless build artifacts:
```bash
npm run build
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Log into [vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your `Portfolio` repository and click **Deploy**.

### Deploy to Netlify
1. Log into [netlify.com](https://netlify.com/) and choose **Import from GitHub**.
2. Set build command to `npm run build` and publish directory to `.output/public`.
3. Click **Deploy Site**.

---

## 📄 License

Created for Poshala Navateja. All rights reserved.
