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

        $("." + $wclass + " .aarambha-kits-block-news-ticker-container").each(
            function (index, element) {
                let $container = $(this),
                    $settings = $container.data("settings"),
                    $holder = $container.find(
                        ".aarambha-kits-news-ticker-wrap .aarambha-kits-posts-list"
                    );

                const $sliderAttrs = {
                    row_height: 30,
                    max_rows: 1,
                    direction: "up",
                    autostart: 1,
                    pauseOnHover: 1,
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
            }
        );
    };

    // Run this code under Elementor.
    $(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/aarambha-kits-block-news-ticker.default",
            $widgetNewsTicker
        ); // News Ticker
    });
})(jQuery);