import './style.css'

type TaskItem = {
  id: number;
  content: string;
  checked: boolean;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<form>
      <input type="text" name="addNewItem" id="addNewItem" placeholder="Enter Task Here">
      <button id="submit" >Add Task</button>
    </form>
    <ul id="taskList">
    </ul>
`
//above is displayed at all times
//if taskList.length === 0 display nothing besides above
//else display taskList as a ul

//each taskList item has the task content, edit btn, and delete btn
//taskList saved to localStorage

