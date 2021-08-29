import React from "react";

function Toggle(props){
		
    return <> <button id="prev" onClick={props.prevQuestion}> Previous Question </button>
	<button id="next" onClick={props.nextQuestion}> Next Question </button> </>
}

export default Toggle;