(function ($) {
    "use strict";
    let $widgetPostsSlider = function ($scope, $) {
        let $wid = $scope.data("id"),
            $wclass = "elementor-element-" + $wid;
        console.log($wclass);

        $("." + $wclass + " .aarambha-kits-posts-slider-container").each(
            function (index, element) {
                let $container = $(this),
                    $settings = $container.data("settings");

                const $postsSliderOptions = {
                    // Responsive breakpoints
                    breakpoints: {
                        // when window width is >= 310px
                        320: {
                            slidesPerView: $settings.slidePerViewSm,
                        },
                        // when window width is >= 576px
                        510: {
                            slidesPerView: $settings.slidePerViewSm,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: $settings.slidePerViewMd,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: $settings.slidePerViewLg,
                        },
                    },
                };

                // Enable Autoplay
                if ($settings.autoplay) {
                    $postsSliderOptions.autoplay = {
                        delay: $settings.delay,
                        disableOnInteraction: false,
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
                        prevEl: ".aarambha-kits-posts-slider-container .swiper-button-prev",
                    };
                }

                // Enable pagination
                if ($settings.pagination) {
                    $postsSliderOptions.pagination = {
                        el: ".aarambha-kits-posts-slider-container .swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    };
                }

                // Slide Space
                $postsSliderOptions.spaceBetween = $settings.spaceBetween;

                const $postsSlider = new Swiper(
                    "." +
                    $wclass +
                    " .aarambha-kits-posts-slider-container .posts-swiper-slider",
                    $postsSliderOptions
                );

                // Pause On Hover
                if ($settings.pause === true) {
                    $(
                        "." +
                        $wclass +
                        " .aarambha-kits-posts-slider-container .aarambha-kits-posts-wrapper"
                    ).mouseenter(function () {
                        $postsSlider.autoplay.stop();
                    });
                    $(
                        "." +
                        $wclass +
                        " .aarambha-kits-posts-slider-container .aarambha-kits-posts-wrapper"
                    ).mouseleave(function () {
                        $postsSlider.autoplay.start();
                    });
                }
            }
        );
    };

    // Run this code under Elementor.
    $(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/aarambha-kits-block-posts-slider.default",
            $widgetPostsSlider
        ); // Posts Slider
    });
})(jQuery);
console.log("🚀 ~ $wclass:", $wclass)
console.log("🚀 ~ $wclass:", $wclass)
