import React from "react";


function Score(props){
    const allAnswers = props.yourAnswers;
    console.log(allAnswers);
    const filteredArray = [];
    
    const displayArray = [];
    for (var i=0; i<props.data.length;i++){
       filteredArray.push(allAnswers.find(answerArray => {
            return answerArray[0] === i;
        }));
    }
     console.log(filteredArray);
    var qNo = 0;
    var optionNo = 0;
    for (var j=0; j<filteredArray.length; j++) {
        qNo = filteredArray[j][0];
        optionNo = filteredArray[j][1];
        var correctAnswer = props.data[j].options.find(option => {return option.isCorrect === true});
        displayArray.push(
            {
                question: props.data[qNo].questionText,
                correctAnswer: correctAnswer.optionText,
                yourAnswer: props.data[qNo].options[optionNo].optionText
            }
        );
    }
    let score = 0;
    displayArray.map(object => {
        if (object.yourAnswer === object.correctAnswer) {
            score++;
        }
    });


	return <>
    <div className='score-section'>You scored {score} out of {props.data.length}</div>
    {displayArray.map((item,index) => {
        return <div className=".app">
        <hr/>
        <p> Question No: {index+1} </p>
        <p> Question : {item.question} </p>
        <p> Correct Answer: {item.correctAnswer} </p>
        <p className = {item.correctAnswer === item.yourAnswer ? "correct" : "incorrect"}> Your Answer: {item.yourAnswer} </p>
        
        </div>
    })}
	</>
}

export default Score;