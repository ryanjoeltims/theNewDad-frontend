import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = props => (
  <tr>
    <td>{props.post.username}</td>
    <td>{props.post.title}</td>
    <td>{props.post.description}</td>
    <td>{props.post.date.substring(0, 10)}</td>
    <td>
<<<<<<< HEAD
      <Link to={"/editpost/" + props.post._id}>edit</Link> | <a
        href="#" onClick={() => { props.deletePost(props.post._id) }}>delete</a>
        <a href={"/reply/" + props.post._id} className="btn btn-primary">Reply</a>
=======
      <Link to={"/editpost/" + props.post._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deletePost(props.post._id);
        }}
      >
        delete
      </a>
      <a href={"/reply/" + props.post._id} className="btn btn-primary">
        Reply
      </a>
>>>>>>> nathansbranch
    </td>
  </tr>
);

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
    
    this.state = { posts: [] };
  }

  componentDidMount() {
    console.log(process.env);

    axios
      .get("/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
<<<<<<< HEAD
    axios
      .delete("/posts/" + id)
      .then(res => console.log(res.data));
=======
    axios.delete("/posts/" + id).then(res => console.log(res.data));
>>>>>>> nathansbranch

    this.setState({
      posts: this.state.posts.filter(el => el._id !== id)
    });
  }

  postList() {
    return this.state.posts.map(currentpost => {
      return (
        <Post
          post={currentpost}
          deletePost={this.deletePost}
          key={currentpost._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>
          Posted Questions 
        </h1>
=======
        <h1>Posted Questions</h1>
>>>>>>> nathansbranch
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.postList()}
          </tbody>
        </table>
      </div>
    );
  }
}