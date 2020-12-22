class Navigation extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: "open" });
    this.innerHTML = ` 
    <style>
    
    .wrapper {
    padding: 0px 0px 0px 80px;
    display: grid;
    grid-template-columns: 20% 50% 30%;
    min-height: 100px auto;
    }

    .logo {
    }

    .logo img {
    padding-left: 20px;
    width: 40%;
    }

    .nav {
    min-height: 200px auto;
    background: #444343;
    height: 100%;
    }
    .nav-links {
    display: flex;
    list-style: none;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    padding-left: 120px;
    }

    .nav-links li a {
    color: whitesmoke;
    text-decoration: none;
    font-size: 18px;
    }

    .icon {
    background: #444343;
    padding-top: 30px;
    padding-left: 50px;
    opacity: 80%;
    height: 100%;
    }

    .icon img {
    width: 8%;
    margin-left: 50px;
    font-size: 18px;
    }


    </style>

    <nav class="wrapper">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="nav">
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Camera</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div class="icon">
        <img src="../assets/nav/loupe.png" alt="" />
        <img src="../assets/nav/trolley-cart.png" alt="" />
        <img src="../assets/nav/user.png" alt="" />
      </div>
    </nav>
    `;
  }
}

window.customElements.define("my-nav", Navigation);
