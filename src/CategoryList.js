import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // ! App js 'deki category list'imi okumak için bir constructor oluşturuz ,
  // ! ardından "super" diyerek props'ımızı component'imize taşıyoruz. en son ise state oluşturuyoruz. Sonra bu state'i {this.state.counter} şeklinde kullanıyoruz
  // ? en son ise çağırmak istediğimiz yere gidip this.props deyip title diyerek çağırıyoruz
  // constructor(props) {
  // super(props);
  state = {
    categories: [],
  };
  // ? componentDidMount fonk. sayesinde componentimin yerleştiğini bildirip, datalrımı dolduruyorum
  componentDidMount() {
    this.getCategories();
  }
  // }
  // *=======================
  // ! app.js'de encapsulation yöntemimizi uyguladıktan sonra burada divimizin içine girip {this.props.info.__değişkenismi__} şeklinde çağırıyoruz
  // ! changeCategory diye yeni bir değişken oluşturduk ve bunu eventimizde çağırdık

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        {/* <h3>{this.props.title}</h3> */}
        <h3>{this.props.info.title}</h3>
        {/* <h3>{this.state.counter}</h3> */}

        <ListGroup>
          {/* //! yukarıda yazmış olduğumuz categories'im içerisinde ki bilgileri getirmek için */}
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
