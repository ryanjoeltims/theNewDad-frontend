import React, { Component } from "react";
import axios from "axios";
import DadHold from "../images/dadhold.jpeg";



export default class DisplayBlog extends Component {

    constructor(props) {
      super(props);

      this.state = {
        blog: {
          username: "",
          title: "",
          description: "",
          date: new Date()
        }
      };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/blogs/" + this.props.match.params.id)
      .then(response => {
        this.setState({ blog: {
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
    return (
      <div style={{ fontFamily: 'Optima' }}>
        <img src={DadHold} className='img-fluid' alt="banner" />
        <h1>{this.state.blog.title}</h1>
        <em>By: {this.state.blog.username}</em>
        <br></br>
        <p>
          {this.state.blog.description}
          </p>
      </div>
    );
  }

}