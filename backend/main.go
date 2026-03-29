package main

import (
	"fmt"
	"net/http"
)
//backend saves items to localStorage
//sends updated list to frontend
var hello = "Hello"
var hi = "Tim"
var hey = "Bob"
var hola = "Vin"
var taskItems = []string{hello, hi, hey, hola}

func main(){

 http.HandleFunc("/", helloUser)
 http.HandleFunc("/show-tasks", showTasks)
 http.ListenAndServe(":8080", nil)

}

func showTasks(writer http.ResponseWriter, request *http.Request) {
  for _, task := range taskItems {
    fmt.Fprintln(writer, task)
  }
}

func helloUser(writer http.ResponseWriter, request *http.Request) {
  var greeting = "Hello user. Welcome to our Todolist App!"
  fmt.Fprintln(writer, greeting)
}
