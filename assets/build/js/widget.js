/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/css/cta.css":
/*!********************************!*\
  !*** ./assets/src/css/cta.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/featured-post.css":
/*!******************************************!*\
  !*** ./assets/src/css/featured-post.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/hero-slider.css":
/*!****************************************!*\
  !*** ./assets/src/css/hero-slider.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/news-ticker.css":
/*!****************************************!*\
  !*** ./assets/src/css/news-ticker.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/post-layout-1.css":
/*!******************************************!*\
  !*** ./assets/src/css/post-layout-1.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/post-layout-2.css":
/*!******************************************!*\
  !*** ./assets/src/css/post-layout-2.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/post-layout-3.css":
/*!******************************************!*\
  !*** ./assets/src/css/post-layout-3.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/post-layout-4.css":
/*!******************************************!*\
  !*** ./assets/src/css/post-layout-4.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/post-layout-5.css":
/*!******************************************!*\
  !*** ./assets/src/css/post-layout-5.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/post-slider.css":
/*!****************************************!*\
  !*** ./assets/src/css/post-slider.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/css/service.css":
/*!************************************!*\
  !*** ./assets/src/css/service.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/js/widget/hero-slider.js":
/*!*********************************************!*\
  !*** ./assets/src/js/widget/hero-slider.js ***!
  \*********************************************/
/***/ (() => {

// Scripts
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
    $("." + $wclass + " .aarambha-kits-hero-slider-container").each(function (index, element) {
      let $container = $(this),
        $settings = $container.data("settings");
      const $HeroSwiperOptions = {
        speed: $settings.speed,
        effect: $settings.effect,
        crossFade: true
      };

      // Enable Autoplay
      if ($settings.autoplay) {
        $HeroSwiperOptions.autoplay = {
          delay: $settings.delay,
          disableOnInteraction: false
        };
      }

      // Enable Infinite Loop
      if ($settings.loop) {
        $HeroSwiperOptions.loop = true;
      }

      // Enable navigation
      if ($settings.navigation) {
        $HeroSwiperOptions.navigation = {
          prevEl: ".aarambha-kits-hero-slider-container .hero-swiper-button-prev",
          nextEl: ".aarambha-kits-hero-slider-container .hero-swiper-button-next"
        };
      }

      // Enable pagination
      if ($settings.pagination) {
        $HeroSwiperOptions.pagination = {
          el: ".aarambha-kits-hero-slider-container .swiper-pagination",
          type: "bullets",
          clickable: true
        };
      }
      const $HeroSwiper = new Swiper("." + $wclass + " .aarambha-kits-hero-slider-container .swiper-container", $HeroSwiperOptions);

      // Pause On Hover
      if ($settings.pause === true) {
        $("." + $wclass + " .aarambha-kits-hero-slider-container .swiper-container").mouseenter(function () {
          $HeroSwiper.autoplay.stop();
        });
        $("." + $wclass + " .aarambha-kits-hero-slider-container .swiper-container").mouseleave(function () {
          $HeroSwiper.autoplay.start();
        });
      }
    });
  };

  // Run this code under Elementor.
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/aarambha-kits-block-hero-slider.default", $widgetHeroSlider); // Hero Slider
  });
})(jQuery);

/***/ }),

/***/ "./assets/src/js/widget/news-ticker.js":
/*!*********************************************!*\
  !*** ./assets/src/js/widget/news-ticker.js ***!
  \*********************************************/
/***/ (() => {

// Scripts
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
  let $widgetNewsTicker = function ($scope, $) {
    let $wid = $scope.data("id"),
      $wclass = "elementor-element-" + $wid;
    $("." + $wclass + " .aarambha-kits-block-news-ticker-container").each(function (index, element) {
      let $container = $(this),
        $settings = $container.data("settings"),
        $holder = $container.find(".aarambha-kits-news-ticker-wrap .aarambha-kits-posts-list");
      const $sliderAttrs = {
        row_height: 30,
        max_rows: 1,
        direction: "up",
        autostart: 1,
        pauseOnHover: 1
      };

      // Delay
      if ($settings.delay) {
        $sliderAttrs.duration = $settings.delay;
      }
      // Speed
      if ($settings.speed) {
        $sliderAttrs.speed = $settings.speed;
      }
      $holder.newsTicker($sliderAttrs);
    });
  };

  // Run this code under Elementor.
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/aarambha-kits-block-news-ticker.default", $widgetNewsTicker); // News Ticker
  });
})(jQuery);

/***/ }),

