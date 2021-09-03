import React, {useEffect, useState} from "react";
import {FormControlLabel, FormControl, Radio, RadioGroup} from '@material-ui/core';


function Answer(props){
    const index = props.currentQuestion;
	const [defaultVal, setDefaultVal] = useState("");

	useEffect(() => {
		let value = (props.yourAnswer).map(set => {
		if (set[0] === props.currentQuestion) {
			return props.data[props.currentQuestion].options[set[1]].optionText;
		} 
	});
	setDefaultVal(value);
	}, [props.currentQuestion]);

    return <>
	 <FormControl className="answer-section">
		<RadioGroup defaultValue={defaultVal} className="radio" >
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