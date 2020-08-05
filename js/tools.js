window.addEventListener("load", function () {
  document.querySelectorAll(".animated").forEach(function (item) {
    var delay = item.getAttribute("data-delay");

    if (delay == null) {
      delay = 0;
    }

    if (
      item.getAttribute("data-scroll") == 0 ||
      item.getAttribute("data-scroll") == null
    ) {
      setTimeout(function () {
        item.classList.add("in");
      }, delay);
    }
  });
});


window.addEventListener("scroll", function () {
  document.querySelectorAll(".animated").forEach(function (item) {
    var delay = item.getAttribute("data-delay");

    if (delay == null) {
      delay = 0;
    }
    if (
        item.getAttribute("data-scroll") != 0 &&
        item.getAttribute("data-scroll") != null
      ){
        if (isElementInViewPort(item)) {
            setTimeout(function () {
                item.classList.add("in");
              }, delay);
        }
      }

})});

function isElementInViewPort (el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}