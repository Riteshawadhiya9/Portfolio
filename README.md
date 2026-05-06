<div align="center">

# ✦ Ritesh Awadhiya — Portfolio

**A modern, immersive personal portfolio built with React + Vite.**  
Animated intro, ambient particles, a floating music player, fluid Framer Motion transitions, and a live contact form — all in a single dark-themed, responsive site.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?logo=framer&logoColor=white&style=flat-square)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4-orange?style=flat-square)](https://www.emailjs.com/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white&style=flat-square)](https://netlify.com)

</div>

---

## 🖼️ Preview

| Section | Highlights |
|---------|-----------|
| **Home** | Typewriter role cycling · Gradient hero text · Floating avatar · Social links |
| **About** | Profile photo · Bio · Quick stats card grid · CTA buttons |
| **Skills** | Icon grid with brand colors · Hover lift animations |
| **Projects** | Responsive 3-column card grid · Live demo & GitHub links |
| **Contact** | EmailJS-powered form · Animated character · Real-time validation |
| **Footer** | Social links & copyright |

---

## ✨ Features

- **Cinematic intro animation** — Full-screen entrance that gates the main content until complete
- **Interactive particles background** — Ambient canvas-based particles on every section
- **Custom cursor** — Replaces the default OS pointer with a stylised cursor
- **Floating music player** — Fixed bottom-right player with play/pause (single tap) and next track (double tap), plus a mini progress bar
- **Typewriter role cycling** — Smoothly types and deletes roles (MERN Stack Developer, Web Developer, Competitive Programmer…)
- **Framer Motion animations** — Scroll-triggered entrance animations on all sections and cards
- **Live contact form** — Powered by [EmailJS](https://www.emailjs.com/) with client-side validation; no backend required
- **Fully responsive** — Mobile-first layout, adapts from 320 px to 4 K screens
- **Overlay navigation menu** — Full-screen nav overlay toggled from the navbar

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | React Icons 5 |
| Email | EmailJS Browser 4 |
| Routing | React Router DOM 7 |
| Linting | ESLint 9 |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Ritesh_Awadhiya.pdf        # Downloadable résumé
├── src/
│   ├── assets/                    # Images used across sections
│   │   ├── avator.png             # Hero floating avatar
│   │   ├── me.jpg                 # About section photo
│   │   ├── astra.png              # Contact section character
│   │   ├── Redefine.png           # Project thumbnail
│   │   ├── Image_Editor.png
│   │   ├── snake_game.png
│   │   ├── Task_Organizer.png
│   │   ├── Notes_project.png
│   │   └── Code-Reviewer.png
│   ├── components/
│   │   ├── CustomCursor.jsx       # Custom mouse cursor
│   │   ├── IntroAnimation.jsx     # Full-screen intro gate
│   │   ├── MusicPlayer.jsx        # Floating audio player
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── OverlayMenu.jsx        # Full-screen overlay nav
│   │   ├── ParticlesBackground.jsx# Canvas particle system
│   │   └── icons/
│   │       └── CustomSocialIcons.jsx # SVG social icons
│   ├── data/
│   │   └── songs.js               # Playlist (title, artist, url)
│   ├── sections/
│   │   ├── Home.jsx               # Hero / landing section
│   │   ├── About.jsx              # Bio, photo, stats, CTAs
│   │   ├── Skills.jsx             # Tech icon grid
│   │   ├── Projects.jsx           # Project cards with links
│   │   ├── Experience.jsx         # (reserved / hidden)
│   │   ├── Testimonials.jsx       # (reserved / hidden)
│   │   ├── Contact.jsx            # EmailJS contact form
│   │   └── Footer.jsx             # Footer with social links
│   ├── App.jsx                    # Root component & layout
│   ├── index.css                  # Global styles
│   └── main.jsx                   # React entry point
├── .env                           # Environment variables (not committed)
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### 1. Clone the repository

```bash
git clone https://github.com/Riteshawadhiya9/Portfolio.git
cd Portfolio/portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root (see [EmailJS setup](#-emailjs-setup) below):

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 EmailJS Setup

The contact form sends emails directly from the browser using [EmailJS](https://www.emailjs.com/) — no server required.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an **Email Service** (Gmail, Outlook, etc.) and copy the **Service ID**
3. Create an **Email Template** and copy the **Template ID**
   - Template variables used: `{{form_name}}`, `{{email}}`, `{{service}}`, `{{idea}}`
4. Copy your **Public Key** from the account dashboard
5. Paste all three values into your `.env` file as shown above

---

## 🎵 Music Player

The floating player in the bottom-right corner reads its playlist from `src/data/songs.js`.

```js
// src/data/songs.js
export const SONGS = [
  {
    title: "Song Title",
    artist: "Artist Name",
    url: "https://link-to-audio-file.mp3",
  },
  // add more tracks...
];
```

**Controls:**
| Action | Result |
|--------|--------|
| Single tap | Play / Pause |
| Double tap | Skip to next track |

The player auto-advances to the next track when a song ends.

---

## 🎨 Customization Guide

| What to change | Where |
|----------------|-------|
| Personal bio & stats | `src/sections/About.jsx` |
| Hero name, roles & social links | `src/sections/Home.jsx` |
| Projects (title, description, tech, links) | `src/sections/Projects.jsx` → `projectsData` array |
| Skills / tech icons | `src/sections/Skills.jsx` → `skills` array |
| Contact form fields | `src/sections/Contact.jsx` |
| Navigation links | `src/components/Navbar.jsx` & `src/components/OverlayMenu.jsx` |
| Music playlist | `src/data/songs.js` |
| Particle density & behaviour | `src/components/ParticlesBackground.jsx` |
| Intro animation timing | `src/components/IntroAnimation.jsx` |
| Cursor style | `src/components/CustomCursor.jsx` |
| Global colours / fonts | `src/index.css` |
| Résumé / CV file | Replace `public/Ritesh_Awadhiya.pdf` |
| Avatar & profile photos | Replace files in `src/assets/` and update imports |

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Run ESLint across the codebase |

---

## 🌐 Deployment

This is a fully static site after `npm run build`. Deploy the generated `dist/` folder to any static host:

### Netlify (recommended)

```bash
npm run build
# Drag and drop the dist/ folder at app.netlify.com/drop
```

Or connect your GitHub repo to Netlify for automatic deployments on every push.

### Vercel

```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages

```bash
npm run build
# Push the dist/ contents to the gh-pages branch
```

> 💡 Remember to set your environment variables in the hosting platform's dashboard — they are not included in the build output.

---

## 🗂️ Featured Projects

| Project | Stack | Links |
|---------|-------|-------|
| **3D Gaming Website** | React · Three.js · GSAP · Framer Motion · Tailwind | [GitHub](https://github.com/Riteshawadhiya9/3D_Gaming_Website) · [Live](https://redefine-gaming26.netlify.app/) |
| **AI Code Reviewer** | React · Node.js · Express · Gemini API | [GitHub](https://github.com/Riteshawadhiya9/Code_Reviewer) |
| **Image Editor** | HTML · CSS · JavaScript | [GitHub](https://github.com/Riteshawadhiya9/Image-Editor) · [Live](https://image-editor26.netlify.app/) |
| **Snake Game** | HTML · CSS · JavaScript | [GitHub](https://github.com/Riteshawadhiya9/Snake_Game) · [Live](https://snakeio26.netlify.app/) |
| **Notes App** | React · Vite · Tailwind CSS | [GitHub](https://github.com/Riteshawadhiya9/Notes_Project) · [Live](https://notes-project-43.vercel.app/) |

---

## 📬 Contact

| Platform | Link |
|----------|------|
| GitHub | [@Riteshawadhiya9](https://github.com/Riteshawadhiya9) |
| Portfolio | [codolio.com/profile/Riteshawadhiya](https://codolio.com/profile/Riteshawadhiya) |

Or use the **Contact** form on the live site to send a message directly.

---

## 📄 License

This project is not currently under an open-source license.  
Feel free to use it as inspiration — but please don't publish it as your own work without permission.

---

<div align="center">
  Made with ❤️ by <strong>Ritesh Awadhiya</strong>
</div>
