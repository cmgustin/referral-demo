$(document).ready(function() {
  $('#form').on('submit', function(e) {
    e.preventDefault();
    var nameString = $('input[name="lastName"]').val();
    var nameSubString = nameString.substring(0, 2).toUpperCase();
    var timestamp = new Date().getTime();
    var randNumber = Math.round(Math.random() * Math.random() * 10000000);
    var referralId = nameSubString + '-' + randNumber;
    $('#referralId').val(referralId);

    var formData = $(this).serialize();
    $.post('https://hooks.zapier.com/hooks/catch/1240383/ohfsqh6/', formData)
      .done(function(response) {
        $('#form').hide();
        $('#success').fadeIn(250);
      })
      .fail(function(error) {
        console.log(error);
      });
  });
});