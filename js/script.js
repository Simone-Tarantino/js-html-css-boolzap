$(document).ready (function() {
  // inviare messaggio con tasto enter
  $(document).on('keypress', '#message', function (event) {
    if(event.which == 13 || event.keyCode == 13) {
      sendMsg();
    }
  });
  // inviare messaggio con click su icon
  $(document).on('click', 'i.fa-paper-plane', function() {
    vsendMsg();
  });

  // dropdown chat
  $(document).on('click', 'i.fa-chevron-down', function() {
    $(this).next().toggle();
  });

  // click su elimina per cancellare messaggio
  $(document).on('click', '.delete', function() {
    $(this).parents('.go-delete').remove();
  });

  // ricerca nome sulla lista chat
  $('#search-name').keyup(function() {
    var userIn = $('#search-name').val().toLowerCase();
    console.log(userIn);

    $('.chat-name').each(function(){
      var chatListName = $(this).text().toLowerCase();
      console.log(chatListName);
      var chatListDiv = $(this).parents('.chat-info');
      console.log(chatListDiv);
      if (chatListName.includes(userIn) == false) {
        $(chatListDiv).hide();
      } else {
        $(chatListDiv).show();
      }
    });
  });

  $(document).on('click', '.chat-info', function() {
    var chatPosition = $(this).index();
    console.log(chatPosition);
    var eqChat = $('.top-nav-r').eq(chatPosition);
    console.log(eqChat);
    var eqMainChat = $('.main-chat').eq(chatPosition);
    console.log(eqMainChat);
    //
    $('.chat-info').removeClass('chat-info-active');
    $(this).addClass('chat-info-active');
    //
    $('.top-nav-r').hide();
    $('.top-nav-r-active').hide();
    eqChat.show().css('display', 'flex');
    $('.main-chat-active').hide();
    $('.main-chat').hide();
    $('.main-chat').removeClass('active');
    eqMainChat.show().addClass('active');
  });

  // funzione per inviare e ricevere messaggio automatico con Handlebars

  function sendMsg() {
    var source = $('#msg-user').html();
    var template = Handlebars.compile(source);

    var msg = $('#message').val();

    if (msg.length >= 1) {
      var time = new Date();
      var hours = addZero(time.getHours());
      var minutes = addZero(time.getMinutes());
      var displayTime = hours +':'+ minutes;

      var context = {
        'textSent' : msg,
        'time' : displayTime
      };

      var html = template(context);
      $('.main-chat.active').append(html);
      msg = $('#message').val('');

      setTimeout(function(){
        var source = $('#reply').html();
        var template = Handlebars.compile(source);

        var autoMsg = 'Ok';

        var time = new Date();
        var hours = addZero(time.getHours());
        var minutes = addZero(time.getMinutes());
        var displayTime = hours +':'+ minutes;

        var context = {
          'reply' : autoMsg,
          'time' : displayTime
        };

        var html = template(context);
        $('.main-chat.active').append(html);

      }, 1000);
    }
  }

  // funcion per inviare messaggio e ricevere risposta automatica (versione senza handlebars)

  // function sendMsg() {
  //   var msg = $('#message').val();
  //   // se il messaggio è lungo 1 o più caratteri viene stampato altrimenti no
  //   if (msg.length >= 1) {
  //     var msgSect = $('.no-display .input-msg-container').clone();
  //     msgSect.children().prepend(msg);
  //     $('.main-chat.active').append(msgSect);
  //     msg = $('#message').val('');
  //     // inseriamo l'orario corrente del messaggio
  //     var time = new Date();
  //     var hours = addZero(time.getHours());
  //     var minutes = addZero(time.getMinutes());
  //     var displayTime = hours +':'+ minutes;
  //     msgSect.find('.msg-current-time').text(displayTime);
  //     // riceviamo una risposta automatica dal computer
  //     setTimeout(function() {
  //       var autoMsg = 'Ok';
  //       var autoMsgSect = $('.no-display .auto-msg-container').clone();
  //       autoMsgSect.children().prepend(autoMsg);
  //       $('.main-chat.active').append(autoMsgSect);
  //       autoMsgSect.find('.msg-current-time').text(displayTime);
  //     }, 1000);
  //   }
  // }



  // aggiunge lo zero sui numeri minori di 10 nell'orario
  function addZero(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
  }

});
