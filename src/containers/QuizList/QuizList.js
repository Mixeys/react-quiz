import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import classes from "./QuizList.module.css";

class QuizList extends Component {
  state = {
    quizes: [],
  }
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Test {quiz}</NavLink>
        </li>
      );
    });
  }
  async componentDidMount() {
    try{
      const response = await axios.get("https://react-quiz-d1b02.firebaseio.com/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test ${index + 1}`
        })
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>List test</h1>
          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
