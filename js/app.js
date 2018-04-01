$( document ).ready(function pageScript(){
/*
 * Create a list that holds all of your cards
 */

   /* let class_array = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf",
    "fa-bicycle","fa-bomb","fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf",
    "fa-bicycle","fa-bomb"];*/
    const class_arrayHalf= ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf",
    "fa-bicycle","fa-bomb"];
    const class_array = class_arrayHalf.concat(class_arrayHalf);
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

 /*Check if the cards matches or not*/
    let matches_count=0;
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
                    $(".open").addClass("unmatched");
                    function red_card(){
                        $(".unmatched").css( "background", "red");
                    }
                     red_card();
                    function reset_red(){
                        $(".unmatched").css( "background", "");
                        $(".open").removeClass("open show unmatched");
                    }
                    setTimeout(reset_red,500);
                }
        }
        if(matches_count === 16){
            welldone();
        }
    }

/*When all cards choosed corectly*/

    function welldone(){
        time_watch(false);
        let message="<em>Congratulations</em> <br> you have completed the game in "+seconds+" seconds <br> with "+clicks+" clicks"+"<br>your star rating is "+stars;
        $(".congrats_mssg").html(message);
        $(".welldone").css("display","block");
        $(".repeat").click(function(){
                 location.reload(); 
         });
    }

/*stop watch functions*/
    let seconds =0;
    let increment_seconds = null;
    function time_watch(true_false){                 
        if(true_false){
            increment_seconds = setInterval(function(){ 
            seconds++;
            $(".seconds").html(seconds);},1000);  
        }else{
            clearInterval(increment_seconds);
            return;
        }                       
    }
/*counting how many clicks and reducing stars*/             
    let clicks=0;
    let stars=3;
    function count_clicks(){
        if(clicks === 1){
        time_watch(true);
       /* }else if(clicks>16&&clicks<26){
            $(".stars li:nth-child(3) ").css("display" ,"none");
            stars=2;
        }*/}else if(clicks>=26&&clicks<32){
            $(".stars li:nth-child(3) ").css("display" ,"none");
            stars=2;
        }else if(clicks >=32){
            $(".stars li:nth-child(2) ").css("display" ,"none");
            stars=1;
        }
    }

/* show cards and rotate them*/       
    function show_cards(selected){
        clicks++;
        $(".moves").html(clicks);
        $(selected).toggleClass("open show");
        function rotate_card(){
            $(selected).css( "transform", "rotate(20deg)");
        }
        rotate_card();
        function reset_rotate(){
            $(selected).css( "transform", "rotate(0)");
        }
        setTimeout(reset_rotate,250);
    }

/*only 2 cards can be open*/
    function count_open(){
        let open_items = 0;
        $(".open").each(function(index){
            open_items++;   
        });
        if(open_items<2){
            return true;
        }else{
            return false;
        }
    }

/*Main function when cards clicked call other functions*/
    let clicked_cards = new Array(2);
    let card_counter = 0;

    $(".card").click( function set_clicked(e){
        if(count_open() === false || $(chosen_card).hasClass('open') ){
            return;
        }
        count_clicks();
        let chosen_card = e.currentTarget;
        clicked_cards[card_counter] = e.currentTarget.children[0].classList.item(2);
        if( $(chosen_card).hasClass('open') === false){
            show_cards(chosen_card);
            setTimeout(controlclass , 500 , card_counter ,clicked_cards ,chosen_card);
            if(card_counter ===0){
                card_counter++;
            }else if(card_counter === 1 ){
                card_counter--;
            }
        }/*else{
            $(chosen_card).removeClass("open show");
            clicked_cards[card_counter] = null;
            if(card_counter ===1){
                card_counter-- ;
            }
        }*/
    });

/* reload page*/

    $(".restart").click(function restart_page(){
         location.reload(); 
    });

});
