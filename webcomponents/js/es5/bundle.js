/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(10);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _textUtils = __webpack_require__(16);

	var _textUtils2 = _interopRequireDefault(_textUtils);

	__webpack_require__(2);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(8);
	__webpack_require__(17);


	var template = __webpack_require__(9);

	var FormatCodeElement = function (_HTMLElement) {
		_inherits(FormatCodeElement, _HTMLElement);

		function FormatCodeElement() {
			_classCallCheck(this, FormatCodeElement);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FormatCodeElement).apply(this, arguments));
		}

		_createClass(FormatCodeElement, [{
			key: "createdCallback",
			value: function createdCallback() {}
		}, {
			key: "attachedCallback",
			value: function attachedCallback() {
				this.render();
			}
		}, {
			key: "attributeChangedCallback",
			value: function attributeChangedCallback(attrName, oldVal, newVal) {}
		}, {
			key: "render",
			value: function render() {
				var coloredHTML = prettyPrintOne(_textUtils2.default.replaceSpaces(this.innerHTML.trim()), this.getAttribute("lang"));
				this.innerHTML = template;
				this.childNodes[0].innerHTML = coloredHTML;
				this.appendTitle(this.getAttribute("file-name"));
			}
		}, {
			key: "appendTitle",
			value: function appendTitle(text) {
				if (text) {
					var titleNode = document.createElement("div");
					titleNode.className = "code-title";
					titleNode.appendChild(document.createTextNode(text));
					this.insertBefore(titleNode, this.firstChild);
				}
			}
		}]);

		return FormatCodeElement;
	}(HTMLElement);

	document.registerElement('az-format-code', FormatCodeElement);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./prettify.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./prettify.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".pln{color:#000}@media screen{.str{color:#080}.kwd{color:#008}.com{color:#800}.typ{color:#606}.lit{color:#066}.pun,.opn,.clo{color:#660}.tag{color:#008}.atn{color:#606}.atv{color:#080}.dec,.var{color:#606}.fun{color:red}}@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun,.opn,.clo{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}az-format-code.prettyprint{padding:2px;border:1px solid #888}ol.linenums{margin-top:0;margin-bottom:0}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./sunburst.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./sunburst.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* Pretty printing styles. Used with prettify.js. */\r\n/* Vim sunburst theme by David Leibovic */\r\n\r\naz-format-code .str, code .str { color: #65B042; } /* string  - green */\r\naz-format-code .kwd, code .kwd { color: #E28964; } /* keyword - dark pink */\r\naz-format-code .com, code .com { color: #AEAEAE; font-style: italic; } /* comment - gray */\r\naz-format-code .typ, code .typ { color: #89bdff; } /* type - light blue */\r\naz-format-code .lit, code .lit { color: #3387CC; } /* literal - blue */\r\naz-format-code .pun, code .pun { color: #fff; } /* punctuation - white */\r\naz-format-code .pln, code .pln { color: #fff; } /* plaintext - white */\r\naz-format-code .tag, code .tag { color: #89bdff; } /* html/xml tag    - light blue */\r\naz-format-code .atn, code .atn { color: #bdb76b; } /* html/xml attribute name  - khaki */\r\naz-format-code .atv, code .atv { color: #65B042; } /* html/xml attribute value - green */\r\naz-format-code .dec, code .dec { color: #3387CC; } /* decimal - blue */\r\n\r\npre.prettyprint, code.prettyprint {\r\n\tbackground-color: #000;\r\n\t-moz-border-radius: 8px;\r\n\t-webkit-border-radius: 8px;\r\n\t-o-border-radius: 8px;\r\n\t-ms-border-radius: 8px;\r\n\t-khtml-border-radius: 8px;\r\n\tborder-radius: 8px;\r\n}\r\n\r\npre.prettyprint {\r\n\twidth: 95%;\r\n\tmargin: 1em auto;\r\n\tpadding: 1em;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n\r\n/* Specify class=linenums on a pre to get line numbering */\r\nol.linenums { margin-top: 0; margin-bottom: 0; color: #AEAEAE; } /* IE indents via margin-left */\r\nli.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8 { list-style-type: none }\r\n/* Alternate shading for lines */\r\nli.L1,li.L3,li.L5,li.L7,li.L9 { }\r\n\r\n@media print {\r\n  az-format-code .str, code .str { color: #060; }\r\n  az-format-code .kwd, code .kwd { color: #006; font-weight: bold; }\r\n  az-format-code .com, code .com { color: #600; font-style: italic; }\r\n  az-format-code .typ, code .typ { color: #404; font-weight: bold; }\r\n  az-format-code .lit, code .lit { color: #044; }\r\n  az-format-code .pun, code .pun { color: #440; }\r\n  az-format-code .pln, code .pln { color: #000; }\r\n  az-format-code .tag, code .tag { color: #006; font-weight: bold; }\r\n  az-format-code .atn, code .atn { color: #404; }\r\n  az-format-code .atv, code .atv { color: #060; }\r\n}", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	!function(){/*

	 Copyright (C) 2006 Google Inc.

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	      http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	window.PR_SHOULD_USE_CONTINUATION=!0;
	(function(){function T(a){function d(e){var b=e.charCodeAt(0);if(92!==b)return b;var a=e.charAt(1);return(b=w[a])?b:"0"<=a&&"7">=a?parseInt(e.substring(1),8):"u"===a||"x"===a?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=
	[];var a="^"===b[0],c=["["];a&&c.push("^");for(var a=a?1:0,g=b.length;a<g;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),k;a+2<g&&"-"===b[a+1]?(k=d(b[a+2]),a+=2):k=h;e.push([h,k]);65>k||122<h||(65>k||90<h||e.push([Math.max(65,h)|32,Math.min(k,90)|32]),97>k||122<h||e.push([Math.max(97,h)&-33,Math.min(k,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];g=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=g[1]+1?g[1]=Math.max(g[1],h[1]):b.push(g=h);for(a=0;a<b.length;++a)h=b[a],
	c.push(f(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(f(h[1])));c.push("]");return c.join("")}function v(e){for(var a=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),c=a.length,d=[],g=0,h=0;g<c;++g){var k=a[g];"("===k?++h:"\\"===k.charAt(0)&&(k=+k.substring(1))&&(k<=h?d[k]=-1:a[g]=f(k))}for(g=1;g<d.length;++g)-1===d[g]&&(d[g]=++A);for(h=g=0;g<c;++g)k=a[g],"("===k?(++h,d[h]||(a[g]="(?:")):"\\"===
	k.charAt(0)&&(k=+k.substring(1))&&k<=h&&(a[g]="\\"+d[k]);for(g=0;g<c;++g)"^"===a[g]&&"^"!==a[g+1]&&(a[g]="");if(e.ignoreCase&&n)for(g=0;g<c;++g)k=a[g],e=k.charAt(0),2<=k.length&&"["===e?a[g]=b(k):"\\"!==e&&(a[g]=k.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var A=0,n=!1,l=!1,m=0,c=a.length;m<c;++m){var p=a[m];if(p.ignoreCase)l=!0;else if(/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!0;
	l=!1;break}}for(var w={b:8,t:9,n:10,v:11,f:12,r:13},r=[],m=0,c=a.length;m<c;++m){p=a[m];if(p.global||p.multiline)throw Error(""+p);r.push("(?:"+v(p)+")")}return new RegExp(r.join("|"),l?"gi":"g")}function U(a,d){function f(a){var c=a.nodeType;if(1==c){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)f(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)v[l]="\n",n[l<<1]=A++,n[l++<<1|1]=a}}else if(3==c||4==c)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g,
	" "),v[l]=c,n[l<<1]=A,A+=c.length,n[l++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,v=[],A=0,n=[],l=0;f(a);return{a:v.join("").replace(/\n$/,""),c:n}}function J(a,d,f,b,v){f&&(a={h:a,l:1,j:null,m:null,a:f,c:null,i:d,g:null},b(a),v.push.apply(v,a.g))}function V(a){for(var d=void 0,f=a.firstChild;f;f=f.nextSibling)var b=f.nodeType,d=1===b?d?a:f:3===b?W.test(f.nodeValue)?a:d:d;return d===a?void 0:d}function G(a,d){function f(a){for(var l=a.i,m=a.h,c=[l,"pln"],p=0,w=a.a.match(v)||[],r={},e=0,t=w.length;e<
	t;++e){var z=w[e],q=r[z],g=void 0,h;if("string"===typeof q)h=!1;else{var k=b[z.charAt(0)];if(k)g=z.match(k[1]),q=k[0];else{for(h=0;h<A;++h)if(k=d[h],g=z.match(k[1])){q=k[0];break}g||(q="pln")}!(h=5<=q.length&&"lang-"===q.substring(0,5))||g&&"string"===typeof g[1]||(h=!1,q="src");h||(r[z]=q)}k=p;p+=z.length;if(h){h=g[1];var B=z.indexOf(h),D=B+h.length;g[2]&&(D=z.length-g[2].length,B=D-h.length);q=q.substring(5);J(m,l+k,z.substring(0,B),f,c);J(m,l+k+B,h,K(q,h),c);J(m,l+k+D,z.substring(D),f,c)}else c.push(l+
	k,q)}a.g=c}var b={},v;(function(){for(var f=a.concat(d),l=[],m={},c=0,p=f.length;c<p;++c){var w=f[c],r=w[3];if(r)for(var e=r.length;0<=--e;)b[r.charAt(e)]=w;w=w[1];r=""+w;m.hasOwnProperty(r)||(l.push(w),m[r]=null)}l.push(/[\0-\uffff]/);v=T(l)})();var A=d.length;return f}function y(a){var d=[],f=[];a.tripleQuotedStrings?d.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
	null,"'\""]):a.multiLineStrings?d.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&f.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var b=a.hashComments;b&&(a.cStyleComments?(1<b?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
	null,"#"]),f.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(f.push(["com",/^\/\/[^\r\n]*/,null]),f.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(b=a.regexLiterals){var v=(b=1<b?"":"\n\r")?".":"[\\S\\s]";f.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+
	("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+v+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+v+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&f.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&f.push(["kwd",new RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),null]);d.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");f.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,
	null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(b),null]);return G(d,f)}function L(a,d,f){function b(a){var c=a.nodeType;if(1==c&&!A.test(a.className))if("br"===a.nodeName)v(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((3==c||4==c)&&f){var d=a.nodeValue,q=d.match(n);q&&(c=d.substring(0,q.index),a.nodeValue=c,(d=d.substring(q.index+q[0].length))&&
	a.parentNode.insertBefore(l.createTextNode(d),a.nextSibling),v(a),c||a.parentNode.removeChild(a))}}function v(a){function b(a,c){var d=c?a.cloneNode(!1):a,k=a.parentNode;if(k){var k=b(k,1),e=a.nextSibling;k.appendChild(d);for(var f=e;f;f=e)e=f.nextSibling,k.appendChild(f)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;a=b(a.nextSibling,0);for(var d;(d=a.parentNode)&&1===d.nodeType;)a=d;c.push(a)}for(var A=/(?:^|\s)nocode(?:\s|$)/,n=/\r\n?|\n/,l=a.ownerDocument,m=l.createElement("li");a.firstChild;)m.appendChild(a.firstChild);
	for(var c=[m],p=0;p<c.length;++p)b(c[p]);d===(d|0)&&c[0].setAttribute("value",d);var w=l.createElement("ol");w.className="linenums";d=Math.max(0,d-1|0)||0;for(var p=0,r=c.length;p<r;++p)m=c[p],m.className="L"+(p+d)%10,m.firstChild||m.appendChild(l.createTextNode("\u00a0")),w.appendChild(m);a.appendChild(w)}function t(a,d){for(var f=d.length;0<=--f;){var b=d[f];I.hasOwnProperty(b)?E.console&&console.warn("cannot override language handler %s",b):I[b]=a}}function K(a,d){a&&I.hasOwnProperty(a)||(a=/^\s*</.test(d)?
	"default-markup":"default-code");return I[a]}function M(a){var d=a.j;try{var f=U(a.h,a.l),b=f.a;a.a=b;a.c=f.c;a.i=0;K(d,b)(a);var v=/\bMSIE\s(\d+)/.exec(navigator.userAgent),v=v&&8>=+v[1],d=/\n/g,A=a.a,n=A.length,f=0,l=a.c,m=l.length,b=0,c=a.g,p=c.length,w=0;c[p]=n;var r,e;for(e=r=0;e<p;)c[e]!==c[e+2]?(c[r++]=c[e++],c[r++]=c[e++]):e+=2;p=r;for(e=r=0;e<p;){for(var t=c[e],z=c[e+1],q=e+2;q+2<=p&&c[q+1]===z;)q+=2;c[r++]=t;c[r++]=z;e=q}c.length=r;var g=a.h;a="";g&&(a=g.style.display,g.style.display="none");
	try{for(;b<m;){var h=l[b+2]||n,k=c[w+2]||n,q=Math.min(h,k),B=l[b+1],D;if(1!==B.nodeType&&(D=A.substring(f,q))){v&&(D=D.replace(d,"\r"));B.nodeValue=D;var N=B.ownerDocument,u=N.createElement("span");u.className=c[w+1];var y=B.parentNode;y.replaceChild(u,B);u.appendChild(B);f<h&&(l[b+1]=B=N.createTextNode(A.substring(q,h)),y.insertBefore(B,u.nextSibling))}f=q;f>=h&&(b+=2);f>=k&&(w+=2)}}finally{g&&(g.style.display=a)}}catch(x){E.console&&console.log(x&&x.stack||x)}}var E=window,C=["break,continue,do,else,for,if,return,while"],
	F=[[C,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],H=[F,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
	O=[F,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],P=[F,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],F=[F,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],
	Q=[C,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],R=[C,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],C=[C,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],S=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
	W=/\S/,X=y({keywords:[H,P,O,F,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",Q,R,C],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),I={};t(X,["default-code"]);t(G([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
	/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));t(G([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
	["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);t(G([],[["atv",/^[\s\S]+/]]),["uq.val"]);t(y({keywords:H,hashComments:!0,cStyleComments:!0,types:S}),"c cc cpp cxx cyc m".split(" "));t(y({keywords:"null,true,false"}),["json"]);t(y({keywords:P,hashComments:!0,cStyleComments:!0,
	verbatimStrings:!0,types:S}),["cs"]);t(y({keywords:O,cStyleComments:!0}),["java"]);t(y({keywords:C,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);t(y({keywords:Q,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);t(y({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),
	["perl","pl","pm"]);t(y({keywords:R,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);t(y({keywords:F,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);t(y({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);t(G([],[["str",/^[\s\S]+/]]),["regex"]);
	var Y=E.PR={createSimpleLexer:G,registerLangHandler:t,sourceDecorator:y,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:E.prettyPrintOne=function(a,d,f){f=f||!1;d=d||null;var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;f&&L(b,f,!0);M({j:d,m:f,h:b,l:1,a:null,i:null,c:null,
	g:null});return b.innerHTML},prettyPrint:E.prettyPrint=function(a,d){function f(){for(var b=E.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;p<t.length&&c.now()<b;p++){for(var d=t[p],l=g,m=d;m=m.previousSibling;){var n=m.nodeType,u=(7===n||8===n)&&m.nodeValue;if(u?!/^\??prettify\b/.test(u):3!==n||/\S/.test(m.nodeValue))break;if(u){l={};u.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){l[b]=c});break}}m=d.className;if((l!==g||r.test(m))&&!e.test(m)){n=!1;for(u=d.parentNode;u;u=u.parentNode)if(q.test(u.tagName)&&
	u.className&&r.test(u.className)){n=!0;break}if(!n){d.className+=" prettyprinted";n=l.lang;if(!n){var n=m.match(w),C;!n&&(C=V(d))&&z.test(C.tagName)&&(n=C.className.match(w));n&&(n=n[1])}if(y.test(d.tagName))u=1;else var u=d.currentStyle,x=v.defaultView,u=(u=u?u.whiteSpace:x&&x.getComputedStyle?x.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===u.substring(0,3);x=l.linenums;(x="true"===x||+x)||(x=(x=m.match(/\blinenums\b(?::(\d+))?/))?x[1]&&x[1].length?+x[1]:!0:!1);x&&L(d,x,u);
	M({j:n,h:d,m:x,l:u,a:null,i:null,c:null,g:null})}}}p<t.length?E.setTimeout(f,250):"function"===typeof a&&a()}for(var b=d||document.body,v=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],t=[],n=0;n<b.length;++n)for(var l=0,m=b[n].length;l<m;++l)t.push(b[n][l]);var b=null,c=Date;c.now||(c={now:function(){return+new Date}});var p=0,w=/\blang(?:uage)?-([\w.]+)(?!\S)/,r=/\bprettyprint\b/,e=/\bprettyprinted\b/,y=/pre|xmp/i,z=/^code$/i,
	q=/^(?:pre|code|xmp)$/i,g={};f()}},H=E.define;"function"===typeof H&&H.amd&&H("google-code-prettify",[],function(){return Y})})();}()


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<pre class=\"prettyprint\"></pre>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(13);

	var AzPresentationElement = function (_HTMLElement) {
		_inherits(AzPresentationElement, _HTMLElement);

		function AzPresentationElement() {
			_classCallCheck(this, AzPresentationElement);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AzPresentationElement).call(this));

			_this.currentActive = 'start';
			return _this;
		}

		_createClass(AzPresentationElement, [{
			key: 'createdCallback',
			value: function createdCallback() {
				this.bindKeyEvents();
			}
		}, {
			key: 'bindKeyEvents',
			value: function bindKeyEvents() {
				var self = this;
				window.addEventListener('keypress', function (evt) {
					evt = evt || window.event;
					if (self.move(evt.keyCode)) {
						evt.preventDefault();
					}
				}, false);
			}
		}, {
			key: 'move',
			value: function move(code) {
				console.log("move:" + code);
				if (this.currentActive) {
					switch (code) {
						case 38:
							this.previousDetail();return true;
						case 40:
							this.nextDetail();return true;
						case 37:
							this.previousSlide();return true;
						case 39:
							this.nextSlide();return true;
						default:
							return false;
					};
				}
			}
		}, {
			key: 'showSlide',
			value: function showSlide(slideId) {
				console.log("showSlide:" + slideId);
				if (slideId) {
					document.getElementById(slideId).moveTo();
				}
			}
		}, {
			key: 'nextSlide',
			value: function nextSlide() {
				this.showSlide(this.currentActive.getAttribute("next"));
			}
		}, {
			key: 'previousSlide',
			value: function previousSlide() {
				this.showSlide(document.querySelector('[next=' + this.currentActive.id + ']').id);
			}
		}, {
			key: 'nextDetail',
			value: function nextDetail() {
				this.showSlide(this.currentActive.getAttribute("detail"));
			}
		}, {
			key: 'previousDetail',
			value: function previousDetail() {
				this.showSlide(document.querySelector('[detail=' + this.currentActive.id + ']').id);
			}
		}, {
			key: 'attachedCallback',
			value: function attachedCallback() {}
		}, {
			key: 'attributeChangedCallback',
			value: function attributeChangedCallback(attrName, oldVal, newVal) {}
		}]);

		return AzPresentationElement;
	}(HTMLElement);

	document.registerElement('az-presentation', AzPresentationElement);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./presentation.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./presentation.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\naz-presentation {\r\n\tposition: absolute;\r\n    display: block;\r\n\twidth : 100%;\r\n\theight : 100%;\r\n\ttop :50%;\r\n\tleft :50%;\r\n    transform: translate(50%, 50%);\r\n    transform-origin: top left 0;\r\n    transform-style: preserve-3d;\r\n\tperspective :1000px;\r\n\tperspective-origin: 50% 50%;\r\n    transition: transform 0.3s ease-in 0s;\r\n}\r\naz-slide {\r\n\tposition: absolute;\r\n    display: block;\r\n\ttransform-style: preserve-3d;\r\n\ttransform-origin: 50% 50% 50%;\r\n    width: 900px;\r\n    height: 700px;\r\n\toverflow: hidden;\r\n    padding: 20px 30px;\r\n\r\n    background-color: white;\r\n    border: 1px solid rgba(0, 0, 0, .3);\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .1);\r\n\r\n    color: rgb(102, 102, 102);\r\n    text-shadow: 0 2px 2px rgba(0, 0, 0, .1);\r\n\r\n    font-family: 'PT Serif', georgia, serif;\r\n    font-size: 30px;\r\n    line-height: 36px;\r\n    letter-spacing: -1px;\r\n\t\r\n\tmargin: 0;\r\n    opacity: 0.3;\r\n\tz-index: 10;\r\n\t\t  \r\n    -webkit-transition: opacity 1s;\r\n    -moz-transition:    opacity 1s;\r\n    -ms-transition:     opacity 1s;\r\n    -o-transition:      opacity 1s;\r\n    transition:         opacity 1s;\r\n}\r\naz-slide.active{\r\n\topacity: 1;\r\n\tz-index: 100;\r\n}\r\n\r\naz-slide > az-format-code{\r\n\tfont-family: Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;\r\n\tfont-weight:bold;\r\n\tfont-size: 16px;\r\n    line-height: 20px;\r\n}", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _transformUtils = __webpack_require__(14);

	var _transformUtils2 = _interopRequireDefault(_transformUtils);

	var _cssUtils = __webpack_require__(15);

	var _cssUtils2 = _interopRequireDefault(_cssUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AzSlideElement = function (_HTMLElement) {
		_inherits(AzSlideElement, _HTMLElement);

		function AzSlideElement() {
			_classCallCheck(this, AzSlideElement);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AzSlideElement).apply(this, arguments));
		}

		_createClass(AzSlideElement, [{
			key: "createdCallback",
			value: function createdCallback() {}
		}, {
			key: "attachedCallback",
			value: function attachedCallback() {
				this.render();
			}
		}, {
			key: "attributeChangedCallback",
			value: function attributeChangedCallback(attrName, oldVal, newVal) {}
		}, {
			key: "render",
			value: function render() {
				var rx = this.getAttribute("rx");
				var ry = this.getAttribute("ry");
				var rz = this.getAttribute("rz");
				var tx = this.getAttribute("tx");
				var ty = this.getAttribute("ty");
				var tz = this.getAttribute("tz");
				var scale = this.getAttribute("scale");

				this.transformations = new _transformUtils2.default().translate(tx, ty, tz).rotate(rx, ry, rz).scale(scale).transformations();
				if (this.hasAttribute("start")) {
					this.moveTo();
				}
				//console.log("Transformation : " + this.transformations.transform);
				_cssUtils2.default.applyTransform(this, "translate(-50%,-50%) " + this.transformations.transform);
			}
		}, {
			key: "moveTo",
			value: function moveTo() {
				this.parentNode.currentActive = this;
				_cssUtils2.default.removeAllClass("active");
				_cssUtils2.default.addClass(this, "active");
				_cssUtils2.default.applyTransform(this.parentNode, this.transformations.reverseTransform);
			}
		}]);

		return AzSlideElement;
	}(HTMLElement);

	document.registerElement('az-slide', AzSlideElement);

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TransformBuilder = function () {
		function TransformBuilder() {
			_classCallCheck(this, TransformBuilder);

			this.transform = '';
			this.reverseTransform = '';
		}

		_createClass(TransformBuilder, [{
			key: 'rotate',
			value: function rotate(x, y, z) {
				if (x) {
					this.transform += ' rotateX(' + x + 'deg)';
					this.reverseTransform = 'rotateX(' + -1 * x + 'deg) ' + this.reverseTransform;
				}
				if (y) {
					this.transform += ' rotateY(' + y + 'deg)';
					this.reverseTransform = 'rotateY(' + -1 * y + 'deg) ' + this.reverseTransform;
				}
				if (z) {
					this.transform += ' rotateZ(' + z + 'deg)';
					this.reverseTransform = 'rotateZ(' + -1 * z + 'deg) ' + this.reverseTransform;
				}
				return this;
			}
		}, {
			key: 'translate',
			value: function translate(x, y, z) {
				//if(x && y && z){
				this.transform += 'translate3d(' + (x ? x : '0') + 'px, ' + (y ? y : '0') + 'px, ' + (z ? z : '0') + 'px)';
				this.reverseTransform = 'translate3d(' + -1 * x + 'px, ' + -1 * y + 'px, ' + -1 * z + 'px) ' + this.reverseTransform;
				//}
				return this;
			}
		}, {
			key: 'scale',
			value: function scale(_scale) {
				if (_scale) {
					this.transform += ' scale(' + _scale + ' ) ';
					this.reverseTransform = 'scale(' + 1 / _scale + ') ' + this.reverseTransform;
				}
				//this.reverseTransform = `scale(${-1*scale}) `+ this.reverseTransform;
				return this;
			}
		}, {
			key: 'perspective',
			value: function perspective(p) {
				this.transform += ' perspective( ' + p + 'px) ';
				return this;
			}
		}, {
			key: 'transformations',
			value: function transformations() {
				return {
					"transform": this.transform,
					"reverseTransform": this.reverseTransform
				};
			}
		}]);

		return TransformBuilder;
	}();

	exports.default = TransformBuilder;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CssUtils = function () {
		function CssUtils() {
			_classCallCheck(this, CssUtils);
		}

		_createClass(CssUtils, null, [{
			key: "applyTransform",
			value: function applyTransform(element, transform) {
				CssUtils.css(element, {
					position: "absolute",
					transform: transform,
					transformStyle: "preserve-3d",
					transition: "transform 0.4s ease-in",
					transformOrigin: "50% 50% 50%"
				});
			}
		}, {
			key: "css",
			value: function css(elem, props) {
				var key;
				for (key in props) {
					if (props.hasOwnProperty(key)) {
						var cKey = key[0].toUpperCase() + key.substr(1);
						elem.style["webkit" + cKey] = props[key];
						elem.style["moz" + cKey] = props[key];
						elem.style["ms" + cKey] = props[key];
						elem.style["o" + cKey] = props[key];
						elem.style[key] = props[key];
					}
				}
				return elem;
			}
		}, {
			key: "addClass",
			value: function addClass(elem, className) {
				elem.classList ? elem.classList.add(className) : elem.className += ' ' + className;
			}
		}, {
			key: "removeClass",
			value: function removeClass(elem, className) {
				elem.className = elem.className.replace(className, '');
			}
		}, {
			key: "removeAllClass",
			value: function removeAllClass(className) {
				var nodes = document.getElementsByClassName(className);
				for (var i = 0; i < nodes.length; i++) {
					CssUtils.removeClass(nodes[i], className);
				}
			}
		}]);

		return CssUtils;
	}();

	exports.default = CssUtils;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TextUtils = function () {
		function TextUtils() {
			_classCallCheck(this, TextUtils);
		}

		_createClass(TextUtils, null, [{
			key: "replaceSpaces",
			value: function replaceSpaces(str) {
				var str1 = String(str);
				return str1.replace(/\n/g, "<br/>");
			}
		}]);

		return TextUtils;
	}();

	exports.default = TextUtils;

/***/ },
/* 17 */
/***/ function(module, exports) {

	PR['registerLangHandler'](
	    PR['createSimpleLexer'](
	        [
	         // Whitespace
	         [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0']
	        ],
	        [
	         
	         [PR['PR_COMMENT'],     /^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],
			 [PR['PR_STRING'], /^\w+\.\w+(\.\w+)?/],
			 [PR['PR_KEYWORD'], /^[-\w]+/],
			 [PR['PR_TYPE'],        /^[│─\|└]/],
	         [PR['PR_TYPE'],        /^\.\.\./]
	        ]),
	    ['tree']);

/***/ }
/******/ ]);