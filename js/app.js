$( document ).ready(function pageScript(){
/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


var class_array = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf",
"fa-bicycle","fa-bomb","fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf",
"fa-bicycle","fa-bomb"];



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
shuffle(class_array);

/*destrubute class to the list elemnts*/
$(".boster").each(
function(index){
    console.log("hi")

$(this).toggleClass(class_array[index]);
});
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
var matches_count=0;
function controlclass(card_counter, clicked_cards, chosen_card){
    switch(card_counter){
        case 0:
        break;
        case 1:
            if(clicked_cards[0] === clicked_cards[1] && clicked_cards[card_counter] !== null){
                $(chosen_card).addClass('match');
                $("."+clicked_cards[0]).parent().addClass("match");
                $(".open").removeClass("open show");
                matches_count +=2;
            }else{
                $(".open").removeClass("open show");
            }
   }
    if(matches_count === 16){
        welldone();

}

}
function welldone(){

    time_watch(false);      

}


var seconds =0;
var increment_seconds = null;
function time_watch(true_false){

    

                 
      

    if(true_false){
        increment_seconds = setInterval(function(){ 
        console.log("started time");
         seconds++;
        $(".seconds").html(seconds);},1000);  
      
    }else{
 console.log("all done");
 clearInterval(increment_seconds);
 console.log("stop_timing called");
 return;
    }
                   
      

}
             
var clicks=0;

function count_clicks(){
   clicks++;
    $(".moves").html(clicks);
    if(clicks === 1){
    time_watch(true);
    }else if(clicks>16&&clicks<26){
        $(".stars li:nth-child(3) ").css("display" ,"none");
    }else if(clicks>=26&&clicks<32){
        $(".stars li:nth-child(2) ").css("display" ,"none");
    }else if(clicks >=32){
        $(".stars li:nth-child(1) ").css("display" ,"none");
    }
}


function show_cards(selected){

    $(selected).toggleClass("open show");

}


function count_open(){

    var open_items = 0;
    $(".open").each(
        function(index){
            open_items++;   
    });
    if(open_items<2){
        return true;
    }else{
        return false;
    }
}

var clicked_cards = new Array(2);
var card_counter = 0;

$(".card").click( function set_clicked(e){
    count_clicks();
    if(count_open() === false){
        return;
    }
    var chosen_card = e.currentTarget;
    clicked_cards[card_counter] = e.currentTarget.children[0].classList.item(2);
    if( $(chosen_card).hasClass('open') === false){
        show_cards(chosen_card);
     setTimeout(controlclass , 750 , card_counter ,clicked_cards ,chosen_card);
    if(card_counter ===0){
        card_counter++;
    }else if(card_counter === 1 ){
        card_counter--;
    }
    }else{
        $(this).removeClass("open show");
        clicked_cards[card_counter] = null;
        if(card_counter ===1){
            card_counter-- ;
        }
    }
});


$(".restart").click(function restart_page(){

     location.reload(); 
});

});