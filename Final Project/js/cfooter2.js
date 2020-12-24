class MyFooter2 extends HTMLElement {
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
                
        .description {
        display: grid;
        margin: 30px 80px 0 80px;
        background-color: #4d4d4d;
        color: whitesmoke;
        border-radius: 10px;
        grid-template-columns: repeat(3, 1fr);
        align-self: center;
        align-content: space-around;
        padding: 20px;
        grid-gap: 40px;
        }

        .description .container {
        min-height: 300px auto;
        padding: 20px;
        text-align: justify;
        }

        .description .container h3{
          
        } 

        .description .container img {
        width: 60%;
        }

        .description .container .payman1 {
        padding-top: 40px;
        width: 100%;
        }

        .description .container .payman2 {
        width: 100%;
        }

        .description .container .my-footer {
        margin-left: 65px;
        }

        </style>

        <section class="description">
        <div class="container">
          <img src="../assets/logo 3.png" alt="">
        </div>
        <div class="container"><h3><br/><br/><br/>BUSINES HOURS</h3></div>
        <div class="container"><h3><br/><br/><br/>HUBUNGI KAMI</h3></div>
        <div class="container">
          <p>Rental camera Yogyakarta jasa pelayanan sewa Camera termurah dan Terpercaya,siap melayani anda 24 jam demi kepuasan pelanggan.</p>
        </div>
        <div class="container">
          <p>Layanan kami buka selama 24 jam dalam Seminggu. </p>
          <br>
          <br>
          <p>Pembayaran:</p>
          <table>
            <tr>
              <td><img src="../assets/fiture/Bank Central Asia BCA_preview_rev_1 1.png" alt="" class="payman1"></td>
              <td><img src="../assets/fiture/logo-bank-mandiri-coreldraw 1.png" alt="" class="payman2"></td>
            </tr>
          </table>
          <br>
          <br>
          <br>
         <h3 class="my-footer">2016-2020 &copy; LateSleeps</h3>
        </div>
        <div class="container">
          <table>
            <tr>
              <td>Alamat </td>
              <td>: Jl.Diponegoro, No.56, Sleman, Jogja</td>
            </tr>
            <tr>
              <td>No HP/WA</td>
              <td>: 085726564257</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>: ewacamera2@gmail.com</td>
            </tr>
          </table>

        </div>
      </section>
        `;
  }
}

window.customElements.define("my-footer2", MyFooter2);
