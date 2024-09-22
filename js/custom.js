// Aos
AOS.init();

setTimeout(() => {
  $(".loading").fadeOut(1000);
}, 1000);

window.onload = function () {
  setTimeout(() => {
    $(".header-pages").addClass("active");
  }, 500);
};

lightGallery(document.getElementById("lightgallery"), {
  thumbnail: true,
  selector: ".image-item",
});


$(".text-ask-aboutus ul li h2").click(function (e) {
  e.preventDefault();
  $(this).next().slideToggle(300);
  $(this).parent().toggleClass("active");
});

// start sldier services

if ($("#slider-hero").length) {
  $("#slider-hero").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
}

if ($("#slider-client").length) {
  $("#slider-client").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
}


if ($("#slider-customer").length) {
  $("#slider-customer").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 3,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: true,
    
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
}


$(".remove_mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
});

function open() {
  $(".navicon").addClass("is-active");
  $("#menu-div").addClass("active");
  $("#times-ican").addClass("active");
  $(".bg_menu").addClass("active");
}

function close() {
  $(".navicon").removeClass("is-active");
  $("#menu-div").removeClass("active");
  $("#times-ican").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".all-categories").removeClass("active");
  $(".btn-all-categories").removeClass("active");
  $(".show-categories").removeClass("active");

  $(".remove-mune").click(function () {
    $("#menu-div").removeClass("active");
    $(".bg_menu").removeClass("active");
    $(".times-ican").removeClass("active");
  });
}

$("#times-ican").click(function () {
  if ($(this).hasClass("active")) {
    close();
  } else {
    open();
  }
});

$(".btns_menu_responsive").click(function (e) {
  close();
});

$(".remove-mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".times-ican").removeClass("active");
  $(".navicon").removeClass("is-active");
});

$("#menu-div a").click(function () {
  e.preventDefault();
});

var $winl = $(window); // or $box parent container
var $boxl = $("#menu-div, #times-ican");
$winl.on("click.Bst", function (event) {
  if (
    $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
    !$boxl.is(event.target) //checks if the $box itself was clicked
  ) {
    close();
  }
});




const counters = document.querySelectorAll(".counter-header");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});




if ($(".counter").length) {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $(".counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2550,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            },
            complete: function () {
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });

  const animationDuration = 4000;

  const frameDuration = 1000 / 60;

  const totalFrames = Math.round(animationDuration / frameDuration);

  const easeOutQuad = (t) => t * (2 - t);

  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
      frame++;

      const progress = easeOutQuad(frame / totalFrames);

      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  const countupEls = document.querySelectorAll(".timer");
  countupEls.forEach(animateCountUp);

  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      2100
    );
    $(this).text($(this).attr("data-progress") + "%");
  });
}
