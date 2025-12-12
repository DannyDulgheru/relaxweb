# Moodlody 🎵

[![Build Status](https://github.com/DannyDulgheru/relaxweb/workflows/CI/badge.svg)](https://github.com/DannyDulgheru/relaxweb/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.4-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13.1.2-black)](https://nextjs.org/)

> An immersive web application with nature sounds to help you focus, sleep, relax and relieve stress.

![Moodlody App](https://img.shields.io/badge/Status-Active-success)

## 🌟 Features

- **16 Nature Sounds**: Rain, Thunder, Train, Birds, Fire, Night, Cafe, Snow, Airplane, Fan, River, Leaves, Wind, Walk, Waves, and White Noise
- **Multi-Sound Mixing**: Play up to 5 sounds simultaneously for a custom ambient experience
- **Volume Control**: Individual volume sliders for each active sound
- **Shuffle Mode**: Randomly discover sound combinations
- **Mute/Unmute**: Quick audio control across all sounds
- **Progressive Web App (PWA)**: Install and use offline on any device
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient background with smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- Yarn package manager (or npm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DannyDulgheru/relaxweb.git
   cd relaxweb
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint to check code quality
- `yarn test` - Run test suite (coming soon)

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy Moodlody is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DannyDulgheru/relaxweb)

### Deploy on Netlify

1. Build the application:
   ```bash
   yarn build
   ```
2. Deploy the `.next` folder to Netlify
3. Configure the build command: `yarn build`
4. Set the publish directory: `.next`

### Other Platforms

Moodlody can be deployed on any platform that supports Next.js applications, including:
- AWS Amplify
- Google Cloud Platform
- Heroku
- DigitalOcean

## 🛠️ Technology Stack

- **Framework**: [Next.js 13](https://nextjs.org/) (with experimental App Directory)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Material-UI](https://mui.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa)
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
relaxweb/
├── app/                    # Next.js 13 app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── head.tsx           # HTML head configuration
├── components/            # React components
│   ├── sound/            # Sound-related components
│   │   ├── Sound.tsx     # Individual sound player
│   │   ├── SoundList.tsx # Sound list container
│   │   └── SoundPlayer.tsx # Sound player wrapper
│   └── footer/           # Footer component
├── public/               # Static assets
│   ├── sounds/          # Audio files
│   └── assets/          # Icons and images
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── package.json         # Dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Sound files sourced from royalty-free libraries
- Inspired by ambient sound applications like Noisli and myNoise
- Built with the amazing Next.js and React ecosystem

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ❤️ by the Moodlody team
