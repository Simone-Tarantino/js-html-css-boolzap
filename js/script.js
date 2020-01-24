$(document).ready (function(){
  // inviare messaggio con tasto enter
  $('#message').keypress(function (event) {
    if(event.which == 13 || event.keyCode == 13) {
      sendMsg();
    }
  });
  // inviare messaggio con click su icon
  $('i.fa-paper-plane').click(function() {
    sendMsg();
  });

  // dropdown chat
  $(document).on('click', 'i.fa-chevron-down', function() {
    $(this).next().toggle();
  });

  // click su elimina per cancellare messaggio
  $(document).on('click', '.delete', function() {
    $(this).parents('.go-delete').remove();
  });

});

// funcion per inviare messaggio

function sendMsg() {
  var msg = $('#message').val();
  console.log(msg);
  var msgSect = $('.no-display .input-msg-container').clone();
  msgSect.children().prepend(msg);
  $('.main-chat').append(msgSect);
  msg = $('#message').val('');
}
