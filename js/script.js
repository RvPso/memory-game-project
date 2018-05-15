// Declaring variables
var picked = [];
var picked2= [];
var cards = [];
var moves = 0;
var timer = 0;
// Symbols
var img = [];
for (i = 1; i <= 8; i++) {
    img.push('<img src="img/' + i +' - Copy.png" >');
    img.push('<img src="img/' + i +'.png">');
}
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
    }
    $('.table').children('div').remove();
    for (var i=0;i<img.length;i++){
    cards.splice(i);
    }
    shuffle(img);
      for (var i=0;i<img.length;i++){
    cards.push(img[i].substring(14,15));
    }
    for (var i= 0; i < cards.length; i++) {
        $('.table').append('<div class="box' + cards[i] + '"> <li class="front ' + cards[i] + ' " ><img src=\"img/10.png\"></li> <div class="back">' + img[i] +'</div> </div>');
        
    }
  cardsOnTable = img.length / 2;
    if (cardsOnTable == matched) {
    alert('won');
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
            matched++
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
      addCards('hard');
      break;
    default:
      addCards('easy');
  }
});
    
    // Add cards
    
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