import React from "react";
import "./Feed.scss";
import Post from "./Post/Post";
import { trackPromise } from "react-promise-tracker";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
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
      <div className="Feed d-flex flex-wrap">
        {this.state.posts.map((post, index) => {
          return (
            <Post
              image={post.image}
              title={post.title}
              likes={post.likes}
              tags={post.tags}
              created={post.created}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
