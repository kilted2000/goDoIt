package main

import (
	"net/http"
  "github.com/gin-gonic/gin"
)

type TaskItem struct{
  ID string `json:"id"`
  Content string `json:"content"`
  Checked bool `json:"checked"`
}

var tasks = []TaskItem{
  {ID: "1", Content: "walk the dog", Checked: false},
  {ID: "2", Content: "feed the dog", Checked: false},
  {ID: "3", Content: "spoil the dog", Checked: false},
}

func main(){
 router := gin.Default()
    router.GET("/tasks", getAllTasks)
    //router.GET("/tasks/:id", getTasksByID)
    router.POST("/tasks", postTasks)
    router.PUT("/tasks/:id", editTasksById)
    router.DELETE("/tasks/:id", deleteTaskById)

    router.Run("localhost:8080")

}

func getAllTasks(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, tasks)
}
func postTasks(c *gin.Context) {
    var newTask TaskItem

    if err := c.BindJSON(&newTask); err != nil {
        return
    }

    tasks = append(tasks, newTask)
    c.IndentedJSON(http.StatusCreated, newTask)
}

//-----------------------------------------------------------------------
// function editTasks(e: MouseEvent) {
//   const target = e.target as HTMLElement;
//   let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
//   if (target.matches(".editTask")) {
//     taskItems[taskIndex].isEditing = true
//     localStorage.setItem("task", JSON.stringify(taskItems))
//     displayTasks()
//   }

// }
func editTasksById(c *gin.Context){
id := c.Param("id")
 for _, a := range tasks {
        if a.ID == id {
            c.IndentedJSON(http.StatusOK, a)
            return
        }
}
}

//------------------------------------------------------------------------
// function deleteTasks(e: MouseEvent) {
//   const target = e.target as HTMLElement;
//   if (target.matches(".deleteTask")) {
//     let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
//     taskItems.splice(taskIndex, 1)
//     localStorage.setItem("task", JSON.stringify(taskItems))
//     displayTasks()
//   }
// }

// if (localStorage.getItem("task") !== null){
// taskItems = JSON.parse(localStorage.getItem("task")!)
// }  
// displayTasks()
func deleteTaskById(c *gin.Context){
id := c.Param("id")
 for _, a := range tasks {
        if a.ID == id {
            c.IndentedJSON(http.StatusOK, a)
            return
        }
}
 }
// You'll need the index to mutate the slice — same lesson as in TypeScript. for _, a := range tasks gives you the value but not the index, so you can't modify or remove it. You want for i, a := range tasks so you have i available to do tasks[i] for edit or slice manipulation for delete.

//-----------------------------------------------------------------------
// function editTasks(e: MouseEvent) {
//   const target = e.target as HTMLElement;
//   let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
//   if (target.matches(".editTask")) {
//     taskItems[taskIndex].isEditing = true
//     localStorage.setItem("task", JSON.stringify(taskItems))
//     displayTasks()
//   }

// }
//-----------------------------------------------------------------------
// function done(e: MouseEvent){
//    const target = e.target as HTMLElement;
//   if (target.matches(".done")) {
//     let doneTask = document.querySelector<HTMLInputElement>('#newValue')!;
//     let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
//     taskItems[taskIndex].content = doneTask.value
//     taskItems[taskIndex].isEditing = false
//     localStorage.setItem("task", JSON.stringify(taskItems))
//     displayTasks()
// }
// }
//------------------------------------------------------------------------
// function deleteTasks(e: MouseEvent) {
//   const target = e.target as HTMLElement;
//   if (target.matches(".deleteTask")) {
//     let taskIndex = taskItems.findIndex(item => item.id === target.dataset.id)
//     taskItems.splice(taskIndex, 1)
//     localStorage.setItem("task", JSON.stringify(taskItems))
//     displayTasks()
//   }
// }

// if (localStorage.getItem("task") !== null){
// taskItems = JSON.parse(localStorage.getItem("task")!)
// }  
// displayTasks()

//-------------------------------------------------------------------------
// func getTasksByID(c *gin.Context) {
//     id := c.Param("id")

//     for _, a := range tasks {
//         if a.ID == id {
//             c.IndentedJSON(http.StatusOK, a)
//             return
//         }
//     }
//     c.IndentedJSON(http.StatusNotFound, gin.H{"message": "task not found"})
// }