/***/ "./assets/src/js/widget/post-slider.js":
/*!*********************************************!*\
  !*** ./assets/src/js/widget/post-slider.js ***!
  \*********************************************/
/***/ (() => {

(function ($) {
  "use strict";

  let $widgetPostsSlider = function ($scope, $) {
    let $wid = $scope.data("id"),
      $wclass = "elementor-element-" + $wid;
    console.log($wclass);
    $("." + $wclass + " .aarambha-kits-posts-slider-container").each(function (index, element) {
      let $container = $(this),
        $settings = $container.data("settings");
      const $postsSliderOptions = {
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 310px
          320: {
            slidesPerView: $settings.slidePerViewSm
          },
          // when window width is >= 576px
          510: {
            slidesPerView: $settings.slidePerViewSm
          },
          // when window width is >= 768px
          768: {
            slidesPerView: $settings.slidePerViewMd
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: $settings.slidePerViewLg
          }
        }
      };

      // Enable Autoplay
      if ($settings.autoplay) {
        $postsSliderOptions.autoplay = {
          delay: $settings.delay,
          disableOnInteraction: false
        };
      }

      // Enable Infinite Loop
      if ($settings.loop) {
        $postsSliderOptions.loop = true;
      }

      // Enable navigation
      if ($settings.navigation) {
        $postsSliderOptions.navigation = {
          nextEl: ".aarambha-kits-posts-slider-container .swiper-button-next",
          prevEl: ".aarambha-kits-posts-slider-container .swiper-button-prev"
        };
      }

      // Enable pagination
      if ($settings.pagination) {
        $postsSliderOptions.pagination = {
          el: ".aarambha-kits-posts-slider-container .swiper-pagination",
          type: "bullets",
          clickable: true
        };
      }

      // Slide Space
      $postsSliderOptions.spaceBetween = $settings.spaceBetween;
      const $postsSlider = new Swiper("." + $wclass + " .aarambha-kits-posts-slider-container .posts-swiper-slider", $postsSliderOptions);

      // Pause On Hover
      if ($settings.pause === true) {
        $("." + $wclass + " .aarambha-kits-posts-slider-container .aarambha-kits-posts-wrapper").mouseenter(function () {
          $postsSlider.autoplay.stop();
        });
        $("." + $wclass + " .aarambha-kits-posts-slider-container .aarambha-kits-posts-wrapper").mouseleave(function () {
          $postsSlider.autoplay.start();
        });
      }
    });
  };

  // Run this code under Elementor.
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/aarambha-kits-block-posts-slider.default", $widgetPostsSlider); // Posts Slider
  });
})(jQuery);
console.log("🚀 ~ $wclass:", $wclass);
console.log("🚀 ~ $wclass:", $wclass);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./assets/src/js/widget.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_cta_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/cta.css */ "./assets/src/css/cta.css");
/* harmony import */ var _css_featured_post_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/featured-post.css */ "./assets/src/css/featured-post.css");
/* harmony import */ var _css_hero_slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/hero-slider.css */ "./assets/src/css/hero-slider.css");
/* harmony import */ var _css_news_ticker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/news-ticker.css */ "./assets/src/css/news-ticker.css");
/* harmony import */ var _css_post_layout_1_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/post-layout-1.css */ "./assets/src/css/post-layout-1.css");
/* harmony import */ var _css_post_layout_2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/post-layout-2.css */ "./assets/src/css/post-layout-2.css");
/* harmony import */ var _css_post_layout_3_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/post-layout-3.css */ "./assets/src/css/post-layout-3.css");
/* harmony import */ var _css_post_layout_4_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/post-layout-4.css */ "./assets/src/css/post-layout-4.css");
/* harmony import */ var _css_post_layout_5_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/post-layout-5.css */ "./assets/src/css/post-layout-5.css");
/* harmony import */ var _css_post_slider_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/post-slider.css */ "./assets/src/css/post-slider.css");
/* harmony import */ var _css_service_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/service.css */ "./assets/src/css/service.css");
/* harmony import */ var _widget_hero_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget/hero-slider */ "./assets/src/js/widget/hero-slider.js");
/* harmony import */ var _widget_hero_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_widget_hero_slider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _widget_news_ticker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget/news-ticker */ "./assets/src/js/widget/news-ticker.js");
/* harmony import */ var _widget_news_ticker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_widget_news_ticker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _widget_post_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget/post-slider */ "./assets/src/js/widget/post-slider.js");
/* harmony import */ var _widget_post_slider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_widget_post_slider__WEBPACK_IMPORTED_MODULE_13__);
// Styles












// scripts



})();

/******/ })()
;
//# sourceMappingURL=widget.js.map