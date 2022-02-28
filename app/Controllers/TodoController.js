import { ProxyState } from "../AppState.js"
import { api } from "../Services/AxiosService.js"
import { todoService } from "../Services/TodoService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTodo() {
  let todos = ProxyState.todos
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
}


export class TodoController {
  constructor() {
    // ProxyState.on('todos', _drawTodo)
  }
  // async getTodos() {
  //   try {
  //     await todoService.getTodos()
  //   } catch (error) {
  //     Pop.toast(error)
  //     console.log(error, 'error')

  //   }
  // }
  deleteTodo(todoId) {
    todoService.deleteTodo(todoId)
  }
  createTodo(event) {
    debugger
    event.preventDefault()
    console.log('created todo')
    let form = event.target
    let newTodo = {
      description: form.todo.value
    }
    todoService.createTodo(newTodo)
    form.reset()
    console.error('error')
  }

  updateComplete(todoId) {
    todoService.updateComplete(todoId)
  }
}

