console.log("Your index.js file is loaded correctly!");

$(body).scroll(function () {
    if ( $(this).scrollTop() > 200 && !$('header').hasClass('open') ) {
      $('header').addClass('open');
      $('header').slideDown();
     } else if ( $(this).scrollTop() <= 200 ) {
      $('header').removeClass('open');
      $('header').slideUp();
    }
  });

const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$icon.mouseenter = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}