import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = props => (
  <tr>
    <td>{props.post.date.substring(0, 10)}</td>
    <td>{props.post.title}</td>
    <td>{props.post.description}</td>
    <td>
      <Link to={"/editpost/" + props.post._id} className="btn-sm btn-success btn-block text-center">edit</Link>{" "}
      <br></br>
      <a
        href="#"
        onClick={() => {
          props.deletePost(props.post._id);
        }}
        className="btn-sm btn-warning"
      >
        delete
      </a>
    </td>
  </tr>
);

export default class AdminForumList extends Component {
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
    axios.delete("/posts/" + id).then(res => console.log(res.data));

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
      <div style={{ fontFamily: 'Optima' }}>
        <h1>
          Admin Forum List{" "}
        </h1>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.postList()}</tbody>
        </table>
      </div>
    );
  }
}
