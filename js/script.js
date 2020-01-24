$(document).ready (function() {
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

  // scrivo una lettera nell'input e prendo quel valore
  $('#search-name').keyup(function() {
    var userIn = $('#search-name').val();
    console.log(userIn);
    // prendo tutti i nomi
    // verifico che quella lettera/e corrispondano a qualche nome della lista
    // a chi non corrisponde lo nascondo
  });



  // funcion per inviare messaggio e ricevere risposta automatica
  function sendMsg() {
    var msg = $('#message').val();
    // se il messaggio è lungo 1 o più caratteri viene stampato altrimenti no
    if (msg.length >= 1) {
      var msgSect = $('.no-display .input-msg-container').clone();
      msgSect.children().prepend(msg);
      $('.main-chat').append(msgSect);
      msg = $('#message').val('');
      // inseriamo l'orario corrente del messaggio
      var time = new Date();
      var hours = addZero(time.getHours());
      var minutes = addZero(time.getMinutes());
      var displayTime = hours +':'+ minutes;
      msgSect.find('.msg-current-time').text(displayTime);
      // riceviamo una risposta automatica dal computer
      setTimeout(function() {
        var autoMsg = 'Ok';
        var autoMsgSect = $('.no-display .auto-msg-container').clone();
        autoMsgSect.children().prepend(autoMsg);
        $('.main-chat').append(autoMsgSect);
        autoMsgSect.find('.msg-current-time').text(displayTime);
      }, 1000);
    }
  }

  // aggiunge lo zero sui numeri minori di 10 nell'orario
  function addZero(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
  }

});
