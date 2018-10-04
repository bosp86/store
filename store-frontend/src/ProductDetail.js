import React from "react";
import * as BooksAPI from "./ProductsAPI";

class ProductDetail extends React.Component {
  state = {
    product: {}
  };

  componentDidMount() {
    BooksAPI.get(this.props.match.params.productId).then(data => {
      this.setState({
        product: data
      });
    });
  }

  render() {
    return this.state.product.id ? (
      <div className="product-container">
        <div className="product-gallery">
          <img
            src={"./img_" + this.state.product.id + ".jpg"}
            alt="Ver detalle"
          />
        </div>
        <div className="product-info">
          <div className="majorinfo">
            <h1 className="product-title">{this.state.product.name}</h1>
            <div className="pricearea">
              <span>S/. {this.state.product.price}</span>
            </div>
          </div>
          <form method="post">
            <div className="productoptions section">
              <div className="inputrow">
                <div className="option-selectors">
                  <div className="selector-wrapper cf">
                    <label>Color</label>
                    <select>
                      <option>Red</option>
                      <option>Blue</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label>Cantidad</label>
                <div className="quantadd">
                  <input
                    className="quantity"
                    type="text"
                    name="name"
                    value="1"
                    onChange={() => {}}
                  />
                  <button className="add-to-cart button">Comprar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    ) : null;
  }
}

export default ProductDetail;
