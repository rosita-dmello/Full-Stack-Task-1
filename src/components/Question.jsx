import React from "react";
import data from "./questions";

function Question(props){
    const index = props.currentQuestion;
    return <div className='question-section'>
        <div className='question-count'>
        <span> Question {props.currentQuestion + 1} </span>/{data.length}
        </div>
		<div className='question-text'>{(data[index]).question}</div>
	</div>
}

export default Question;