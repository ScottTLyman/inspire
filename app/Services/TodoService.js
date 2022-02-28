import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { Pop } from "../Utils/Pop.js";
import { api } from "./AxiosService.js";

class TodoService {
  async updateComplete(todoId) {
    try {
      let tdToUpdate = ProxyState.todos.find(t => t.id == todoId)
      tdToUpdate.completed = !tdToUpdate.completed
      const res = await api.put('ScottL/todos/' + todoId, tdToUpdate)
      ProxyState.todos = ProxyState.todos
    } catch (error) {
      Pop.toast(error)
      console.log(error)
    }
    // NOTE we need to use this todoId to find the entire todo object, flip the completed bool (always flip the bool to the opposite of what it is currently - you can use the ! operator) then you need to call the api and use a put request to send this modified object to the server

    // NOTE then check your reference from this last week on how to handle the refresh locally (may be a find index, then splice)

  }
  async deleteTodo(todoId) {
    try {
      if (await Pop.confirm('Delete Todo??')) {
        const res = await api.delete('ScottL/todos/' + todoId)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
        console.log('delete todo', res.data);
      }
    } catch (error) {
      Pop.error(error)
      console.log(error);

    }
  }
  async getTodos() {
    try {
      const res = await api.get('ScottL/todos')
      console.log('get todos', res.data)
      ProxyState.todos = res.data.map(t => new Todo(t))
    } catch (error) {
      Pop.error(error)
      console.log(error, 'error');

    }
  }
  async createTodo(newTodo) {
    try {
      const res = await api.post('ScottL/todos', newTodo)
      ProxyState.todos = [new Todo(res.data), ...ProxyState.todos]
      console.log('todo added', ProxyState.todos)
    } catch (error) {
      Pop.error(error)
      console.log(error, 'error');
    }
  }

}

export const todoService = new TodoService()