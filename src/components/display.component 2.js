import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TheNewDadImage from "../images/TheNewDad.jpeg";
import AnkleHangImage from "../images/anklehang.jpeg";



export default class DisplayBlog extends Component {

    constructor(props) {
      super(props);

      this.state = {
        post: {
          username: "",
          title: "",
          description: "",
          date: new Date()
        }
      };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({ post: {
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            date: new Date(response.data.date)
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.post.description)
    return (
      <div>
        <img src={AnkleHangImage} className='img-fluid' />
        <h1>{this.state.post.title}</h1>
        <em>By: {this.state.post.username}</em>
        <br></br>
        <p>
          {this.state.post.description}
          </p>
      </div>
    );
  }

}