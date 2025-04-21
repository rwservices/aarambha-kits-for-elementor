// Styles
import "./index.css";

(function ($) {
  "use strict";

  /**
   * All of the code for your public-facing JavaScript source
   * should reside in this file.
   *
   * Note: It has been assumed you will write jQuery code here, so the
   * $ function reference has been prepared for usage within the scope
   * of this function.
   *
   * This enables you to define handlers, for when the DOM is ready:
   *
   * $(function() {
   *
   * });
   *
   * When the window is loaded:
   *
   * $( window ).load(function() {
   *
   * });
   *
   * ...and/or other possibilities.
   *
   * Ideally, it is not considered best practise to attach more than a
   * single DOM-ready or window-load handler for a particular page.
   * Although scripts in the WordPress core, Plugins and Themes may be
   * practising this, we should strive to set a better example in our own work.
   */

  let $widgetHeroSlider = function ($scope, $) {
    let $wid = $scope.data("id"),
      $wclass = "elementor-element-" + $wid;

    $("." + $wclass + " .aarambha-kits-hero-slider-container").each(
      function (index, element) {
        let $container = $(this),
          $settings = $container.data("settings");

        const $HeroSwiperOptions = {
          speed: $settings.speed,
          effect: $settings.effect,
          crossFade: true,
        };

        // Enable Autoplay
        if ($settings.autoplay) {
          $HeroSwiperOptions.autoplay = {
            delay: $settings.delay,
            disableOnInteraction: false,
          };
        }

        // Enable Infinite Loop
        if ($settings.loop) {
          $HeroSwiperOptions.loop = true;
        }

        // Enable navigation
        if ($settings.navigation) {
          $HeroSwiperOptions.navigation = {
            prevEl:
              ".aarambha-kits-hero-slider-container .hero-swiper-button-prev",
            nextEl:
              ".aarambha-kits-hero-slider-container .hero-swiper-button-next",
          };
        }

        // Enable pagination
        if ($settings.pagination) {
          $HeroSwiperOptions.pagination = {
            el: ".aarambha-kits-hero-slider-container .swiper-pagination",
            type: "bullets",
            clickable: true,
          };
        }

        const $HeroSwiper = new Swiper(
          "." +
            $wclass +
            " .aarambha-kits-hero-slider-container .swiper-container",
          $HeroSwiperOptions
        );

        // Pause On Hover
        if ($settings.pause === true) {
          $(
            "." +
              $wclass +
              " .aarambha-kits-hero-slider-container .swiper-container"
          ).mouseenter(function () {
            $HeroSwiper.autoplay.stop();
          });
          $(
            "." +
              $wclass +
              " .aarambha-kits-hero-slider-container .swiper-container"
          ).mouseleave(function () {
            $HeroSwiper.autoplay.start();
          });
        }
      }
    );
  };

  // Run this code under Elementor.
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aarambha-kits-block-hero-slider.default",
      $widgetHeroSlider
    ); // Hero Slider
  });
})(jQuery);
