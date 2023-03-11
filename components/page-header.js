import { globalStyles } from "./globals.js";

// defines a new custom element called 'page-header'
export default customElements.define('page-header', class extends HTMLElement {
  connectedCallback() {
    // this creates a shadow root for the element, separates styles from the rest of the page
    this.attachShadow({mode: 'open'});
    
    // this is the HTML that will be rendered inside the shadow root
    this.shadowRoot.innerHTML = `
      ${globalStyles}
      <style>
        header {
          width: 100%;
          background-image: url('/assets/banner-image.png');
          background-size: cover;
          background-position: center;
          box-shadow:0 0 40px rgba(0, 0, 0, 0.1) inset;
        }

        header > nav > ul {
          display: flex;
          justify-content: center;
          gap: .2rem;
          align-items: end;
        }

        header .header-elm {
          color: white;
          padding: .6rem .4rem .4rem .4rem;
          background-color: rgba(0,0,0,.5);
          margin-top: .2em;
        }

        header .header-elm:hover {
          background-color: rgba(0,0,0,.8);
        }

        header .header-elm.main {
          font-size: 1.2em;
        }
      </style>
      <header>
        <nav>
          <ul>
            <li class="header-elm main">
              <a href="/">My Site</a>
            </li>
            <li class="header-elm">
              <a href="/about">About Me</a>
            </li>
            <li class="header-elm">
              <a href="/writing">Writing</a>
            </li>
          </ul>
        </nav>
      </header>`
  }
})