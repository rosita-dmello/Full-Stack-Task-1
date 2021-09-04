import React, {useState} from "react";
import {Box, Select, MenuItem, TextField, InputLabel, Button} from '@material-ui/core';
import categories from "./categories.js"
let url="";
function Start(props) {
    
    const [n, setN] = useState(10);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    function handleCategory(event) {
        setCategory(event.target.value);
    }
    function handleDifficulty(event) {
        setDifficulty(event.target.value);
    }
    function handleN(event) {
        setN(event.target.value);
    }
    
    function makeUrl(){
    if(category==="" && difficulty==="") {
        url = "https://opentdb.com/api.php?amount=" + n + "&type=multiple";
    } else if(category==="") {
        url = "https://opentdb.com/api.php?amount=" + n + "&difficulty=" + difficulty + "&type=multiple";
    } else if(difficulty==="") {
        url = "https://opentdb.com/api.php?amount=" + n + "&category=" + category + "&type=multiple";
    } else {
        url = "https://opentdb.com/api.php?amount=" + n + "&category=" + category + "&difficulty=" + difficulty + "&type=multiple";
    }
    
    }
    
    return <Box className="start">
        <h1> Ready to test your Knowledge? </h1>
        <hr/>
        <TextField id="standard-number"
                    label="No. of questions"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    onChange={handleN}
                    value={n} />
        <InputLabel shrink id="categoryLabel">Select category</InputLabel>
        <Select labelId= "categoryLabel" value={category}  onChange={handleCategory}>
        {categories.map(categoryObject => {
            return <MenuItem value={categoryObject.id}>{categoryObject.name}</MenuItem>
        })}
        </Select>
        <InputLabel shrink id="difficultyLabel">Select difficulty</InputLabel>
        <Select labelId= "difficultyLabel" value={difficulty} onChange={handleDifficulty}>
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
        </Select>
        <hr/>
        <Button variant="contained" className="startButton" onClick={()=> {
        makeUrl();
        props.startQuizFn();}}>Start</Button>

    </Box>
}

export default Start;
export {url};