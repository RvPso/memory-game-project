// Declaring variables
var picked = [];
var picked2= [];
var cards = [];
var moves;
var timer;
var startTimer;
var score = 0;
var scoreSystem = false;
// Symbols
var img = [];

var matched = 0;
var cardsOnTable;
// Cards shuffling
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

    return array;
}

// Appending cards in the table
function addCards(a) {
    if (a == 'easy') {
        img.splice(12);
    } else {
        scoreSystem = true;
    }

    shuffle(img);
      for (var i=0;i<img.length;i++){
    cards.push(img[i].substring(14,15));
    }
    for (var i= 0; i < cards.length; i++) {
        $('.table').append('<div class="box' + cards[i] + '"> <li class="front ' + cards[i] + ' " ><img src=\"img/10.png\"></li> <div class="back">' + img[i] +'</div> </div>');
        
    }
  cardsOnTable = img.length / 2;

}
function coreGame() {
    console.log('coreGame() works')
    $( ".table" ).on( "click", "div", function( event ) {
    event.preventDefault();
    $( this ).css('animation-name', 'flip');
            
        console.log(this)
    picked2.push($(this));    
    picked.push(this.innerHTML);
        if (scoreSystem == true) {
                    if (moves < 10) {
    $('.score').remove();
    for (i = 0; i < 3; i++) {
$('body').append('<img class = "score" src="img/star.png">');  
        score = 3;
}
} else if (moves > 10 && moves < 20) {
    $('.score').remove();
    for (i = 0; i < 2; i++) {
$('body').append('<img class = "score" src="img/star.png">');
        score = 2;
    }
}  else if (moves > 20) {
    $('.score').remove();
    for (i = 0; i < 1; i++) {
$('body').append('<img class = "score" src="img/star.png">');
        score = 1;
    }
}
        }

    if (picked2.length > 2) {
        picked2[2].css('animation-name', 'unflip');
        picked.pop();
        picked2.pop();
        
    }    
    if (picked.length == 2) {
                moves++;
            $('.moves').remove();
            $('header').append('<div style="position: relative; width: 10; height: 0"><h2 class ="moves">moves: ' + moves + '</h2></div>');
            
            
        if (picked[0] == picked[1]){
            console.log('identical');
            picked = [];
            picked2 = [];
        } else if (picked[0].substring(18, 19) == picked[1].substring(18, 19)) {
            console.log('match');
/*            setTimeout(function() {
            picked2[0].hide();
            picked2[1].hide();
            }, 500);*/
            matched++
            picked = [];
            picked2 = [];
        } else {
          console.log('unmatch');
            setTimeout(function() {
              picked2[0].css('animation-name', 'unflip');
            picked2[1].css('animation-name', 'unflip');
            picked2 = [];
            }, 500);
            picked = [];

            
        }
    }
    if (cardsOnTable == matched) {
        startTimer = false;
        swal({
        title:'Awesome!',
        text:'You have finished the game with score: ' + score + ' and ' + moves + ' move in ' + timer + ' seconds',
        icon: 'success',    
         buttons: {
    cancel: "Play again!",
  },
})
.then((value) => {
  switch (value) {

    default:
      startGame();
      
  }
});
}
    });
}                  


function startGame() {
    timer = 0;
    moves = 0;
    matched = 0;
    $('header').children('div').remove();
    $('.table').children('div').remove();
    for (var i=0;i<img.length;i++){
    cards.splice(i);
    img.splice(i);
    }
    for (i = 1; i <= 8; i++) {
    img.push('<img src="img/' + i +' - Copy.png" >');
    img.push('<img src="img/' + i +'.png">');
}
    swal({
        title:'How to Play',
        text:'1 - Click over any two cards. \n 2 - If they match, they\'ll be keeped.\n 3 - If they don\'t match they\'ll flip over.\n4 - Remember what was on each card and where it was.\n 5 - The game is over when all cards have been matched.\n\nChoose the difficulty below:',
        closeOnClickOutside: false,
         buttons: {
    cancel: "EASY",
    CHALLENGING: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "CHALLENGING":
      addCards('hard');
      startTimer = true;
      break;
    default:
      addCards('easy');
      startTimer = true;
  }
});
}



$(document).ready(function () {    

    startGame();
    // Add cards
    
    console.log($('.table').css('width'));
    // Picking cards
    coreGame();
    // Timer
    
    setInterval(function() {
        if (startTimer == true) {
       $('.timer').remove();
        $('header').append('<div style="position: relative; width: 10; height: 0"><h2 class ="timer">timer: ' + timer + '</h2></div>');
        timer++ 
        }
    }, 1000);

});







