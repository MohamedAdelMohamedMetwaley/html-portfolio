var btnColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(document).keypress(function(){
    if(!started){
        started = true;
        $("h1").text("Level "+(++level))
        nextSequence();   
    }
})



$(".btn").click(function(){
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    var lastClickedBtn = userClickedPattern.length-1;
    if(userClickedPattern[lastClickedBtn] != gamePattern[lastClickedBtn]){
        gameOver();
    }else if (userClickedPattern.length == gamePattern.length){
        nextLevel();
    }

})

function nextLevel(){
    $("h1").text("Level "+(++level))
        setTimeout(function(){
            nextSequence();
        },1000)
}

function gameOver(){
    $("h1").text("Game Over, Press Any Key to Restart")
    level = 0;
    gamePattern = [];
    started = false;
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");     
    },100)
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = btnColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var buttonChosen = $("#"+randomChosenColour);
    buttonChosen.fadeOut(50).fadeIn(50);
    playSound(randomChosenColour);
    userClickedPattern = [];
}

function animatePress(pressedButton){
    $("#"+pressedButton).addClass("pressed");
    setTimeout(function(){
        $("#"+pressedButton).removeClass("pressed");
    },100)
}

function playSound(color){
 var sound = new Audio("./sounds/"+color+".mp3");
 sound.play();
}
// checkKey();
// function checkKey(){
//     $(document).one("keypress", (function(){
//         gamePattern.push(nextSequence())
//         var currentButton = $("#"+gamePattern[gamePattern.length-1]);
//         game(currentButton);
//     }))
// }


// function game(currentButton){
//     currentLevel++;
//     $("h1").text("Level "+currentLevel)
//     $(".btn").click(function(){
//         var userClickedButton = $(this).attr('id');
//         userClickedPattern.push(userClickedButton);
//         boxPressed(userClickedButton);
//         console.log(userClickedPattern)
//         if(userClickedButton !== currentButton){
            
//             gamePattern.length = 0;
//             userClickedPattern.length = 0;
//             currentLevel = 0;
//             setTimeout(function(){
//                 $("body").removeClass("game-over");     
//                 checkKey();
//             },100)
            
//         }
//     })
// }



// if(currentLevel === 0){
//     $(document).keypress(function(){  
//         currentLevel++;
// })
// }
// if(currentLevel === 0){
//     $("h1").text("Press A Key to Start")
// } else {
//     $("h1").text("Level "+currentLevel)
    
    

//     $(".btn").click(function(){
//         var userClickedButton = $(this).attr('id');
//         userClickedPattern.push(userClickedButton);
//         boxPressed(userClickedButton);
//         console.log(userClickedPattern)
//         if(userClickedButton !== currentButton){
//             playSound("wrong");
//             $("body").addClass("game-over");
//             $("h1").text("Game Over, Press Any Key to Restart")
//             gamePattern.length = 0;
//             userClickedPattern.length = 0;
//             currentLevel = 0;
            
//         }
//     })
// }

// $(document).on("keypress",function play(event){
//     $(document).off("keypress");
    
 
// })
// function boxPressed(boxClicked){
//     playSound(boxClicked)
//         $("#"+boxClicked).addClass("pressed");
//         setTimeout(function(){
//             $("#"+boxClicked).removeClass("pressed");
//         },100)
// }
// function animateBox(boxColor){
//     playSound(boxColor)
//     $("#"+boxColor).animate({opacity: 0}, 100).animate({opacity: 1}, 100)
// }

// function nextSequence(){
//     var colorSelected = btnColours[Math.floor(Math.random()*4)];
//     animateBox(colorSelected)
//     return colorSelected
// }