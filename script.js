var curPage = 0;
var myQuiz = [
    ["What \" ' \"  Quote show without error\" is addEventListener() used for?", "1.jpg", 1, "attach a click event", "nothing", "never use it", "listens to HTML"],
    ["What does DOM stand for", "2.jpg",1, "Document Object Model ", "Document Over Mountains", "Do Over Models", "Nothing"],
    ["What does BOM stand for", "3.jpg",4, "document Object Model", "nothing", "Big Object Model", " Browser Object Model "]
];
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);

var myHeader = document.getElementById("quizHeader");
var classname = document.getElementsByClassName("answer");
var myQuestion = document.getElementById("questions");
checkPage();

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myAnswer, false);
}

function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    document.getElementById("page1").innerHtml = 'Answer ' + idAnswer;
}

function moveNext() {
    curPage++;
    checkPage(curPage);
}

function checkPage(i) {
    myHeader.innerHTML = myQuiz[curPage][0];
}

function moveBack() {
    curPage--;
    checkPage(curPage);
}