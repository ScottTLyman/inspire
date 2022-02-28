import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  image = null

  /** @type {import('./Models/Quote').Quote} */
  // @ts-ignore
  quote = {}
  weather = {}
  tempScale = null
  /** @type {import('./Models/Todo').Todo[]} */
  todos = []




}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
