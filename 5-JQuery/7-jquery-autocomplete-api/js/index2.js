$( function() {
    $( "#dialog" ).dialog();
    
    $( "#dialog" ).dialog('close');
   
      // Set effect from select menu value
      $( "#btn" ).click( function(e) {
        e.preventDefault();
        $( "#dialog" ).dialog('open');
      });
  } );