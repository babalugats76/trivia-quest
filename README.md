# Fullstack Explorer: Trivia Game Edition

Welcome to your React development journey! You'll be building an interactive trivia game over 12 sessions using modern web development tools and techniques.

## 🎯 For Students

### 🚀 Quick Start - Launch Your Game!

**After your Codespace loads, run this command in the terminal:**

```bash
npm run dev
```

**Then click "Open in Browser" when the port notification appears!**

---

### Essential Commands

```bash
npm run dev          # Start development server (use this most!)
npm run build        # Build for production
npm run preview      # Preview production build
npm run format       # Clean up your code formatting
npm run format:check # Check code formatting
```

## 🏗️ Project Structure

```
├── src/
│   ├── components/     # React components (GameLogo, SplashScreen, etc.)
│   ├── constants/      # Game constants (screens, messages)
│   ├── context/        # Game state management (GameContext)
│   ├── data/          # Game configuration (zones.js)
│   ├── hooks/         # Custom React hooks (useGame, useAudio)
│   ├── services/      # API integration (api.js)
│   └── styles/        # CSS stylesheets
├── session-guides/   # Detailed guides for each session
├── public/           # Static assets (images, audio)
├── .devcontainer/    # Codespaces configuration
└── .github/workflows/ # GitHub Actions deployment
```

## 📚 Learning Journey - 12 Sessions

### Session 1: Welcome to React Development

**Setting Up Your Trivia Game**

- **Goal**: Experience React's component composition and hot module reloading
- **Key Concepts**: Components, JSX, development environment
- **Tasks**:
  - Follow on-screen instructions to swap `<StartHere />` for `<SplashScreen />`
  - Understand React entry point flow: index.html → main.jsx → App.jsx
  - Experience hot module reloading magic

### Session 2: Creating Reusable Components

**Building Game Components**

- **Goal**: Build reusable GameButton component
- **Key Concepts**: Props, component reusability, React DevTools
- **Tasks**:
  - Create GameButton.jsx with text, onClick, and variant props
  - Replace SplashScreen buttons with GameButton components
  - Install and use React DevTools for component inspection

### Session 3: Shared State with Context

**Managing Game Flow**

- **Goal**: Implement screen navigation using shared state
- **Key Concepts**: State vs props, Context API, constants
- **Tasks**:
  - Use GameContext to manage screen state
  - Navigate between SPLASH and PLAYING screens
  - Understand how shared state controls entire app

### Session 4: Data-Driven Design

**Configuring Game Zones**

- **Goal**: Design zone themes and configure game metadata
- **Key Concepts**: Data-driven architecture, API integration planning
- **Tasks**:
  - Create cohesive zone themes (forest, desert, ice castle)
  - Configure zones.js with categoryId, difficulty, questionCount
  - Use React DevTools to test different zone data

### Session 5: Connecting to External APIs

**Generating Dynamic Questions**

- **Goal**: Fetch trivia questions from Open Trivia Database
- **Key Concepts**: Async JavaScript, fetch(), API documentation
- **Tasks**:
  - Complete fetchQuestions function in api.js
  - Handle URL encoding and data transformation
  - Implement error handling for network requests

### Session 6: Browser Storage & Caching

**Adding Question Caching**

- **Goal**: Implement localStorage caching for better performance
- **Key Concepts**: Browser storage, caching strategies, performance
- **Tasks**:
  - Add caching to fetchQuestions function
  - Integrate cache management with GameContext
  - Test complete game flow with caching

### Session 7: Building Complex Interactive Components

**Creating the Quiz Experience**

- **Goal**: Build QuizModal with scaffolded components
- **Key Concepts**: Component composition, user interaction patterns
- **Tasks**:
  - Create custom feedback constants
  - Complete AnswerFeedback component with randomized messages
  - Connect modal visibility to zone clicks

### Session 8: Application State Management

**Implementing Scoring & Victory**

- **Goal**: Build scoring system and GameOver screen
- **Key Concepts**: Complex state management, game completion logic
- **Tasks**:
  - Add scoring functions to GameContext
  - Create GameOver component with final score display
  - Integrate scoring with quiz interactions

### Session 9: Custom Hooks & Browser APIs

**Adding Theme Music**

- **Goal**: Build reusable audio functionality with custom hooks
- **Key Concepts**: Custom hooks, useRef, HTML5 Audio API
- **Tasks**:
  - Complete useAudio hook for music control
  - Build MusicToggle component
  - Integrate audio system with GameContext

### Session 10: Version Control & Deployment

**Publishing Your Game**

- **Goal**: Deploy game to GitHub Pages
- **Key Concepts**: Git workflow, CI/CD, automated deployment
- **Tasks**:
  - Commit progress with meaningful messages
  - Configure GitHub Pages deployment
  - Test deployed game functionality

### Session 11: Choose Your Adventure

**Extending Your Game**

- **Goal**: Add personal features with AI assistance
- **Key Concepts**: Self-directed learning, AI collaboration
- **Extension Options**:
  - **Starter Mods**: Custom fonts, character swap, instructions modal
  - **Power Mods**: Progress dots, CSS variables, sound effects
  - **Beast Mods**: Player selection, character movement, theme toggle

### Session 12: Project Showcase & Next Steps

**Celebrating Your Achievement**

- **Goal**: Present your game and plan future learning
- **Key Concepts**: Technical presentation, continued learning
- **Activities**:
  - Individual game demonstrations
  - Peer feedback and technical discussion
  - Course reflection and next steps planning

## 💡 Development Tips

### Codespaces Tips

- **Everything Configured**: Dark Dracula theme, extensions, and formatting are pre-configured
- **Terminal Keybindings**: Enable "Send Keybindings to Shell" for smoother terminal experience
- **Port Forwarding**: Development server runs on port 5173 (not 3000)

### React DevTools

1. Install React DevTools browser extension
2. Use Components tab to inspect state and props
3. Great for debugging Context and component hierarchy

### Getting Help

- **Check session-guides/** folder for detailed step-by-step instructions
- Read TODO comments in each file for guidance
- Use console.log() for debugging
- Ask questions during sessions
- Experiment and break things (that's how you learn!)

## 🎯 Success Metrics

By the end of this course, you'll have:

- ✅ A fully functional, deployed trivia game
- ✅ Understanding of React fundamentals (components, state, hooks)
- ✅ Experience with external APIs and async JavaScript
- ✅ Knowledge of modern development tools and workflow
- ✅ A portfolio project you can share with others
- ✅ Confidence to continue learning React and web development

## 🚨 Important Notes

- **Follow the Sessions**: Each builds on the previous one
- **Don't Skip TODOs**: They guide your learning progression
- **Commit Often**: Save progress with meaningful messages
- **Ask Questions**: No question is too small
- **Have Fun**: You're building something awesome!

## 🚀 Deployment

Your game automatically deploys to GitHub Pages at:
`https://USERNAME.github.io/wizcamp-realms-demo/`

---

**Built for Wizcamp's Fullstack Explorer Program**  
Template Version 1.0.0 | 2025

Ready to start your React journey? Let's build something amazing! 🚀
