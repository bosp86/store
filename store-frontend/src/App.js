import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ReactGA from "react-ga";
import "./App.css";
import * as BooksAPI from "./ProductsAPI";
import ProductDetail from './ProductDetail';

ReactGA.initialize("UA-126728187-1");
ReactGA.pageview(window.location.pathname + window.location.search);

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
      <Router>
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
            <Route
              exact
              path="/"
              render={() => (
                <div className="blocklayout">
                  <ul className="products-grid">
                    {this.state.products.map(item => (
                      <li key={item.id}>
                        <div
                          className="block product size-medium fixed-ratio"
                          style={{ width: "304px" }}
                        >
                          <div className="main">
                            <a href={item.id}>
                              <img
                                src={"./img_" + ((item.id % 3) + 1) + ".jpg"}
                                alt="Ver detalle"
                              />
                            </a>
                          </div>
                          <div className="sub">
                            <div className="pricearea">
                              <div>
                                <a href={item.id}>
                                  <span className="product-block-title">
                                    {item.name}
                                  </span>
                                </a>
                              </div>
                              <span>S/. {item.price}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            />
            <Route
              path="/:productId"
              component={ProductDetail}
            />
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
      </Router>
    );
  }
}

export default App;
