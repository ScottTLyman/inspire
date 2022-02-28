import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { Pop } from "../Utils/Pop.js";
import { api } from "./AxiosService.js";

class TodoService {
  updateComplete(todoId) {

  }
  async deleteTodo(todoId) {
    try {
      const res = await api.delete(todoId)
      ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
      console.log('delete todo', res.data);
    } catch (error) {
      Pop.error(error)
      console.log(error);

    }
  }
  async getTodos() {
    try {
      const res = await api.get('ScottL/todo')
      console.log('get todos', res.data)
      ProxyState.todos = res.data.map(t => new Todo(t))
    } catch (error) {
      Pop.error(error)
      console.log(error, 'error');

    }
  }
  async createTodo(newTodo) {
    try {
      const res = await api.post('ScottL/todo', newTodo)
      ProxyState.todos = [new Todo(res.data), ...ProxyState.todos]
      console.log('todo added', ProxyState.todos)
    } catch (error) {
      Pop.error(error)
      console.log(error, 'error');
    }
  }

}

export const todoService = new TodoService()