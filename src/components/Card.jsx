import React, {useState} from "react";
import Question from "./Question";
import Answer from "./Answer";
import Toggle from "./Toggle";
import Score from "./Score";


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
	
    return <div>
        {showScore
            ? <Score score={currentScore} /> : ( <> 

			<Question  currentQuestion={currentQuestion} />

			 <Answer nextQuestion={nextQuestion} currentQuestion={currentQuestion} sendScore={receiveScore} /> 

			 <Toggle prevQuestion={prevQuestion} nextQuestion={nextQuestion} /> 

			 </> )}
    </div>

}

export default Card;