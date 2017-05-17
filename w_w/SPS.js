var beginRock = function(){    
    var userChoice = "rock";
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);
    
    var pan = function (label){
        if(label === "rock"){
            alert(compare(userChoice, computerChoice));    
        }else if(label === "paper"){
            alert(compare(userChoice, computerChoice));    
        }else if(label === "scissors"){
            alert(compare(userChoice, computerChoice));    
        }else{
            alert("You are made a mistake!!!");    
        }
    };
    
    pan(userChoice);
};

var beginPaper = function(){    
    var userChoice = "paper";
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);
    
    var pan = function (label){
        if(label === "rock"){
            alert(compare(userChoice, computerChoice));    
        }else if(label === "paper"){
            alert(compare(userChoice, computerChoice));    
        }else if(label === "scissors"){
            alert(compare(userChoice, computerChoice));    
        }else{
            alert("You are made a mistake!!!");    
        }
    };
    
    pan(userChoice);
};

var beginScissors = function(){    
    var userChoice = "scissors";
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);
    
    var pan = function (label){
        if(label === "rock"){
            alert(compare(userChoice, computerChoice));    
        }else if(label === "paper"){
            alert(compare(userChoice, computerChoice));    
        }else if(label === "scissors"){
            alert(compare(userChoice, computerChoice));    
        }else{
            alert("You are made a mistake!!!");    
        }
    };
    
    pan(userChoice);
};


var compare = function(choice1 , choice2){
        if(choice1 === choice2){  
            
            result = "It is a TIE";
            
            return result;
            
        }else if(choice1 === "rock"){
            if(choice2 === "scissors"){
                
                result = "You chose Rock, and rock stronger than scissors, You WON";
                
                return result;    
            }else{
                
                result = "Computer chosen Paper, and paper stronger than rock, You LOSE"
                
                return result;    
            }    
        }else if(choice1 === "paper"){
            if(choice2 === "rock"){
                
                result = "You chose Paper, and paper stronger than rock, You WON"
                
                return result;    
            }else{
                return "Computer chosen Scissors, and scissors stronger than paper, You LOSE";    
            }    
        }else if(choice1 === "scissors"){
            if(choice2 === "rock"){
                
                result = "Computer chosen Rock, and rock stronger than scissors, You LOSE"
                
                return result;    
            }else{
                result = "You chose Scissors, and scissors stronger than Paper, You WON"
                
                return result;    
            }    
        }    
    };