import React from "react";
import TagList from "./TagList/TagList";
import "./Post.scss";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
      tags: [],
      date: ""
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
      .then(res => res.json())
      .then(tags => {
        this.setState({ tags });
      });
  }

  // unixToDate() {
  //   let date = new Date()
  // }

  render() {
    return (
      <div className="post">
        <div className="UserName">
          
          <FontAwesomeIcon icon={faUserCircle} size="lg" /> Username
        </div>
        <img src={this.props.image} />
        <p><FontAwesomeIcon className="Heart" icon={faHeart} size="xs" /> {this.props.likes}</p>
        <h1>{this.props.title}</h1>
        <TagList tags={this.props.tags} />
        <Moment className="Date" format="MMM DD YYYY" unix>
          {this.props.created}
        </Moment>
      </div>
    );
  }
}

export default Post;
