import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
// ? Başka bir componenti kullanmak için öncelikle import adiyoruz, ardından return içerisinde çağırıyoruz(Direkt return içindede <"___" /> sayesinde otomatik import edip kullanabiliriz)
// ! Reactstrap'i kullanmak için import etmemiz gerekiyor
import { Container, Row, Col } from "reactstrap";

function App() {
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
          <Col xs="3" bg->
            <CategoryList />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
