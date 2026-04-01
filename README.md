# 🤖 Quorix Chatbot

> A smart, full-stack conversational AI chatbot built with the MERN stack — fast, scalable, and designed for seamless real-time interaction.


---

## 🧠 About the Project

**Quorix Chatbot** is a full-stack AI-powered chatbot application that enables users to have intelligent, context-aware conversations in real time. Built on the MERN stack, it combines a responsive React frontend with a Node.js/Express backend and MongoDB for persistent storage — making it both scalable and developer-friendly.

Whether you're exploring AI integrations or building a production-grade chat experience, Quorix provides a solid, extensible foundation.

---

## ✨ Features

- 💬 **Real-time Chat Interface** — Smooth, responsive messaging with instant feedback
- 🧠 **AI-Powered Responses** — Integrated with an intelligent NLP/AI backend for smart replies
- 🔐 **User Authentication** — Secure login and registration with JWT-based auth
- 📜 **Chat History** — Persistent conversation storage powered by MongoDB
- 🌐 **RESTful API** — Clean Express.js API for all backend operations
- 📱 **Responsive Design** — Works seamlessly across desktop and mobile
- ⚡ **Fast & Scalable** — Optimized Node.js backend designed for performance
- 🎨 **Clean UI** — Intuitive React interface for a great user experience

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Frontend    | React.js, CSS / Tailwind          |
| Backend     | Node.js, Express.js               |
| Database    | MongoDB, Mongoose                 |
| Auth        | JSON Web Tokens (JWT)             |
| AI/NLP      | AI/NLP Integration *(see `.env`)* |
| Package Mgr | npm                               |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- Git

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Diyajain3/Quorix-Chatbot.git
cd Quorix-Chatbot
```

**2. Install dependencies for the backend**

```bash
cd server
npm install
```

**3. Install dependencies for the frontend**

```bash
cd ../client
npm install
```

**4. Set up environment variables**

Create a `.env` file in the `server/` directory (see [Environment Variables](#environment-variables) below).

**5. Run the development servers**

In one terminal, start the backend:

```bash
cd server
npm run dev
```

In another terminal, start the frontend:

```bash
cd client
npm start
```

The app will be available at `http://localhost:3000`.

---

## 📸 Screenshots

> _Add screenshots of your application here to give visitors a visual preview._

| Chat Interface | Login Page |
|---|---|
| ![Chat UI](./screenshots/chat.png) | ![Login](./screenshots/login.png) |

> 💡 **Tip:** Place your screenshots in a `/screenshots` folder at the root of the repo and update the paths above.

---

## 🤝 Contributing

Contributions are what make open source projects great — and they're always welcome here! 🎉

### How to Contribute

1. **Fork** the repository
2. **Create** a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes and commit them:
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** on the main repository and describe what you've done

### Contribution Guidelines

- Follow the existing code style and folder structure
- Write clear, descriptive commit messages
- Keep PRs focused — one feature or fix per PR
- Test your changes before submitting
- Update documentation if your change affects usage

### Found a Bug? 🐛

Open an [issue](https://github.com/Diyajain3/Quorix-Chatbot/issues) with a clear title, steps to reproduce, and expected vs actual behavior.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">

Made with ❤️ by [Diya Jain](https://github.com/Diyajain3)

⭐ If you found this project helpful, consider giving it a star!

</div>
