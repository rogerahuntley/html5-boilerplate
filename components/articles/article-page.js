import { globalStyles } from "../globals.js";

export default customElements.define('article-page', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      ${globalStyles}
      <h2>${this.getAttribute("title")}</h2>
      <slot></slot>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      <style>
    `;
  }
});