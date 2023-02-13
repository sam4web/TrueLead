class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ``;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ``;
  }
}

customElements.define('app-header', Header);
customElements.define('app-footer', Footer);
