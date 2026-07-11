# Koonji Infotech - Creative Advertising Agency

A premium, modern, and highly responsive web application built for **Koonji Infotech**, Nepal's premier creative advertising and digital marketing agency.

The platform features a stunning UI built with React (Vite), Tailwind CSS, and Framer Motion, backed by a robust Node.js/Express API and MongoDB database.

## 🚀 Features

- **Premium UI/UX:** Glassmorphism, subtle micro-animations, and a cohesive design system.
- **Fully Responsive:** Mobile-first design that perfectly adapts to phones, tablets, and large desktop screens.
- **Dynamic Content:** Services, Portfolio, Blog, and Team data fetched dynamically from the API.
- **Graceful Fallbacks:** If the backend is offline (e.g., during static hosting on Vercel), the application gracefully falls back to rich, static data so the site never looks broken.
- **Interactive Chatbot Widget:** A sleek, animated floating demo chatbot for customer inquiries.
- **SEO Optimized:** Implements standard SEO practices with `react-helmet-async` for dynamic meta tags.

## 🛠 Tech Stack

**Frontend:**
- React 18 (via Vite)
- Tailwind CSS v4
- Framer Motion (Animations)
- React Router DOM
- React Icons

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database & ORM)
- CORS & dotenv

## 📦 Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v18 or higher)
- MongoDB (running locally, or a MongoDB Atlas connection string)

## 💻 Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/koonji-infotech.git
cd koonji-infotech
```

### 2. Setup the Backend
Open a new terminal window and navigate to the `server` directory:
```bash
cd server
npm install
```
Create a `.env` file in the `server` root and add your MongoDB URI:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/koonji
```

**Seed the Database:**
To populate your database with dummy data for Services, Team, Blog, and Portfolio:
```bash
npm run seed
```

**Start the Server:**
```bash
npm run dev
```

### 3. Setup the Frontend
Open a second terminal window and navigate to the `client` directory:
```bash
cd client
npm install
```
Start the Vite development server:
```bash
npm run dev
```

The frontend will be running at `http://localhost:5173` and the backend at `http://localhost:5000`.

## 🌐 Deployment (Vercel)

The frontend is specifically designed to be deployed to Vercel easily, even if you do not host the backend. The application uses smart fallback arrays, meaning it will serve static content if the API is unreachable.

1. Push this repository to GitHub.
2. Log into [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. **Important:** In the Vercel project settings, set the **Root Directory** to `client`.
5. Ensure the Framework Preset is set to **Vite**.
6. Click **Deploy**!

---
*Designed & Built for Koonji Infotech.*
