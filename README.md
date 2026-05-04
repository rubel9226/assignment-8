# 📚 Mango - Book Library Web App

Mango is a modern and user-friendly online book library platform where users can explore, view, and borrow books easily.

---

## 🚀 Live Demo

🔗 https://assignment-8-orpin-eight.vercel.app

---

## ✨ Features

- 📖 Browse all books
- 🔍 View book details
- 👤 User authentication (Sign up / Login)
- 📚 Borrow books
- 🔄 Dynamic UI rendering
- 💾 Session-based storage
- 🎨 Clean and responsive design

---

## 🖼️ Pages Overview

### 🏠 Home Page
- Hero section with banner: **Find Your Next Read**
- "Browse Now" button
- Top/Featured books section

### 📚 All Books Page
- বইগুলো card আকারে show হয়
- প্রতিটা card এ থাকে:
  - Image
  - Title
  - Button (View Details)

### 📄 Book Details Page
- বড় book cover
- Title, Author, Description
- Available quantity
- Borrow button:
  - Logged out → Login page redirect
  - Logged in → Success toast

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Next.js
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Auth:** Better Auth / Custom Auth
- **Storage:** LocalStorage / SessionStorage

---

## 📂 Folder Structure

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/mango-library.git
cd mango-library
npm install
npm run dev


---

### 📂 Folder Structure

---

MONGODB_URL=your_mongodb_url
AUTH_SECRET=your_secret_key

---
