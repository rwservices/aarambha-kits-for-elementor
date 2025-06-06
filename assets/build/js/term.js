/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/css/term.css":
/*!*********************************!*\
  !*** ./assets/src/css/term.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./assets/src/js/term.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_term_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/term.css */ "./assets/src/css/term.css");
// Styles


// Scripts
(function ($) {
  "use strict";

  var custom_theme_file_frame;

  // Uploads.
  jQuery(document).on("click", "input.select-img", function (event) {
    var $this = $(this);
    event.preventDefault();
    var CustomThemeImage = wp.media.controller.Library.extend({
      defaults: _.defaults({
        id: "custom-theme-insert-image",
        title: $this.data("uploader_title"),
        allowLocalEdits: false,
        displaySettings: true,
        displayUserSettings: false,
        multiple: false,
        library: wp.media.query({
          type: "image"
        })
      }, wp.media.controller.Library.prototype.defaults)
    });

    // Create the media frame.
    custom_theme_file_frame = wp.media.frames.custom_theme_file_frame = wp.media({
      button: {
        text: jQuery(this).data("uploader_button_text")
      },
      state: "custom-theme-insert-image",
      states: [new CustomThemeImage()],
      multiple: false
    });

    // When an image is selected, run a callback.
    custom_theme_file_frame.on("select", function () {
      var state = custom_theme_file_frame.state("custom-theme-insert-image");
      var selection = state.get("selection");
      var display = state.display(selection.first()).toJSON();
      var obj_attachment = selection.first().toJSON();
      display = wp.media.string.props(display, obj_attachment);
      var image_field = $this.siblings(".img");
      var imgurl = display.src;

      // Copy image URL.
      image_field.val(imgurl);
      image_field.trigger("change");

      // Show in preview.
      var image_preview_wrap = $this.siblings(".image-preview-wrap");
      var image_html = '<img src="' + imgurl + '" alt="" style="width:200px;height:auto;" />';
      image_preview_wrap.html(image_html);

      // Show Remove button.
      var image_remove_button = $this.siblings(".btn-image-remove");
      image_remove_button.css("display", "inline-block");
    });

    // Finally, open the modal.
    custom_theme_file_frame.open();
  });

  // Remove image.
  jQuery(document).on("click", "input.btn-image-remove", function (e) {
    e.preventDefault();
    var $this = $(this);
    var image_field = $this.siblings(".img");
    image_field.val("");
    var image_preview_wrap = $this.siblings(".image-preview-wrap");
    image_preview_wrap.html("");
    $this.css("display", "none");
    image_field.trigger("change");
  });
  $(".image-upload-button").click(function () {
    event.preventDefault();
    var imgContainer = $(this).closest(".image-fields-wrap").find(".thumbnail-image .image-container"),
      removeimg = $(this).closest(".image-fields-wrap").find(".image-delete-button"),
      imgIdInput = $(this).siblings(".upload-id");
    var frame;

    // Create a new media frame
    frame = wp.media({
      title: AARAMBHA_KITS.upload_image,
      button: {
        text: AARAMBHA_KITS.use_image
      },
      multiple: false // Set to true to allow multiple files to be selected
    });

    // When an image is selected in the media frame...
    frame.on("select", function () {
      // Get media attachment details from the frame state
      var attachment = frame.state().get("selection").first().toJSON();
      // Send the attachment URL to our custom image input field.
      imgContainer.html('<img src="' + attachment.url + '" style="width:200px;height:auto;" />');
      removeimg.addClass("image-show");
      // Send the attachment id to our hidden input
      imgIdInput.val(attachment.url).trigger("change");
    });

    // Finally, open the modal on click
    frame.open();
  });

  // DELETE IMAGE LINK
  $(".image-delete-button").click(function () {
    event.preventDefault();
    var imgContainer = $(this).closest(".image-fields-wrap").find(".thumbnail-image .image-container");
    var removeimg = $(this).closest(".image-fields-wrap").find(".image-delete-button");
    var imgIdInput = $(this).closest(".image-fields-wrap").find(".upload-id");
    // Clear out the preview image
    imgContainer.find("img").remove();
    removeimg.removeClass("image-show");
    // Delete the image id from the hidden input
    imgIdInput.val("").trigger("change");
  });

  // Remove IMAGE AFTER CATEGORY CREATED LINK
  $(document).ajaxSuccess(function (e, request, settings) {
    var object = settings.data;
    if (typeof object == "string") {
      var object = object.split("&");
      if (object.includes("action=add-tag") && object.includes("screen=edit-category") && object.includes("taxonomy=category")) {
        $(".image-delete-button").removeClass("image-show");
        $(".upload-id").attr("value", "");
        $(".image-container").empty();
      }
    }
  });
  jQuery(document).ready(function ($) {
    $(".colorpicker").wpColorPicker();
  }); // End Document Ready JQuery
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=term.js.map