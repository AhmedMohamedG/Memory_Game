$( document ).ready(function pageScript(){/*
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







function controlclass(card_counter, clicked_cards, chosen_card){






    switch(card_counter) {

        case 0:
          /*  $(".open").removeClass("open show");
            $(chosen_card).addClass('match');*/
            


            console.log("case 0 ");
            console.log("clicked_cards[0]= " + clicked_cards[0])
            console.log("open added");
            break;
        case 1:
            console.log("case 1");

            if(clicked_cards[0] === clicked_cards[1]){
                $(chosen_card).addClass('match');
                $("."+clicked_cards[0]).parent().addClass("match");
            }else{
                /*$(chosen_card).toggleClass("open show");
                $("."+clicked_cards[0]).parent().removeClass("open show");*/
               /* var open_items = 0;
                $(".open").each(
                    function(index){
                        for(i=0;i<index;i++){
                            open_items++;
                        }
                        if(open_items)
                    $(this).toggleClass(class_array[index]);
                    });*/
                $(".open").removeClass("open show");

            }

            break;


}



}
var clicked_cards = new Array(2);
var card_counter = 0;

$(".card").click( function set_clicked(e){
var chosen_card = e.currentTarget;
/*clicked_card[cardonshow] = e.currentTarget.children[0].className ;*/
clicked_cards[card_counter] = e.currentTarget.children[0].classList.item(2);
var  change_class_delayed = setTimeout(controlclass , 1000 , card_counter ,clicked_cards ,chosen_card);


if(card_counter ===0){
    /*$(".card").each(function(){
        $(this).removeClass("open show")
        });*/
    $(chosen_card).toggleClass("open show");
    card_counter++;
}else if(card_counter === 1 ){
    $(chosen_card).toggleClass("open show");
    card_counter--;
    change_class_delayed;
    card_counter=0
}
console.log(card_counter + clicked_cards[card_counter]);
/*console.log(cardonshow+" "+clicked_card[cardonshow][10]+clicked_card[cardonshow][11]+clicked_card[cardonshow][12]);
*/
});


});