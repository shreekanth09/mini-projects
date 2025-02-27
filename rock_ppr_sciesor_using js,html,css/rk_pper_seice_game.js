let userScore=0;
let compScore=0;
 
const choises=document.querySelectorAll(".chois");
const msg=document.querySelector("#msg");
let computscore=document.querySelector("#comp-score");
let userrscore=document.querySelector("#user-score");

const gencompchoice=()=>{        //its a function of genarating computer choice ..
   const options=["Rock","Paper","Scissors"];
   const randidx=Math.floor(Math.random()*3);
   return options[randidx];
};

 const drawGame=()=>{
    console.log("The game is draw!");
    msg.innerText="Game is draw!";
    msg.style.backgroundColor="#081b31"
 };
 const showWinner=(final,userChoice,compChoice)=>{
    if(final){
        console.log("You win!");
        userScore++;
        userrscore.innerText =userScore;
        msg.innerText=`you won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You lose !!");
        compScore++;
        computscore.innerText = compScore;
        msg.innerText=`you loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
 }

const playgame=(userChoice)=>{                    //ITS A FUNCTION of user choice..
    // let userChoice=choice.getAttribute("id");
    console.log("user choice is",userChoice);
    const compChoice = gencompchoice();
    console.log("computer choice is", compChoice);
    
    if(userChoice ===  compChoice){
        drawGame();
        // console.log("The game is draw!");
    }
    else{
        let final=true;
        if(userChoice==="Rock"){
            //Paper,Scissors
          final=  compChoice==="Paper"? false: true;
        }
        else if(userChoice==="Paper"){
            //Scissors,Rock
            final= compChoice==="Scissors"? false: true;
        }  
        // else if(userChoice==="Scissors"){
        else{
             // Paper,Rock
             final=compChoice==="Rock"? false: true;
        }
        showWinner(final,userChoice,compChoice);
    }
   
};
choises.forEach((choice)=>{  
    const userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        // console.log("the choice was clicked!",userChoice);
        playgame(userChoice);
      

    });
});