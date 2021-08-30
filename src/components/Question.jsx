import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


function Question(props){
    const index = props.currentQuestion;
    return <Grid container className="question-section">
        <Container className='question-count' >
        <span class="question-span"> Question {props.currentQuestion + 1} </span>/ {props.data.length}
        </Container>
		<Container className='question-text'>{(props.data[index]).questionText}</Container>
	</Grid>
}

export default Question;