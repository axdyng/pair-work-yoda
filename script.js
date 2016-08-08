$(function() {
  var $txtArea = $('#textArea'),
    $result = $('#result'),
    $translate = $('#translate');

  $translate.on('click', function() {
    $.ajax({
        url: 'https://yoda.p.mashape.com/yoda',//the URL to the API
        type: 'GET', //method
        data: {
          sentence: $txtArea.val()
        },
        datatype: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "rO3ezlTQsgmshjtHvhopN5TUcVzzp1m2emIjsndzl29xZKM92x"); // Enter your mashape key
        }
      }).done(function(data) {
        $result.text(data);
      })
      .fail(function(request, textStatus, errorThrown) {
        $txtArea.text('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      });
  });


});
