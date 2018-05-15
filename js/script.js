// Declaring variables
var picked = [];
var picked2= [];
var cards = [];
var moves = 0;
var timer = 0;
// Symbols
var img = ['<img src="img/1 - Copy.png" >', '<img src="img/1.png">', '<img src="img/2 - Copy.png">', '<img src="img/2.png">', '<img src="img/3 - Copy.png">', '<img src="img/3.png">', '<img src="img/4 - Copy.png">', '<img src="img/4.png">', '<img src="img/5 - Copy.png">', '<img src="img/5.png">', '<img src="img/6 - Copy.png">', '<img src="img/6.png">'];



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
    shuffle(img);
      for (var i=0;i<img.length;i++){
    cards.push(img[i].substring(14,15));
    }
    for (var i= 0; i < cards.length; i++) {
        $('.table').append('<div class="box' + cards[i] + '"> <li class="front ' + cards[i] + ' " ><img src=\"img/10.png\"></li> <div class="back">' + img[i] +'</div> </div>');
        
    }

    
  
}
function flippingCards() {
    console.log('flippingCards() works')
    $( ".table" ).on( "click", "div", function( event ) {
    event.preventDefault();
    $( this ).css('animation-name', 'flip');
        console.log(this)
    picked2.push($(this));    
    picked.push(this.innerHTML);
    if (picked.length == 2) {
                moves++;
            $('header').children('h2').remove();
            $('header').append('<h2 class ="moves">moves: ' + moves + '</h2>');
        if (picked[0].substring(18, 19) == picked[1].substring(18, 19)) {
            console.log('match');
            picked.pop();
            picked.pop();
             picked2.pop();
            picked2.pop();
        } else {
          console.log('unmatch');
            setTimeout(function() {
              picked2[0].css('animation-name', 'unflip');
            picked2[1].css('animation-name', 'unflip');
            picked2.pop();
            picked2.pop();
            }, 500);
            picked.pop();
            picked.pop();

            
        }
    }
    });
}                  








$(document).ready(function () {    
        swal({
        title:'How to Play',
        text:'1 - Click over any two cards. \n 2 - If they match, they\'ll be keeped.\n 3 - If they don\'t match they\'ll flip over.\n4 - Remember what was on each card and where it was.\n 5 - The game is over when all cards have been matched.\n\nChoose the difficulty below:',
         buttons: {
    cancel: "EASY",
    HARD: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "HARD":
      swal("HARD");
      break;
 
    default:
      swal("EASY");
  }
});
    
    // Add cards
    addCards(12);
    console.log($('.table').css('width'));
    // Picking cards
    flippingCards();

});






/*
$(document).ready(function(){
 var done = false;
    box1 = document.querySelector('.box1');
    var cards = [box1,'box2'];
    console.log(cards[0]);
    console.log($(box1).css('transform'));
    cards[0].addEventListener('click',function(){ cards[0].style.animationName = 'flip'; done = true; });
    
    if (done === true) {
      console.log('works');
}  
    
});


function cardCheck() {
    for (i = 0; i < cards.length; i++) {
        if (cards[i].css('transform') == 'matrix()' )
    }
}*/