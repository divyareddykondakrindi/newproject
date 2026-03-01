# PCOD + Prediabetes Tracker

A React-based health tracking application designed for managing PCOD (Polycystic Ovary Disease) and Prediabetes conditions.

## Features

- 📋 **30-Day Meal Plan Tracking**: Monitor meals, water intake, and workouts daily
- 📊 **Weight Progress Chart**: Visualize weight changes over time
- 📈 **Consistency Tracking**: Track your consistency percentage across the 30 days
- 💾 **Local Storage**: All data is saved locally in your browser
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Installation

1. Clone the repository:
```bash
git clone https://github.com/divyareddykondakrindi/newproject.git
cd newproject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is set up for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment
```bash
npm run build
npm run deploy
```

### Automatic Deployment
Every push to the `main` branch will automatically trigger a deployment to GitHub Pages.

## Usage

- Check off meals as you consume them
- Log your daily water intake
- Mark workout completion
- Record your daily weight
- View charts for progress tracking

## Technology Stack

- React 18
- Chart.js & react-chartjs-2 for data visualization
- localStorage for data persistence
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## Live Demo

Visit: https://divyareddykondakrindi.github.io/newproject