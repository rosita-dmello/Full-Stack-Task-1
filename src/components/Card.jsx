import React, {useState, useEffect} from "react";
import Question from "./Question";
import Answer from "./Answer";
import Toggle from "./Toggle";
import Score from "./Score";
import data from "./questions";


function Card() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);


	function prevQuestion() {
		if (currentQuestion !== 0){
			setCurrentQuestion(prevValue => prevValue-1)
		}
	}
	function nextQuestion() {
		if (currentQuestion !== 9){
			setCurrentQuestion(prevValue => prevValue+1)
		} else {
			setShowScore(true);

		}
	}
	const [currentScore, setCurrentScore] = useState(0);
	function receiveScore(score) {
		 setCurrentScore(score);
	}
	
    return <div class="app">
        {showScore
            ? <Score score={currentScore} /> : ( <div> 

			<Question data={data} currentQuestion={currentQuestion} />

			 <Answer data={data} nextQuestion={nextQuestion} currentQuestion={currentQuestion} sendScore={receiveScore} /> 

			 <Toggle prevQuestion={prevQuestion} nextQuestion={nextQuestion} /> 

			 </div> )}
    </div>

}

export default Card;










