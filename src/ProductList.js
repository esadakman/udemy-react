import React, { Component } from "react";
import { Table, Button } from "reactstrap";
// ! app.js'de encapsulation yöntemimizi uyguladıktan sonra burada divimizin içine girip {this.props.info.__değişkenismi__} şeklinde çağırıyoruz

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}
          {/* -{this.props.currentCategory} */}
        </h3>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Units Price</th>
              <th>Quantity Per Unit</th>
              <th>Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    className="text-light"
                    color="info"
                  >
                    Add to cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
