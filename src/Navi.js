// ! rcc(snippet sayeyinde) komutuyla bir class componenti oluşturmuş olduk

import React, { Component } from "react";

// ! export "Public" anlamına geliyor, yani diğer taraflardan erişilebilir
export default class Navi extends Component {
  // ? render componentlerin değişen verilere göre yenilenmesini sağlar
  render() {
    return (
      <div>
        <h2>Navi Component</h2>
      </div>
    );
  }
}
