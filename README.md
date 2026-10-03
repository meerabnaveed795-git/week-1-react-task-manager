# React Task Manager - AUREX Internship

## 📌 Project Overview

This project is a Task Management Application developed as part of the AUREX Full-Stack Engineering Internship - Month 2, Week 1.

The application is built using React.js and Vite and demonstrates React fundamentals, component architecture, props, state management, event handling, and form validation.

---

## 🚀 Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- npm
- Git & GitHub

---

## ✨ Features

The application provides the following features:

### 1. Add Task
Users can enter a task and add it to the task list.

### 2. Display Tasks
All added tasks are displayed dynamically using React list rendering.

### 3. Mark Task Complete
Users can mark a task as completed.

### 4. Undo Completed Task
Users can change a completed task back to incomplete.

### 5. Delete Task
Users can remove a task from the task list.

### 6. Input Validation
The application prevents users from adding an empty task.

---

## 🧩 Component Architecture

The application follows a component-based React architecture:

```text
App
├── Header
├── TaskForm
└── TaskList
    └── TaskItem

### Components

**App.jsx**
- Manages the main task state.
- Handles adding, completing, and deleting tasks.
- Passes data and functions through props.

**Header.jsx**
- Displays the application title and internship information.

**TaskForm.jsx**
- Provides the task input form.
- Uses controlled input with `useState`.
- Performs empty-task validation.

**TaskList.jsx**
- Displays the list of tasks.
- Uses React list mapping and key props.

**TaskItem.jsx**
- Displays an individual task.
- Provides Complete/Undo and Delete actions.

---

## 🧠 React Concepts Learned

During this project, the following React concepts were practiced:

- JSX
- Functional Components
- Component Hierarchy
- Props
- `useState`
- Event Handling
- Controlled Form Inputs
- Form Validation
- List Rendering
- Key Props
- Parent-to-Child Data Flow
- Child-to-Parent Communication

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the project folder
cd week-1-react-task-manager

3. Install dependencies
npm install

4. Start the development server
npm run dev

5. Open in browser
Open the local URL provided by Vite.

## 📁 Project Structure

```text
week-1-react-task-manager/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── public/
├── index.html
├── package.json
└── README.md

## 🎯 Learning Outcomes

Through this project, I learned:

- How to create a React project using Vite.
- How to create and use reusable React components.
- How to use JSX.
- How to pass data and functions using props.
- How to manage application state using `useState`.
- How to handle user events in React.
- How to create controlled forms.
- How to perform basic form validation.
- How to dynamically render lists using `.map()`.
- How to update and delete items using React state.

## 📌 Internship Information

- **Program:** AUREX Full-Stack Engineering Internship
- **Domain:** Full-Stack Web Development
- **Month:** 2
- **Week:** 1
- **Project:** React Task Manager

---

## 📊 Project Status

✅ React + Vite setup completed  
✅ Component-based architecture implemented  
✅ Add Task functionality completed  
✅ Complete / Undo functionality completed  
✅ Delete Task functionality completed  
✅ Empty task validation completed  
✅ README documentation completed  

🔄 GitHub repository setup and deployment are next.