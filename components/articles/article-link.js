import { globalStyles } from "../globals.js";

export default customElements.define('article-link', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      ${globalStyles}
      <link rel="stylesheet" href="/styles/main.css">
      📁<a href="${this.getAttribute("href")}">${this.getAttribute("title")}</a>
    `;
  }
});