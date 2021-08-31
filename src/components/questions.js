
const data = [
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "easy",
"question": "Who is the frontman of the band 30 Seconds to Mars?",
"correct_answer": "Jared Leto",
"incorrect_answers": [
"Gerard Way",
"Matthew Bellamy",
"Mike Shinoda"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Who was the voice actor for Snake in Metal Gear Solid V: The Phantom Pain?",
"correct_answer": "Kiefer Sutherland",
"incorrect_answers": [
"David Hayter",
"Norman Reedus",
"Hideo Kojima"
]
},
{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "easy",
"question": "What is the primary addictive substance found in tobacco?",
"correct_answer": "Nicotine",
"incorrect_answers": [
"Cathinone",
"Ephedrine",
"Glaucine"
]
},
{
"category": "Entertainment: Board Games",
"type": "multiple",
"difficulty": "easy",
"question": "Which one of these is not a real game in the Dungeons & Dragons series?",
"correct_answer": "Extreme Dungeons & Dragons",
"incorrect_answers": [
"Advanced Dungeons & Dragons",
"Dungeons & Dragons 3.5th edition",
"Advanced Dungeons & Dragons 2nd edition"
]
},
{
"category": "Entertainment: Film",
"type": "multiple",
"difficulty": "easy",
"question": "In the movie Gremlins, after what time of day should you not feed Mogwai?",
"correct_answer": "Midnight",
"incorrect_answers": [
"Evening",
"Morning",
"Afternoon"
]
},
{
"category": "Vehicles",
"type": "multiple",
"difficulty": "easy",
"question": "Which car tire manufacturer is famous for its &quot;P Zero&quot; line?",
"correct_answer": "Pirelli",
"incorrect_answers": [
"Goodyear",
"Bridgestone",
"Michelin"
]
},
{
"category": "Vehicles",
"type": "multiple",
"difficulty": "easy",
"question": "The LS2 engine is how many cubic inches?",
"correct_answer": "364",
"incorrect_answers": [
"346",
"376",
"402"
]
},
{
"category": "Mythology",
"type": "multiple",
"difficulty": "easy",
"question": "What mythology did the god &quot;Apollo&quot; come from?",
"correct_answer": "Greek and Roman",
"incorrect_answers": [
"Roman and Spanish",
"Greek and Chinese",
"Greek, Roman and Norse"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
"correct_answer": "Plum",
"incorrect_answers": [
"Apple",
"Peach",
"Pear"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "What is the closest planet to our solar system&#039;s sun?",
"correct_answer": "Mercury",
"incorrect_answers": [
"Mars",
"Jupiter",
"Earth"
]
}
]
var questions = [];
for(var i = 0; i<10; i++) {
    questions.push({
        id: i,
        questionText: data[i].question,
        answered: false,
        options: [
            {optionText: data[i].correct_answer, isCorrect: true},
            {optionText: data[i].incorrect_answers[0], isCorrect: false},
            {optionText: data[i].incorrect_answers[1], isCorrect: false},
            {optionText: data[i].incorrect_answers[2], isCorrect: false}
        ]
    })
    for (let j = 3; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [questions[i].options[j], questions[i].options[k]] = [questions[i].options[k], questions[i].options[j]];
    }
}


export default questions;







// async function getQuestions() {
//   try {
//     const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

















// async function fetchQuestionsJSON() {
//     try {
//     const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");
//      const questionObject = await response.json();
//      return questionObject.results;
//     } catch (err){
//         console.log(err);
//     }
    
// }
// let fetchedQuestions = fetchQuestionsJSON();

// console.log(fetchedQuestions);



// function Example() {
//   const [data, dataSet] = useState<any>(null)

//   useEffect(() => {
//     async function fetchMyAPI() {
//       let response = await fetch('api/data')
//       response = await response.json()
//       dataSet(response)
//     }

//     fetchMyAPI()
//   }, [])

//   return <div>{JSON.stringify(data)}</div>
// }


// async function fetchQuestionsJSON() {
//     try {
//     let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");
//     response = await response.json();
//     return response;
//     } catch (err){
//         console.log(err);
//     }
    
// }
// try{
// let receiveData = fetchQuestionsJSON();
// console.log(receiveData);
// }
// catch(err) {
//     console.log(err);
// }


