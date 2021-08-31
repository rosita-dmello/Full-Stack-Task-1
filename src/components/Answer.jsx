import React, {useState} from "react";
import Container from '@material-ui/core/Container';


function Answer(props){
    const [score, setScore] = useState(0);
    const index = props.currentQuestion;

    function handleAnswerClick(isCorrect) {

		if (isCorrect){
			setScore(prevValue => prevValue+1)
		}
        props.sendScore(score);
	}
	

    return <>
	<Container className='answer-section'>
		{(props.data[index] ? props.data[index].options : []).map((answerOption,optNo) => {
			return <button onClick={(event) => {
			props.yourAnswers([index, optNo]);
			handleAnswerClick(answerOption.isCorrect);
			props.clicked(props.currentQuestion);
			props.nextQuestion();
			// props.changeColour();
			}}>{answerOption.optionText}</button>
		}
		)}
	</Container>
	</>
  
}

export default Answer;