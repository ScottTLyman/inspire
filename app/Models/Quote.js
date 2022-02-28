export class Quote {
  constructor(data) {
    this.author = data.author
    this.content = data.content
  }
  get Template() {
    return `
    <h4 class="content selectable">"${this.content}"</h4>
    <h6 class="author">- ${this.author}</h6>
    `
  }
}