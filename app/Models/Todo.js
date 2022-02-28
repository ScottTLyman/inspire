import { ProxyState } from "../AppState.js"


export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  // NOTE need to write ternary in the checkbox to apply the checked attribute based on the completed bool - last checkpoint is good reference for this

  get Template() {
    return `
    <div class="d-flex justify-content-between text-light text-center rounded p-2">
    <input class="form-check-input m-2" type="checkbox" ${this.completed ? 'checked' : ''} value=""
      onchange="app.todoController.updateComplete('${this.id}')">
    <h6 class="align-self-center text-view">${this.description}</h6>
    <div class="mdi mdi-close-box-outline text-danger" onclick="app.todoController.deleteTodo('${this.id}')">
    </div>
  </div>`
  }


  // get Complete() {
  //   return ProxyState.todos.filter(t => t.completed == "checked").length
  // }
  // get Total() {
  //   return ProxyState.todos.length

  // }
}