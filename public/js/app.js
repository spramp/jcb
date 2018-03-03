(function($) {

var lastUrl = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=twentysixlicks&api_key=336d6c1e30852f655412888f276a0112&limit=1&format=json";

$.getJSON(lastUrl, function (data) {
    console.log(data);
  });
}(jQuery);
