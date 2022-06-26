import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
// ? Başka bir componenti kullanmak için öncelikle import adiyoruz, ardından return içerisinde çağırıyoruz(Direkt return içindede <"___" /> sayesinde otomatik import edip kullanabiliriz)
// ! Reactstrap'i kullanmak için import etmemiz gerekiyor
// ! Bir componentten diğeine data taşımak için Props'u kullanırız
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        {/* <h2>Hello React !!! </h2> */}
        {/* Navi'yi direkt <Navi /> şeklindede yazabilirim */}
        {/* <Navi></Navi> */}
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="4">
              {/* //* Datamızı taşımak datayı taşıyacağımız yere gelip title veririz. (title yerine başka bir isimde verebiliriz fakat diğer tarafta aynı isimle çağırmamız gerekir)  */}
              {/* <CategoryList title="Category List" /> */}
              {/* <CategoryList title={titleCategory} /> */}
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="8">
              {/* <ProductList title="Product List" /> */}
              {/* <ProductList title={titleProduct} /> */}
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// ! İstersek category ve product listimizi bir değişken içerisinde oluşturup, ordanda alabiliriz
// * Bu değişkenleri okumak için ise direkt title'ın içine gidip {} içerisinde değiikenimizi çağırabiliriz
// let titleProduct = "Product List";
// let titleCategory = "Category List";
// ! Yeni bir özellik eklediğimizde başka bir değişken oluşturmak yerine aşağıda ki gibi encapsulation yöntemine başvururuz
