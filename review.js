
var Dave = [ /*JSON data for the Dave's review*/

{

"id": 1,
"product_id":"bikeoil",
"nickname":"Dave",
"review":"Im not good enough to tell the difference between a bad and good oil, but it works.",
"rating":"5",

},

];

var Ann = [ /*JSON data for the Ann's review*/

{

"id":2,
"product_id":"bikeoil",
"nickname":"Ann Other",
"review":"Its slippery",
"rating":"1"

}

];

var Nel = [ /*JSON data for the Nel's review*/

{"id":489,
"product_id":"bikeoil",
"nickname":"Nel75",
"review":"This chain lube puts all others to shame, and believe me, I've tried them all. Lasts longer, doesn't gunk up, and resists UK weather like no other. May seem a bit pricey, but a little goes a long way.",
"rating":"5"},

];

var Ger = [ /*JSON data for the Gereatric's review*/

{

"id":490,
"product_id":"bikeoil",
"nickname":"Gereatric63",
"review":"Have been using this lube for the past 4 months and found it does not attract dirt on the chain and gives a super smooth ride. For the price this is an excellent product.",
"rating":"5"

},

];


var Not = [ /*JSON data for the Not Happy's review*/

{

"id":491,
"product_id":"bikeoil",
"nickname":"NotHappy123",
"review":"Nozzle breaks easily. Better design needed!",
"rating":"1"

},

];

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
        event.preventDefault();
        var list = $(this).find('#name1'); /*Finds the tag that the user's name and rating will go in*/
        for(var abc = 0; abc < Dave.length; abc++) {
        list.append('<dt>' + Dave[abc].rating + '</dt>'); /*Displays the user's rating in the tag*/
        list.append('<dt>'+ Dave[abc].nickname +'</dt>'); /*Displays the user's name in the tag*/
      }

    });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
        event.preventDefault();
        var list = $(this).find('#review1'); /*Finds the tag that the review will go in*/
        for(var abc = 0; abc < Dave.length; abc++) {
        list.append('<dt>' + Dave[abc].review + '</dt>'); /*Displays the review in the tag*/
          }

        });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
        event.preventDefault();
        var list = $(this).find('#name2'); /*Finds the tag that the user's name and rating will go in*/
        for(var abc = 0; abc < Ann.length; abc++) {
        list.append('<dt>' + Ann[abc].rating + '</dt>'); /*Displays the user's rating in the tag*/
        list.append('<dt>'+ Ann[abc].nickname +'</dt>'); /*Displays the user's name in the tag*/

        }

        });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
        event.preventDefault();
        var list = $(this).find('#review2'); /*Finds the tag that the review will go in*/
        for(var abc = 0; abc < Ann.length; abc++) {
        list.append('<dt>' + Ann[abc].review + '</dt>'); /*Displays the review in the tag*/

        }

        });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
        event.preventDefault();
        var list = $(this).find('#name3'); /*Finds the tag that the user's name and rating will go in*/
        for(var abc = 0; abc < Nel.length; abc++) {
        list.append('<dt>' + Nel[abc].rating + '</dt>'); /*Displays the user's rating in the tag*/
        list.append('<dt>' + Nel[abc].nickname + '</dt>'); /*Displays the user's name in the tag*/

        }

        });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
        event.preventDefault();
        var list = $(this).find('#review3'); /*Finds the tag that the review will go in*/
        for(var abc = 0; abc < Nel.length; abc++) {
        list.append('<dt>' + Nel[abc].review + '</dt>'); /*Displays the review in the tag*/

        }

        });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
       event.preventDefault();
        var list = $(this).find('#name4'); /*Finds the tag that the user's name and rating will go in*/
        for(var abc = 0; abc < Ger.length; abc++) {
        list.append('<dt>' + Ger[abc].rating + '</dt>'); /*Displays the user's rating in the tag*/
        list.append('<dt>' + Ger[abc].nickname + '</dt>'); /*Displays the user's name in the tag*/

        }

        });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
       event.preventDefault();
       var list = $(this).find('#review4'); /*Finds the tag that the review will go in*/
       for(var abc = 0; abc < Ger.length; abc++) {
       list.append('<dt>' + Ger[abc].review + '</dt>'); /*Displays the review in the tag*/

       }

       });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
       event.preventDefault();
       var list = $(this).find('#name5'); /*Finds the tag that the user's name and rating will go in*/
       for(var abc = 0; abc < Not.length; abc++) {
       list.append('<dt>' + Not[abc].rating + '</dt>'); /*Displays the user's rating in the tag*/
       list.append('<dt>' + Not[abc].nickname + '</dt>'); /*Displays the user's name in the tag*/

       }

       });

$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/
       event.preventDefault();
      var list = $(this).find('#review5'); /*Finds the tag that the review will go in*/
      for(var abc = 0; abc < Not.length; abc++) {
      list.append('<dt>' + Not[abc].review + '</dt>'); /*Displays the review in the tag*/

      }

      });
