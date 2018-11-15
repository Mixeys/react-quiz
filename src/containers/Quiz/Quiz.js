import React, { Component } from "react";

import classes from "./Quiz.module.css";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinised: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: "What color is the sky?",
        rightAnswerId: 3,
        answers: [
          { text: "Black", id: 1 },
          { text: "Green", id: 2 },
          { text: "Blue", id: 3 },
          { text: "Yellow", id: 4 }
        ]
      },
      {
        id: 2,
        question: "In which year was founded Nikolaev?",
        rightAnswerId: 1,
        answers: [
          { text: "1789", id: 1 },
          { text: "1785", id: 2 },
          { text: "1778", id: 3 },
          { text: "1783", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
          results[question.id] = 'success'
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinised: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
          window.setTimeout(timeout);
        }
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
      this.setState({
          activeQuestion: 0,
          answerState: null,
          isFinised: false,
          results: {}
      })
  }

  componentDidMount() {
    console.log('Quiz ID = ', this.props.match.params.id);
  }


  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all the questions.</h1>
          {this.state.isFinised ? (
            <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler} />
          ) : (
            <ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
