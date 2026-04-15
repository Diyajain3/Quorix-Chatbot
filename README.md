<div align="center">

<br />

```
 ██████╗ ██╗   ██╗ ██████╗ ██████╗ ██╗██╗  ██╗
██╔═══██╗██║   ██║██╔═══██╗██╔══██╗██║╚██╗██╔╝
██║   ██║██║   ██║██║   ██║██████╔╝██║ ╚███╔╝ 
██║▄▄ ██║██║   ██║██║   ██║██╔══██╗██║ ██╔██╗ 
╚██████╔╝╚██████╔╝╚██████╔╝██║  ██║██║██╔╝ ██╗
 ╚══▀▀═╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
```

**An intelligent, full-stack conversational AI chatbot built on the MERN stack.**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/Diyajain3/Quorix-Chatbot/pulls)

<br />

[Live Demo](https://quorixchatbotbydiya.vercel.app/) · [Report a Bug](https://github.com/Diyajain3/Quorix-Chatbot/issues) · [Request a Feature](https://github.com/Diyajain3/Quorix-Chatbot/issues)

</div>

---

## Overview

**Quorix** is a production-ready, full-stack AI chatbot that enables users to hold intelligent, context-aware conversations in real time. With a React frontend, a Node.js/Express backend, and MongoDB for persistence, Quorix is built to be fast, scalable, and easy to extend.

Whether you're integrating it into an existing product or using it as a learning foundation for AI-powered apps, Quorix is architected to grow with your needs.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Features

| Feature | Description |
|---|---|
| 💬 **Real-time Chat** | Smooth, responsive messaging with instant AI feedback |
| 🧠 **AI-Powered Responses** | Integrated NLP/AI backend for intelligent, context-aware replies |
| 🔐 **JWT Authentication** | Secure user registration and login with token-based sessions |
| 📜 **Persistent Chat History** | All conversations stored and retrievable via MongoDB |
| 🌐 **RESTful API** | Clean, well-structured Express.js API for all backend operations |
| 📱 **Responsive UI** | Fully adaptive design that works across desktop and mobile |
| ⚡ **High Performance** | Optimized Node.js backend built for concurrent workloads |

---

## Tech Stack

```
┌─────────────┬──────────────────────────────────────┐
│ Layer        │ Technology                           │
├─────────────┼──────────────────────────────────────┤
│ Frontend     │ React.js · Tailwind CSS              │
│ Backend      │ Node.js · Express.js                 │
│ Database     │ MongoDB · Mongoose ODM               │
│ Auth         │ JSON Web Tokens (JWT)                │
│ AI/NLP       │ Configured via .env                  │
│ Package Mgr  │ npm                                  │
└─────────────┴──────────────────────────────────────┘
```

---

## Project Structure

```
Quorix-Chatbot/
├── client/                   # React frontend
│   ├── public/
│   └── src/
│       ├── components/       # Reusable UI components
│       ├── pages/            # Route-level page components
│       ├── hooks/            # Custom React hooks
│       ├── services/         # API service layer
│       └── App.jsx
│
├── server/                   # Node.js/Express backend
│   ├── controllers/          # Route handler logic
│   ├── models/               # Mongoose data models
│   ├── routes/               # Express route definitions
│   ├── middleware/           # Auth & error middleware
│   ├── config/               # DB and app configuration
│   └── index.js
│
└── README.md
```

---

## Getting Started

### Prerequisites

Ensure the following are installed on your machine:

- [Node.js](https://nodejs.org/) **v18 or higher**
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Diyajain3/Quorix-Chatbot.git
cd Quorix-Chatbot
```

**2. Install backend dependencies**

```bash
cd server
npm install
```

**3. Install frontend dependencies**

```bash
cd ../client
npm install
```

---

### Environment Variables

Create a `.env` file inside the `server/` directory and populate it with the following:

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# AI / NLP Integration
AI_API_KEY=your_ai_api_key
AI_API_URL=your_ai_endpoint_url
```

> ⚠️ Never commit your `.env` file. It is already included in `.gitignore`.

---

### Running the App

Start the **backend** (from the `server/` directory):

```bash
npm run dev
```

Start the **frontend** (from the `client/` directory):

```bash
npm start
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.
The API runs at **[http://localhost:5000](http://localhost:5000)**.

---

## API Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user | No |
| `POST` | `/api/auth/login` | Log in and receive a JWT | No |
| `GET` | `/api/chat/history` | Retrieve user chat history | Yes |
| `POST` | `/api/chat/message` | Send a message and get AI reply | Yes |
| `DELETE` | `/api/chat/history` | Clear all chat history | Yes |

> All protected routes require an `Authorization: Bearer <token>` header.

---

## Contributing

Contributions are welcome and greatly appreciated! Here's how to get started:

**1. Fork the repository and create your branch:**

```bash
git checkout -b feature/your-feature-name
```

**2. Commit your changes with a clear message:**

```bash
git commit -m "feat: describe your change here"
```

**3. Push and open a Pull Request:**

```bash
git push origin feature/your-feature-name
```

### Guidelines

- Follow the existing code style and folder structure
- Keep PRs focused — one feature or fix per PR
- Write clear, descriptive commit messages (follow [Conventional Commits](https://www.conventionalcommits.org/))
- Test your changes thoroughly before submitting
- Update documentation if your change affects usage or configuration

### Found a Bug? 🐛

[Open an issue](https://github.com/Diyajain3/Quorix-Chatbot/issues) with:
- A clear, descriptive title
- Steps to reproduce the problem
- Expected vs. actual behavior
- Screenshots or logs if applicable

---

## License

This project is licensed under the [MIT License](./LICENSE) — you are free to use, modify, and distribute it with attribution.

---

<div align="center">

Built with ❤️ by [Diya Jain](https://github.com/Diyajain3)

If you found Quorix helpful, consider giving it a ⭐ — it means a lot!

</div>
