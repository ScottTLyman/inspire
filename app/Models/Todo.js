import { ProxyState } from "../AppState.js"


export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <h3 class="text-light text-view">
    To Do:
    </h3>
    <h6>${this.Complete}/${this.Total}</h6>
    <div class="d-flex justify-content-between bg-dark text-light text-center text-view rounded p-2">
      <input class="form-check-input m-2" type="checkbox" value=""
      onchange="app.todoController.updateComplete('${this.id}')" ${this.Complete}>
    <h6 class="align-self-center">${this.description}</h6>
    <div class="mdi mdi-close-box-outline text-danger" onclick="app.todoController.deleteTodo('${this.id}')">
    </div>
  </div>
    `
  }
  get Complete() {
    return ProxyState.todos.filter(t => t.completed == "checked").length
  }
  get Total() {
    return ProxyState.todos.length
  }
}
