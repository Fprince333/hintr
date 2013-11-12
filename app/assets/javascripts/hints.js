var createHints = function() {
    showHints().done(function(data) {
      for (i=0;i<data.length;i++) {
        var $matchDiv = $('<div>');
        var $matchSpan = $('<span>');
        var matchId = data[i]['related_user_id'];
        $matchDiv.attr('data-id', matchId);
        $matchDiv.addClass('match col-sm-6 col-md-3 col-lg-3');
        var $matchPic = $('<img>');
        var dataWeight = data[i]['weight'];
        $matchSpan.text(dataWeight + '% Match');
        $matchPic.attr('src', data[i]['profile_picture']);
        $matchPic.attr('class', 'img-circle match-img');
        $matchDiv.append($matchPic);
        $matchDiv.append($matchSpan);
        $('#hint-rows').append($matchDiv);
        $('#show-hints').addClass('hidden');
      }
    });
    $(this).off();
};

var showHint = function(hintDiv) {

  $.ajax({
    url: '/users/' + $(hintDiv).attr('data-id'),
    type: 'get'
  }).done(function(data) {
    var matchName = data["name"];
    var matchStatus = data["relationship_status"];
    var matchInterest = data["interested_in"];
    // var $matchDivStatus = hintDiv.addClass('caption');
    // var $matchInfoDiv = $('div');
    // $matchInfoDiv.addClass('caption');
    // $matchInfoDiv.innerHTML('hi');
    // hintDiv.append($matchInfoDiv);
    // $(hintDiv).addClass
    console.log(data);
  });
};
