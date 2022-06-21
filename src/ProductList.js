import React, { Component } from "react";
// ! app.js'de encapsulation yöntemimizi uyguladıktan sonra burada divimizin içine girip {this.props.info.__değişkenismi__} şeklinde çağırıyoruz

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.props.info.baskaBisey}</h3>
      </div>
    );
  }
}
