import React from "react";
import { Link } from "react-router-dom";

class PurchaseConfirmation extends React.Component {
  render() {
    return (
      <div className="confirmation-page">
        <h2>Gracias por su compra !</h2>
        <div className="crumbs desktop-only">
          <Link to="/">
            <span>Ver lista de productos</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PurchaseConfirmation;
