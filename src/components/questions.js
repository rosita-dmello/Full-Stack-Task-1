
const data = [
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
        "correct_answer": "1000",
        "incorrect_answers": [
            "512",
            "1024",
            "500"
        ]
    },
    {
        "category": "Entertainment: Board Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "On a standard Monopoly board, which square is diagonally opposite Go? ",
        "correct_answer": "Free Parking",
        "incorrect_answers": [
            "Go to Jail",
            "Jail",
            "The Electric Company"
        ]
    },
    {
        "category": "Science: Gadgets",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The term battery to describe an electrical storage device was coined by?",
        "correct_answer": "Benjamin Franklin",
        "incorrect_answers": [
            "Nikola Tesla",
            "Luigi Galvani",
            " Alessandro Volta"
        ]
    },
    {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
        "correct_answer": "12",
        "incorrect_answers": [
            "19",
            "21",
            "25"
        ]
    },
    {
        "category": "Mythology",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which Greek and Roman god was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more?",
        "correct_answer": "Apollo",
        "incorrect_answers": [
            "Aphrodite",
            "Artemis",
            "Athena"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In the game Battleblock Theater, what was the name of the voice actor who voiced the narrator?",
        "correct_answer": "Will Stamper",
        "incorrect_answers": [
            "Steve Blum",
            "Richard Epcar",
            "Yuri Lowenthal"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In Rust, how many Timed Explosive Charges does it take to destroy a Ladder Hatch?",
        "correct_answer": "1",
        "incorrect_answers": [
            "3",
            "2",
            "5"
        ]
    },
    {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won Big Brother 2014 UK?",
        "correct_answer": "Helen Wood",
        "incorrect_answers": [
            "Christopher Hall",
            "Pauline Bennett",
            "Pavandeep &quot;Pav&quot; Paul"
        ]
    },
    {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
        "correct_answer": "Sri Lanka",
        "incorrect_answers": [
            "Kiribati",
            "Scotland",
            "Bhutan"
        ]
    },
    {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In the TV show &quot;Mad Men&quot;, what was Donald Draper&#039;s birthname?",
        "correct_answer": "Richard &quot;Dick&quot; Whitman",
        "incorrect_answers": [
            "Donald Draper",
            "John Ashbury",
            "Michael &quot;Mikey&quot; Wilhelm"
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


