
$(document).on('ready', function() { /*When the document has loaded perform all the functions below*/

$('input').on('click', function(event) { /*If one of the radio buttons is clicked*/
      event.preventDefault();
      $('input').hide(); /*Hides the radio buttons*/
      var find = $(this);
      var response = $(this).parent().find('dt'); /*Finds the tag that the response to feedback will go in*/
      response.append('<dt>'+ "Thankyou for your feedback" +'</dt>'); /*Displays message in new space*/
  });

  $('a#a').on('click', function(event) { /*If option A is clicked*/
        event.preventDefault();
        $('a#a').hide(); /*Hide option A*/
        $('a#b').hide(); /*Hide option B*/
        $('a#c').hide(); /*Hide option C*/
        var find = $(this);
        var answer = $(this).parent().find('dl'); /*Finds the tag that the message will go in*/
        answer.append('<dt>'+ "Wrong answer" +'</dt>'); /*Displays that the user got the question wrong in new space*/
    });

    $('a#b').on('click', function(event) { /*If option B is clicked*/
          event.preventDefault();
          $('a#a').hide(); /*Hide option A*/
          $('a#b').hide(); /*Hide option B*/
          $('a#c').hide(); /*Hide option C*/
          var find = $(this);
          var answer = $(this).parent().find('dl'); /*Finds the tag that the message will go in*/
          answer.append('<dt>'+ "Correct!!!!!" +'</dt>'); /*Displays that the user got the question correct in new space*/
      });

      $('a#c').on('click', function(event) { /*If option C is clicked*/
            event.preventDefault();
            $('a#a').hide(); /*Hide option A*/
            $('a#b').hide(); /*Hide option B*/
            $('a#c').hide(); /*Hide option C*/
            var find = $(this);
            var answer = $(this).parent().find('dl'); /*Finds the tag that the message will go in*/
            answer.append('<dt>'+"Wrong answer"+'</dt>'); /*Displays that the user got the question wrong in new space*/
        });



});
