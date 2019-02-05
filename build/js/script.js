document.addEventListener("DOMContentLoaded", function () {

  /* MENU BTN */
  $('.menu-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn-active');
  });
  /* END MENU BTN */

  /* DROP-DOWN-MENU */
  $('.toggle').click(function (e) {
    e.preventDefault();
    $('nav').toggleClass('drop-down-active');
  });
  /* END DROP-DOWN-MENU */

  /* SMOOTHSCROLL TO ANCHORS */
  $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
    var target = $(this).attr('href'),
      bl_top = $(target).offset().top - 78;
    $('body, html').animate({
      scrollTop: bl_top
    }, 700);
    return false;
  });
  /* END SMOOTHSCROLL TO ANCHORS */

  /* MENU ITEM ACTIVE */
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('header').addClass('dark');
    } else {
      $('header').removeClass('dark');
    }
  });
  /*END MENU ITEM ACTIVE */

  /* begin Scroll Down Button */
  let btnScrollDown = document.querySelector('#scroll-down');

  function scrollDown() {
    let windowCoords = document.documentElement.clientHeight - 78;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 10);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }
  btnScrollDown.addEventListener('click', scrollDown);
  /* END begin Scroll Down Button */

  /* TABS SERG */
  let tabs = document.querySelector(".tabs"),
    prev = tabs.querySelector(".prev"),
    next = tabs.querySelector(".next");

  tabs.addEventListener("click", function (e) {
    let target = e.target;
    while (target != this) {
      if (target.classList.contains("tabsBtn")) {
        let tabsBtn = tabs.getElementsByClassName("tabsBtn");
        let targetData = target.getAttribute("data-tab");
        let tabsContent = tabs.getElementsByClassName("tabsContent");
        // 
        let tabsHeader = document.querySelector(".tabsHeader");
        // 
        for (let i = 0; i < tabsBtn.length; i++) {
          tabsBtn[i].classList.remove("tabActive");
        }
        target.classList.add("tabActive");

        for (let i = 0; i < tabsContent.length; i++) {
          if (targetData == i) {
            tabsContent[i].classList.add("active");
            tabsHeader.classList.add("act" + i);
            console.log(tabsHeader);
          } else {
            tabsContent[i].classList.remove("active");
            tabsHeader.classList.remove("act" + i);
          }
        }
      }
      target = target.parentNode;
    }
  });

  next.addEventListener("click", function () {
    let tabsBtn = tabs.getElementsByClassName("tabsBtn");
    let tabsContent = tabs.getElementsByClassName("tabsContent");
    let cur;
    let next;
    // 
    let tabsHeader = document.querySelector(".tabsHeader");
    // 
    for (let i = 0; i < tabsBtn.length; i++) {
      if (tabsBtn[i].classList.contains("tabActive")) {
        tabsBtn[i].classList.remove("tabActive");
        cur = i;
      }
    }
    next = cur + 1;
    if (next >= tabsBtn.length) {
      tabsBtn[0].classList.add("tabActive");
      next = 0;
    } else tabsBtn[next].classList.add("tabActive");

    for (let i = 0; i < tabsContent.length; i++) {
      if (next == i) {
        tabsContent[i].classList.add("active");
        tabsHeader.classList.add("act" + i);
        console.log(tabsHeader);
      } else {
        tabsContent[i].classList.remove("active");
        tabsHeader.classList.remove("act" + i);
        console.log(tabsHeader);
      }
    }
  });

  prev.addEventListener("click", function () {
    let tabsBtn = tabs.getElementsByClassName("tabsBtn");
    let tabsContent = tabs.getElementsByClassName("tabsContent");
    let cur;
    let prev;
    // 
    let tabsHeader = document.querySelector(".tabsHeader");
    // 
    for (let i = 0; i < tabsBtn.length; i++) {
      if (tabsBtn[i].classList.contains("tabActive")) {
        tabsBtn[i].classList.remove("tabActive");
        cur = i;
      }
    }
    prev = cur - 1;
    if (prev < 0) {
      tabsBtn[tabsBtn.length - 1].classList.add("tabActive");
      prev = tabsBtn.length - 1;
    } else tabsBtn[prev].classList.add("tabActive");
    for (let i = 0; i < tabsContent.length; i++) {
      if (prev == i) {
        tabsContent[i].classList.add("active");
        tabsHeader.classList.add("act" + i);
        console.log(tabsHeader);
      } else {
        tabsContent[i].classList.remove("active");
        tabsHeader.classList.remove("act" + i);
        console.log(tabsHeader);
      }
    }
  });
  /* END TABS SERG */
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAvKiBNRU5VIEJUTiAqL1xyXG4gICQoJy5tZW51LWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51LWJ0bi1hY3RpdmUnKTtcclxuICB9KTtcclxuICAvKiBFTkQgTUVOVSBCVE4gKi9cclxuXHJcbiAgLyogRFJPUC1ET1dOLU1FTlUgKi9cclxuICAkKCcudG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ25hdicpLnRvZ2dsZUNsYXNzKCdkcm9wLWRvd24tYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgLyogRU5EIERST1AtRE9XTi1NRU5VICovXHJcblxyXG4gIC8qIFNNT09USFNDUk9MTCBUTyBBTkNIT1JTICovXHJcbiAgJCgnYVtkYXRhLXRhcmdldF49XCJhbmNob3JcIl0nKS5iaW5kKCdjbGljay5zbW9vdGhzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgIGJsX3RvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3AgLSA3ODtcclxuICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wOiBibF90b3BcclxuICAgIH0sIDcwMCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbiAgLyogRU5EIFNNT09USFNDUk9MTCBUTyBBTkNIT1JTICovXHJcblxyXG4gIC8qIE1FTlUgSVRFTSBBQ1RJVkUgKi9cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkpIHtcclxuICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2RhcmsnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdkYXJrJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLypFTkQgTUVOVSBJVEVNIEFDVElWRSAqL1xyXG5cclxuICAvKiBiZWdpbiBTY3JvbGwgRG93biBCdXR0b24gKi9cclxuICBsZXQgYnRuU2Nyb2xsRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGwtZG93bicpO1xyXG5cclxuICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xyXG4gICAgbGV0IHdpbmRvd0Nvb3JkcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSA3ODtcclxuICAgIChmdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCB3aW5kb3dDb29yZHMpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2Nyb2xsLCAxMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHdpbmRvd0Nvb3Jkcykge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3dDb29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH1cclxuICBidG5TY3JvbGxEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsRG93bik7XHJcbiAgLyogRU5EIGJlZ2luIFNjcm9sbCBEb3duIEJ1dHRvbiAqL1xyXG5cclxuICAvKiBUQUJTIFNFUkcgKi9cclxuICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic1wiKSxcclxuICAgIHByZXYgPSB0YWJzLnF1ZXJ5U2VsZWN0b3IoXCIucHJldlwiKSxcclxuICAgIG5leHQgPSB0YWJzLnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcclxuXHJcbiAgdGFicy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHdoaWxlICh0YXJnZXQgIT0gdGhpcykge1xyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhYnNCdG5cIikpIHtcclxuICAgICAgICBsZXQgdGFic0J0biA9IHRhYnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYnNCdG5cIik7XHJcbiAgICAgICAgbGV0IHRhcmdldERhdGEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIik7XHJcbiAgICAgICAgbGV0IHRhYnNDb250ZW50ID0gdGFicy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFic0NvbnRlbnRcIik7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgbGV0IHRhYnNIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNIZWFkZXJcIik7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0YWJzQnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJBY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGFiQWN0aXZlXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0RGF0YSA9PSBpKSB7XHJcbiAgICAgICAgICAgIHRhYnNDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRhYnNIZWFkZXIuY2xhc3NMaXN0LmFkZChcImFjdFwiICsgaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYnNIZWFkZXIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFic0NvbnRlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGFic0hlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0XCIgKyBpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0YWJzQnRuID0gdGFicy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFic0J0blwiKTtcclxuICAgIGxldCB0YWJzQ29udGVudCA9IHRhYnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYnNDb250ZW50XCIpO1xyXG4gICAgbGV0IGN1cjtcclxuICAgIGxldCBuZXh0O1xyXG4gICAgLy8gXHJcbiAgICBsZXQgdGFic0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic0hlYWRlclwiKTtcclxuICAgIC8vIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YWJzQnRuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRhYkFjdGl2ZVwiKSkge1xyXG4gICAgICAgIHRhYnNCdG5baV0uY2xhc3NMaXN0LnJlbW92ZShcInRhYkFjdGl2ZVwiKTtcclxuICAgICAgICBjdXIgPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXh0ID0gY3VyICsgMTtcclxuICAgIGlmIChuZXh0ID49IHRhYnNCdG4ubGVuZ3RoKSB7XHJcbiAgICAgIHRhYnNCdG5bMF0uY2xhc3NMaXN0LmFkZChcInRhYkFjdGl2ZVwiKTtcclxuICAgICAgbmV4dCA9IDA7XHJcbiAgICB9IGVsc2UgdGFic0J0bltuZXh0XS5jbGFzc0xpc3QuYWRkKFwidGFiQWN0aXZlXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG5leHQgPT0gaSkge1xyXG4gICAgICAgIHRhYnNDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdGFic0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWN0XCIgKyBpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJzSGVhZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJzQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHRhYnNIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdFwiICsgaSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFic0hlYWRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRhYnNCdG4gPSB0YWJzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJzQnRuXCIpO1xyXG4gICAgbGV0IHRhYnNDb250ZW50ID0gdGFicy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFic0NvbnRlbnRcIik7XHJcbiAgICBsZXQgY3VyO1xyXG4gICAgbGV0IHByZXY7XHJcbiAgICAvLyBcclxuICAgIGxldCB0YWJzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzSGVhZGVyXCIpO1xyXG4gICAgLy8gXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRhYnNCdG5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiQWN0aXZlXCIpKSB7XHJcbiAgICAgICAgdGFic0J0bltpXS5jbGFzc0xpc3QucmVtb3ZlKFwidGFiQWN0aXZlXCIpO1xyXG4gICAgICAgIGN1ciA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZXYgPSBjdXIgLSAxO1xyXG4gICAgaWYgKHByZXYgPCAwKSB7XHJcbiAgICAgIHRhYnNCdG5bdGFic0J0bi5sZW5ndGggLSAxXS5jbGFzc0xpc3QuYWRkKFwidGFiQWN0aXZlXCIpO1xyXG4gICAgICBwcmV2ID0gdGFic0J0bi5sZW5ndGggLSAxO1xyXG4gICAgfSBlbHNlIHRhYnNCdG5bcHJldl0uY2xhc3NMaXN0LmFkZChcInRhYkFjdGl2ZVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHByZXYgPT0gaSkge1xyXG4gICAgICAgIHRhYnNDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdGFic0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWN0XCIgKyBpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJzSGVhZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJzQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHRhYnNIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdFwiICsgaSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFic0hlYWRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICAvKiBFTkQgVEFCUyBTRVJHICovXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
