import React from "react";
import {FormControlLabel, FormControl, Radio, RadioGroup} from '@material-ui/core';


function Answer(props){
    const index = props.currentQuestion;
	
    return <>
	 <FormControl className="answer-section">
		<RadioGroup className="radio">
		{(props.data[index] ? props.data[index].options : []).map((answerOption,optNo) => {
			return <FormControlLabel className="button" onChange={(event) => {
			props.yourAnswers([index, optNo]);
			props.clicked(index);
			}} control={<Radio/>} value={answerOption.optionText} label={answerOption.optionText}></FormControlLabel>
		}
		)}
		</RadioGroup>
	</FormControl>
	</>
}

export default Answer;