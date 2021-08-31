import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Toggle(props){
		
    return <Container className="toggle"> 
    <Box className="prev">
    <Button onClick={props.prevQuestion}> {props.currentQuestion === 0 ? "" : "Prev"} </Button>
    </Box>
    <Box className="next">
	<Button onClick={() => {
    // props.changeColour();
    props.nextQuestion();
    }}> {props.currentQuestion === 9 ? "Submit" : "Next"} </Button>
    </Box>
    </Container>
   
}

export default Toggle;