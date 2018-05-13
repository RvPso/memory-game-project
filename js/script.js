// Declaring variables
var picked;
var picked2;
var cards = [];
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
        $('.table').append('<div class="box' + cards[i] + '"> <div class="front" ><img src=\"img/10.png\"></div> <div class="back">' + img[i] +'</div> </div>');  
    }

    
  
}
function flippingCards() {
    console.log('flippingCards() works')
    $( ".table" ).on( "click", "div", function( event ) {
    event.preventDefault();
    $( this ).css('animation-name', 'flip');
    picked = this;
    });
}
/*function checkingCards() {
      if (picked == 0) {
    console.log('picked is undefined about to pick');
    for (var i = 0; i < img.length; i++) {
    if ( $('.box' + img[i].substring(14,15)).css('animation-name') == 'flip') {
    console.log('works');
    picked = img[i];
    delete cards[i];
    }
    }       
    }else if (picked2 == 0) {
    console.log('picked is defined about to pick2')
        for (var i = 0; i < img.length; i++) {
    if ( $('.box' + img[i].substring(14,15)).css('animation-name') == 'flip') {
    console.log('works');
    picked2 = "<img src=\"img/" + cards[i] + " - Copy.png\">";
    picked2i = "<img src=\"img/" + cards[i] + ".png\">"
    if (picked == picked2 || picked == picked2i) {
    console.log('match');
    } else {
    console.log('unmatch');
    cards.push[picked];
    }
    }
    }

}  
}*/
function matching() {
    console.log('matching() works');
    $( ".table" ).on( "click", "div", function( event ) {
    event.preventDefault();
    $( this ).css('animation-name', 'flip');
    picked2 = this;
    if  (picked == picked2) {
        console.log('match');
    } else {
        console.log('unmatched');
    }
});
}
                     

$(document).ready(function () {
    
    
    $('.box1').click(function(){
        $('.box1').css('animation-name', 'flip');
    
    });
    // Add cards
   addCards(12);
     console.log($('.table').css('width'));
    // Picking cards
    if (picked == undefined) {
        flippingCards();
    } else if (picked2 == undefined) {
        matching();
    }
    
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