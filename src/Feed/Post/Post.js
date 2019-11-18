import React from "react";
import TagList from "./TagList/TagList";
import "./Post.scss";

// id: 1,
// userId: 1,
// created: 1573955292,
// image: "https://raw.githubusercontent.com/evyros/fake-api/master/images/street.jpeg",
// title: "Just walking on the streets with my girl",
// tags: ["street", "walkforsoul", "freedom"],
// likes: 210

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
      .then(res => res.json())
      .then(tags => {
        this.setState({ tags });
      });
  }

  render() {
    return (
      <div className="post">
        <img src={this.props.image} />
        <p>♥ {this.props.likes}</p>
        <h1>{this.props.title}</h1>
        <TagList>{this.props.tags.join(" ")}</TagList>
      </div>
    );
  }
}

export default Post;

// {this.props.tags.map(tag => { console.log(tag)
//   return (
//     <span>
//       <TagList tags={tag.tags} />
//     </span>
//   );
// })}
