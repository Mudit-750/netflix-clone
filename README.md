# Netflix Clone

A Netflix clone built using **React.js** and **Firebase**. This project allows users to browse movies, view movie details, and even log in using Google authentication.

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## About the Project

This is a Netflix clone application where users can view movie information, including the title, poster, and background, just like the popular streaming service. The app features:
- Movie browsing with infinite scroll.
- User authentication via Firebase.
- Viewing movie trailers and descriptions.
- Styling that mimics the Netflix UI.

The application uses **React.js** for the frontend and **Firebase** for authentication and data storage.

## Features

- **Authentication**: Users can log in using their Google account via Firebase Authentication.
- **Movie Listing**: Movies are fetched from The Movie Database (TMDb) API and displayed in different categories (e.g., Trending, Originals, Top Rated).
- **Responsive Design**: Fully responsive design to work on various screen sizes.
- **Trailer Preview**: Click on movies to watch trailers, and view detailed movie information.
- **Infinite Scroll**: Scrollable movie list to load more content as you go.

## Tech Stack

- **Frontend**: React.js, React Router
- **Backend**: Firebase (Authentication, Firestore)
- **APIs**: The Movie Database (TMDb) API
- **Styling**: CSS, Flexbox, and custom styles
- **Tools**: Firebase Console, React Developer Tools, VSCode

## Setup Instructions

### Prerequisites

- Make sure you have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).
- You'll also need **Firebase** and **TMDb API** credentials.

### Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   npm install
   npm run dev

## 🔐 Environment Variables

To run this project locally, you’ll need to create a `.env` file in the root directory with the following variables:

```env
# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# TMDB API
VITE_TMDB_API_KEY=your_tmdb_api_key
```
**You can copy the structure from .env.example provided in the repo.

