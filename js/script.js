$(document).ready (function(){
  $('#message').keypress(function (event) {
    if(event.which == 13 || event.keyCode == 13) {
      var msg = $('#message').val();
      console.log(msg);
      var msgSect = $('.no-display .input-msg-container').clone();
      msgSect.next().append(msg);
      $('.main-chat').append(msgSect);
    }
  });
});
