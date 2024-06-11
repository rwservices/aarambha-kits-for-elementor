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

  // Widgets Tab
  $(".widget .aarambha-kits-wp-block-tabbed-posts .nav-tab .nav-tab-item").on(
    "click",
    function (event) {
      let tabid = $(this).attr("tab-data");
      $(this)
        .closest(".aarambha-kits-wp-block-tabbed-posts")
        .find(".nav-tab-item")
        .removeClass("active");
      $(this).addClass("active");
      $(this)
        .closest(".aarambha-kits-wp-block-tabbed-posts")
        .find(".tab-content-wrapper .tab-pane")
        .removeClass("active");
      $(this)
        .closest(".aarambha-kits-wp-block-tabbed-posts")
        .find(".content-" + tabid)
        .addClass("active");
    }
  );

  // Render style background with data attributes
  let pageSection = $(".aarambha-kits-data-background");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });
})(jQuery);
