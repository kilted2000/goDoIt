package main

import (
	"net/http"
  "github.com/gin-gonic/gin"
)
//backend saves items to localStorage
//sends updated list to frontend
//functions to GET, POST, DELETE, PUT 
//req, res
type TaskItem struct{
  ID string `json:"id"`
  Content string `json:"content"`
  Checked bool `json:"checked"`
  IsEditing bool `json:"isEditing"`
}

var tasks = []TaskItem{
  {ID: "1", Content: "walk the dog", Checked: false, IsEditing: false },
  {ID: "2", Content: "feed the dog", Checked: false, IsEditing: false },
  {ID: "3", Content: "spoil the dog", Checked: false, IsEditing: false },
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

func editTasksById(c *gin.Context){
id := c.Param("id")
 for _, a := range tasks {
        if a.ID == id {
            c.IndentedJSON(http.StatusOK, a)
            return
        }
}
}

func deleteTaskById(c *gin.Context){
id := c.Param("id")
 for _, a := range tasks {
        if a.ID == id {
            c.IndentedJSON(http.StatusOK, a)
            return
        }
}
}