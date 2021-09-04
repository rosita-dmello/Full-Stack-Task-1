import React, {useState, useEffect} from "react";
import Question from "./Question";
import Answer from "./Answer";
import Toggle from "./Toggle";
import Score from "./Score";
import axios from "axios";
import Box from '@material-ui/core/Box';
import {url} from "./Start";

function Card() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
	const [questionArray, setQuestionArray] = useState([]);
	const [data, setData] = useState([]);
	const [yourAnswer,setYourAnswer] = useState([]);
	useEffect(() => {
	console.log(url);
	(async () => {
	try {
    const response = await axios.get(url);
    setQuestionArray(response.data.results);
	
	} catch(err) {
	console.log(err);
   }
})();
}, []);

useEffect(()=> {
	createData();
}, [questionArray])

function createData(){ //function to push data into the new array
const questions = []; //creating a new array to store objects

for(var i = 0; i< questionArray.length; i++) {
	if(questionArray.length === 0) break;

    questions.push({
        key: i,
        questionText: questionArray[i].question,
		answered: false,
        options: [
            {optionText: questionArray[i].correct_answer, isCorrect: true},
            {optionText: questionArray[i].incorrect_answers[0], isCorrect: false},
            {optionText: questionArray[i].incorrect_answers[1], isCorrect: false},
            {optionText: questionArray[i].incorrect_answers[2], isCorrect: false}
        ]
    });
    for (let j = 3; j > 0; j--) { //shuffling options
        const k = Math.floor(Math.random() * (j + 1));
        [questions[i].options[j], questions[i].options[k]] = [questions[i].options[k], questions[i].options[j]];
    }

}
setData(questions);
}



	function prevQuestion() {
		if (currentQuestion !== 0){
			setCurrentQuestion(prevValue => prevValue-1)
		}
	}
	function nextQuestion() {
		if (currentQuestion !== (data.length-1)){
			setCurrentQuestion(prevValue => prevValue+1)
		} else {
			for(var i=0; i<data.length; i++) {
				if (data[i].answered === false) {
					alert("Please answer question " + (i+1));
					setShowScore(false);
					break;
				}
				else {
				setShowScore(true);
			   }
			}
			
		} 
		

		}
	function clickedAnswer(currentQuestion) {
		data[currentQuestion].answered = true;
	}

	function yourAnswers([qNo, optNo]) {
		setYourAnswer(prevValue => [[qNo, optNo], ...prevValue]);
	}
	

	
    return <Box className={showScore ? "results" : "app" }>
        {showScore
            ? <Box> <Score yourAnswers={yourAnswer} data={data}/> </Box>: ( <Box>

			<Question data={data} currentQuestion={currentQuestion} />
			
			<Answer data={data} nextQuestion={nextQuestion} currentQuestion={currentQuestion} clicked={clickedAnswer} yourAnswers={yourAnswers} yourAnswer={yourAnswer} /> 
			
			<Toggle prevQuestion={prevQuestion} nextQuestion={nextQuestion} currentQuestion={currentQuestion} /> 
			</Box>
			  )}
   
			</Box>
}

export default Card;










