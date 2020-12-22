class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <style>
        footer{
          background: #4d4d4d;
          opacity: 80%;
          height: 100%;
          padding: 0px;
          display: flex;
          margin: 80px;
        }
        footer h3 {
          color: whitesmoke;
          margin-left: 40%;
        }
        </style>
        <footer>
            <h3>2016-2020 &copy; LateSleeps</h3>
        </footer>
        `;
  }
}

customElements.define("my-footer", MyFooter);
