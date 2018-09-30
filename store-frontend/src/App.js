import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="section-header">
          <header className="App-header">
            <h1 className="App-title">Sucutienda</h1>
          </header>
          <div id="navbar" class="nav-style-in">
            <div id="navpanel">
              <div class="mainnav">
                <ul>
                  <li>
                    <a>HOME</a>
                  </li>
                  <li>
                    <a>ABOUT US</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="content" style={{ "padding-top": "44px" }}>
          <div class="blocklayout">
            <div
              class="block product size-medium fixed-ratio"
              style={{ width: "304px" }}
            >
              <div class="main">
                <img src="./img1.jpg" alt="Ver detalle" />
              </div>
              <div class="sub">
                <div class="pricearea">
                  <div>
                    <a class="product-block-title">Maceta de osito</a>
                  </div>
                  <span>S/. 10.90</span>
                </div>
              </div>
            </div>
            <div
              class="block product size-medium fixed-ratio"
              style={{ width: "304px" }}
            >
              <div class="main">
                <img src="./img1.jpg" alt="Ver detalle" />
              </div>
              <div class="sub">
                <div class="pricearea">
                  <div>
                    <a class="product-block-title">Maceta de osito</a>
                  </div>
                  <span>S/. 10.90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-footer">
          <div class="page-footer">
            <div class="signup-form padded-block background-tint form">
              <div class="signup-form-container">
                <h6 class="h1 title">Escribenos !</h6>
                <div class="message">
                  <p>
                    Suscribete a nuestro boletin y te mantendremos al dia con
                    las ultimas novedades
                  </p>
                </div>
                <form action="">
                  <div class="inline-input-button-row">
                    <div class="inline-input-button-row__input">
                      <input
                        class="text required"
                        placeholder="Enter email"
                        type="email"
                      />
                    </div>
                    <div class="inline-input-button-row__button">
                      <button type="submit">Registrarse</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="page-footer__lower">
              <div class="page-footer__row">
                <ul class="nav">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="page-footer__row">
                <div class="copy">2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
