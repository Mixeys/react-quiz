import React, { Component } from 'react';

import classes from './Quiz.module.css';

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'What color is the sky?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Black', id: 1,},
                    {text: 'Green', id: 2,},
                    {text: 'Blue', id: 3,},
                    {text: 'Yellow', id: 4,},
                ],
            },
        ],
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id: ', answerId);
    }
    
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all the questions.</h1>
                    <ActiveQuiz
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
