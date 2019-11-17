import React from "react";
import "./Post.scss";

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

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <img src={this.props.image}/>
        <p>♥ {this.props.likes}</p>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Post;
