import React from "react";
import "./Feed.scss";
import Post from "./Post/Post";
import { trackPromise } from "react-promise-tracker";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      data: "",
      loading: true
    };
  }

  componentDidMount() {
    trackPromise(
      fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
        .then(res => res.json())
        .then(posts => {
          this.setState({ posts });
        })
    );
  }

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => {
          return (
            <Post
              image={post.image}
              title={post.title}
              likes={post.likes}
              tags={post.tags}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
