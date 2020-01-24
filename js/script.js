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


  // funcion per inviare messaggio e ricevere risposta automatica
  function sendMsg() {
    var msg = $('#message').val();
    if (msg.length >= 1) {
      var msgSect = $('.no-display .input-msg-container').clone();
      msgSect.children().prepend(msg);
      $('.main-chat').append(msgSect);
      msg = $('#message').val('');

      var time = new Date();
      var hours = addZero(time.getHours());
      var minutes = addZero(time.getMinutes());
      var displayTime = hours +':'+ minutes;
      msgSect.find('.msg-current-time').text(displayTime);

      setTimeout(function() {
        var autoMsg = 'Ok';
        var autoMsgSect = $('.no-display .auto-msg-container').clone();
        autoMsgSect.children().prepend(autoMsg);
        $('.main-chat').append(autoMsgSect);
        autoMsgSect.find('.msg-current-time').text(displayTime);
      }, 1000);
    }
  }

  function addZero(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
  }

});
