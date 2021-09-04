import React, {useState} from "react";
import Card from "./Card";
import Start from "./Start"

function App(){
    const [startQuiz, setStartQuiz] = useState(false);
    function startQuizFn(){
        setStartQuiz(true);
    }


    
    return (
        <>
        {startQuiz ? <Card/> : <Start startQuizFn={startQuizFn}/>}
        </>
        
    )
}

export default App;