let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("TaskCount");




class Task { 
    
constructor(id, name){
    this.id = id;
    this.name = name;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

}

function agregarTarea(taskName) {
  const newTask = new Task(Date.now(), taskName);
  tasks.push(newTask);
  mostrarTareas(tasks);  
  updateTaskCount();
}


function eliminarTarea(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  mostrarTareas(tasks);
  updateTaskCount();
}


function filtrarTareas(completadas) {
  return tasks.filter(task => task.completed === completadas);
}


function mostrarTareas(taskArray) {
  taskList.innerHTML = "";

  taskArray.forEach(task => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span>${task.name}</span>
      <button class="delete-btn"><img src="./img/borrar.png" alt="Delete"></button>
          
   `;

    li.querySelector("input").addEventListener("change", () => {
      task.toggleCompleted();
      mostrarTareas(tasks);
    });

  
    li.querySelector("button").addEventListener("click", () => {
      eliminarTarea(task.id);
    });

    taskList.appendChild(li);
  });

   updateTaskCount();
}
   
function updateTaskCount() {
     taskCount.textContent = `${tasks.length} tasks`;
}


addBtn.addEventListener("click", () => {
  if (taskInput.value.trim() !== "") {
    agregarTarea(taskInput.value);
    taskInput.value = "";
  }
});

document.getElementById("all").addEventListener("click", () => {
  mostrarTareas(tasks);
});

document.getElementById("active").addEventListener("click", () => {
  mostrarTareas(filtrarTareas(false));
});

document.getElementById("completed").addEventListener("click", () => {
  mostrarTareas(filtrarTareas(true));
});
