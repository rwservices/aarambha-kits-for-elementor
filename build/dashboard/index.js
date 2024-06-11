/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dashboard/gutenberg/components/render-tabs/elementor.js":
/*!*********************************************************************!*\
  !*** ./src/dashboard/gutenberg/components/render-tabs/elementor.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderElementor: function() { return /* binding */ RenderElementor; }
/* harmony export */ });
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var proLabel = aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "pro-addon-inactive";
var freeLabel = aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "free-addon-active";
var _wp$components = wp.components,
  CardBody = _wp$components.CardBody,
  BaseControl = _wp$components.BaseControl,
  ToggleControl = _wp$components.ToggleControl,
  CardMedia = _wp$components.CardMedia;
var URL = aarambhaKitsBuild.URL;
var RenderElementor = function RenderElementor(props) {
  var _props$props = props.props,
    settings = _props$props.settings,
    setSetting = _props$props.setSetting;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "columns",
    "data-columns": "1",
    "data-columns-md": "2",
    "data-columns-lg": "3"
  }, /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Heading", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-1"],
    onChange: function onChange() {
      setSetting("block-element-1", !(settings && settings["block-element-1"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-1.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block News Ticker", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-2"],
    onChange: function onChange() {
      setSetting("block-element-2", !(settings && settings["block-element-2"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-2.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Hero Slider", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-6"],
    onChange: function onChange() {
      setSetting("block-element-6", !(settings && settings["block-element-6"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-6.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Featured Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-3"],
    onChange: function onChange() {
      setSetting("block-element-3", !(settings && settings["block-element-3"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-3.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts Slider", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-4"],
    onChange: function onChange() {
      setSetting("block-element-4", !(settings && settings["block-element-4"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-4.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 1", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-7"],
    onChange: function onChange() {
      setSetting("block-element-7", !(settings && settings["block-element-7"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-7.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 2", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-8"],
    onChange: function onChange() {
      setSetting("block-element-8", !(settings && settings["block-element-8"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-8.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 3", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-9"],
    onChange: function onChange() {
      setSetting("block-element-9", !(settings && settings["block-element-9"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-9.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 4", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-10"],
    onChange: function onChange() {
      setSetting("block-element-10", !(settings && settings["block-element-10"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-10.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 5", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-11"],
    onChange: function onChange() {
      setSetting("block-element-11", !(settings && settings["block-element-11"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-11.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block CTA", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-15"],
    onChange: function onChange() {
      setSetting("block-element-15", !(settings && settings["block-element-15"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-15.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(freeLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Service", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-16"],
    onChange: function onChange() {
      setSetting("block-element-16", !(settings && settings["block-element-16"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-16.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block CountDown", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-12"],
    onChange: function onChange() {
      setSetting("block-element-12", !(settings && settings["block-element-12"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-12.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Counter", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-13"],
    onChange: function onChange() {
      setSetting("block-element-13", !(settings && settings["block-element-13"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-13.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Categories", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-14"],
    onChange: function onChange() {
      setSetting("block-element-14", !(settings && settings["block-element-14"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-14.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Video", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-17"],
    onChange: function onChange() {
      setSetting("block-element-17", !(settings && settings["block-element-17"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-17.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Instagram", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-18"],
    onChange: function onChange() {
      setSetting("block-element-18", !(settings && settings["block-element-18"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-18.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Advanced Tab", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-19"],
    onChange: function onChange() {
      setSetting("block-element-19", !(settings && settings["block-element-19"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-19.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Animated Heading", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-20"],
    onChange: function onChange() {
      setSetting("block-element-20", !(settings && settings["block-element-20"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-20.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Products", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-21"],
    onChange: function onChange() {
      setSetting("block-element-21", !(settings && settings["block-element-21"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-8.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Tabbed Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-5"],
    onChange: function onChange() {
      setSetting("block-element-5", !(settings && settings["block-element-5"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-element-5.png")
  })))));
};

/***/ }),

/***/ "./src/dashboard/gutenberg/components/render-tabs/widget.js":
/*!******************************************************************!*\
  !*** ./src/dashboard/gutenberg/components/render-tabs/widget.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderWidget: function() { return /* binding */ RenderWidget; }
/* harmony export */ });
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var proLabel = aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "pro-addon-inactive";
var URL = aarambhaKitsBuild.URL;
var _wp$components = wp.components,
  CardBody = _wp$components.CardBody,
  CardDivider = _wp$components.CardDivider,
  BaseControl = _wp$components.BaseControl,
  ToggleControl = _wp$components.ToggleControl,
  SelectControl = _wp$components.SelectControl,
  CardMedia = _wp$components.CardMedia;
var RenderWidget = function RenderWidget(props) {
  var _props$props = props.props,
    settings = _props$props.settings,
    setSetting = _props$props.setSetting;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "columns",
    "data-columns": "1",
    "data-columns-md": "2",
    "data-columns-lg": "3"
  }, /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Author", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-1"],
    onChange: function onChange() {
      setSetting("block-widget-1", !(settings && settings["block-widget-1"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-1.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Advertisement", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-2"],
    onChange: function onChange() {
      setSetting("block-widget-2", !(settings && settings["block-widget-2"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-2.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Category", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-3"],
    onChange: function onChange() {
      setSetting("block-widget-3", !(settings && settings["block-widget-3"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-3.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Featured Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-4"],
    onChange: function onChange() {
      setSetting("block-widget-4", !(settings && settings["block-widget-4"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-4.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Popular Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-5"],
    onChange: function onChange() {
      setSetting("block-widget-5", !(settings && settings["block-widget-5"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-5.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Two Column Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-6"],
    onChange: function onChange() {
      setSetting("block-widget-6", !(settings && settings["block-widget-6"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-6.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Tabbed Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-7"],
    onChange: function onChange() {
      setSetting("block-widget-7", !(settings && settings["block-widget-7"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-7.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Social Networks", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-8"],
    onChange: function onChange() {
      setSetting("block-widget-8", !(settings && settings["block-widget-8"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-8.png")
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column ".concat(proLabel)
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Facebook Page", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-9"],
    onChange: function onChange() {
      setSetting("block-widget-9", !(settings && settings["block-widget-9"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: "".concat(URL, "/images/block-widget-9.png")
  })))));
};

/***/ }),

/***/ "./src/dashboard/gutenberg/components/tabs.js":
/*!****************************************************!*\
  !*** ./src/dashboard/gutenberg/components/tabs.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetTab: function() { return /* binding */ GetTab; },
/* harmony export */   RenderTab: function() { return /* binding */ RenderTab; }
/* harmony export */ });
/* harmony import */ var _render_tabs_elementor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-tabs/elementor */ "./src/dashboard/gutenberg/components/render-tabs/elementor.js");
/* harmony import */ var _render_tabs_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-tabs/widget */ "./src/dashboard/gutenberg/components/render-tabs/widget.js");
var __ = wp.i18n.__;


var GetTab = function GetTab() {
  return [{
    name: 'elementor',
    title: __('Elementor Widget', 'aarambha-kits'),
    className: 'aarambha-kits-elementor'
  }, {
    name: 'widget',
    title: __('WP Widget', 'aarambha-kits'),
    className: 'aarambha-kits-widget'
  }];
};
var RenderTab = function RenderTab(props) {
  if ('elementor' === props.tab.name) {
    return /*#__PURE__*/React.createElement(_render_tabs_elementor__WEBPACK_IMPORTED_MODULE_0__.RenderElementor, {
      props: props
    });
  } else if ('widget' === props.tab.name) {
    return /*#__PURE__*/React.createElement(_render_tabs_widget__WEBPACK_IMPORTED_MODULE_1__.RenderWidget, {
      props: props
    });
  }
  return '';
};

/***/ }),

/***/ "./src/dashboard/gutenberg/utils/components.js":
/*!*****************************************************!*\
  !*** ./src/dashboard/gutenberg/utils/components.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComponentDidMount: function() { return /* binding */ useComponentDidMount; },
/* harmony export */   useComponentDidUpdate: function() { return /* binding */ useComponentDidUpdate; },
/* harmony export */   useComponentWillUnmount: function() { return /* binding */ useComponentWillUnmount; }
/* harmony export */ });
var _wp$element = wp.element,
  useEffect = _wp$element.useEffect,
  useRef = _wp$element.useRef;
var useComponentDidMount = function useComponentDidMount(handler) {
  return useEffect(function () {
    return handler();
  }, []);
};
var useComponentDidUpdate = function useComponentDidUpdate(handler, deps) {
  var isInitialMount = useRef(true);
  useEffect(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    return handler();
  }, deps);
};
var useComponentWillUnmount = function useComponentWillUnmount(handler) {
  return useEffect(function () {
    return handler;
  }, []);
};

/***/ }),

/***/ "./src/dashboard/index.css":
/*!*********************************!*\
  !*** ./src/dashboard/index.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/dashboard/main.scss":
/*!*********************************!*\
  !*** ./src/dashboard/main.scss ***!
  \*********************************/
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/*!********************************!*\
  !*** ./src/dashboard/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/dashboard/main.scss");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/dashboard/index.css");
/* harmony import */ var _gutenberg_components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/components/tabs */ "./src/dashboard/gutenberg/components/tabs.js");
/* harmony import */ var _gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutenberg/utils/components */ "./src/dashboard/gutenberg/utils/components.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

// Styles



/*Code goes here
 * Output : build/index.js
 * */

var __ = wp.i18n.__;
var _wp$element = wp.element,
  render = _wp$element.render,
  useState = _wp$element.useState;
var _lodash = lodash,
  isEqual = _lodash.isEqual;
var _wp = wp,
  apiFetch = _wp.apiFetch;
var _wp$components = wp.components,
  TabPanel = _wp$components.TabPanel,
  Notice = _wp$components.Notice,
  Button = _wp$components.Button,
  Card = _wp$components.Card,
  CardHeader = _wp$components.CardHeader,
  CardBody = _wp$components.CardBody,
  CardDivider = _wp$components.CardDivider,
  CardFooter = _wp$components.CardFooter,
  Spinner = _wp$components.Spinner;


var AddSettings = function AddSettings() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    allSetting = _useState2[0],
    setInitialSetting = _useState2[1],
    _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSaving = _useState4[0],
    setIsSaving = _useState4[1],
    _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasNotice = _useState6[0],
    setNotice = _useState6[1],
    _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasError = _useState8[0],
    setError = _useState8[1],
    _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    needSave = _useState10[0],
    setNeedSave = _useState10[1];
  var SettingNotice = function SettingNotice() {
    return /*#__PURE__*/React.createElement(Notice, {
      onRemove: function onRemove() {
        return setNotice(false);
      },
      status: hasError ? "error" : "success"
    }, /*#__PURE__*/React.createElement("p", null, hasError && __("An error occurred.", "aarambha-kits"), !hasError && __("Saved Successfully.", "aarambha-kits")));
  };
  function getSettings() {
    return _getSettings.apply(this, arguments);
  }
  function _getSettings() {
    _getSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return apiFetch({
              path: aarambhaKitsBuild.rest.namespace + aarambhaKitsBuild.rest.version + "/get_settings"
            });
          case 2:
            data = _context.sent;
            if (data) {
              setInitialSetting(data);
            } else {
              setInitialSetting({});
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getSettings.apply(this, arguments);
  }
  function setSettings() {
    return _setSettings.apply(this, arguments);
  }
  function _setSettings() {
    _setSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setIsSaving(true);
            _context2.next = 3;
            return apiFetch({
              path: aarambhaKitsBuild.rest.namespace + aarambhaKitsBuild.rest.version + "/set_settings",
              method: "POST",
              data: {
                settings: allSetting
              }
            });
          case 3:
            data = _context2.sent;
            if (isEqual(allSetting, data)) {
              setError(false);
              setIsSaving(false);
              setNeedSave(false);
              setInitialSetting(data);
            } else {
              setIsSaving(false);
              setError(true);
              setNeedSave(true);
            }
            setNotice(true);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _setSettings.apply(this, arguments);
  }
  var setStateSettings = function setStateSettings(key, val) {
    var newSetting = Object.assign({}, allSetting);
    newSetting[key] = val;
    setInitialSetting(newSetting);
    setNeedSave(true);
  };
  (0,_gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_3__.useComponentDidMount)(function () {
    getSettings();
  });
  (0,_gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_3__.useComponentDidUpdate)(function () {
    /*Nothing for now*/
  });
  (0,_gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_3__.useComponentWillUnmount)(function () {
    /*Nothing for now*/
  });
  if (!Object.keys(allSetting).length) {
    return /*#__PURE__*/React.createElement(Spinner, null);
  }
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    style: {
      overflow: "hidden",
      height: "70px"
    }
  }, /*#__PURE__*/React.createElement("h1", null, __("Aarambha Kits Settings", "aarambha-kits")), hasNotice && !isSaving && /*#__PURE__*/React.createElement(SettingNotice, null)), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(TabPanel, {
    className: "aarambha-kits",
    activeClass: "aarambha-kits-tab-active",
    tabs: (0,_gutenberg_components_tabs__WEBPACK_IMPORTED_MODULE_2__.GetTab)()
  }, function (tab) {
    return /*#__PURE__*/React.createElement(_gutenberg_components_tabs__WEBPACK_IMPORTED_MODULE_2__.RenderTab, {
      tab: tab,
      settings: allSetting,
      setSetting: setStateSettings
    });
  })), /*#__PURE__*/React.createElement(CardDivider, null), /*#__PURE__*/React.createElement(CardFooter, null, /*#__PURE__*/React.createElement(Button, {
    className: "button",
    onClick: function onClick() {
      return setSettings();
    },
    isPrimary: true,
    disabled: isSaving || !needSave
  }, needSave ? __("Save Settings", "aarambha-kits") : __("Saved", "aarambha-kits"), isSaving ? /*#__PURE__*/React.createElement(Spinner, null) : "")));
};
document.addEventListener("DOMContentLoaded", function () {
  if ("undefined" !== typeof document.getElementById(aarambhaKitsBuild.root_id) && null !== document.getElementById(aarambhaKitsBuild.root_id)) {
    render( /*#__PURE__*/React.createElement(AddSettings, null), document.getElementById(aarambhaKitsBuild.root_id));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map