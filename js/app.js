/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


var class_array = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt,fa-cube","fa-leaf","fa-bicycle","fa-bomb","fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt,fa-cube","fa-leaf","fa-bicycle","fa-bomb"];



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

/*var cell = $(".deck li");*/
/*$("li").each(randfill(i){
         this.toggle(class_array[i]);
          });
$("li").each(fun(i){console.log(i)});*/
$(".card").each(
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



/*

const pixelsCanvas = {
    height : $('#input_height').val(),
    width : $('#input_width').val(),
    color : $('#colorPicker').val(),
    id : '#pixel_canvas',
    cellSize: $('#cell_size').val(),
    setgrid : function() {
            for (let i=0 ; i < pixelsCanvas.height ; i++){
                const rowid = "rowof"+i ;
                $(pixelsCanvas.id).append("<tr id="+rowid+"></tr>");
          
                for (let x=0 ; x<pixelsCanvas.width ; x++ ){
                    const  cellid = "cellof"+x+rowid ; 
                    $("#"+rowid).append("<td id="+cellid+" class=\"\"></td>");
                }
            }
            $('td , tr').css({"height": pixelsCanvas.cellSize , "width": pixelsCanvas.cellSize });
            $(pixelsCanvas.id).on( "mouseout mouseover click no-drop", function(e){
                if(pixelsCanvas.isMouseClicked || e.type === "click" ){
                        pixelsCanvas.paint(e.target);   
                }else{
                    return;
                }
            });
            $(pixelsCanvas.id).on("dblclick",function(e){
                pixelsCanvas.eraser(e.target); 
            });
            },
    paint : function(cell){
            $(cell).css({"background-color": pixelsCanvas.color});
            $(cell).addClass("painted")
            },
    random : function(){  
            let trs = $(pixelsCanvas.id).children('tr').length;
            let tds = $(pixelsCanvas.id).children('tr').children('td').length; 
            for (let i=0 ; i < trs ; i++){
                const rowsrows = "rowof"+i ;
                for (let x=0 ; x< tds ; x++ ){
                    const  cellidcellid = "cellof"+x+rowsrows ; 
                    let randomnumber = Math.round(Math.pow((Math.random() + 9) , Math.random())) , r,g,b; 
                    switch(randomnumber){
                        case 1:
                            r= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            g= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            b= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            break; 
                        case 2: 
                            r= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            g= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            b= 255
                            break; 
                        case 3:
                            r= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            g= 255
                            b= 255
                            break; 
                        case 4:
                            r= 255 
                            g= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            b= 255
                            break; 
                        case 5:
                            r= 255
                            g= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            b= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            break; 
                        case 6:
                            r= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            g= 255 
                            b= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            break;
                        case 7:
                            r=0 
                            g=0  
                            b=0
                            break;
                        case 8:
                            r= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            g= 0 
                            b= 255/Math.round(Math.pow((Math.random() + 9) , Math.random())); 
                            break; 
                        default: 
                            r= 255
                            g= 255
                            b= 255
                            break;                       
                    }
                    let rgb = "rgb("+ r +","+ g +","+b +")";
                    let loopedCell = $("#"+cellidcellid);
                    if(!loopedCell.hasClass("painted")){
                        loopedCell.css("background-color", rgb);
                    }
                }
            }
        },
    isMouseClicked: false,
    clear: function(){  
                const allCells = $('td , tr');
                allCells.removeClass('painted');
                allCells.css("background-color","");
            },
    eraser: function (cell){
                $(cell).css("background-color","");
                $(cell).removeClass("painted")
            },
     the show Hide has 6 parameters for the inted div id, the button id that it is applied to, text and font awesome classes for the button default and pressed states
    showHide: function(divId , buttonID , defButtonTxt , altButtonTxt , deffaclass, altfaclass) {
                let identifiersDisplayed = $("#"+divId).css("display")
                if(identifiersDisplayed === "none"){
                        $("#"+divId).css("display","block");
                        $("#"+buttonID).html(" "+ defButtonTxt);
                        //font awesome class:
                        $("#"+buttonID).attr('class',deffaclass)
                }else{
                        $("#"+divId).css("display","none");
                        $("#"+buttonID).html(" "+ altButtonTxt);
                        //font awesome class:
                        $("#"+buttonID).attr('class',altfaclass)
                }
             }
        }
*/
/*
vcell_class all calss 8 pares
counter class case when filling 2 - 1 - 0 the same class cannot repeat 3 times

*/

/*All classes and irray for its status used or not
var cell_class = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt,fa-cube","fa-leaf","fa-bicycle","fa-bomb"];
var counter = new Array(cell_class.length);
for(var i=0; i<counter.length ; i++){
counter[i]=2;
}
console.log(counter);



creat array called match with 8 numbers from 0 to 7 not repeatable

var match = new Array(8);

function getnum(i){
   var rndnum = Math.floor(Math.random()*10);
   var countto=0;
for(var z=0;z<8;z++){
      if(rndnum !== match[z]){
         countto++;
         console.log("added")
      }else{
          countto--;

      }
  }
   if(rndnum<8 && countto  ===8){  
      match[i]= rndnum;
    }else{
        
    getnum(i);
    }

    }

for(var i=0; i<8 ; i ++){
 getnum(i);
}
console.log(match+" match ");


var classess_real = new Array(16);



       



var watch = [1,2,3,4,5,6,7,8];
var randnumm = 9;
var countto8=0;
for(i=0;i<8;i++){
      if(randnumm !== watch[i]){
         countto8 ++;
      }else{
          countto8 --;
      }
  }
console.log(countto8);
       



var cell = $(".deck li");
cell.each(fill(){
         
          });*/
