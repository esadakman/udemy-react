import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // ! App js 'deki category list'imi okumak için bir constructor oluşturuz ,
  // ! ardından "super" diyerek props'ımızı component'imize taşıyoruz. en son ise state oluşturuyoruz
  // ? en son ise çağırmak istediğimiz yere gidip this.props deyip title diyerek çağırıyoruz
  // *=======================
  // ! app.js'de encapsulation yöntemimizi uyguladıktan sonra burada divimizin içine girip {this.props.info.__değişkenismi__} şeklinde çağırıyoruz
  constructor(props) {
    super(props);
    state: {
    }
  }

  render() {
    return (
      <div>
        {/* <h3>{this.props.title}</h3> */}
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac </ListGroupItem>
          <ListGroupItem>Morbi leo </ListGroupItem>
          <ListGroupItem>{this.props.info.title}</ListGroupItem>
          <ListGroupItem>Vestibulum </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
