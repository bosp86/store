import React from "react";
import * as BooksAPI from "./ProductsAPI";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      cardHolder: "",
      cardNumber: "",
      cardAddress: "",
      isSubmitDisabled: false,
      submitButtonText: "Comprar"
    };
  }

  componentDidMount() {
    BooksAPI.get(this.props.match.params.productId).then(data => {
      this.setState({
        product: data
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.isSubmitDisabled) {
      return;
    }
    this.setState({ isSubmitDisabled: true, submitButtonText: "Enviando" });
    BooksAPI.buy({
      product_id: this.state.product.id,
      credit_card: this.state.cardNumber,
      address: this.state.cardAddress,
      credit_card_holder: this.state.cardHolder
    }).then(res => {
      if (res.success) {
        this.setState({ isSubmitDisabled: false, submitButtonText: "Comprar" });
        alert("Compra confirmada");
      }
    });
  };

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
          <form onSubmit={this.handleSubmit}>
            <div className="productoptions section">
              <div className="inputrow">
                <div className="option-selectors">
                  <div className="selector-wrapper cf">
                    <label>Nombre del titular</label>
                    <input
                      type="text"
                      value={this.state.cardHolder}
                      onChange={event => {
                        this.setState({ cardHolder: event.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="inputrow">
                <div className="option-selectors">
                  <div className="selector-wrapper cf">
                    <label>Numero de tarjeta</label>
                    <input
                      type="text"
                      value={this.state.cardNumber}
                      onChange={event => {
                        this.setState({ cardNumber: event.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="inputrow">
                <div className="option-selectors">
                  <div className="selector-wrapper cf">
                    <label>Direccion</label>
                    <input
                      type="text"
                      value={this.state.cardAddress}
                      onChange={event => {
                        this.setState({ cardAddress: event.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
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
                  <input
                    className="add-to-cart button"
                    type="submit"
                    value={this.state.submitButtonText}
                  />
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
