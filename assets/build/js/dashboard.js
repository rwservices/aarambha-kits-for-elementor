/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/css/dashboard.css":
/*!**************************************!*\
  !*** ./assets/src/css/dashboard.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/js/gutenberg/components/render-tabs/elementor.js":
/*!*********************************************************************!*\
  !*** ./assets/src/js/gutenberg/components/render-tabs/elementor.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderElementor: () => (/* binding */ RenderElementor)
/* harmony export */ });
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const proLabel = aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "pro-addon-inactive";
const freeLabel = aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "free-addon-active";
const {
  CardBody,
  BaseControl,
  ToggleControl,
  CardMedia
} = wp.components;
const URL = aarambhaKitsBuild.URL;
const RenderElementor = props => {
  const {
    settings,
    setSetting
  } = props.props;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "columns",
    "data-columns": "1",
    "data-columns-md": "2",
    "data-columns-lg": "3"
  }, /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Heading", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-1"],
    onChange: () => {
      setSetting("block-element-1", !(settings && settings["block-element-1"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-1.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block News Ticker", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-2"],
    onChange: () => {
      setSetting("block-element-2", !(settings && settings["block-element-2"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-2.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Hero Slider", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-6"],
    onChange: () => {
      setSetting("block-element-6", !(settings && settings["block-element-6"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-6.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Featured Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-3"],
    onChange: () => {
      setSetting("block-element-3", !(settings && settings["block-element-3"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-3.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts Slider", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-4"],
    onChange: () => {
      setSetting("block-element-4", !(settings && settings["block-element-4"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-4.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 1", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-7"],
    onChange: () => {
      setSetting("block-element-7", !(settings && settings["block-element-7"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-7.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 2", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-8"],
    onChange: () => {
      setSetting("block-element-8", !(settings && settings["block-element-8"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-8.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 3", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-9"],
    onChange: () => {
      setSetting("block-element-9", !(settings && settings["block-element-9"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-9.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 4", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-10"],
    onChange: () => {
      setSetting("block-element-10", !(settings && settings["block-element-10"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-10.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Posts 5", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-11"],
    onChange: () => {
      setSetting("block-element-11", !(settings && settings["block-element-11"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-11.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block CTA", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-15"],
    onChange: () => {
      setSetting("block-element-15", !(settings && settings["block-element-15"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-15.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${freeLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Service", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-16"],
    onChange: () => {
      setSetting("block-element-16", !(settings && settings["block-element-16"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-16.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block CountDown", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-12"],
    onChange: () => {
      setSetting("block-element-12", !(settings && settings["block-element-12"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-12.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Counter", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-13"],
    onChange: () => {
      setSetting("block-element-13", !(settings && settings["block-element-13"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-13.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Categories", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-14"],
    onChange: () => {
      setSetting("block-element-14", !(settings && settings["block-element-14"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-14.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Video", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-17"],
    onChange: () => {
      setSetting("block-element-17", !(settings && settings["block-element-17"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-17.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Instagram", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-18"],
    onChange: () => {
      setSetting("block-element-18", !(settings && settings["block-element-18"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-18.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Advanced Tab", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-19"],
    onChange: () => {
      setSetting("block-element-19", !(settings && settings["block-element-19"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-19.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Animated Heading", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-20"],
    onChange: () => {
      setSetting("block-element-20", !(settings && settings["block-element-20"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-20.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Products", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-21"],
    onChange: () => {
      setSetting("block-element-21", !(settings && settings["block-element-21"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-8.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Tabbed Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-element-5"],
    onChange: () => {
      setSetting("block-element-5", !(settings && settings["block-element-5"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-element-5.png`
  })))));
};

/***/ }),

/***/ "./assets/src/js/gutenberg/components/render-tabs/widget.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/gutenberg/components/render-tabs/widget.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderWidget: () => (/* binding */ RenderWidget)
/* harmony export */ });
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const proLabel = aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "pro-addon-inactive";
const URL = aarambhaKitsBuild.URL;
const {
  CardBody,
  CardDivider,
  BaseControl,
  ToggleControl,
  SelectControl,
  CardMedia
} = wp.components;
const RenderWidget = props => {
  const {
    settings,
    setSetting
  } = props.props;
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
    onChange: () => {
      setSetting("block-widget-1", !(settings && settings["block-widget-1"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-1.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Advertisement", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-2"],
    onChange: () => {
      setSetting("block-widget-2", !(settings && settings["block-widget-2"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-2.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Category", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-3"],
    onChange: () => {
      setSetting("block-widget-3", !(settings && settings["block-widget-3"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-3.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Featured Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-4"],
    onChange: () => {
      setSetting("block-widget-4", !(settings && settings["block-widget-4"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-4.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "column"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Popular Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-5"],
    onChange: () => {
      setSetting("block-widget-5", !(settings && settings["block-widget-5"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-5.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Two Column Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-6"],
    onChange: () => {
      setSetting("block-widget-6", !(settings && settings["block-widget-6"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-6.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Tabbed Posts", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-7"],
    onChange: () => {
      setSetting("block-widget-7", !(settings && settings["block-widget-7"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-7.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Social Networks", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-8"],
    onChange: () => {
      setSetting("block-widget-8", !(settings && settings["block-widget-8"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-8.png`
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: `column ${proLabel}`
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Block Facebook Page", "aarambha-kits")
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Check to enable", "aarambha-kits"),
    checked: settings && settings["block-widget-9"],
    onChange: () => {
      setSetting("block-widget-9", !(settings && settings["block-widget-9"]));
    }
  })), /*#__PURE__*/React.createElement(CardMedia, null, /*#__PURE__*/React.createElement("img", {
    src: `${URL}/assets/build/images/block-widget-9.png`
  })))));
};

/***/ }),

/***/ "./assets/src/js/gutenberg/components/tabs.js":
/*!****************************************************!*\
  !*** ./assets/src/js/gutenberg/components/tabs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetTab: () => (/* binding */ GetTab),
/* harmony export */   RenderTab: () => (/* binding */ RenderTab)
/* harmony export */ });
/* harmony import */ var _render_tabs_elementor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-tabs/elementor */ "./assets/src/js/gutenberg/components/render-tabs/elementor.js");
/* harmony import */ var _render_tabs_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-tabs/widget */ "./assets/src/js/gutenberg/components/render-tabs/widget.js");
const {
  __
} = wp.i18n;


const GetTab = () => {
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
const RenderTab = props => {
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

/***/ "./assets/src/js/gutenberg/utils/components.js":
/*!*****************************************************!*\
  !*** ./assets/src/js/gutenberg/utils/components.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComponentDidMount: () => (/* binding */ useComponentDidMount),
/* harmony export */   useComponentDidUpdate: () => (/* binding */ useComponentDidUpdate),
/* harmony export */   useComponentWillUnmount: () => (/* binding */ useComponentWillUnmount)
/* harmony export */ });
const {
  useEffect,
  useRef
} = wp.element;
const useComponentDidMount = handler => {
  return useEffect(() => {
    return handler();
  }, []);
};
const useComponentDidUpdate = (handler, deps) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    return handler();
  }, deps);
};
const useComponentWillUnmount = handler => {
  return useEffect(() => handler, []);
};

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./assets/src/js/dashboard.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_dashboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/dashboard.css */ "./assets/src/css/dashboard.css");
/* harmony import */ var _gutenberg_components_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/components/tabs */ "./assets/src/js/gutenberg/components/tabs.js");
/* harmony import */ var _gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/utils/components */ "./assets/src/js/gutenberg/utils/components.js");
// Styles


// Scripts
const {
  __
} = wp.i18n;
const {
  render,
  useState
} = wp.element;
const {
  isEqual
} = lodash;
const {
  apiFetch
} = wp;
const {
  TabPanel,
  Notice,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardDivider,
  CardFooter,
  Spinner
} = wp.components;


const AddSettings = () => {
  const [allSetting, setInitialSetting] = useState({}),
    [isSaving, setIsSaving] = useState(false),
    [hasNotice, setNotice] = useState(false),
    [hasError, setError] = useState(false),
    [needSave, setNeedSave] = useState(false);
  const SettingNotice = () => /*#__PURE__*/React.createElement(Notice, {
    onRemove: () => setNotice(false),
    status: hasError ? "error" : "success"
  }, /*#__PURE__*/React.createElement("p", null, hasError && __("An error occurred.", "aarambha-kits"), !hasError && __("Saved Successfully.", "aarambha-kits")));
  async function getSettings() {
    let data = await apiFetch({
      path: aarambhaKitsBuild.rest.namespace + aarambhaKitsBuild.rest.version + "/get_settings"
    });
    if (data) {
      setInitialSetting(data);
    } else {
      setInitialSetting({});
    }
  }
  async function setSettings() {
    setIsSaving(true);
    let data = await apiFetch({
      path: aarambhaKitsBuild.rest.namespace + aarambhaKitsBuild.rest.version + "/set_settings",
      method: "POST",
      data: {
        settings: allSetting
      }
    });
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
  }
  const setStateSettings = (key, val) => {
    let newSetting = Object.assign({}, allSetting);
    newSetting[key] = val;
    setInitialSetting(newSetting);
    setNeedSave(true);
  };
  (0,_gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_2__.useComponentDidMount)(() => {
    getSettings();
  });
  (0,_gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_2__.useComponentDidUpdate)(() => {
    /*Nothing for now*/
  });
  (0,_gutenberg_utils_components__WEBPACK_IMPORTED_MODULE_2__.useComponentWillUnmount)(() => {
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
    tabs: (0,_gutenberg_components_tabs__WEBPACK_IMPORTED_MODULE_1__.GetTab)()
  }, tab => /*#__PURE__*/React.createElement(_gutenberg_components_tabs__WEBPACK_IMPORTED_MODULE_1__.RenderTab, {
    tab: tab,
    settings: allSetting,
    setSetting: setStateSettings
  }))), /*#__PURE__*/React.createElement(CardDivider, null), /*#__PURE__*/React.createElement(CardFooter, null, /*#__PURE__*/React.createElement(Button, {
    className: "button",
    onClick: () => setSettings(),
    isPrimary: true,
    disabled: isSaving || !needSave
  }, needSave ? __("Save Settings", "aarambha-kits") : __("Saved", "aarambha-kits"), isSaving ? /*#__PURE__*/React.createElement(Spinner, null) : "")));
};
document.addEventListener("DOMContentLoaded", () => {
  if ("undefined" !== typeof document.getElementById(aarambhaKitsBuild.root_id) && null !== document.getElementById(aarambhaKitsBuild.root_id)) {
    render(/*#__PURE__*/React.createElement(AddSettings, null), document.getElementById(aarambhaKitsBuild.root_id));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=dashboard.js.map