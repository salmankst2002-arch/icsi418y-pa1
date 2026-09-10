# icsi418y-pa1



**ICSI418Y – PA1 Task Manager Web App**

A simple, beginner‑friendly **Task Manager** built using **HTML, CSS, and JavaScript**.  
This project was created for **ICSI418Y – Programming Assignment 1** and demonstrates DOM manipulation, event handling, and dynamic UI updates.

---

**Project Overview**

This web app allows users to:

- Add new tasks  
- Display all tasks dynamically  
- Delete tasks  
- Maintain an updated task list without refreshing the page  

It uses **vanilla JavaScript**, meaning no external libraries or frameworks — perfect for learning core web development concepts.

---

**Project Structure**

```
icsi418y-pa1/
│
├── index.html      # Main webpage structure
├── style.css       # Styling for the task manager UI
├── script.js       # JavaScript logic (add, delete, display tasks)
└── README.md       # Project documentation
```

---

**How It Works**

**1. Adding Tasks**
Users type a task into an input box and click “Add”.  
JavaScript pushes the task into an array and updates the display.

. Displaying Tasks**
The `displayTasks()` function loops through the array and creates:

- A text element  
- A delete button  
- A container for each task  

Then it appends everything to the task list.

**3. Deleting Tasks**
Each task has a delete button.  
When clicked, JavaScript removes the task from the array using:

```javascript
tasks.splice(index, 1);
```

Then it refreshes the display.

---

**How to Run the Project**

1. Download or clone the repository  
2. Open the folder in VS Code  
3. Open `index.html`  
4. Right‑click → **Open with Live Server** (optional)  
5. Or simply double‑click `index.html` to open it in your browser

---

 **Testing Instructions**

To test the app:

1. Add several tasks  
2. Verify they appear immediately  
3. Delete a task  
4. Confirm the list updates correctly  
5. Add more tasks to ensure the array updates dynamically  
6. Check that no page refresh is required  

---
**Technologies Used**

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **VS Code**  
- **Git & GitHub**

---

 **Author**

Salman 
University at Albany  
ICSI418Y – Fall 2026


