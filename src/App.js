import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
// ? Başka bir componenti kullanmak için öncelikle import adiyoruz, ardından return içerisinde çağırıyoruz(Direkt return içindede <"___" /> sayesinde otomatik import edip kullanabiliriz)

function App() {
  return (
    <div>
      {/* <h2>Hello React !!! </h2> */}
      {/* Navi'yi direkt <Navi /> şeklindede yazabilirim */}
      {/* <Navi></Navi> */}
      <Navi />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
