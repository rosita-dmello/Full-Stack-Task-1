import React from "react";
import data from "./questions";

function Score(props){
    
	return <div className='score-section'>You scored {props.score} out of {data.length}</div>
			
}

export default Score;