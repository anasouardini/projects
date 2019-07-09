var rock = document.getElementsByClassName('rockImage'),
    paper = document.getElementsByClassName('paperImage'),
    scissors = document.getElementsByClassName('scissorsImage'),

    playerScoreEl = document.getElementById('playerScore'),
    robotScoreEl = document.getElementById('robotScore'),

    playerScore = 0,
    robotScore = 0;

document.getElementById('reset').onclick = function(){

  playerScore = robotScore = 0;

  robotScoreEl.innerHTML = playerScoreEl.innerHTML = 0;

  rock[0].style.border = '0px solid';
  paper[0].style.border = '0px solid';
  scissors[0].style.border = '0px solid';

  rock[1].style.border = '0px solid';
  paper[1].style.border = '0px solid';
  scissors[1].style.border = '0px solid';
};


rock[0].addEventListener('click', function(){
  var randomNum = Math.floor(Math.random()*3);
  if(randomNum == 0){
    console.log("draw");
    rock[0].style.border = '5px solid yellow';
    paper[0].style.border = '0px solid';
    scissors[0].style.border = '0px solid';

    rock[1].style.border = '5px solid yellow';
    paper[1].style.border = '0px solid';
    scissors[1].style.border = '0px solid';
  }else if(randomNum == 1){
    console.log(robotScoreEl);
    robotScore++;
    robotScoreEl.innerHTML = robotScore;

    rock[0].style.border = '5px solid red';
    paper[0].style.border = '0px solid';
    scissors[0].style.border = '0px solid';

    rock[1].style.border = '0px solid';
    paper[1].style.border = '5px solid green';
    scissors[1].style.border = '0px solid';
  }else if(randomNum == 2){
    console.log("won");
    playerScore++;
    playerScoreEl.innerHTML = playerScore;

    rock[0].style.border = '5px solid green';
    paper[0].style.border = '0px solid';
    scissors[0].style.border = '0px solid';

    rock[1].style.border = '0px solid';
    paper[1].style.border = '0px solid';
    scissors[1].style.border = '5px solid red';
  }

})

paper[0].addEventListener('click', function(){
  var randomNum = Math.floor(Math.random()*3);
  if(randomNum == 0){
    console.log("won");
    playerScore++;
    playerScoreEl.innerHTML = playerScore;

    rock[0].style.border = '0px solid';
    paper[0].style.border = '5px solid green';
    scissors[0].style.border = '0px solid';

    rock[1].style.border = '5px solid red';
    paper[1].style.border = '0px solid';
    scissors[1].style.border = '0px solid';
  }else if(randomNum == 1){
    console.log("draw");
    rock[0].style.border = '0px solid';
    paper[0].style.border = '5px solid yellow';
    scissors[0].style.border = '0px solid';

    rock[1].style.border = '0px solid';
    paper[1].style.border = '5px solid yellow';
    scissors[1].style.border = '0px solid';
  }else if(randomNum == 2){
    console.log("lost");
    robotScore++;
    robotScoreEl.innerHTML = robotScore;

    rock[0].style.border = '0px solid';
    paper[0].style.border = '5px solid red';
    scissors[0].style.border = '0px solid';

    rock[1].style.border = '0px solid';
    paper[1].style.border = '0px solid';
    scissors[1].style.border = '5px solid green';
  }

})

scissors[0].addEventListener('click', function(){
  var randomNum = Math.floor(Math.random()*3);
  if(randomNum == 0){
    console.log("lost");
    robotScore++;
    robotScoreEl.innerHTML = robotScore;

    rock[0].style.border = '0px solid';
    paper[0].style.border = '0px solid';
    scissors[0].style.border = '5px solid red';

    rock[1].style.border = '5px solid green';
    paper[1].style.border = '0px solid';
    scissors[1].style.border = '0px solid';

  }else if(randomNum == 1){
    console.log("won");
    playerScore++;
    playerScoreEl.innerHTML = playerScore;

    rock[0].style.border = '0px solid';
    paper[0].style.border = '0px solid';
    scissors[0].style.border = '5px solid green';

    rock[1].style.border = '0px solid';
    paper[1].style.border = '5px solid red';
    scissors[1].style.border = '0px solid';

  }else if(randomNum == 2){
    console.log("draw");
    rock[0].style.border = '0px solid';
    paper[0].style.border = '0px solid';
    scissors[0].style.border = '5px solid yellow';

    rock[1].style.border = '0px solid';
    paper[1].style.border = '0px solid';
    scissors[1].style.border = '5px solid yellow';
  }

})
