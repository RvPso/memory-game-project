//Declaring cards
var card1 = '<div class="box1"> <h1>1</h1> </div>';
var card2 = '<div class="box2"> <h1>2</h1> </div>';
var card3 = '<div class="box3"> <h1>3</h1> </div>';
var card4 = '<div class="box4"> <h1>4</h1> </div>';
var card5 = '<div class="box5"> <h1>5</h1> </div>';
var card6 = '<div class="box6"> <h1>6</h1> </div>';
var card7 = '<div class="box7"> <h1>7</h1> </div>';
var card8 = '<div class="box8"> <h1>8</h1> </div>';
var cards = [card1, card2, card3, card4, card5, card6, card7, card8];

//Cards shuffling
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

//Appending cards in Table
function addCards(a) {
    if (a >= 8 && a < 12) {
        cards.splice(0, 4);
    } else if (a >= 12) {
        cards.splice(0, 2);
    }
    
    shuffle(cards);
    for (var i= 0; i < cards.length; i++) {
        $('.table').append(cards[i]);  
    }
    shuffle(cards);
    for (var i= 0; i < cards.length; i++) {
        $('.table').append(cards[i]);  
    }
    
  
}



$(document).ready(function () {
    window.setTimeout(addCards(12), 100);
    $(this).click(function(){
        $(this).css('animation-name', 'example');
    console.log(this);
    });
});




/*
$(document).ready(function(){
 var done = false;
    box1 = document.querySelector('.box1');
    var cards = [box1,'box2'];
    console.log(cards[0]);
    console.log($(box1).css('transform'));
    cards[0].addEventListener('click',function(){ cards[0].style.animationName = 'example'; done = true; });
    
    if (done === true) {
      console.log('works');
}  
    
});


function cardCheck() {
    for (i = 0; i < cards.length; i++) {
        if (cards[i].css('transform') == 'matrix()' )
    }
}*/