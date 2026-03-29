import './style.css'

type TaskItem = {
  id: string;
  content: string;
  checked: boolean;
  isEditing: boolean;
}

const taskItems: TaskItem[] = [];

const taskInput = document.querySelector<HTMLInputElement>("#addNewItem")!;

let tasks = document.querySelector<HTMLDivElement>('#taskList')!; 
let addTask = document.querySelector<HTMLDivElement>('#submit')!; 


addTask.addEventListener<'click'>('click', addTasks);
let itemList: string = ``;

function displayTasks(){
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
  checked: false,
  isEditing: false
})
localStorage.setItem("task:", JSON.stringify(taskItems))
displayTasks()
}
}
//TODO add functionality of edit button
//TODO allow adding to local storage better than it is now
tasks.addEventListener("click", editTasks)

function editTasks(e: MouseEvent){
  //captures the element where the click event occured 
  const target = e.target as HTMLElement;
  //if that element matches the element with editTask class 
  if(target.matches(".editTask")){
    //grab it's index
    let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)

  //create if/else statement using itemList string array variable

    //replace item with rerenderd li but with a Done btn
    //when Done btn is clicked the item at that index is replaced with the new content
    //if isEditing: true diplay the <li>  but with a Done btn, no edit/delete bts, and current content as taskItems[i].content 
    //reassign taskItems[i].content = innertext = new content
    //else diplay the <li> from displaytasks
    localStorage.setItem("task:", JSON.stringify(taskItems))
    displayTasks()
}
}
//The editing flag approach I mentioned fits perfectly with your if/else thinking at the end — that's exactly what it would power.
// One thing to think through: when Done is clicked, that's a separate event from the Edit click, so you'll need to handle it in your event delegation listener on tasks. You could add another if(target.matches(".doneTask")) block there, same pattern as delete.
// Also worth noting — move localStorage.setItem and displayTasks() to inside the Done handler, not the Edit handler. Edit just flips the UI, Done is when the data actually changes.
// when edit was pressed, the taskitem would be turned into an text input with the current content inside it, also a done button would appear to be pressed when the user was done editing
// The pattern would be:

// 1.When edit is clicked, re-render that specific <li> with an <input> pre-filled with the current content and a "Done" button instead of the Edit/Delete buttons
// 2.When Done is clicked, read the input value, update taskItems[taskIndex].content, save to localStorage, then call displayTasks() to re-render back to normal

// So you'd need two states in your template — the normal view and the editing view. One way to handle this is a flag on the TaskItem type itself, something like editing: boolean, then in displayTasks check that flag and render differently for that item.
// That way displayTasks handles everything and you don't need to manually manipulate individual <li> elements.
//-------------------------------------------------------------------------------------------------------------
//user clicks the edit btn calling the event handler in editask
//on click the editTasks function is called 
//I want to get the ID of the item and replace the old content with the new
// then return new array with item updated

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

