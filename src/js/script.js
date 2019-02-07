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
