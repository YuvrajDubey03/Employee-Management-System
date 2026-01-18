

let employees = [
  {
    id: 101,
    firstName: "Rahul",
    email: "employee1@company.com",
    password: "123",
    taskNumbers: {
      total: 4,
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Make Login UI",
        taskDescription:
          "Create a dark theme login screen with emerald accents and rounded inputs.",
        taskDate: "2026-01-16",
        category: "design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix AllTask Scroll",
        taskDescription:
          "Implement scroll only inside AllTask component without affecting page scroll.",
        taskDate: "2026-01-17",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription:
          "Build a responsive navbar with logo and logout button.",
        taskDate: "2026-01-13",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Tailwind Setup",
        taskDescription:
          "Configure TailwindCSS and verify with basic utility usage.",
        taskDate: "2026-01-12",
        category: "setup",
      },
    ],
  },

  {
    id: 102,
    firstName: "Aman",
    email: "employee2@company.com",
    password: "123",
    taskNumbers: {
      total: 5,
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Form UI",
        taskDescription:
          "Design task creation form with two columns and modern dark UI.",
        taskDate: "2026-01-16",
        category: "frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Form Validation",
        taskDescription:
          "Add required validation and show error state styling in Tailwind.",
        taskDate: "2026-01-18",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Reusable Button Component",
        taskDescription:
          "Make a reusable button component with variants (primary/secondary).",
        taskDate: "2026-01-14",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy to Netlify",
        taskDescription: "Deploy app build to Netlify and configure routes.",
        taskDate: "2026-01-10",
        category: "deployment",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Simple footer with links and copyright section.",
        taskDate: "2026-01-11",
        category: "frontend",
      },
    ],
  },

  {
    id: 103,
    firstName: "Neha",
    email: "employee3@company.com",
    password: "123",
    taskNumbers: {
      total: 6,
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Card UI",
        taskDescription:
          "Make modern task cards with status badge and hover effects.",
        taskDate: "2026-01-16",
        category: "design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Status Colors",
        taskDescription:
          "Map status to colors (active/new/completed/failed).",
        taskDate: "2026-01-18",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Routing Setup",
        taskDescription:
          "Setup react-router-dom with Home/About/Product pages.",
        taskDate: "2026-01-12",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create NotFound Page",
        taskDescription:
          "Add a 404 page with a button to navigate back to Home.",
        taskDate: "2026-01-13",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription:
          "Integrate tasks API and manage errors with try/catch.",
        taskDate: "2026-01-09",
        category: "backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Components",
        taskDescription:
          "Split App.jsx into components and clean folder structure.",
        taskDate: "2026-01-14",
        category: "refactor",
      },
    ],
  },

  {
    id: 104,
    firstName: "Priya",
    email: "employee4@company.com",
    password: "123",
    taskNumbers: {
      total: 4,
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Employee Dashboard",
        taskDescription:
          "Create dashboard page with greeting, task form and task list section.",
        taskDate: "2026-01-17",
        category: "frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Logout UI",
        taskDescription:
          "Design logout button top right with hover/active effects.",
        taskDate: "2026-01-18",
        category: "design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "LocalStorage Auth",
        taskDescription:
          "Save login user in localStorage and auto login if exists.",
        taskDate: "2026-01-14",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login UI",
        taskDescription:
          "Make login form with emerald border and rounded fields.",
        taskDate: "2026-01-13",
        category: "design",
      },
    ],
  },

  {
    id: 105,
    firstName: "Rohit",
    email: "employee5@company.com",
    password: "123",
    taskNumbers: {
      total: 8,
      active: 3,
      newTask: 1,
      completed: 4,
      failed: 2,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Search Filter",
        taskDescription:
          "Add search box to filter tasks by title and category.",
        taskDate: "2026-01-19",
        category: "frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Counter",
        taskDescription: "Show counts of active/new/completed/failed tasks.",
        taskDate: "2026-01-20",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Task JSON Schema",
        taskDescription:
          "Define a consistent schema for tasks and employees data.",
        taskDate: "2026-01-15",
        category: "data",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Overflow Bug",
        taskDescription: "Fix overflow issue in task list container.",
        taskDate: "2026-01-11",
        category: "bugfix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Add Dark Mode Toggle",
        taskDescription:
          "Create a theme toggle without breaking existing UI.",
        taskDate: "2026-01-10",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Components",
        taskDescription:
          "Optimize re-renders using React.memo and proper props.",
        taskDate: "2026-01-12",
        category: "performance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task Status Update UI",
        taskDescription:
          "Add UI buttons to update task status (active/completed/failed).",
        taskDate: "2026-01-21",
        category: "frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Responsive Layout",
        taskDescription:
          "Make dashboard layout responsive for mobile/tablet screens.",
        taskDate: "2026-01-15",
        category: "frontend",
      },
    ],
  },
];


let admin = [
  {
    id: 1,
        firstName: "Admin",
    email: "admin@company.com",
    password: "123"
  }
];

export const setLocalStorage =()=>{
    localStorage.setItem("employees" ,JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage =()=>{
 const employees = JSON.parse(localStorage.getItem("employees"))
 const admin = JSON.parse(localStorage.getItem("admin"))

 

 return {employees , admin}
}