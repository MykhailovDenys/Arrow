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
    bl_top = $(target).offset().top;
    if (target == '#portfolio' || target == '#offices' || target == '#contacts') {
      bl_top += 73;
    }
    else {
      bl_top -= 78;
    }
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

  /* TABS */
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
  /* END TABS */
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAvKiBNRU5VIEJUTiAqL1xyXG4gICQoJy5tZW51LWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51LWJ0bi1hY3RpdmUnKTtcclxuICB9KTtcclxuICAvKiBFTkQgTUVOVSBCVE4gKi9cclxuXHJcbiAgLyogRFJPUC1ET1dOLU1FTlUgKi9cclxuICAkKCcudG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ25hdicpLnRvZ2dsZUNsYXNzKCdkcm9wLWRvd24tYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgLyogRU5EIERST1AtRE9XTi1NRU5VICovXHJcblxyXG4gIC8qIFNNT09USFNDUk9MTCBUTyBBTkNIT1JTICovXHJcbiAgJCgnYVtkYXRhLXRhcmdldF49XCJhbmNob3JcIl0nKS5iaW5kKCdjbGljay5zbW9vdGhzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICBibF90b3AgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xyXG4gICAgaWYgKHRhcmdldCA9PSAnI3BvcnRmb2xpbycgfHwgdGFyZ2V0ID09ICcjb2ZmaWNlcycgfHwgdGFyZ2V0ID09ICcjY29udGFjdHMnKSB7XHJcbiAgICAgIGJsX3RvcCArPSA3MztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBibF90b3AgLT0gNzg7XHJcbiAgICB9XHJcbiAgICAkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcDogYmxfdG9wXHJcbiAgICB9LCA3MDApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gIC8qIEVORCBTTU9PVEhTQ1JPTEwgVE8gQU5DSE9SUyAqL1xyXG5cclxuICAvKiBNRU5VIElURU0gQUNUSVZFICovXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSB7XHJcbiAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdkYXJrJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnZGFyaycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8qRU5EIE1FTlUgSVRFTSBBQ1RJVkUgKi9cclxuXHJcbiAgLyogYmVnaW4gU2Nyb2xsIERvd24gQnV0dG9uICovXHJcbiAgbGV0IGJ0blNjcm9sbERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsLWRvd24nKTtcclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcclxuICAgIGxldCB3aW5kb3dDb29yZHMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNzg7XHJcbiAgICAoZnVuY3Rpb24gc2Nyb2xsKCkge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgd2luZG93Q29vcmRzKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDEwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNjcm9sbCwgMTApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB3aW5kb3dDb29yZHMpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgd2luZG93Q29vcmRzKTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICB9XHJcbiAgYnRuU2Nyb2xsRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbERvd24pO1xyXG4gIC8qIEVORCBiZWdpbiBTY3JvbGwgRG93biBCdXR0b24gKi9cclxuXHJcbiAgLyogVEFCUyAqL1xyXG4gIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzXCIpLFxyXG4gICAgcHJldiA9IHRhYnMucXVlcnlTZWxlY3RvcihcIi5wcmV2XCIpLFxyXG4gICAgbmV4dCA9IHRhYnMucXVlcnlTZWxlY3RvcihcIi5uZXh0XCIpO1xyXG5cclxuICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgd2hpbGUgKHRhcmdldCAhPSB0aGlzKSB7XHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFic0J0blwiKSkge1xyXG4gICAgICAgIGxldCB0YWJzQnRuID0gdGFicy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFic0J0blwiKTtcclxuICAgICAgICBsZXQgdGFyZ2V0RGF0YSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiKTtcclxuICAgICAgICBsZXQgdGFic0NvbnRlbnQgPSB0YWJzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJzQ29udGVudFwiKTtcclxuICAgICAgICAvLyBcclxuICAgICAgICBsZXQgdGFic0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic0hlYWRlclwiKTtcclxuICAgICAgICAvLyBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRhYnNCdG5baV0uY2xhc3NMaXN0LnJlbW92ZShcInRhYkFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0YWJBY3RpdmVcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0YXJnZXREYXRhID09IGkpIHtcclxuICAgICAgICAgICAgdGFic0NvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGFic0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWN0XCIgKyBpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFic0hlYWRlcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJzQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0YWJzSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RcIiArIGkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRhYnNCdG4gPSB0YWJzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJzQnRuXCIpO1xyXG4gICAgbGV0IHRhYnNDb250ZW50ID0gdGFicy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFic0NvbnRlbnRcIik7XHJcbiAgICBsZXQgY3VyO1xyXG4gICAgbGV0IG5leHQ7XHJcbiAgICAvLyBcclxuICAgIGxldCB0YWJzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzSGVhZGVyXCIpO1xyXG4gICAgLy8gXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRhYnNCdG5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiQWN0aXZlXCIpKSB7XHJcbiAgICAgICAgdGFic0J0bltpXS5jbGFzc0xpc3QucmVtb3ZlKFwidGFiQWN0aXZlXCIpO1xyXG4gICAgICAgIGN1ciA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG5leHQgPSBjdXIgKyAxO1xyXG4gICAgaWYgKG5leHQgPj0gdGFic0J0bi5sZW5ndGgpIHtcclxuICAgICAgdGFic0J0blswXS5jbGFzc0xpc3QuYWRkKFwidGFiQWN0aXZlXCIpO1xyXG4gICAgICBuZXh0ID0gMDtcclxuICAgIH0gZWxzZSB0YWJzQnRuW25leHRdLmNsYXNzTGlzdC5hZGQoXCJ0YWJBY3RpdmVcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobmV4dCA9PSBpKSB7XHJcbiAgICAgICAgdGFic0NvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB0YWJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RcIiArIGkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYnNIZWFkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYnNDb250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdGFic0hlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0XCIgKyBpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJzSGVhZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdGFic0J0biA9IHRhYnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYnNCdG5cIik7XHJcbiAgICBsZXQgdGFic0NvbnRlbnQgPSB0YWJzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJzQ29udGVudFwiKTtcclxuICAgIGxldCBjdXI7XHJcbiAgICBsZXQgcHJldjtcclxuICAgIC8vIFxyXG4gICAgbGV0IHRhYnNIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNIZWFkZXJcIik7XHJcbiAgICAvLyBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0J0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGFic0J0bltpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJBY3RpdmVcIikpIHtcclxuICAgICAgICB0YWJzQnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJBY3RpdmVcIik7XHJcbiAgICAgICAgY3VyID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJldiA9IGN1ciAtIDE7XHJcbiAgICBpZiAocHJldiA8IDApIHtcclxuICAgICAgdGFic0J0blt0YWJzQnRuLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoXCJ0YWJBY3RpdmVcIik7XHJcbiAgICAgIHByZXYgPSB0YWJzQnRuLmxlbmd0aCAtIDE7XHJcbiAgICB9IGVsc2UgdGFic0J0bltwcmV2XS5jbGFzc0xpc3QuYWRkKFwidGFiQWN0aXZlXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJldiA9PSBpKSB7XHJcbiAgICAgICAgdGFic0NvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB0YWJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RcIiArIGkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYnNIZWFkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYnNDb250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdGFic0hlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0XCIgKyBpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJzSGVhZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8qIEVORCBUQUJTICovXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
