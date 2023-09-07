const questions=[
    {
        question: "What is the full form of HTML?",
        answers:[
            {text:"HighText Machine Language",correct:false},
            {text:"HyperText and links Markup Language",correct:false},
            {text:"HyperText Markup Language",correct:true},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question: "Which character is used to represent the closing of a tag in HTML?",
        answers:[
            {text:"/",correct:true},
            {text:"*",correct:false},
            {text:"!",correct:false},
            {text:"#",correct:false},
        ]
    },
    {
        question: "What is the full form of CSS",
        answers:[
            {text:"Coloured special Sheet",correct:false},
            {text:"Colour and style sheet",correct:false},
            {text:"None of the above",correct:false},
            {text:"Cascading Style Sheets",correct:true},
        ]
    },
    {
        question: "Which keyword is used to refer current object of a class in Java?",
        answers:[
            {text:"this",correct:true},
            {text:"new",correct:false},
            {text:"current",correct:false},
            {text:"None",correct:false},
        ]
    },
    {
        question: "Super keyword in java is used to",
        answers:[
            {text:"refer current class object.",correct:false},
            {text:"refer static method of the class.",correct:false},
            {text:"refer parent class object.",correct:true},
            {text:"refer static variable of the class.",correct:false},
        ]
    },
    {
        question: "What is the size of float and double in java?",
        answers:[
            {text:"64 and 64",correct:false},
            {text:"64 and 32",correct:false},
            {text:"32 and 32",correct:false},
            {text:"32 and 64",correct:true},
        ]
    },
    {
        question: "Select the valid statement",
        answers:[
            {text:"char[] ch=new char(5)",correct:false},
            {text:"char[] ch=new char[5]",correct:true},
            {text:"char[] ch=new char()",correct:false},
            {text:"char[] ch=new char[]",correct:false},
        ]
    },
    {
        question: "When an array is passed to a method, what does the method receive?",
        answers:[
            {text:"The refference of the array",correct:true},
            {text:"length of the array",correct:false},
            {text:"A copy of the array",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question: "Select the valid statement to declare and initialize an array.",
        answers:[
            {text:"int[] A={1,2,3}",correct:true},
            {text:"int[] A=[1,2,3]",correct:false},
            {text:"int[] A=(1,2,3)",correct:false},
            {text:"int A[]=[1,2,3]",correct:false},
        ]
    },
    {
        question: "compareTo() returns",
        answers:[
            {text:"True",correct:false},
            {text:"False",correct:false},
            {text:"An int value",correct:true},
            {text:"0",correct:false},
        ]
    },
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-button");

let currentQuestionIndex=0;
let score=0;

function startQuize(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("button");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    } );
}
function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }

}
function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML=`You score ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuize();
    }
})

startQuize();