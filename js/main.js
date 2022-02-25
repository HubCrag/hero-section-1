//document.getElementById("dateYear").innerHTML = new Date().getFullYear();
"use strict";
"use strict";

var burger = document.querySelector('.burger');
var menu = document.querySelector('nav');

var disScroll = function disScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('dis--scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + "px";
};

var enScroll = function enScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis--scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
};

burger.addEventListener('click', function (e) {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');

  if (burger.classList.contains('is-active')) {
    disScroll();
  } else {
    enScroll();
  }
});
"use strict";
/**
  *
  * @param {number} first 
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
