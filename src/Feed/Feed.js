import React from "react";
import "./Feed.scss";
import Post from "./Post/Post";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => {
          return (
            <Post image={post.image} title={post.title} likes={post.likes}/>
          )
        })}
      </div>
    );
  }
}

export default Feed;
