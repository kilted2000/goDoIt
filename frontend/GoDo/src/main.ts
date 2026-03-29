import './style.css'

type TaskItem = {
  id: string;
  content: string;
  checked: boolean;
}

const taskItems: TaskItem[] = [];

const taskInput = document.querySelector<HTMLInputElement>("#addNewItem")!;

let tasks = document.querySelector<HTMLDivElement>('#taskList')!; 
let addTask = document.querySelector<HTMLDivElement>('#submit')!; 


addTask.addEventListener<'click'>('click', addTasks);

function displayTasks(){
    let itemList: string = ``;
    for(let i = 0;i < taskItems.length;i++){
  itemList +=`<li id="singleTask">
      <p>${taskItems[i].content}</p>
      <input type="checkbox"></input>
      <button id="editTask" class="editTask" data-id="${taskItems[i].id}">Edit</button>
      <button id="deleteTask" class="deleteTask" data-id="${taskItems[i].id}">Delete</button>
    </li>`
    }
    tasks.innerHTML = itemList
}

function addTasks(e: MouseEvent){
if(e){
taskItems.push({
  id: crypto.randomUUID(),
  content: taskInput.value,
  checked: false
})
localStorage.setItem("task:", JSON.stringify(taskItems))
displayTasks()
}
}
//TODO add functionality of edit button
//TODO allow adding to local storage better than it is now
tasks.addEventListener("click", editTasks)

function editTasks(e: MouseEvent){
  const target = e.target as HTMLElement;
  if(target.matches(".editTask")){
    let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
    taskItems.find(item => item.id === taskIndex);
    localStorage.setItem("task:", JSON.stringify(taskItems))
    displayTasks()
}
}

tasks?.addEventListener("click", deleteTasks)

function deleteTasks(e: MouseEvent){
  const target = e.target as HTMLElement;
  if(target.matches(".deleteTask")){
    let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
    taskItems.splice(taskIndex, 1)
    localStorage.setItem("task:", JSON.stringify(taskItems))
    displayTasks()
  }
}
displayTasks()

//user clicks the delete btn calling the event handler in deleteTask
//on click the deleteTasks function is called 
//I want to get the ID of the item and splice it from the array
// then return new array with item deleted

//above is displayed at all times
//if taskList.length === 0 display nothing besides above
//else display taskList as a ul

//event click listener is triggered on click
//function is called that changes html to list item

//loop though taskItems array
//each taskList item has the task content, edit btn, and delete btn
//taskList saved to localStorage
//----------------------------------------------------------------------------------------

