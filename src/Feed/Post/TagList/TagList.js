import React from "react";
import "./TagList.scss";

// id: 1,
// userId: 1,
// created: 1573955292,
// image: "https://raw.githubusercontent.com/evyros/fake-api/master/images/street.jpeg",
// title: "Just walking on the streets with my girl",
// tags: [
// "street",
// "walkforsoul",
// "freedom"
// ],
// likes: 210

class TagList extends React.Component {
  render() {
    return (
      <div className="TagList">
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default TagList;

// {this.props.tags.map(tag => {
//     return (
//     <span className="Tag"> {tag}</span>
//     )
//   })}
