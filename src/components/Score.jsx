import React from "react";
import questions from "./questions";

function Score(props){
    
	return <div className='score-section'>You scored {props.score} out of {questions.length}</div>
			
}

export default Score;