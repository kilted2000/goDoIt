import './style.css'

type TaskItem = {
  id: string;
  content: string;
  checked: boolean;
}

const taskItems: TaskItem[] = [{id: "1", content: "Walk dog.", checked: false}];

const taskInput = document.querySelector<HTMLInputElement>("#addNewItem")!;

let tasks = document.querySelector<HTMLDivElement>('#taskList')!; 
let addTask = document.querySelector<HTMLDivElement>('#submit')!; 

addTask.addEventListener<'click'>('click', addTasks);


function displayTasks(){
    let itemList: string = ``;
    for(let i = 0;i < taskItems.length;i++){
  itemList +=`<li>
      <p>${taskItems[i].content}</p>
      <input type="checkbox"></input>
      <button id="editTask">Edit</button>
      <button id="deleteTask">Delete</button>
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
displayTasks()
}
}
displayTasks()
//above is displayed at all times
//if taskList.length === 0 display nothing besides above
//else display taskList as a ul

//event click listener is triggered on click
//function is called that changes html to list item

//loop though taskItems array
//each taskList item has the task content, edit btn, and delete btn
//taskList saved to localStorage
//----------------------------------------------------------------------------------------

