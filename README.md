# Carbon Crunch

![Carbon Crunch](https://raw.githubusercontent.com/yourusername/carbon-crunch/main/public/images/earth-bell-jar.png)

## 🌍 Overview

Carbon Crunch is an interactive web application focused on carbon emissions tracking and sustainability reporting. The platform features an artistic parallax slider animation with a striking bell jar visualization, symbolizing Earth's vulnerability to industrial pollution and climate change.

## 🚀 Live Demo

[View Live Demo](https://carbon-crunch.vercel.app/)

## ✨ Key Features

- **Interactive Parallax Animation**: Visually compelling Earth-in-bell-jar visualization that responds to user scrolling
- **Comprehensive Emissions Dashboard**: Track and analyze carbon footprint metrics
- **Responsive Design**: Fully optimized for all device sizes (mobile, tablet, desktop)
- **Data Visualization**: Intuitive statistics section highlighting key environmental metrics
- **Solution Showcase**: Detailed presentation of sustainability features and tools
- **Performance Optimized**: Fast loading times with Next.js optimizations

## 🛠️ Technologies

- **Frontend Framework**: [Next.js 15.2.3](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**:
  - [Framer Motion](https://www.framer.com/motion/) for UI animations
  - [GSAP](https://greensock.com/gsap/) for advanced parallax effects
- **Development**: ESLint v9 with Next.js configuration

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/carbon-crunch.git
   cd carbon-crunch
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
carbon-crunch/
├── public/              # Static assets
│   ├── images/          # Application images
│   ├── globe.svg        # SVG icons
│   └── ...
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   │   └── features/    # Features page
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx   # Navigation component
│   │   ├── Footer.tsx   # Footer component
│   │   ├── ParallaxSlider.tsx  # Main visual element
│   │   └── ...
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## 🧠 Implementation Details

### Parallax Animation

The centerpiece of Carbon Crunch is the Earth-in-bell-jar animation that creates a compelling visual metaphor for climate change. The implementation uses:

- GSAP ScrollTrigger for scroll-based animations
- Framer Motion for smooth transitions and micro-interactions
- Dynamic opacity and position changes based on scroll position

### Performance Optimizations

- Image optimization via Next.js Image component
- Component-level code splitting
- Tailwind for efficient CSS delivery
- Turbopack for faster development experience

## ⚙️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 📸 Screenshots

*[Add screenshots here after deployment]*

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Developed with ❤️ by [Your Name]
