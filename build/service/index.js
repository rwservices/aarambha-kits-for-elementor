/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/service/index.css":
/*!*******************************!*\
  !*** ./src/service/index.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/service/index.css");
// Styles

(function ($) {
  'use strict';

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
  var $widgetPostsSlider = function $widgetPostsSlider($scope, $) {
    var $wid = $scope.data('id'),
      $wclass = 'elementor-element-' + $wid;
    $('.' + $wclass + ' .aarambha-kits-posts-slider-container').each(function (index, element) {
      var $container = $(this),
        $settings = $container.data('settings');
      var $postsSliderOptions = {
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
          nextEl: '.aarambha-kits-posts-slider-container .swiper-button-next',
          prevEl: '.aarambha-kits-posts-slider-container .swiper-button-prev'
        };
      }

      // Enable pagination
      if ($settings.pagination) {
        $postsSliderOptions.pagination = {
          el: '.aarambha-kits-posts-slider-container .swiper-pagination',
          type: 'bullets',
          clickable: true
        };
      }

      // Slide Space
      $postsSliderOptions.spaceBetween = $settings.spaceBetween;
      var $postsSlider = new Swiper('.' + $wclass + ' .aarambha-kits-posts-slider-container .posts-swiper-slider', $postsSliderOptions);

      // Pause On Hover
      if ($settings.pause === true) {
        $('.' + $wclass + ' .aarambha-kits-posts-slider-container .aarambha-kits-posts-wrapper').mouseenter(function () {
          $postsSlider.autoplay.stop();
        });
        $('.' + $wclass + ' .aarambha-kits-posts-slider-container .aarambha-kits-posts-wrapper').mouseleave(function () {
          $postsSlider.autoplay.start();
        });
      }
    });
  };

  // Run this code under Elementor.
  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/aarambha-kits-block-posts-slider.default', $widgetPostsSlider); // Posts Slider
  });
})(jQuery);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map