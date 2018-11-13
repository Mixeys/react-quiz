import React from 'react';

import classes from './AswersList.module.css';

import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            { props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        answer={answer}
                        key={index}
                        onAnswerClick={props.onAnswerClick}
                    />
                )
            }) }
        </ul>
    );
}

export default AnswersList;
