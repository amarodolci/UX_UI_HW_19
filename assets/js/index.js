console.log("Your index.js file is loaded correctly!");

$(window).scroll(function () {
    if ( $(this).scrollTop() > 200 && !$('#navBar img').hasClass('open') ) {
      $('#navBar img').addClass('open');
      $('#navBar img').slideDown();
     } else if ( $(this).scrollTop() <= 200 ) {
      $('#navBar img').removeClass('open');
      $('#navBar img').slideUp();
    }
  });