import React, { Component } from 'react';

import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import { createControl } from '../../form/formFramework';

function createOptionControl(number) {
    return createControl({
        label: `Option ${number}`,
        errorMessage: 'The value cannot be empty',
        id: number,
    }, {required: true})
}

function createFormControl() {
    return {
        question: createControl({
            label: 'Enter question',
            errorMessage: 'The question cannot be empty',
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {
    state = {
        quiz: [],
        formControls: createFormControl()
    }
    submitHandler = event => {
        event.preventDefault();
    }
    addQuestionHandler = () => {}
    createQuizHandler = () => {}
    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Creature test</h1>
                    <form onSubmit={this.submitHandler}>
                        {/* { this.renderControls() } */}
                        <Button
                            type="primary"
                            onClick={this.addQuestion}
                        >
                            Add question
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Create test
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default QuizCreator;
