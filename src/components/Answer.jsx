import React, {useState} from "react";
import data from "./questions";

function Answer(props){
    const [score, setScore] = useState(0);
    const index = props.currentQuestion;
    function handleAnswerClick(event) {
		const isCorrect = (event.target.id === "right" ? true : false);
		props.nextQuestion();
		if (isCorrect){
			setScore(prevValue => prevValue+1)
		}
        props.sendScore(score);
	}
    

    return <div className='answer-section'>
		{data[index].incorrect_answers.map((answerOption) => (
			<button id="wrong" onClick={handleAnswerClick}>{answerOption}</button>
		))}
		<button id="right" onClick={handleAnswerClick}>{data[index].correct_answer}</button>
	</div>
  
}

export default Answer;