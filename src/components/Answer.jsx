import React, {useState} from "react";
import Container from '@material-ui/core/Container';


function Answer(props){
    const [score, setScore] = useState(0);
    const index = props.currentQuestion;
    function handleAnswerClick(isCorrect) {
		props.nextQuestion();

		if (isCorrect){
			setScore(prevValue => prevValue+1)
		}
        props.sendScore(score);
	}
	
    

    return <Container className='answer-section'>
		{(props.data[index].options).map(answerOption => {
			return <button onClick={() => handleAnswerClick(answerOption.isCorrect)} variant="contained" color="secondary" >{answerOption.optionText}</button>
		}
		)}

	</Container>
  
}

export default Answer;