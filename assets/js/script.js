$(function() {
  /* ---- Cheng Xin ---- */
  var $txtArea    = $('#textArea'),
      $result     = $('#result'),
      $translate  = $('#translate');

  // $result.bind('ajaxStart', function() {
  //   $(this).css("background-image", "url('../img/ajax-loading-big.gif')");
  // }).bind('ajaxStop', function() {
  //   $(this).css("background-image", "none");
  // });

  // $( document ).ajaxStart(function() {
  //   $('.output-area').css({"background-image": "url('assets/img/loader.gif')","background-size":"cover"});
  // });
  $( document ).ajaxStop(function() {
    $('.output-area').LoadingOverlay("hide");
  });

  $translate.on('click', function() {
    /* ----  Customising loader ---- */
    $result.LoadingOverlay("show", {
      color:  "rgba(51, 51, 51, 0.6)"
    });

    $.ajax({
        url: 'https://yoda.p.mashape.com/yoda', //the URL to the API
        type: 'GET', //method
        data: {
          sentence: $txtArea.val()
        },
        datatype: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "rO3ezlTQsgmshjtHvhopN5TUcVzzp1m2emIjsndzl29xZKM92x"); // Enter your mashape key
        }
      })//.ajaxStart(function() {
      //   $result.css("background-image", "url('../img/ajax-loading-big.gif')");
      // })
      // .ajaxStop(function() {
      //   $result.css("background-image", "none");
      // })
      .done(function(data) {
        $result.text(data);
      })
      .fail(function(request, textStatus, errorThrown) {
        $txtArea.text('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      });
  });

  /* ---- Dylan ---- */
  var $btn = $("#request"),
    $textInput = $("#textInput"),
    $textOutput = $("#textOutput"),
    $url = 'https://yoda.p.mashape.com/yoda?sentence=',
    $postText,
    $getURL;

  $btn.on('click', function() {
    /* ----  Customising loader ---- */
    $textOutput.LoadingOverlay("show", {
      color:  "rgba(51, 51, 51, 0.6)"
    });

    //console.log($textInput.val());
    $postText = $textInput.val().replace(/ /g, "+");
    $getURL = $url.concat($postText);
    //console.log($postText, $getURL);

    $.ajax({
        url: $getURL,
        headers: {
          'X-Mashape-Key': 'FgLjEeHD7PmshmPc4AD2DQqh847Tp1FWEIVjsnxFt7AUKNBuSr'
        },
      }).done(function(data) {
        $textOutput.text(data);
      })
      .fail(function(request, textStatus, errorThrown) {
        $textOutput.text(request.status + ' ' + textStatus + ' ' + errorThrown);
      });

  });

});
