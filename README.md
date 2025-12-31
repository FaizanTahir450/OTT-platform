
---

```markdown
# 🎬 OTT Platform

A **frontend-only web application** for browsing and discovering movies and TV shows.  
Built with **React, Vite, Tailwind CSS**, and integrated with **Appwrite** for backend services.

---

## 🚀 Features

- 🔍 Search and filter movies and TV shows
- 🎨 Dynamic movie cards with details
- ⏳ Loading spinner for smooth UX
- 📱 Fully responsive design for desktop and mobile
- 🖼️ Static assets managed in the `public` folder

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Appwrite (optional integration)
- **Deployment**: Vercel
- **Package Management**: npm

---

## 📂 Project Structure

```

OTT-platform/
├── public/            # Static files (images, favicon)
├── src/               # React components and App files
│   ├── components/
│   ├── appwrite.js
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/FaizanTahir450/OTT-platform.git
cd OTT-platform
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the app.

### 4️⃣ Build for production

```bash
npm run build
```

---

## 🌐 Deployment

The app is deployed on **Vercel**.

* Output folder for deployment: `dist`
* Make sure to include the `vercel.json` file for SPA routing if using `react-router-dom`.

---

## 📌 Notes

* Keep all static assets in the `public` folder.
* Do not push `node_modules` or `dist` to GitHub.
* Ensure `vite.config.js` has default settings (no `base: "./"` needed for Vercel).

---

## 👨‍💻 Author

**Muhammad Faizan Tahir**


---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

```

---


```
