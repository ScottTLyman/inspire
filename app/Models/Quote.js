export class Quote {
  constructor(data) {
    this.author = data.author
    this.content = data.content
  }
  get Template() {
    return `
    <h5 class="">"${this.content}"</h5>
    <h6 class="hide-container"><span class="hide">- ${this.author}</span></h6>
    `
  }
}