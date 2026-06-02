# Eduard James Alvarez - Portfolio

A modern, animated portfolio landing page built with React, TypeScript, and Framer Motion. Perfect for showcasing your skills and projects as a fresh graduate in Information Technology.

## 🎨 Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Fully Responsive**: Mobile-friendly layout that works on all devices
- **Framer Motion Animations**: Engaging scroll animations and interactive elements
- **Smooth Navigation**: Fixed navigation with smooth scrolling between sections
- **Professional Sections**:
  - Hero section with animated background
  - About section with personal information
  - Skills showcase organized by categories
  - Projects portfolio with descriptions
  - Contact form for inquiries
  - Footer with social links

## 🚀 Tech Stack

- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Framer Motion**: Animation library for React
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next generation frontend tooling

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

## 🎯 Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173/`

## 🔧 Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Fixed navigation bar
│   ├── Hero.tsx          # Hero/landing section
│   ├── About.tsx         # About me section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Projects portfolio
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer with social links
├── styles/
│   └── globals.css       # Global styles and Tailwind
├── App.tsx               # Main app component
└── main.tsx              # Entry point
```

## 🎨 Customization

### Update Personal Information
Edit the components to add your information:
- Update name, email, and social links in `Navigation.tsx`
- Modify bio and highlights in `About.tsx`
- Add your real projects in `Projects.tsx`
- Update contact information in `Contact.tsx`

### Modify Colors
Colors can be customized by changing the Tailwind gradient classes:
- Blue: `from-blue-400 to-cyan-400`
- Modify these classes in any component

### Add New Projects
Edit `Projects.tsx` and add to the `projects` array with:
- Title and description
- Technologies used
- Icon emoji
- Color scheme

## 📞 Contact Form

The contact form is currently set up to log messages to the console. To make it functional, integrate with a backend service like:
- Formspree
- Emailjs
- Your own backend API

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist` folder to Netlify
3. Your portfolio is live!

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev)

## ✨ Tips

- Customize the emoji icons in each section to match your personality
- Add real project links and descriptions
- Update the contact information with your actual details
- Consider adding a blog section or more detailed project pages
- Add real images instead of emoji placeholders

## 📄 License

This project is open source and available for personal use.

---

**Built by**: Eduard James Alvarez
**Created**: 2025
