//Declaring cards
var card1 = '<div class="box1"> <h1>1</h1> </div>';
var card2 = '<div class="box2"> <h1>2</h1> </div>';
var card3 = '<div class="box3"> <h1>3</h1> </div>';
var card4 = '<div class="box4"> <h1>4</h1> </div>';
var card5 = '<div class="box5"> <h1>5</h1> </div>';
var card6 = '<div class="box6"> <h1>6</h1> </div>';
var card7 = '<div class="box7"> <h1>7</h1> </div>';
var card8 = '<div class="box8"> <h1>8</h1> </div>';

var card1i = '<div class="box1i"> <h1>1</h1> </div>';
var card2i = '<div class="box2i"> <h1>2</h1> </div>';
var card3i = '<div class="box3i"> <h1>3</h1> </div>';
var card4i = '<div class="box4i"> <h1>4</h1> </div>';
var card5i = '<div class="box5i"> <h1>5</h1> </div>';
var card6i = '<div class="box6i"> <h1>6</h1> </div>';
var card7i = '<div class="box7i"> <h1>7</h1> </div>';
var card8i = '<div class="box8i"> <h1>8</h1> </div>';
var cards = [card1, card2, card3, card4, card5, card6, card7, card8];
var cardsi = [card1i,card2i,card3i,card4i,card5i,card6i,card7i,card8i];

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

// Appending cards with it's pair in the table
function addCards(a) {
    if (a >= 8 && a < 12) {
        cards.splice(0, 4);
        cardsi.splice(0, 2);
    } else if (a >= 12) {
        cards.splice(0, 2);
        cardsi.splice(0, 2);
    }
    
    shuffle(cards);
    for (var i= 0; i < cards.length; i++) {
        $('.table').append(cards[i]);  
    }
    shuffle(cardsi);
    for ( i= 0; i < cards.length; i++) {
        $('.table').append(cardsi[i]); 
    }
    
  
}


$(document).ready(function () {
    // Picking cards
     $(".table").on("click", ".box1", function() {
        $('.box1').css('animation-name', 'flip');
     }); 
     $('.table').on('click', '.box1i', function() {
        $('.box1i').css('animation-name', 'flip'); 
     });
     $(".table").on("click", ".box2", function() {
        $('.box2').css('animation-name', 'flip');
     }); 
     $('.table').on('click', '.box2i', function() {
        $('.box2i').css('animation-name', 'flip'); 
     });    
     $(".table").on("click", ".box3", function() {
        $('.box3').css('animation-name', 'flip');
     }); 
     $('.table').on('click', '.box3i', function() {
        $('.box3i').css('animation-name', 'flip'); 
     }); 
     $('.table').on('click', '.box4', function() {
        $('.box4').css('animation-name', 'flip'); 
     });
     $(".table").on("click", ".box4i", function() {
        $('.box4i').css('animation-name', 'flip');
     }); 
     $('.table').on('click', '.box5', function() {
        $('.box5').css('animation-name', 'flip'); 
     });   
     $(".table").on("click", ".box5i", function() {
        $('.box5i').css('animation-name', 'flip');
     }); 
     $('.table').on('click', '.box6', function() {
        $('.box6').css('animation-name', 'flip'); 
     });   
     $(".table").on("click", ".box6i", function() {
        $('.box6i').css('animation-name', 'flip');
     }); 
     $('.table').on('click', '.box7', function() {
        $('.box7').css('animation-name', 'flip'); 
     });   
     $(".table").on("click", ".box7i", function() {
        $('.box7i').css('animation-name', 'flip');
     }); 
     $('.table').on('click', '.box8', function() {
        $('.box8').css('animation-name', 'flip'); 
     });   
     $('.table').on('click', '.box8i', function() {
        $('.box8i').css('animation-name', 'flip'); 
     });     
    // Add cards
    window.setTimeout(addCards(12), 100);
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