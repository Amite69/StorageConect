(function ($) {
  "use strict";
  var t = $(window);
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -80,
  }),
    $(".navbar-nav .nav-link").on("click", function () {
      $(".navbar-collapse.show").removeClass("show");
    }),
    t.on("scroll", function () {
      var o = t.scrollTop(),
        a = $(".navbar"),
        e = $(".navbar .logo> images");
      o > 100
        ? (a.addClass("nav-scroll"), e.attr("src", "images/logo.png"))
        : (a.removeClass("nav-scroll"), e.attr("src", "images/logo.png"));
    }),
    /*--document ready functions--*/
    jQuery(document).ready(function ($) {
      /*wow js init*/
      new WOW().init();
      /*bottom to top*/
      $(document).on("click", ".back-to-top", function () {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          2000
        );
      });
      /* smoth scroll*/
      $("#main-menu li a").on("click", function (e) {
        var anchor = $(this).attr("href");
        var top = $(anchor).offset().top;
        $("html, body").animate(
          {
            scrollTop: $(anchor).offset().top,
          },
          1000
        );
      });
      $(".slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });

  var x, i, j, l, ll, selElmnt, a, b, c;
  x = document.getElementsByClassName("filter-dropdown-selector");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /*--window Scroll functions--*/
  $(window).on("scroll", function () {
    /*--show and hide scroll to top --*/
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 500) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }
    /*--sticky menu activation--*/
    var mainMenuTop = $(".navbar-area");
    if ($(window).scrollTop() > 300) {
      mainMenuTop.addClass("nav-fixed");
    } else {
      mainMenuTop.removeClass("nav-fixed");
    }
    /*--sticky Mobile menu activation--*/
    var mobileMenuTop = $(".slicknav_menu");
    if ($(window).scrollTop() > 300) {
      mobileMenuTop.addClass("nav-fixed");
    } else {
      mobileMenuTop.removeClass("nav-fixed");
    }
  });

  /*--window load functions--*/
  $(window).on("load", function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);
  });
})(jQuery);
