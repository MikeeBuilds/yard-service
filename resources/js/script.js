console.log("script.js is working");

$(document).ready(function () {
  // sticky navbar animation
  $(".js--section-about-us").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  //   scroll to plans section animation
  $(".js--scroll-to-contact").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top },
      500
    );
  });

  //   scroll to about-us section animation
  $(".js--scroll-to-about-us").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-about-us").offset().top },
      500
    );
  });

  //   animations on scroll
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  // mobile nav
  $(".js--nav-icon").click(function () {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("fa-hamburger")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-hamburger");
    } else {
      icon.addClass("fa-hamburger");
      icon.removeClass("fa-times");
    }
  });
});
