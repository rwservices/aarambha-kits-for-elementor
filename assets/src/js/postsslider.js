// Styles
import '../css/postsslider.css';

(function( $ ) {
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

	let $widgetPostsSlider = function ($scope, $) {

		let $wid     = $scope.data('id'),
            $wclass  = 'elementor-element-' + $wid;

			$('.' + $wclass + ' .aarambha-kits-posts-slider-container').each(function (index, element) {

			let $container  = $(this),
                $settings   = $container.data('settings');

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
			
			const $postsSlider = new Swiper('.' + $wclass + ' .aarambha-kits-posts-slider-container .posts-swiper-slider', $postsSliderOptions );

			// Pause On Hover
			if ( $settings.pause === true ) {
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
        elementorFrontend.hooks.addAction( 'frontend/element_ready/aarambha-kits-block-posts-slider.default', $widgetPostsSlider); // Posts Slider
    });

})( jQuery );
