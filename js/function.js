// START EFFECT 1 PRODUCT
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
// END EFFECT 1 PRODUCT

// START EFFECT 2 PRODUCT
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}
// END EFFECT 2 PRODUCT

// START EFFECT EYE PRODUCTS
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// END EFFECT EYE PRODUCTS
