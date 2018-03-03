jQuery.noConflict();

(function( $ ) {

var lastUrl = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=twentysixlicks&api_key=336d6c1e30852f655412888f276a0112&limit=1&format=json";

$.ajax({
     url: "lastUrl",
    },

    type: "GET",
    dataType : "json",
    async: true,
})
  .done(function( json ) {
     $( "<div class="song" ).text( json.title ).appendTo( "body" );
  })
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });

})(jQuery);
