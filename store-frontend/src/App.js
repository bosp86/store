import React, { Component } from "react";

import "./App.css";
import * as BooksAPI from "./ProductsAPI";

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        products: data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div id="section-header">
          <header className="App-header">
            <h1 className="App-title">Sucutienda</h1>
          </header>
          <div id="navbar" className="nav-style-in">
            <div id="navpanel">
              <div className="mainnav">
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
        <div id="content" style={{ paddingTop: "44px" }}>
          <div className="blocklayout">
            <ul className="products-grid">
              {this.state.products.map(item => (
                <li key={item.id}>
                  <div
                    className="block product size-medium fixed-ratio"
                    style={{ width: "304px" }}
                  >
                    <div className="main">
                      <img src="./img1.jpg" alt="Ver detalle" />
                    </div>
                    <div className="sub">
                      <div className="pricearea">
                        <div>
                          <a className="product-block-title">{item.name}</a>
                        </div>
                        <span>S/. {item.price}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="section-footer">
          <div className="page-footer">
            <div className="signup-form padded-block background-tint form">
              <div className="signup-form-container">
                <h6 className="h1 title">Escribenos !</h6>
                <div className="message">
                  <p>
                    Suscribete a nuestro boletin y te mantendremos al dia con
                    las ultimas novedades
                  </p>
                </div>
                <form action="">
                  <div className="inline-input-button-row">
                    <div className="inline-input-button-row__input">
                      <input
                        className="text required"
                        placeholder="Enter email"
                        type="email"
                      />
                    </div>
                    <div className="inline-input-button-row__button">
                      <button type="submit">Registrarse</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="page-footer__lower">
              <div className="page-footer__row">
                <ul className="nav">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="page-footer__row">
                <div className="copy">2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
