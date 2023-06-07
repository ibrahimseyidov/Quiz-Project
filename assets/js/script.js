let startBtn = document.querySelector(".button");
let mainPage = document.querySelector(".quiz-bg");
let questionPage = document.querySelector(".question-bg");
let orderQuestion = document.querySelector("#orderQuestion");
let myQuestion = document.querySelector("#myQuestion");
let aOption = document.querySelector(".q-a");
let bOption = document.querySelector(".q-b");
let cOption = document.querySelector(".q-c");
let dOption = document.querySelector(".q-d");
let answer = document.querySelector(".answer");
let progressBar = document.querySelector("#progressBar");
let gameEnd = document.querySelector("#gameEnd");
let score = document.querySelector("#score");
let replayBtn = document.querySelector(".replay");

startBtn.addEventListener("click", startGame);
answer.addEventListener("click", checkAnswer);
replayBtn.addEventListener("click", replayGame);

function startGame() {
  $(mainPage).hide(2000);
  $(questionPage).show(2000)

  fetchFirstQuestion()
}

let correctAnswer = []
let count = 2;
let myCount = 0;
let ordQuestion = null;
let isTrue = null;
let trueAnswer = null;


async function fetchFirstQuestion() {
  let myData = await fetch("./assets/json/data.json")
  let response = await myData.json();

  let myQuestions = response.questions;

  orderQuestion.textContent = `Question 1`;
  myQuestion.textContent = `${myQuestions[0]["question"]}`;
  aOption.textContent = `${"A.)"} ${myQuestions[0]["a"]}`;
  bOption.textContent = `${"B.)"} ${myQuestions[0]["b"]}`;
  cOption.textContent = `${"C.)"} ${myQuestions[0]["c"]}`;
  dOption.textContent = `${"D.)"} ${myQuestions[0]["d"]}`;
  let myStr = `${myQuestions[0]["correctAnswer"]}`
  correctAnswer.push(myStr)
  return

}

async function fetchQuestion() {
  let myData = await fetch("./assets/json/data.json")
  let response = await myData.json();

  let myQuestions = response.questions;

  if (count == 2) {
    progressBar.style = "width:20%"
    orderQuestion.textContent = `Question ${2}`;
    myQuestion.textContent = `${myQuestions[1]["question"]}`;
    aOption.textContent = `${"A.)"} ${myQuestions[1]["a"]}`;
    bOption.textContent = `${"B.)"} ${myQuestions[1]["b"]}`;
    cOption.textContent = `${"C.)"} ${myQuestions[1]["c"]}`;
    dOption.textContent = `${"D.)"} ${myQuestions[1]["d"]}`;
    let myStr = `${myQuestions[1]["correctAnswer"]}`
    correctAnswer.push(myStr)
    count++
  } else if (count == 3) {
    progressBar.style = "width:40%"
    orderQuestion.textContent = `Question ${3}`;
    myQuestion.textContent = `${myQuestions[2]["question"]}`;
    aOption.textContent = `${"A.)"} ${myQuestions[2]["a"]}`;
    bOption.textContent = `${"B.)"} ${myQuestions[2]["b"]}`;
    cOption.textContent = `${"C.)"} ${myQuestions[2]["c"]}`;
    dOption.textContent = `${"D.)"} ${myQuestions[2]["d"]}`;
    let myStr = `${myQuestions[2]["correctAnswer"]}`
    correctAnswer.push(myStr)
    count++
  } else if (count == 4) {
    progressBar.style = "width:60%"
    orderQuestion.textContent = `Question ${4}`;
    myQuestion.textContent = `${myQuestions[3]["question"]}`;
    aOption.textContent = `${"A.)"} ${myQuestions[3]["a"]}`;
    bOption.textContent = `${"B.)"} ${myQuestions[3]["b"]}`;
    cOption.textContent = `${"C.)"} ${myQuestions[3]["c"]}`;
    dOption.textContent = `${"D.)"} ${myQuestions[3]["d"]}`;
    let myStr = `${myQuestions[3]["correctAnswer"]}`
    correctAnswer.push(myStr)
    count++
  } else if (count == 5) {
    progressBar.style = "width:80%"
    orderQuestion.textContent = `Question ${5}`;
    myQuestion.textContent = `${myQuestions[4]["question"]}`;
    aOption.textContent = `${"A.)"} ${myQuestions[4]["a"]}`;
    bOption.textContent = `${"B.)"} ${myQuestions[4]["b"]}`;
    cOption.textContent = `${"C.)"} ${myQuestions[4]["c"]}`;
    dOption.textContent = `${"D.)"} ${myQuestions[4]["d"]}`;
    let myStr = `${myQuestions[4]["correctAnswer"]}`
    correctAnswer.push(myStr)
    count++;
  } else if (count == 6) {
    progressBar.style = "width:100%";
    score.textContent = trueAnswer;
    questionPage.style.display = "none";
    gameEnd.style.display = "block";
  }

}

function checkAnswer(e) {

  let userTarget = e.target.textContent;
  let chosenAnswer = userTarget.slice(4);


  if (correctAnswer[myCount] == chosenAnswer) {
    let newEl = e.target
    ordQuestion = myCount + 1;
    isTrue = true;
    newEl.classList.add("rightAnswer")
    setTimeout(() => {
      newEl.classList.remove("rightAnswer")
    }, 2000)
    setTimeout(() => {
      myCount++
      trueAnswer++
      fetchQuestion()
    }, 3000)

  } else {
    let newEl = e.target
    ordQuestion = myCount + 1;
    isTrue = false
    newEl.classList.add("wrongAnswer")
    setTimeout(() => {
      newEl.classList.remove("wrongAnswer")
    }, 2000)
    setTimeout(() => {
      myCount++
      fetchQuestion()
    }, 3000)

  }
}

function replayGame() {
  location.reload()
}












