import React from "react";

class ProductDetail extends React.Component {
  state = {
    product: {}
  };

  componentDidMount() {
    console.log(this.props.match.params);
    this.setState({
      product: {
        id: 1,
        name: "Sucu planta elefante",
        price: "40",
        quantity: 10,
        category: "test",
        detail: {}
      }
    });
  }

  render() {
    return (
      <div className="product-container">
        <div className="product-gallery">
          <img src={"./img_1.jpg"} alt="Ver detalle" />
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
    );
  }
}

export default ProductDetail;
