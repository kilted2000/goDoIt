import './style.css'

type TaskItem = {
  id: string;
  content: string;
  checked: boolean;
  isEditing: boolean;
}
let taskItems: TaskItem[] = [];

const taskInput = document.querySelector<HTMLInputElement>("#addNewItem")!;

let tasks = document.querySelector<HTMLDivElement>('#taskList')!;
let addTask = document.querySelector<HTMLDivElement>('#submit')!;


addTask.addEventListener<'click'>('click', addTasks);

function displayTasks() {
  let itemList: string = ``;

  for (let i = 0; i < taskItems.length; i++) {
    if (taskItems[i].isEditing === true) {
      itemList += `<li id="singleTask">
      <input type="text" id="newValue" value=${taskItems[i].content}></input>
      <button id="done" class="done" data-id="${taskItems[i].id}">Done</button>
    </li>`
    } else {
      itemList += `<li id="singleTask">
      <p>${taskItems[i].content}</p>
      <input type="checkbox"></input>
      <button id="editTask" class="editTask" data-id="${taskItems[i].id}">Edit</button>
      <button id="deleteTask" class="deleteTask" data-id="${taskItems[i].id}">Delete</button>
    </li>`
    }

  }
  tasks.innerHTML = itemList
}

function addTasks(e: MouseEvent) {
  if (e) {
    taskItems.push({
      id: crypto.randomUUID(),
      content: taskInput.value,
      checked: false,
      isEditing: false
    })
    localStorage.setItem("task", JSON.stringify(taskItems))
    displayTasks()
  }
}

tasks.addEventListener("click", (e) => {
  editTasks(e)
  deleteTasks(e)
  done(e)
})

function editTasks(e: MouseEvent) {
  const target = e.target as HTMLElement;
  let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
  if (target.matches(".editTask")) {
    taskItems[taskIndex].isEditing = true
    localStorage.setItem("task", JSON.stringify(taskItems))
    displayTasks()
  }

}

function done(e: MouseEvent){
   const target = e.target as HTMLElement;
  if (target.matches(".done")) {
    let doneTask = document.querySelector<HTMLInputElement>('#newValue')!;
    let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
    taskItems[taskIndex].content = doneTask.value
    taskItems[taskIndex].isEditing = false
    localStorage.setItem("task", JSON.stringify(taskItems))
    displayTasks()
}
}

function deleteTasks(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.matches(".deleteTask")) {
    let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
    taskItems.splice(taskIndex, 1)
    localStorage.setItem("task", JSON.stringify(taskItems))
    displayTasks()
  }
}

if (localStorage.getItem("task") !== null){
taskItems = JSON.parse(localStorage.getItem("task")!)
}  
displayTasks()




