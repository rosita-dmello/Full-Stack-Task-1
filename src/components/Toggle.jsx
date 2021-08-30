import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


function Toggle(props){
		
    return <Container class="toggle"> 
    <div class="prev">
    <Button onClick={props.prevQuestion}> Prev </Button>
    </div>
    <div class="next">
	<Button onClick={props.nextQuestion}> Next </Button>
    </div>
    </Container>
   
}

export default Toggle;