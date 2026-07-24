const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "ali@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      // tasks...
    ],
  },

  {
    id: 2,
    firstName: "Ahmed",
    email: "jane.smith@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 1,
    },
    tasks: [
      // tasks...
    ],
  },

  {
    id: 3,
    firstName: "Hassan",
    email: "michael.brown@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      // tasks...
    ],
  },

  {
    id: 4,
    firstName: "Usman",
    email: "emily.johnson@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 1,
    },
    tasks: [
      // tasks...
    ],
  },

  {
    id: 5,
    firstName: "Bilal",
    email: "david.wilson@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 1,
      completed: 3,
      failed: 1,
    },
    tasks: [
      // tasks...
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));    
    const admin = JSON.parse(localStorage.getItem("admin"));   
    
    return {employees, admin};
}