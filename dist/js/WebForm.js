$(document).ready(function() {
  $('#form').submit(function(e) {
    e.preventDefault();
    const first_name = $('#name').val();
    const passwordCheck = $('#passwordCheck').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const about = $('#about').val();

    $(".error").remove();
    $(".form_input__invalid").removeClass("form_input__invalid");

    if (first_name.length< 1) {
      $('#name').before('<span class="error">This field is required</span>');
      $('#name').addClass('form_input__invalid');
    }
    else {
      $('#name').addClass('form_input__valid');
    }
    if (email.length< 1) {
      $('#email').before('<span class="error">This field is required</span>');
      $('#email').addClass('form_input__invalid');
    }
    else {
      var regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').before('<span class="error">Enter a valid email</span>');
        $('#email').addClass('form_input__invalid');
      }
      else {
        $('#email').addClass('form_input__valid');
      }
    }
    if (password.length < 8) {
      $('#password').before('<span class="error">Password must be at least 8 characters long</span>');
      $('#password').addClass('form_input__invalid');
    }
    else {
      $('#password').addClass('form_input__valid');
      if (passwordCheck != password) {
        $('#passwordCheck').before('<span class="error">passwords don`t match</span>');
        $('#passwordCheck').addClass('form_input__invalid');
      }
      else {
        $('#passwordCheck').addClass('form_input__valid');
      }
    }
    if (about.length < 1) {
      $('#about').before('<span class="error">Write something about you</span>');
      $('#about').addClass('form_input__invalid');
    }
    else {
      $('#about').addClass('form_input__valid');
    }
  });

  let opened = false;
  $('.panel_button').click(function(e) {
    if (opened) {
      $('.panel_content').addClass('invisible');
    }
    else {
      $('.panel_content').removeClass('invisible');
    }
    opened = !opened
  });
});
