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

$icon.onclick = () => {
  $arrow.animate([
    {top: '0'},
    {top: '10px'},
    {top: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}
$(document).ready(function(){
  $("#show").hover(function(){
    $("#navlogo").show();
  });
});