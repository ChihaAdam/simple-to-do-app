# Modern Todo List Application 🚀

A feature-rich task management application built with React 19, Redux Toolkit, and Tailwind CSS, featuring an intuitive interface, data visualization, and theme customization.

## ✨ Features

### 🔹 Task Management
- Create, edit, and complete tasks with descriptions
- Inline title and description editing
- Task prioritization with up/down controls
- Detailed task information with timestamps

### 🔹 Smart Organization
- Dynamic sorting by name or date
- Real-time search functionality
- Separate views for pending and completed tasks
- Visual task progress tracking

### 🔹 Analytics Dashboard
- Interactive pie chart visualization
- Task completion statistics
- Responsive chart sizing
- Clear data representation

### 🔹 Customization
- Dark/Light mode toggle
- Customizable theme colors
- Persistent theme settings
- Smooth theme transitions

### 🔹 Advanced Features
- Local storage persistence
- Responsive design for all devices
- Lazy loading for better performance
- Smooth animations and transitions

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| State Management | Redux Toolkit |
| Routing | React Router DOM |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Material Icons |
| Build Tool | Vite |
| Code Quality | ESLint |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/todo-app.git
cd todo-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📂 Project Structure
```
todo/
├── src/
│   ├── components/
│   │   ├── completed/
│   │   ├── pending/
│   │   ├── sort/
│   │   └── static/
│   ├── features/
│   │   ├── Dashboard.jsx
│   │   ├── settings.jsx
│   │   └── ...
│   ├── utils/
│   │   ├── state/
│   │   ├── hooks/
│   │   └── date.js
│   └── App.jsx
```

## 🎯 Key Features Implementation

### Theme Customization
```jsx
const colors = [
  "bg-blue-600", "bg-green-700", "bg-red-600",
  "bg-violet-500", "bg-yellow-500", "bg-gray-500",
  "bg-cyan-500", "bg-orange-500", "bg-pink-500",
  "bg-sky-500"
];
```

### Analytics Dashboard
```jsx
const PieData = [
  { name: "Completed", value: completed.length },
  { name: "Pending", value: pending.length }
];
```

## 🔮 Upcoming Enhancements
- [ ] Task categories/tags
- [ ] Due date reminders
- [ ] Subtask support
- [ ] Data export/import
- [ ] Task sharing capabilities

## 🤝 Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
[Choose an appropriate license]

## 📧 Contact
**Adam Chiha**
- Email: chihaadam137@gmail.com
- GitHub: [https://github.com/ChihaAdam]

---
Built with 💻 by Adam Chiha