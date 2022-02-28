import { ProxyState } from "../AppState.js"
import { todoService } from "../Services/TodoService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTodo() {
  let template = ''
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
  document.getElementById('todo-head').innerHTML = `${ProxyState.todos.filter(t => t.completed != '').length} / ${ProxyState.todos.length}`
}


export class TodoController {
  constructor() {
    ProxyState.on('todos', _drawTodo)
    this.getTodos()
  }
  async createTodo() {
    try {
      window.event.preventDefault()
      console.log('created todo')
      let form = window.event.target
      let newTodo = {
        // @ts-ignore
        description: form.todo.value
      }
      todoService.createTodo(newTodo)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log('error', error)
    }
  }
  async getTodos() {
    try {
      await todoService.getTodos()
    } catch (error) {
      Pop.toast(error)
      console.log(error, 'error')

    }
  }
  deleteTodo(todoId) {
    todoService.deleteTodo(todoId)
  }

  async updateComplete(todoId) {
    try {
      todoService.updateComplete(todoId)
    } catch (error) {
      console.log(error)
    }
  }
}

