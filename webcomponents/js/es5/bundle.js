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
	__webpack_require__(12);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(9);

	var _textUtils = __webpack_require__(11);

	var _textUtils2 = _interopRequireDefault(_textUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var template = '<div class="code-title"></div><pre class="prettyprint"></pre>';

	var FormatCodeElement = function (_HTMLElement) {
		_inherits(FormatCodeElement, _HTMLElement);

		function FormatCodeElement() {
			_classCallCheck(this, FormatCodeElement);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FormatCodeElement).apply(this, arguments));
		}

		_createClass(FormatCodeElement, [{
			key: 'createdCallback',
			value: function createdCallback() {}
		}, {
			key: 'attachedCallback',
			value: function attachedCallback() {
				this.render();
			}
		}, {
			key: 'attributeChangedCallback',
			value: function attributeChangedCallback(attrName, oldVal, newVal) {
				this.render();
			}
		}, {
			key: 'render',
			value: function render() {
				var coloredHTML = PR.prettyPrintOne((0, _textUtils2.default)(this.innerHTML.trim()), this.getAttribute("lang"));
				this.innerHTML = template;
				this.lastChild.innerHTML = coloredHTML;
				this.appendTitle(this.getAttribute("file-name"));
			}
		}, {
			key: 'appendTitle',
			value: function appendTitle(text) {
				if (text) {
					this.firstChild.appendChild(document.createTextNode(text));
				} else {
					this.firstChild.style.display = "none";
				}
			}
		}]);

		return FormatCodeElement;
	}(HTMLElement);

	document.registerElement('az-format-code', FormatCodeElement);

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright (C) 2006 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * @fileoverview
	 * some functions for browser-side pretty printing of code contained in html.
	 *
	 * <p>
	 * For a fairly comprehensive set of languages see the
	 * <a href="https://github.com/google/code-prettify#for-which-languages-does-it-work">README</a>
	 * file that came with this source.  At a minimum, the lexer should work on a
	 * number of languages including C and friends, Java, Python, Bash, SQL, HTML,
	 * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk
	 * and a subset of Perl, but, because of commenting conventions, doesn't work on
	 * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.
	 * <p>
	 * Usage: <ol>
	 * <li> include this source file in an html page via
	 *   {@code <script type="text/javascript" src="/path/to/prettify.js"></script>}
	 * <li> define style rules.  See the example page for examples.
	 * <li> mark the {@code <pre>} and {@code <code>} tags in your source with
	 *    {@code class=prettyprint.}
	 *    You can also use the (html deprecated) {@code <xmp>} tag, but the pretty
	 *    printer needs to do more substantial DOM manipulations to support that, so
	 *    some css styles may not be preserved.
	 * </ol>
	 * That's it.  I wanted to keep the API as simple as possible, so there's no
	 * need to specify which language the code is in, but if you wish, you can add
	 * another class to the {@code <pre>} or {@code <code>} element to specify the
	 * language, as in {@code <pre class="prettyprint lang-java">}.  Any class that
	 * starts with "lang-" followed by a file extension, specifies the file type.
	 * See the "lang-*.js" files in this directory for code that implements
	 * per-language file handlers.
	 * <p>
	 * Change log:<br>
	 * cbeust, 2006/08/22
	 * <blockquote>
	 *   Java annotations (start with "@") are now captured as literals ("lit")
	 * </blockquote>
	 * @requires console
	 */

	// JSLint declarations
	/*global console, document, navigator, setTimeout, window, define */


	/**
	 * {@type !{
	 *   'createSimpleLexer': function (Array, Array): (function (JobT)),
	 *   'registerLangHandler': function (function (JobT), Array.<string>),
	 *   'PR_ATTRIB_NAME': string,
	 *   'PR_ATTRIB_NAME': string,
	 *   'PR_ATTRIB_VALUE': string,
	 *   'PR_COMMENT': string,
	 *   'PR_DECLARATION': string,
	 *   'PR_KEYWORD': string,
	 *   'PR_LITERAL': string,
	 *   'PR_NOCODE': string,
	 *   'PR_PLAIN': string,
	 *   'PR_PUNCTUATION': string,
	 *   'PR_SOURCE': string,
	 *   'PR_STRING': string,
	 *   'PR_TAG': string,
	 *   'PR_TYPE': string,
	 *   'prettyPrintOne': function (string, string, number|boolean),
	 *   'prettyPrint': function (?function, ?(HTMLElement|HTMLDocument))
	 * }}
	 * @const
	 */
	/**
	* @typedef {!Array.<number|string>}
	* Alternating indices and the decorations that should be inserted there.
	* The indices are monotonically increasing.
	*/
	var DecorationsT;

	/**
	* @typedef {!{
	*   sourceNode: !Element,
	*   pre: !(number|boolean),
	*   langExtension: ?string,
	*   numberLines: ?(number|boolean),
	*   sourceCode: ?string,
	*   spans: ?(Array.<number|Node>),
	*   basePos: ?number,
	*   decorations: ?DecorationsT
	* }}
	* <dl>
	*  <dt>sourceNode<dd>the element containing the source
	*  <dt>sourceCode<dd>source as plain text
	*  <dt>pre<dd>truthy if white-space in text nodes
	*     should be considered significant.
	*  <dt>spans<dd> alternating span start indices into source
	*     and the text node or element (e.g. {@code <BR>}) corresponding to that
	*     span.
	*  <dt>decorations<dd>an array of style classes preceded
	*     by the position at which they start in job.sourceCode in order
	*  <dt>basePos<dd>integer position of this.sourceCode in the larger chunk of
	*     source.
	* </dl>
	*/
	var JobT;

	/**
	* @typedef {!{
	*   sourceCode: string,
	*   spans: !(Array.<number|Node>)
	* }}
	* <dl>
	*  <dt>sourceCode<dd>source as plain text
	*  <dt>spans<dd> alternating span start indices into source
	*     and the text node or element (e.g. {@code <BR>}) corresponding to that
	*     span.
	* </dl>
	*/
	var SourceSpansT;

	/** @define {boolean} */
	var IN_GLOBAL_SCOPE = false;

	var PR;

	/**
	 * Split {@code prettyPrint} into multiple timeouts so as not to interfere with
	 * UI events.
	 * If set to {@code false}, {@code prettyPrint()} is synchronous.
	 */
	window['PR_SHOULD_USE_CONTINUATION'] = true;

	/**
	 * Pretty print a chunk of code.
	 * @param {string} sourceCodeHtml The HTML to pretty print.
	 * @param {string} opt_langExtension The language name to use.
	 *     Typically, a filename extension like 'cpp' or 'java'.
	 * @param {number|boolean} opt_numberLines True to number lines,
	 *     or the 1-indexed number of the first line in sourceCodeHtml.
	 * @return {string} code as html, but prettier
	 */
	var prettyPrintOne;
	/**
	 * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
	 * {@code class=prettyprint} and prettify them.
	 *
	 * @param {Function} opt_whenDone called when prettifying is done.
	 * @param {HTMLElement|HTMLDocument} opt_root an element or document
	 *   containing all the elements to pretty print.
	 *   Defaults to {@code document.body}.
	 */
	var prettyPrint;


	(function () {
	  var win = window;
	  // Keyword lists for various languages.
	  // We use things that coerce to strings to make them compact when minified
	  // and to defeat aggressive optimizers that fold large string constants.
	  var FLOW_CONTROL_KEYWORDS = ["break,continue,do,else,for,if,return,while"];
	  var C_KEYWORDS = [FLOW_CONTROL_KEYWORDS,"auto,case,char,const,default," +
	      "double,enum,extern,float,goto,inline,int,long,register,short,signed," +
	      "sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];
	  var COMMON_KEYWORDS = [C_KEYWORDS,"catch,class,delete,false,import," +
	      "new,operator,private,protected,public,this,throw,true,try,typeof"];
	  var CPP_KEYWORDS = [COMMON_KEYWORDS,"alignof,align_union,asm,axiom,bool," +
	      "concept,concept_map,const_cast,constexpr,decltype,delegate," +
	      "dynamic_cast,explicit,export,friend,generic,late_check," +
	      "mutable,namespace,nullptr,property,reinterpret_cast,static_assert," +
	      "static_cast,template,typeid,typename,using,virtual,where"];
	  var JAVA_KEYWORDS = [COMMON_KEYWORDS,
	      "abstract,assert,boolean,byte,extends,finally,final,implements,import," +
	      "instanceof,interface,null,native,package,strictfp,super,synchronized," +
	      "throws,transient"];
	  var CSHARP_KEYWORDS = [COMMON_KEYWORDS,
	      "abstract,as,base,bool,by,byte,checked,decimal,delegate,descending," +
	      "dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface," +
	      "internal,into,is,let,lock,null,object,out,override,orderby,params," +
	      "partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong," +
	      "unchecked,unsafe,ushort,var,virtual,where"];
	  var COFFEE_KEYWORDS = "all,and,by,catch,class,else,extends,false,finally," +
	      "for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then," +
	      "throw,true,try,unless,until,when,while,yes";
	  var JSCRIPT_KEYWORDS = [COMMON_KEYWORDS,
	      "abstract,async,await,console,constructor,debugger,enum,eval,export,filter;forEach,function," +
	      "get,implements,instanceof,interface,let,map,null,set,sort,undefined,var,with," +
	      "yield,Infinity,NaN"];
	  var PERL_KEYWORDS = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for," +
	      "goto,if,import,last,local,my,next,no,our,print,package,redo,require," +
	      "sub,undef,unless,until,use,wantarray,while,BEGIN,END";
	  var PYTHON_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "and,as,assert,class,def,del," +
	      "elif,except,exec,finally,from,global,import,in,is,lambda," +
	      "nonlocal,not,or,pass,print,raise,try,with,yield," +
	      "False,True,None"];
	  var RUBY_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "alias,and,begin,case,class," +
	      "def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo," +
	      "rescue,retry,self,super,then,true,undef,unless,until,when,yield," +
	      "BEGIN,END"];
	  var SH_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "case,done,elif,esac,eval,fi," +
	      "function,in,local,set,then,until"];
	  var ALL_KEYWORDS = [
	      CPP_KEYWORDS, CSHARP_KEYWORDS, JAVA_KEYWORDS, JSCRIPT_KEYWORDS,
	      PERL_KEYWORDS, PYTHON_KEYWORDS, RUBY_KEYWORDS, SH_KEYWORDS];
	  var C_TYPES = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;

	  // token style names.  correspond to css classes
	  /**
	   * token style for a string literal
	   * @const
	   */
	  var PR_STRING = 'str';
	  /**
	   * token style for a keyword
	   * @const
	   */
	  var PR_KEYWORD = 'kwd';
	  /**
	   * token style for a comment
	   * @const
	   */
	  var PR_COMMENT = 'com';
	  /**
	   * token style for a type
	   * @const
	   */
	  var PR_TYPE = 'typ';
	  /**
	   * token style for a literal value.  e.g. 1, null, true.
	   * @const
	   */
	  var PR_LITERAL = 'lit';
	  /**
	   * token style for a punctuation string.
	   * @const
	   */
	  var PR_PUNCTUATION = 'pun';
	  /**
	   * token style for plain text.
	   * @const
	   */
	  var PR_PLAIN = 'pln';

	  /**
	   * token style for an sgml tag.
	   * @const
	   */
	  var PR_TAG = 'tag';
	  /**
	   * token style for a markup declaration such as a DOCTYPE.
	   * @const
	   */
	  var PR_DECLARATION = 'dec';
	  /**
	   * token style for embedded source.
	   * @const
	   */
	  var PR_SOURCE = 'src';
	  /**
	   * token style for an sgml attribute name.
	   * @const
	   */
	  var PR_ATTRIB_NAME = 'atn';
	  /**
	   * token style for an sgml attribute value.
	   * @const
	   */
	  var PR_ATTRIB_VALUE = 'atv';

	  /**
	   * A class that indicates a section of markup that is not code, e.g. to allow
	   * embedding of line numbers within code listings.
	   * @const
	   */
	  var PR_NOCODE = 'nocode';

	  
	  
	  /**
	   * A set of tokens that can precede a regular expression literal in
	   * javascript
	   * http://web.archive.org/web/20070717142515/http://www.mozilla.org/js/language/js20/rationale/syntax.html
	   * has the full list, but I've removed ones that might be problematic when
	   * seen in languages that don't support regular expression literals.
	   *
	   * <p>Specifically, I've removed any keywords that can't precede a regexp
	   * literal in a syntactically legal javascript program, and I've removed the
	   * "in" keyword since it's not a keyword in many languages, and might be used
	   * as a count of inches.
	   *
	   * <p>The link above does not accurately describe EcmaScript rules since
	   * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works
	   * very well in practice.
	   *
	   * @private
	   * @const
	   */
	  var REGEXP_PRECEDER_PATTERN = '(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*';
	  
	  // CAVEAT: this does not properly handle the case where a regular
	  // expression immediately follows another since a regular expression may
	  // have flags for case-sensitivity and the like.  Having regexp tokens
	  // adjacent is not valid in any language I'm aware of, so I'm punting.
	  // TODO: maybe style special characters inside a regexp as punctuation.

	  /**
	   * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally
	   * matches the union of the sets of strings matched by the input RegExp.
	   * Since it matches globally, if the input strings have a start-of-input
	   * anchor (/^.../), it is ignored for the purposes of unioning.
	   * @param {Array.<RegExp>} regexs non multiline, non-global regexs.
	   * @return {RegExp} a global regex.
	   */
	  function combinePrefixPatterns(regexs) {
	    var capturedGroupIndex = 0;
	  
	    var needToFoldCase = false;
	    var ignoreCase = false;
	    for (var i = 0, n = regexs.length; i < n; ++i) {
	      var regex = regexs[i];
	      if (regex.ignoreCase) {
	        ignoreCase = true;
	      } else if (/[a-z]/i.test(regex.source.replace(
	                     /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
	        needToFoldCase = true;
	        ignoreCase = false;
	        break;
	      }
	    }
	  
	    var escapeCharToCodeUnit = {
	      'b': 8,
	      't': 9,
	      'n': 0xa,
	      'v': 0xb,
	      'f': 0xc,
	      'r': 0xd
	    };
	  
	    function decodeEscape(charsetPart) {
	      var cc0 = charsetPart.charCodeAt(0);
	      if (cc0 !== 92 /* \\ */) {
	        return cc0;
	      }
	      var c1 = charsetPart.charAt(1);
	      cc0 = escapeCharToCodeUnit[c1];
	      if (cc0) {
	        return cc0;
	      } else if ('0' <= c1 && c1 <= '7') {
	        return parseInt(charsetPart.substring(1), 8);
	      } else if (c1 === 'u' || c1 === 'x') {
	        return parseInt(charsetPart.substring(2), 16);
	      } else {
	        return charsetPart.charCodeAt(1);
	      }
	    }
	  
	    function encodeEscape(charCode) {
	      if (charCode < 0x20) {
	        return (charCode < 0x10 ? '\\x0' : '\\x') + charCode.toString(16);
	      }
	      var ch = String.fromCharCode(charCode);
	      return (ch === '\\' || ch === '-' || ch === ']' || ch === '^')
	          ? "\\" + ch : ch;
	    }
	  
	    function caseFoldCharset(charSet) {
	      var charsetParts = charSet.substring(1, charSet.length - 1).match(
	          new RegExp(
	              '\\\\u[0-9A-Fa-f]{4}'
	              + '|\\\\x[0-9A-Fa-f]{2}'
	              + '|\\\\[0-3][0-7]{0,2}'
	              + '|\\\\[0-7]{1,2}'
	              + '|\\\\[\\s\\S]'
	              + '|-'
	              + '|[^-\\\\]',
	              'g'));
	      var ranges = [];
	      var inverse = charsetParts[0] === '^';
	  
	      var out = ['['];
	      if (inverse) { out.push('^'); }
	  
	      for (var i = inverse ? 1 : 0, n = charsetParts.length; i < n; ++i) {
	        var p = charsetParts[i];
	        if (/\\[bdsw]/i.test(p)) {  // Don't muck with named groups.
	          out.push(p);
	        } else {
	          var start = decodeEscape(p);
	          var end;
	          if (i + 2 < n && '-' === charsetParts[i + 1]) {
	            end = decodeEscape(charsetParts[i + 2]);
	            i += 2;
	          } else {
	            end = start;
	          }
	          ranges.push([start, end]);
	          // If the range might intersect letters, then expand it.
	          // This case handling is too simplistic.
	          // It does not deal with non-latin case folding.
	          // It works for latin source code identifiers though.
	          if (!(end < 65 || start > 122)) {
	            if (!(end < 65 || start > 90)) {
	              ranges.push([Math.max(65, start) | 32, Math.min(end, 90) | 32]);
	            }
	            if (!(end < 97 || start > 122)) {
	              ranges.push([Math.max(97, start) & ~32, Math.min(end, 122) & ~32]);
	            }
	          }
	        }
	      }
	  
	      // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]
	      // -> [[1, 12], [14, 14], [16, 17]]
	      ranges.sort(function (a, b) { return (a[0] - b[0]) || (b[1]  - a[1]); });
	      var consolidatedRanges = [];
	      var lastRange = [];
	      for (var i = 0; i < ranges.length; ++i) {
	        var range = ranges[i];
	        if (range[0] <= lastRange[1] + 1) {
	          lastRange[1] = Math.max(lastRange[1], range[1]);
	        } else {
	          consolidatedRanges.push(lastRange = range);
	        }
	      }
	  
	      for (var i = 0; i < consolidatedRanges.length; ++i) {
	        var range = consolidatedRanges[i];
	        out.push(encodeEscape(range[0]));
	        if (range[1] > range[0]) {
	          if (range[1] + 1 > range[0]) { out.push('-'); }
	          out.push(encodeEscape(range[1]));
	        }
	      }
	      out.push(']');
	      return out.join('');
	    }
	  
	    function allowAnywhereFoldCaseAndRenumberGroups(regex) {
	      // Split into character sets, escape sequences, punctuation strings
	      // like ('(', '(?:', ')', '^'), and runs of characters that do not
	      // include any of the above.
	      var parts = regex.source.match(
	          new RegExp(
	              '(?:'
	              + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]'  // a character set
	              + '|\\\\u[A-Fa-f0-9]{4}'  // a unicode escape
	              + '|\\\\x[A-Fa-f0-9]{2}'  // a hex escape
	              + '|\\\\[0-9]+'  // a back-reference or octal escape
	              + '|\\\\[^ux0-9]'  // other escape sequence
	              + '|\\(\\?[:!=]'  // start of a non-capturing group
	              + '|[\\(\\)\\^]'  // start/end of a group, or line start
	              + '|[^\\x5B\\x5C\\(\\)\\^]+'  // run of other characters
	              + ')',
	              'g'));
	      var n = parts.length;
	  
	      // Maps captured group numbers to the number they will occupy in
	      // the output or to -1 if that has not been determined, or to
	      // undefined if they need not be capturing in the output.
	      var capturedGroups = [];
	  
	      // Walk over and identify back references to build the capturedGroups
	      // mapping.
	      for (var i = 0, groupIndex = 0; i < n; ++i) {
	        var p = parts[i];
	        if (p === '(') {
	          // groups are 1-indexed, so max group index is count of '('
	          ++groupIndex;
	        } else if ('\\' === p.charAt(0)) {
	          var decimalValue = +p.substring(1);
	          if (decimalValue) {
	            if (decimalValue <= groupIndex) {
	              capturedGroups[decimalValue] = -1;
	            } else {
	              // Replace with an unambiguous escape sequence so that
	              // an octal escape sequence does not turn into a backreference
	              // to a capturing group from an earlier regex.
	              parts[i] = encodeEscape(decimalValue);
	            }
	          }
	        }
	      }
	  
	      // Renumber groups and reduce capturing groups to non-capturing groups
	      // where possible.
	      for (var i = 1; i < capturedGroups.length; ++i) {
	        if (-1 === capturedGroups[i]) {
	          capturedGroups[i] = ++capturedGroupIndex;
	        }
	      }
	      for (var i = 0, groupIndex = 0; i < n; ++i) {
	        var p = parts[i];
	        if (p === '(') {
	          ++groupIndex;
	          if (!capturedGroups[groupIndex]) {
	            parts[i] = '(?:';
	          }
	        } else if ('\\' === p.charAt(0)) {
	          var decimalValue = +p.substring(1);
	          if (decimalValue && decimalValue <= groupIndex) {
	            parts[i] = '\\' + capturedGroups[decimalValue];
	          }
	        }
	      }
	  
	      // Remove any prefix anchors so that the output will match anywhere.
	      // ^^ really does mean an anchored match though.
	      for (var i = 0; i < n; ++i) {
	        if ('^' === parts[i] && '^' !== parts[i + 1]) { parts[i] = ''; }
	      }
	  
	      // Expand letters to groups to handle mixing of case-sensitive and
	      // case-insensitive patterns if necessary.
	      if (regex.ignoreCase && needToFoldCase) {
	        for (var i = 0; i < n; ++i) {
	          var p = parts[i];
	          var ch0 = p.charAt(0);
	          if (p.length >= 2 && ch0 === '[') {
	            parts[i] = caseFoldCharset(p);
	          } else if (ch0 !== '\\') {
	            // TODO: handle letters in numeric escapes.
	            parts[i] = p.replace(
	                /[a-zA-Z]/g,
	                function (ch) {
	                  var cc = ch.charCodeAt(0);
	                  return '[' + String.fromCharCode(cc & ~32, cc | 32) + ']';
	                });
	          }
	        }
	      }
	  
	      return parts.join('');
	    }
	  
	    var rewritten = [];
	    for (var i = 0, n = regexs.length; i < n; ++i) {
	      var regex = regexs[i];
	      if (regex.global || regex.multiline) { throw new Error('' + regex); }
	      rewritten.push(
	          '(?:' + allowAnywhereFoldCaseAndRenumberGroups(regex) + ')');
	    }
	  
	    return new RegExp(rewritten.join('|'), ignoreCase ? 'gi' : 'g');
	  }

	  /**
	   * Split markup into a string of source code and an array mapping ranges in
	   * that string to the text nodes in which they appear.
	   *
	   * <p>
	   * The HTML DOM structure:</p>
	   * <pre>
	   * (Element   "p"
	   *   (Element "b"
	   *     (Text  "print "))       ; #1
	   *   (Text    "'Hello '")      ; #2
	   *   (Element "br")            ; #3
	   *   (Text    "  + 'World';")) ; #4
	   * </pre>
	   * <p>
	   * corresponds to the HTML
	   * {@code <p><b>print </b>'Hello '<br>  + 'World';</p>}.</p>
	   *
	   * <p>
	   * It will produce the output:</p>
	   * <pre>
	   * {
	   *   sourceCode: "print 'Hello '\n  + 'World';",
	   *   //                     1          2
	   *   //           012345678901234 5678901234567
	   *   spans: [0, #1, 6, #2, 14, #3, 15, #4]
	   * }
	   * </pre>
	   * <p>
	   * where #1 is a reference to the {@code "print "} text node above, and so
	   * on for the other text nodes.
	   * </p>
	   *
	   * <p>
	   * The {@code} spans array is an array of pairs.  Even elements are the start
	   * indices of substrings, and odd elements are the text nodes (or BR elements)
	   * that contain the text for those substrings.
	   * Substrings continue until the next index or the end of the source.
	   * </p>
	   *
	   * @param {Node} node an HTML DOM subtree containing source-code.
	   * @param {boolean|number} isPreformatted truthy if white-space in
	   *    text nodes should be considered significant.
	   * @return {SourceSpansT} source code and the nodes in which they occur.
	   */
	  function extractSourceSpans(node, isPreformatted) {
	    var nocode = /(?:^|\s)nocode(?:\s|$)/;
	  
	    var chunks = [];
	    var length = 0;
	    var spans = [];
	    var k = 0;
	  
	    function walk(node) {
	      var type = node.nodeType;
	      if (type == 1) {  // Element
	        if (nocode.test(node.className)) { return; }
	        for (var child = node.firstChild; child; child = child.nextSibling) {
	          walk(child);
	        }
	        var nodeName = node.nodeName.toLowerCase();
	        if ('br' === nodeName || 'li' === nodeName) {
	          chunks[k] = '\n';
	          spans[k << 1] = length++;
	          spans[(k++ << 1) | 1] = node;
	        }
	      } else if (type == 3 || type == 4) {  // Text
	        var text = node.nodeValue;
	        if (text.length) {
	          if (!isPreformatted) {
	            text = text.replace(/[ \t\r\n]+/g, ' ');
	          } else {
	            text = text.replace(/\r\n?/g, '\n');  // Normalize newlines.
	          }
	          // TODO: handle tabs here?
	          chunks[k] = text;
	          spans[k << 1] = length;
	          length += text.length;
	          spans[(k++ << 1) | 1] = node;
	        }
	      }
	    }
	  
	    walk(node);
	  
	    return {
	      sourceCode: chunks.join('').replace(/\n$/, ''),
	      spans: spans
	    };
	  }

	  /**
	   * Apply the given language handler to sourceCode and add the resulting
	   * decorations to out.
	   * @param {!Element} sourceNode
	   * @param {number} basePos the index of sourceCode within the chunk of source
	   *    whose decorations are already present on out.
	   * @param {string} sourceCode
	   * @param {function(JobT)} langHandler
	   * @param {DecorationsT} out
	   */
	  function appendDecorations(
	      sourceNode, basePos, sourceCode, langHandler, out) {
	    if (!sourceCode) { return; }
	    /** @type {JobT} */
	    var job = {
	      sourceNode: sourceNode,
	      pre: 1,
	      langExtension: null,
	      numberLines: null,
	      sourceCode: sourceCode,
	      spans: null,
	      basePos: basePos,
	      decorations: null
	    };
	    langHandler(job);
	    out.push.apply(out, job.decorations);
	  }

	  var notWs = /\S/;

	  /**
	   * Given an element, if it contains only one child element and any text nodes
	   * it contains contain only space characters, return the sole child element.
	   * Otherwise returns undefined.
	   * <p>
	   * This is meant to return the CODE element in {@code <pre><code ...>} when
	   * there is a single child element that contains all the non-space textual
	   * content, but not to return anything where there are multiple child elements
	   * as in {@code <pre><code>...</code><code>...</code></pre>} or when there
	   * is textual content.
	   */
	  function childContentWrapper(element) {
	    var wrapper = undefined;
	    for (var c = element.firstChild; c; c = c.nextSibling) {
	      var type = c.nodeType;
	      wrapper = (type === 1)  // Element Node
	          ? (wrapper ? element : c)
	          : (type === 3)  // Text Node
	          ? (notWs.test(c.nodeValue) ? element : wrapper)
	          : wrapper;
	    }
	    return wrapper === element ? undefined : wrapper;
	  }

	  /** Given triples of [style, pattern, context] returns a lexing function,
	    * The lexing function interprets the patterns to find token boundaries and
	    * returns a decoration list of the form
	    * [index_0, style_0, index_1, style_1, ..., index_n, style_n]
	    * where index_n is an index into the sourceCode, and style_n is a style
	    * constant like PR_PLAIN.  index_n-1 <= index_n, and style_n-1 applies to
	    * all characters in sourceCode[index_n-1:index_n].
	    *
	    * The stylePatterns is a list whose elements have the form
	    * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].
	    *
	    * Style is a style constant like PR_PLAIN, or can be a string of the
	    * form 'lang-FOO', where FOO is a language extension describing the
	    * language of the portion of the token in $1 after pattern executes.
	    * E.g., if style is 'lang-lisp', and group 1 contains the text
	    * '(hello (world))', then that portion of the token will be passed to the
	    * registered lisp handler for formatting.
	    * The text before and after group 1 will be restyled using this decorator
	    * so decorators should take care that this doesn't result in infinite
	    * recursion.  For example, the HTML lexer rule for SCRIPT elements looks
	    * something like ['lang-js', /<[s]cript>(.+?)<\/script>/].  This may match
	    * '<script>foo()<\/script>', which would cause the current decorator to
	    * be called with '<script>' which would not match the same rule since
	    * group 1 must not be empty, so it would be instead styled as PR_TAG by
	    * the generic tag rule.  The handler registered for the 'js' extension would
	    * then be called with 'foo()', and finally, the current decorator would
	    * be called with '<\/script>' which would not match the original rule and
	    * so the generic tag rule would identify it as a tag.
	    *
	    * Pattern must only match prefixes, and if it matches a prefix, then that
	    * match is considered a token with the same style.
	    *
	    * Context is applied to the last non-whitespace, non-comment token
	    * recognized.
	    *
	    * Shortcut is an optional string of characters, any of which, if the first
	    * character, gurantee that this pattern and only this pattern matches.
	    *
	    * @param {Array} shortcutStylePatterns patterns that always start with
	    *   a known character.  Must have a shortcut string.
	    * @param {Array} fallthroughStylePatterns patterns that will be tried in
	    *   order if the shortcut ones fail.  May have shortcuts.
	    *
	    * @return {function (JobT)} a function that takes an undecorated job and
	    *   attaches a list of decorations.
	    */
	  function createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns) {
	    var shortcuts = {};
	    var tokenizer;
	    (function () {
	      var allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns);
	      var allRegexs = [];
	      var regexKeys = {};
	      for (var i = 0, n = allPatterns.length; i < n; ++i) {
	        var patternParts = allPatterns[i];
	        var shortcutChars = patternParts[3];
	        if (shortcutChars) {
	          for (var c = shortcutChars.length; --c >= 0;) {
	            shortcuts[shortcutChars.charAt(c)] = patternParts;
	          }
	        }
	        var regex = patternParts[1];
	        var k = '' + regex;
	        if (!regexKeys.hasOwnProperty(k)) {
	          allRegexs.push(regex);
	          regexKeys[k] = null;
	        }
	      }
	      allRegexs.push(/[\0-\uffff]/);
	      tokenizer = combinePrefixPatterns(allRegexs);
	    })();

	    var nPatterns = fallthroughStylePatterns.length;

	    /**
	     * Lexes job.sourceCode and attaches an output array job.decorations of
	     * style classes preceded by the position at which they start in
	     * job.sourceCode in order.
	     *
	     * @type{function (JobT)}
	     */
	    var decorate = function (job) {
	      var sourceCode = job.sourceCode, basePos = job.basePos;
	      var sourceNode = job.sourceNode;
	      /** Even entries are positions in source in ascending order.  Odd enties
	        * are style markers (e.g., PR_COMMENT) that run from that position until
	        * the end.
	        * @type {DecorationsT}
	        */
	      var decorations = [basePos, PR_PLAIN];
	      var pos = 0;  // index into sourceCode
	      var tokens = sourceCode.match(tokenizer) || [];
	      var styleCache = {};

	      for (var ti = 0, nTokens = tokens.length; ti < nTokens; ++ti) {
	        var token = tokens[ti];
	        var style = styleCache[token];
	        var match = void 0;

	        var isEmbedded;
	        if (typeof style === 'string') {
	          isEmbedded = false;
	        } else {
	          var patternParts = shortcuts[token.charAt(0)];
	          if (patternParts) {
	            match = token.match(patternParts[1]);
	            style = patternParts[0];
	          } else {
	            for (var i = 0; i < nPatterns; ++i) {
	              patternParts = fallthroughStylePatterns[i];
	              match = token.match(patternParts[1]);
	              if (match) {
	                style = patternParts[0];
	                break;
	              }
	            }

	            if (!match) {  // make sure that we make progress
	              style = PR_PLAIN;
	            }
	          }

	          isEmbedded = style.length >= 5 && 'lang-' === style.substring(0, 5);
	          if (isEmbedded && !(match && typeof match[1] === 'string')) {
	            isEmbedded = false;
	            style = PR_SOURCE;
	          }

	          if (!isEmbedded) { styleCache[token] = style; }
	        }

	        var tokenStart = pos;
	        pos += token.length;

	        if (!isEmbedded) {
	          decorations.push(basePos + tokenStart, style);
	        } else {  // Treat group 1 as an embedded block of source code.
	          var embeddedSource = match[1];
	          var embeddedSourceStart = token.indexOf(embeddedSource);
	          var embeddedSourceEnd = embeddedSourceStart + embeddedSource.length;
	          if (match[2]) {
	            // If embeddedSource can be blank, then it would match at the
	            // beginning which would cause us to infinitely recurse on the
	            // entire token, so we catch the right context in match[2].
	            embeddedSourceEnd = token.length - match[2].length;
	            embeddedSourceStart = embeddedSourceEnd - embeddedSource.length;
	          }
	          var lang = style.substring(5);
	          // Decorate the left of the embedded source
	          appendDecorations(
	              sourceNode,
	              basePos + tokenStart,
	              token.substring(0, embeddedSourceStart),
	              decorate, decorations);
	          // Decorate the embedded source
	          appendDecorations(
	              sourceNode,
	              basePos + tokenStart + embeddedSourceStart,
	              embeddedSource,
	              langHandlerForExtension(lang, embeddedSource),
	              decorations);
	          // Decorate the right of the embedded section
	          appendDecorations(
	              sourceNode,
	              basePos + tokenStart + embeddedSourceEnd,
	              token.substring(embeddedSourceEnd),
	              decorate, decorations);
	        }
	      }
	      job.decorations = decorations;
	    };
	    return decorate;
	  }

	  /** returns a function that produces a list of decorations from source text.
	    *
	    * This code treats ", ', and ` as string delimiters, and \ as a string
	    * escape.  It does not recognize perl's qq() style strings.
	    * It has no special handling for double delimiter escapes as in basic, or
	    * the tripled delimiters used in python, but should work on those regardless
	    * although in those cases a single string literal may be broken up into
	    * multiple adjacent string literals.
	    *
	    * It recognizes C, C++, and shell style comments.
	    *
	    * @param {Object} options a set of optional parameters.
	    * @return {function (JobT)} a function that examines the source code
	    *     in the input job and builds a decoration list which it attaches to
	    *     the job.
	    */
	  function sourceDecorator(options) {
	    var shortcutStylePatterns = [], fallthroughStylePatterns = [];
	    if (options['tripleQuotedStrings']) {
	      // '''multi-line-string''', 'single-line-string', and double-quoted
	      shortcutStylePatterns.push(
	          [PR_STRING,  /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
	           null, '\'"']);
	    } else if (options['multiLineStrings']) {
	      // 'multi-line-string', "multi-line-string"
	      shortcutStylePatterns.push(
	          [PR_STRING,  /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
	           null, '\'"`']);
	    } else {
	      // 'single-line-string', "single-line-string"
	      shortcutStylePatterns.push(
	          [PR_STRING,
	           /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
	           null, '"\'']);
	    }
	    if (options['verbatimStrings']) {
	      // verbatim-string-literal production from the C# grammar.  See issue 93.
	      fallthroughStylePatterns.push(
	          [PR_STRING, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
	    }
	    var hc = options['hashComments'];
	    if (hc) {
	      if (options['cStyleComments']) {
	        if (hc > 1) {  // multiline hash comments
	          shortcutStylePatterns.push(
	              [PR_COMMENT, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, '#']);
	        } else {
	          // Stop C preprocessor declarations at an unclosed open comment
	          shortcutStylePatterns.push(
	              [PR_COMMENT, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
	               null, '#']);
	        }
	        // #include <stdio.h>
	        fallthroughStylePatterns.push(
	            [PR_STRING,
	             /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
	             null]);
	      } else {
	        shortcutStylePatterns.push([PR_COMMENT, /^#[^\r\n]*/, null, '#']);
	      }
	    }
	    if (options['cStyleComments']) {
	      fallthroughStylePatterns.push([PR_COMMENT, /^\/\/[^\r\n]*/, null]);
	      fallthroughStylePatterns.push(
	          [PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
	    }
	    var regexLiterals = options['regexLiterals'];
	    if (regexLiterals) {
	      /**
	       * @const
	       */
	      var regexExcls = regexLiterals > 1
	        ? ''  // Multiline regex literals
	        : '\n\r';
	      /**
	       * @const
	       */
	      var regexAny = regexExcls ? '.' : '[\\S\\s]';
	      /**
	       * @const
	       */
	      var REGEX_LITERAL = (
	          // A regular expression literal starts with a slash that is
	          // not followed by * or / so that it is not confused with
	          // comments.
	          '/(?=[^/*' + regexExcls + '])'
	          // and then contains any number of raw characters,
	          + '(?:[^/\\x5B\\x5C' + regexExcls + ']'
	          // escape sequences (\x5C),
	          +    '|\\x5C' + regexAny
	          // or non-nesting character sets (\x5B\x5D);
	          +    '|\\x5B(?:[^\\x5C\\x5D' + regexExcls + ']'
	          +             '|\\x5C' + regexAny + ')*(?:\\x5D|$))+'
	          // finally closed by a /.
	          + '/');
	      fallthroughStylePatterns.push(
	          ['lang-regex',
	           RegExp('^' + REGEXP_PRECEDER_PATTERN + '(' + REGEX_LITERAL + ')')
	           ]);
	    }

	    var types = options['types'];
	    if (types) {
	      fallthroughStylePatterns.push([PR_TYPE, types]);
	    }

	    var keywords = ("" + options['keywords']).replace(/^ | $/g, '');
	    if (keywords.length) {
	      fallthroughStylePatterns.push(
	          [PR_KEYWORD,
	           new RegExp('^(?:' + keywords.replace(/[\s,]+/g, '|') + ')\\b'),
	           null]);
	    }

	    shortcutStylePatterns.push([PR_PLAIN,       /^\s+/, null, ' \r\n\t\xA0']);

	    var punctuation =
	      // The Bash man page says

	      // A word is a sequence of characters considered as a single
	      // unit by GRUB. Words are separated by metacharacters,
	      // which are the following plus space, tab, and newline: { }
	      // | & $ ; < >
	      // ...

	      // A word beginning with # causes that word and all remaining
	      // characters on that line to be ignored.

	      // which means that only a '#' after /(?:^|[{}|&$;<>\s])/ starts a
	      // comment but empirically
	      // $ echo {#}
	      // {#}
	      // $ echo \$#
	      // $#
	      // $ echo }#
	      // }#

	      // so /(?:^|[|&;<>\s])/ is more appropriate.

	      // http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3
	      // suggests that this definition is compatible with a
	      // default mode that tries to use a single token definition
	      // to recognize both bash/python style comments and C
	      // preprocessor directives.

	      // This definition of punctuation does not include # in the list of
	      // follow-on exclusions, so # will not be broken before if preceeded
	      // by a punctuation character.  We could try to exclude # after
	      // [|&;<>] but that doesn't seem to cause many major problems.
	      // If that does turn out to be a problem, we should change the below
	      // when hc is truthy to include # in the run of punctuation characters
	      // only when not followint [|&;<>].
	      '^.[^\\s\\w.$@\'"`/\\\\]*';
	    if (options['regexLiterals']) {
	      punctuation += '(?!\s*\/)';
	    }

	    fallthroughStylePatterns.push(
	        // TODO(mikesamuel): recognize non-latin letters and numerals in idents
	        [PR_LITERAL,     /^@[a-z_$][a-z_$@0-9]*/i, null],
	        [PR_TYPE,        /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null],
	        [PR_PLAIN,       /^[a-z_$][a-z_$@0-9]*/i, null],
	        [PR_LITERAL,
	         new RegExp(
	             '^(?:'
	             // A hex number
	             + '0x[a-f0-9]+'
	             // or an octal or decimal number,
	             + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
	             // possibly in scientific notation
	             + '(?:e[+\\-]?\\d+)?'
	             + ')'
	             // with an optional modifier like UL for unsigned long
	             + '[a-z]*', 'i'),
	         null, '0123456789'],
	        // Don't treat escaped quotes in bash as starting strings.
	        // See issue 144.
	        [PR_PLAIN,       /^\\[\s\S]?/, null],
	        [PR_PUNCTUATION, new RegExp(punctuation), null]);

	    return createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns);
	  }

	  var decorateSource = sourceDecorator({
	        'keywords': ALL_KEYWORDS,
	        'hashComments': true,
	        'cStyleComments': true,
	        'multiLineStrings': true,
	        'regexLiterals': true
	      });

	  /**
	   * Given a DOM subtree, wraps it in a list, and puts each line into its own
	   * list item.
	   *
	   * @param {Node} node modified in place.  Its content is pulled into an
	   *     HTMLOListElement, and each line is moved into a separate list item.
	   *     This requires cloning elements, so the input might not have unique
	   *     IDs after numbering.
	   * @param {number|null|boolean} startLineNum
	   *     If truthy, coerced to an integer which is the 1-indexed line number
	   *     of the first line of code.  The number of the first line will be
	   *     attached to the list.
	   * @param {boolean} isPreformatted true iff white-space in text nodes should
	   *     be treated as significant.
	   */
	  function numberLines(node, startLineNum, isPreformatted) {
	    var nocode = /(?:^|\s)nocode(?:\s|$)/;
	    var lineBreak = /\r\n?|\n/;
	  
	    var document = node.ownerDocument;
	  
	    var li = document.createElement('li');
	    while (node.firstChild) {
	      li.appendChild(node.firstChild);
	    }
	    // An array of lines.  We split below, so this is initialized to one
	    // un-split line.
	    var listItems = [li];
	  
	    function walk(node) {
	      var type = node.nodeType;
	      if (type == 1 && !nocode.test(node.className)) {  // Element
	        if ('br' === node.nodeName) {
	          breakAfter(node);
	          // Discard the <BR> since it is now flush against a </LI>.
	          if (node.parentNode) {
	            node.parentNode.removeChild(node);
	          }
	        } else {
	          for (var child = node.firstChild; child; child = child.nextSibling) {
	            walk(child);
	          }
	        }
	      } else if ((type == 3 || type == 4) && isPreformatted) {  // Text
	        var text = node.nodeValue;
	        var match = text.match(lineBreak);
	        if (match) {
	          var firstLine = text.substring(0, match.index);
	          node.nodeValue = firstLine;
	          var tail = text.substring(match.index + match[0].length);
	          if (tail) {
	            var parent = node.parentNode;
	            parent.insertBefore(
	              document.createTextNode(tail), node.nextSibling);
	          }
	          breakAfter(node);
	          if (!firstLine) {
	            // Don't leave blank text nodes in the DOM.
	            node.parentNode.removeChild(node);
	          }
	        }
	      }
	    }
	  
	    // Split a line after the given node.
	    function breakAfter(lineEndNode) {
	      // If there's nothing to the right, then we can skip ending the line
	      // here, and move root-wards since splitting just before an end-tag
	      // would require us to create a bunch of empty copies.
	      while (!lineEndNode.nextSibling) {
	        lineEndNode = lineEndNode.parentNode;
	        if (!lineEndNode) { return; }
	      }
	  
	      function breakLeftOf(limit, copy) {
	        // Clone shallowly if this node needs to be on both sides of the break.
	        var rightSide = copy ? limit.cloneNode(false) : limit;
	        var parent = limit.parentNode;
	        if (parent) {
	          // We clone the parent chain.
	          // This helps us resurrect important styling elements that cross lines.
	          // E.g. in <i>Foo<br>Bar</i>
	          // should be rewritten to <li><i>Foo</i></li><li><i>Bar</i></li>.
	          var parentClone = breakLeftOf(parent, 1);
	          // Move the clone and everything to the right of the original
	          // onto the cloned parent.
	          var next = limit.nextSibling;
	          parentClone.appendChild(rightSide);
	          for (var sibling = next; sibling; sibling = next) {
	            next = sibling.nextSibling;
	            parentClone.appendChild(sibling);
	          }
	        }
	        return rightSide;
	      }
	  
	      var copiedListItem = breakLeftOf(lineEndNode.nextSibling, 0);
	  
	      // Walk the parent chain until we reach an unattached LI.
	      for (var parent;
	           // Check nodeType since IE invents document fragments.
	           (parent = copiedListItem.parentNode) && parent.nodeType === 1;) {
	        copiedListItem = parent;
	      }
	      // Put it on the list of lines for later processing.
	      listItems.push(copiedListItem);
	    }
	  
	    // Split lines while there are lines left to split.
	    for (var i = 0;  // Number of lines that have been split so far.
	         i < listItems.length;  // length updated by breakAfter calls.
	         ++i) {
	      walk(listItems[i]);
	    }
	  
	    // Make sure numeric indices show correctly.
	    if (startLineNum === (startLineNum|0)) {
	      listItems[0].setAttribute('value', startLineNum);
	    }
	  
	    var ol = document.createElement('ol');
	    ol.className = 'linenums';
	    var offset = Math.max(0, ((startLineNum - 1 /* zero index */)) | 0) || 0;
	    for (var i = 0, n = listItems.length; i < n; ++i) {
	      li = listItems[i];
	      // Stick a class on the LIs so that stylesheets can
	      // color odd/even rows, or any other row pattern that
	      // is co-prime with 10.
	      li.className = 'L' + ((i + offset) % 10);
	      if (!li.firstChild) {
	        li.appendChild(document.createTextNode('\xA0'));
	      }
	      ol.appendChild(li);
	    }
	  
	    node.appendChild(ol);
	  }

	  /**
	   * Breaks {@code job.sourceCode} around style boundaries in
	   * {@code job.decorations} and modifies {@code job.sourceNode} in place.
	   * @param {JobT} job
	   * @private
	   */
	  function recombineTagsAndDecorations(job) {
	    var isIE8OrEarlier = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
	    isIE8OrEarlier = isIE8OrEarlier && +isIE8OrEarlier[1] <= 8;
	    var newlineRe = /\n/g;
	  
	    var source = job.sourceCode;
	    var sourceLength = source.length;
	    // Index into source after the last code-unit recombined.
	    var sourceIndex = 0;
	  
	    var spans = job.spans;
	    var nSpans = spans.length;
	    // Index into spans after the last span which ends at or before sourceIndex.
	    var spanIndex = 0;
	  
	    var decorations = job.decorations;
	    var nDecorations = decorations.length;
	    // Index into decorations after the last decoration which ends at or before
	    // sourceIndex.
	    var decorationIndex = 0;
	  
	    // Remove all zero-length decorations.
	    decorations[nDecorations] = sourceLength;
	    var decPos, i;
	    for (i = decPos = 0; i < nDecorations;) {
	      if (decorations[i] !== decorations[i + 2]) {
	        decorations[decPos++] = decorations[i++];
	        decorations[decPos++] = decorations[i++];
	      } else {
	        i += 2;
	      }
	    }
	    nDecorations = decPos;
	  
	    // Simplify decorations.
	    for (i = decPos = 0; i < nDecorations;) {
	      var startPos = decorations[i];
	      // Conflate all adjacent decorations that use the same style.
	      var startDec = decorations[i + 1];
	      var end = i + 2;
	      while (end + 2 <= nDecorations && decorations[end + 1] === startDec) {
	        end += 2;
	      }
	      decorations[decPos++] = startPos;
	      decorations[decPos++] = startDec;
	      i = end;
	    }
	  
	    nDecorations = decorations.length = decPos;
	  
	    var sourceNode = job.sourceNode;
	    var oldDisplay = "";
	    if (sourceNode) {
	      oldDisplay = sourceNode.style.display;
	      sourceNode.style.display = 'none';
	    }
	    try {
	      var decoration = null;
	      while (spanIndex < nSpans) {
	        var spanStart = spans[spanIndex];
	        var spanEnd = /** @type{number} */ (spans[spanIndex + 2])
	            || sourceLength;
	  
	        var decEnd = decorations[decorationIndex + 2] || sourceLength;
	  
	        var end = Math.min(spanEnd, decEnd);
	  
	        var textNode = /** @type{Node} */ (spans[spanIndex + 1]);
	        var styledText;
	        if (textNode.nodeType !== 1  // Don't muck with <BR>s or <LI>s
	            // Don't introduce spans around empty text nodes.
	            && (styledText = source.substring(sourceIndex, end))) {
	          // This may seem bizarre, and it is.  Emitting LF on IE causes the
	          // code to display with spaces instead of line breaks.
	          // Emitting Windows standard issue linebreaks (CRLF) causes a blank
	          // space to appear at the beginning of every line but the first.
	          // Emitting an old Mac OS 9 line separator makes everything spiffy.
	          if (isIE8OrEarlier) {
	            styledText = styledText.replace(newlineRe, '\r');
	          }
	          textNode.nodeValue = styledText;
	          var document = textNode.ownerDocument;
	          var span = document.createElement('span');
	          span.className = decorations[decorationIndex + 1];
	          var parentNode = textNode.parentNode;
	          parentNode.replaceChild(span, textNode);
	          span.appendChild(textNode);
	          if (sourceIndex < spanEnd) {  // Split off a text node.
	            spans[spanIndex + 1] = textNode
	                // TODO: Possibly optimize by using '' if there's no flicker.
	                = document.createTextNode(source.substring(end, spanEnd));
	            parentNode.insertBefore(textNode, span.nextSibling);
	          }
	        }
	  
	        sourceIndex = end;
	  
	        if (sourceIndex >= spanEnd) {
	          spanIndex += 2;
	        }
	        if (sourceIndex >= decEnd) {
	          decorationIndex += 2;
	        }
	      }
	    } finally {
	      if (sourceNode) {
	        sourceNode.style.display = oldDisplay;
	      }
	    }
	  }

	  /** Maps language-specific file extensions to handlers. */
	  var langHandlerRegistry = {};
	  /** Register a language handler for the given file extensions.
	    * @param {function (JobT)} handler a function from source code to a list
	    *      of decorations.  Takes a single argument job which describes the
	    *      state of the computation and attaches the decorations to it.
	    * @param {Array.<string>} fileExtensions
	    */
	  function registerLangHandler(handler, fileExtensions) {
	    for (var i = fileExtensions.length; --i >= 0;) {
	      var ext = fileExtensions[i];
	      if (!langHandlerRegistry.hasOwnProperty(ext)) {
	        langHandlerRegistry[ext] = handler;
	      } else if (win['console']) {
	        console['warn']('cannot override language handler %s', ext);
	      }
	    }
	  }
	  function langHandlerForExtension(extension, source) {
	    if (!(extension && langHandlerRegistry.hasOwnProperty(extension))) {
	      // Treat it as markup if the first non whitespace character is a < and
	      // the last non-whitespace character is a >.
	      extension = /^\s*</.test(source)
	          ? 'default-markup'
	          : 'default-code';
	    }
	    return langHandlerRegistry[extension];
	  }
	  registerLangHandler(decorateSource, ['default-code']);
	  registerLangHandler(
	      createSimpleLexer(
	          [],
	          [
	           [PR_PLAIN,       /^[^<?]+/],
	           [PR_DECLARATION, /^<!\w[^>]*(?:>|$)/],
	           [PR_COMMENT,     /^<\!--[\s\S]*?(?:-\->|$)/],
	           // Unescaped content in an unknown language
	           ['lang-',        /^<\?([\s\S]+?)(?:\?>|$)/],
	           ['lang-',        /^<%([\s\S]+?)(?:%>|$)/],
	           [PR_PUNCTUATION, /^(?:<[%?]|[%?]>)/],
	           ['lang-',        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
	           // Unescaped content in javascript.  (Or possibly vbscript).
	           ['lang-js',      /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
	           // Contains unescaped stylesheet content
	           ['lang-css',     /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
	           ['lang-in.tag',  /^(<\/?[a-z][^<>]*>)/i]
	          ]),
	      ['default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl']);
	  registerLangHandler(
	      createSimpleLexer(
	          [
	           [PR_PLAIN,        /^[\s]+/, null, ' \t\r\n'],
	           [PR_ATTRIB_VALUE, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, '\"\'']
	           ],
	          [
	           [PR_TAG,          /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
	           [PR_ATTRIB_NAME,  /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
	           ['lang-uq.val',   /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
	           [PR_PUNCTUATION,  /^[=<>\/]+/],
	           ['lang-js',       /^on\w+\s*=\s*\"([^\"]+)\"/i],
	           ['lang-js',       /^on\w+\s*=\s*\'([^\']+)\'/i],
	           ['lang-js',       /^on\w+\s*=\s*([^\"\'>\s]+)/i],
	           ['lang-css',      /^style\s*=\s*\"([^\"]+)\"/i],
	           ['lang-css',      /^style\s*=\s*\'([^\']+)\'/i],
	           ['lang-css',      /^style\s*=\s*([^\"\'>\s]+)/i]
	           ]),
	      ['in.tag']);
	  registerLangHandler(
	      createSimpleLexer([], [[PR_ATTRIB_VALUE, /^[\s\S]+/]]), ['uq.val']);
	  registerLangHandler(sourceDecorator({
	          'keywords': CPP_KEYWORDS,
	          'hashComments': true,
	          'cStyleComments': true,
	          'types': C_TYPES
	        }), ['c', 'cc', 'cpp', 'cxx', 'cyc', 'm']);
	  registerLangHandler(sourceDecorator({
	          'keywords': 'null,true,false'
	        }), ['json']);
	  registerLangHandler(sourceDecorator({
	          'keywords': CSHARP_KEYWORDS,
	          'hashComments': true,
	          'cStyleComments': true,
	          'verbatimStrings': true,
	          'types': C_TYPES
	        }), ['cs']);
	  registerLangHandler(sourceDecorator({
	          'keywords': JAVA_KEYWORDS,
	          'cStyleComments': true
	        }), ['java']);
	  registerLangHandler(sourceDecorator({
	          'keywords': SH_KEYWORDS,
	          'hashComments': true,
	          'multiLineStrings': true
	        }), ['bash', 'bsh', 'csh', 'sh']);
	  registerLangHandler(sourceDecorator({
	          'keywords': PYTHON_KEYWORDS,
	          'hashComments': true,
	          'multiLineStrings': true,
	          'tripleQuotedStrings': true
	        }), ['cv', 'py', 'python']);
	  registerLangHandler(sourceDecorator({
	          'keywords': PERL_KEYWORDS,
	          'hashComments': true,
	          'multiLineStrings': true,
	          'regexLiterals': 2  // multiline regex literals
	        }), ['perl', 'pl', 'pm']);
	  registerLangHandler(sourceDecorator({
	          'keywords': RUBY_KEYWORDS,
	          'hashComments': true,
	          'multiLineStrings': true,
	          'regexLiterals': true
	        }), ['rb', 'ruby']);
	  registerLangHandler(sourceDecorator({
	          'keywords': JSCRIPT_KEYWORDS,
	          'cStyleComments': true,
	          'regexLiterals': true,
	          'multilineStrings': true
	        }), ['javascript', 'js', 'ts', 'typescript']);
	  registerLangHandler(sourceDecorator({
	          'keywords': COFFEE_KEYWORDS,
	          'hashComments': 3,  // ### style block comments
	          'cStyleComments': true,
	          'multilineStrings': true,
	          'tripleQuotedStrings': true,
	          'regexLiterals': true
	        }), ['coffee']);
	  registerLangHandler(
	      createSimpleLexer([], [[PR_STRING, /^[\s\S]+/]]), ['regex']);

	  /** @param {JobT} job */
	  function applyDecorator(job) {
	    var opt_langExtension = job.langExtension;

	    try {
	      // Extract tags, and convert the source code to plain text.
	      var sourceAndSpans = extractSourceSpans(job.sourceNode, job.pre);
	      /** Plain text. @type {string} */
	      var source = sourceAndSpans.sourceCode;
	      job.sourceCode = source;
	      job.spans = sourceAndSpans.spans;
	      job.basePos = 0;

	      // Apply the appropriate language handler
	      langHandlerForExtension(opt_langExtension, source)(job);

	      // Integrate the decorations and tags back into the source code,
	      // modifying the sourceNode in place.
	      recombineTagsAndDecorations(job);
	    } catch (e) {
	      if (win['console']) {
	        console['log'](e && e['stack'] || e);
	      }
	    }
	  }

	  /**
	   * Pretty print a chunk of code.
	   * @param sourceCodeHtml {string} The HTML to pretty print.
	   * @param opt_langExtension {string} The language name to use.
	   *     Typically, a filename extension like 'cpp' or 'java'.
	   * @param opt_numberLines {number|boolean} True to number lines,
	   *     or the 1-indexed number of the first line in sourceCodeHtml.
	   */
	  function $prettyPrintOne(sourceCodeHtml, opt_langExtension, opt_numberLines) {
	    /** @type{number|boolean} */
	    var nl = opt_numberLines || false;
	    /** @type{string|null} */
	    var langExtension = opt_langExtension || null;
	    /** @type{!Element} */
	    var container = document.createElement('div');
	    // This could cause images to load and onload listeners to fire.
	    // E.g. <img onerror="alert(1337)" src="nosuchimage.png">.
	    // We assume that the inner HTML is from a trusted source.
	    // The pre-tag is required for IE8 which strips newlines from innerHTML
	    // when it is injected into a <pre> tag.
	    // http://stackoverflow.com/questions/451486/pre-tag-loses-line-breaks-when-setting-innerhtml-in-ie
	    // http://stackoverflow.com/questions/195363/inserting-a-newline-into-a-pre-tag-ie-javascript
	    container.innerHTML = '<pre>' + sourceCodeHtml + '</pre>';
	    container = /** @type{!Element} */(container.firstChild);
	    if (nl) {
	      numberLines(container, nl, true);
	    }

	    /** @type{JobT} */
	    var job = {
	      langExtension: langExtension,
	      numberLines: nl,
	      sourceNode: container,
	      pre: 1,
	      sourceCode: null,
	      basePos: null,
	      spans: null,
	      decorations: null
	    };
	    applyDecorator(job);
	    return container.innerHTML;
	  }

	   /**
	    * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
	    * {@code class=prettyprint} and prettify them.
	    *
	    * @param {Function} opt_whenDone called when prettifying is done.
	    * @param {HTMLElement|HTMLDocument} opt_root an element or document
	    *   containing all the elements to pretty print.
	    *   Defaults to {@code document.body}.
	    */
	  function $prettyPrint(opt_whenDone, opt_root) {
	    var root = opt_root || document.body;
	    var doc = root.ownerDocument || document;
	    function byTagName(tn) { return root.getElementsByTagName(tn); }
	    // fetch a list of nodes to rewrite
	    var codeSegments = [byTagName('pre'), byTagName('code'), byTagName('xmp')];
	    var elements = [];
	    for (var i = 0; i < codeSegments.length; ++i) {
	      for (var j = 0, n = codeSegments[i].length; j < n; ++j) {
	        elements.push(codeSegments[i][j]);
	      }
	    }
	    codeSegments = null;

	    var clock = Date;
	    if (!clock['now']) {
	      clock = { 'now': function () { return +(new Date); } };
	    }

	    // The loop is broken into a series of continuations to make sure that we
	    // don't make the browser unresponsive when rewriting a large page.
	    var k = 0;

	    var langExtensionRe = /\blang(?:uage)?-([\w.]+)(?!\S)/;
	    var prettyPrintRe = /\bprettyprint\b/;
	    var prettyPrintedRe = /\bprettyprinted\b/;
	    var preformattedTagNameRe = /pre|xmp/i;
	    var codeRe = /^code$/i;
	    var preCodeXmpRe = /^(?:pre|code|xmp)$/i;
	    var EMPTY = {};

	    function doWork() {
	      var endTime = (win['PR_SHOULD_USE_CONTINUATION'] ?
	                     clock['now']() + 250 /* ms */ :
	                     Infinity);
	      for (; k < elements.length && clock['now']() < endTime; k++) {
	        var cs = elements[k];

	        // Look for a preceding comment like
	        // <?prettify lang="..." linenums="..."?>
	        var attrs = EMPTY;
	        {
	          for (var preceder = cs; (preceder = preceder.previousSibling);) {
	            var nt = preceder.nodeType;
	            // <?foo?> is parsed by HTML 5 to a comment node (8)
	            // like <!--?foo?-->, but in XML is a processing instruction
	            var value = (nt === 7 || nt === 8) && preceder.nodeValue;
	            if (value
	                ? !/^\??prettify\b/.test(value)
	                : (nt !== 3 || /\S/.test(preceder.nodeValue))) {
	              // Skip over white-space text nodes but not others.
	              break;
	            }
	            if (value) {
	              attrs = {};
	              value.replace(
	                  /\b(\w+)=([\w:.%+-]+)/g,
	                function (_, name, value) { attrs[name] = value; });
	              break;
	            }
	          }
	        }

	        var className = cs.className;
	        if ((attrs !== EMPTY || prettyPrintRe.test(className))
	            // Don't redo this if we've already done it.
	            // This allows recalling pretty print to just prettyprint elements
	            // that have been added to the page since last call.
	            && !prettyPrintedRe.test(className)) {

	          // make sure this is not nested in an already prettified element
	          var nested = false;
	          for (var p = cs.parentNode; p; p = p.parentNode) {
	            var tn = p.tagName;
	            if (preCodeXmpRe.test(tn)
	                && p.className && prettyPrintRe.test(p.className)) {
	              nested = true;
	              break;
	            }
	          }
	          if (!nested) {
	            // Mark done.  If we fail to prettyprint for whatever reason,
	            // we shouldn't try again.
	            cs.className += ' prettyprinted';

	            // If the classes includes a language extensions, use it.
	            // Language extensions can be specified like
	            //     <pre class="prettyprint lang-cpp">
	            // the language extension "cpp" is used to find a language handler
	            // as passed to PR.registerLangHandler.
	            // HTML5 recommends that a language be specified using "language-"
	            // as the prefix instead.  Google Code Prettify supports both.
	            // http://dev.w3.org/html5/spec-author-view/the-code-element.html
	            var langExtension = attrs['lang'];
	            if (!langExtension) {
	              langExtension = className.match(langExtensionRe);
	              // Support <pre class="prettyprint"><code class="language-c">
	              var wrapper;
	              if (!langExtension && (wrapper = childContentWrapper(cs))
	                  && codeRe.test(wrapper.tagName)) {
	                langExtension = wrapper.className.match(langExtensionRe);
	              }

	              if (langExtension) { langExtension = langExtension[1]; }
	            }

	            var preformatted;
	            if (preformattedTagNameRe.test(cs.tagName)) {
	              preformatted = 1;
	            } else {
	              var currentStyle = cs['currentStyle'];
	              var defaultView = doc.defaultView;
	              var whitespace = (
	                  currentStyle
	                  ? currentStyle['whiteSpace']
	                  : (defaultView
	                     && defaultView.getComputedStyle)
	                  ? defaultView.getComputedStyle(cs, null)
	                  .getPropertyValue('white-space')
	                  : 0);
	              preformatted = whitespace
	                  && 'pre' === whitespace.substring(0, 3);
	            }

	            // Look for a class like linenums or linenums:<n> where <n> is the
	            // 1-indexed number of the first line.
	            var lineNums = attrs['linenums'];
	            if (!(lineNums = lineNums === 'true' || +lineNums)) {
	              lineNums = className.match(/\blinenums\b(?::(\d+))?/);
	              lineNums =
	                lineNums
	                ? lineNums[1] && lineNums[1].length
	                  ? +lineNums[1] : true
	                : false;
	            }
	            if (lineNums) { numberLines(cs, lineNums, preformatted); }

	            // do the pretty printing
	            var prettyPrintingJob = {
	              langExtension: langExtension,
	              sourceNode: cs,
	              numberLines: lineNums,
	              pre: preformatted,
	              sourceCode: null,
	              basePos: null,
	              spans: null,
	              decorations: null
	            };
	            applyDecorator(prettyPrintingJob);
	          }
	        }
	      }
	      if (k < elements.length) {
	        // finish up in a continuation
	        win.setTimeout(doWork, 250);
	      } else if ('function' === typeof opt_whenDone) {
	        opt_whenDone();
	      }
	    }

	    doWork();
	  }

	  /**
	   * Contains functions for creating and registering new language handlers.
	   * @type {Object}
	   */
	  var PR = win['PR'] = {
	        'createSimpleLexer': createSimpleLexer,
	        'registerLangHandler': registerLangHandler,
	        'sourceDecorator': sourceDecorator,
	        'PR_ATTRIB_NAME': PR_ATTRIB_NAME,
	        'PR_ATTRIB_VALUE': PR_ATTRIB_VALUE,
	        'PR_COMMENT': PR_COMMENT,
	        'PR_DECLARATION': PR_DECLARATION,
	        'PR_KEYWORD': PR_KEYWORD,
	        'PR_LITERAL': PR_LITERAL,
	        'PR_NOCODE': PR_NOCODE,
	        'PR_PLAIN': PR_PLAIN,
	        'PR_PUNCTUATION': PR_PUNCTUATION,
	        'PR_SOURCE': PR_SOURCE,
	        'PR_STRING': PR_STRING,
	        'PR_TAG': PR_TAG,
	        'PR_TYPE': PR_TYPE,
	        'prettyPrintOne':
	           IN_GLOBAL_SCOPE
	             ? (win['prettyPrintOne'] = $prettyPrintOne)
	             : (prettyPrintOne = $prettyPrintOne),
	        'prettyPrint': prettyPrint =
	           IN_GLOBAL_SCOPE
	             ? (win['prettyPrint'] = $prettyPrint)
	             : (prettyPrint = $prettyPrint)
	      };

	  // Make PR available via the Asynchronous Module Definition (AMD) API.
	  // Per https://github.com/amdjs/amdjs-api/wiki/AMD:
	  // The Asynchronous Module Definition (AMD) API specifies a
	  // mechanism for defining modules such that the module and its
	  // dependencies can be asynchronously loaded.
	  // ...
	  // To allow a clear indicator that a global define function (as
	  // needed for script src browser loading) conforms to the AMD API,
	  // any global define function SHOULD have a property called "amd"
	  // whose value is an object. This helps avoid conflict with any
	  // other existing JavaScript code that could have defined a define()
	  // function that does not conform to the AMD API.
	  var define = win['define'];
	  if (typeof define === "function" && define['amd']) {
	    define("google-code-prettify", [], function () {
	      return PR;
	    });
	  }
	})();


/***/ },
/* 3 */
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	PR.registerLangHandler(
	    PR.createSimpleLexer(
	        [ 
	          // Whitespace
	          [PR.PR_PLAIN,         /^\s+/, null, ' \r\n\t\xA0']
	        ],
	        [ // fallthroughStylePatterns
			  [PR.PR_KEYWORD,       /^(?:npm|webpack)\b/i, null],
			  [PR.PR_STRING,       /^(?:install)\b/i, null],
			  [PR.PR_LITERAL,       /^\-\-[a-z0-9\-]*\b/i, null],
			  [PR.PR_LITERAL,       /^\-[a-z0-9\-]\b/i, null]
	          
	        ]),
	    ['cmd']);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".pln{color:#000}@media screen{.str{color:#080}.kwd{color:#008}.com{color:#800}.typ{color:#606}.lit{color:#066}.pun,.opn,.clo{color:#660}.tag{color:#008}.atn{color:#606}.atv{color:#080}.dec,.var{color:#606}.fun{color:red}}@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun,.opn,.clo{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}az-format-code.prettyprint{padding:2px;border:1px solid #888}ol.linenums{margin-top:0;margin-bottom:0}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}", ""]);

	// exports


/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/* Pretty printing styles. Used with prettify.js. */\r\n/* Vim sunburst theme by David Leibovic */\r\n\r\naz-format-code .str, code .str { color: #65B042; } /* string  - green */\r\naz-format-code .kwd, code .kwd { color: #E28964; } /* keyword - dark pink */\r\naz-format-code .com, code .com { color: #AEAEAE; font-style: italic; } /* comment - gray */\r\naz-format-code .typ, code .typ { color: #89bdff; } /* type - light blue */\r\naz-format-code .lit, code .lit { color: #3387CC; } /* literal - blue */\r\naz-format-code .pun, code .pun { color: #fff; } /* punctuation - white */\r\naz-format-code .pln, code .pln { color: #fff; } /* plaintext - white */\r\naz-format-code .tag, code .tag { color: #89bdff; } /* html/xml tag    - light blue */\r\naz-format-code .atn, code .atn { color: #bdb76b; } /* html/xml attribute name  - khaki */\r\naz-format-code .atv, code .atv { color: #65B042; } /* html/xml attribute value - green */\r\naz-format-code .dec, code .dec { color: #3387CC; } /* decimal - blue */\r\n\r\npre.prettyprint, code.prettyprint {\r\n\tbackground-color: #000;\r\n\t-moz-border-radius: 8px;\r\n\t-webkit-border-radius: 8px;\r\n\t-o-border-radius: 8px;\r\n\t-ms-border-radius: 8px;\r\n\t-khtml-border-radius: 8px;\r\n\tborder-radius: 8px;\r\n}\r\n\r\npre.prettyprint {\r\n\twidth: 95%;\r\n\tmargin: 1em auto;\r\n\tpadding: 1em;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n\r\n/* Specify class=linenums on a pre to get line numbering */\r\nol.linenums { margin-top: 0; margin-bottom: 0; color: #AEAEAE; } /* IE indents via margin-left */\r\nli.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8 { list-style-type: none }\r\n/* Alternate shading for lines */\r\nli.L1,li.L3,li.L5,li.L7,li.L9 { }\r\n\r\n@media print {\r\n  az-format-code .str, code .str { color: #060; }\r\n  az-format-code .kwd, code .kwd { color: #006; font-weight: bold; }\r\n  az-format-code .com, code .com { color: #600; font-style: italic; }\r\n  az-format-code .typ, code .typ { color: #404; font-weight: bold; }\r\n  az-format-code .lit, code .lit { color: #044; }\r\n  az-format-code .pun, code .pun { color: #440; }\r\n  az-format-code .pln, code .pln { color: #000; }\r\n  az-format-code .tag, code .tag { color: #006; font-weight: bold; }\r\n  az-format-code .atn, code .atn { color: #404; }\r\n  az-format-code .atv, code .atv { color: #060; }\r\n}", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = replaceSpaces;
	function replaceSpaces(str) {
		var rawStr = String(str);
		return rawStr.replace(/\n/g, "<br/>");
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(15);

	var AzPresentationElement = function (_HTMLElement) {
		_inherits(AzPresentationElement, _HTMLElement);

		function AzPresentationElement() {
			_classCallCheck(this, AzPresentationElement);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AzPresentationElement).apply(this, arguments));
		}

		_createClass(AzPresentationElement, [{
			key: 'createdCallback',
			value: function createdCallback() {
				this.currentActive = 'start';
				this.autoDiscoverSlides();
				this.bindKeyEvents();
			}
		}, {
			key: 'attachedCallback',
			value: function attachedCallback() {}
		}, {
			key: 'attributeChangedCallback',
			value: function attributeChangedCallback(attrName, oldVal, newVal) {}
		}, {
			key: 'autoDiscoverSlides',
			value: function autoDiscoverSlides() {
				var slides = document.getElementsByTagName("az-slide");
				//console.log("slides="+slides.length);
				var previous = null;
				for (var i = 0; i < slides.length; i++) {
					var slide = slides[i];
					if (!slide.hasAttribute('id')) {
						slide.setAttribute('id', 'slide_' + i);
					}
					if (!previous) {
						// first slide
						if (!slide.hasAttribute('start')) {
							slide.setAttribute('start', 'start');
						}
					} else {
						if (!previous.hasAttribute('next')) {
							previous.setAttribute('next', slide.id);
						}
						if (i === slides.length - 1) {
							slide.setAttribute('next', slides[0].id);
						}
					}
					previous = slide;
				}
			}
		}, {
			key: 'bindKeyEvents',
			value: function bindKeyEvents() {
				var self = this;
				window.addEventListener('keydown', function (event) {
					//console.log("keydown:"+event);
					event = event || window.event;
					var code = event.keyCode;
					if (event.charCode && code == 0) {
						code = event.charCode;
					}
					if (self.move(code)) {
						event.preventDefault();
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
			key: 'showSlide',
			value: function showSlide(slideId) {
				console.log("showSlide:" + slideId);
				if (slideId) {
					document.getElementById(slideId).moveTo();
				}
			}
		}]);

		return AzPresentationElement;
	}(HTMLElement);

	document.registerElement('az-presentation', AzPresentationElement);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\ndel {\r\n    text-decoration: none;\r\n    position: relative;\r\n}\r\ndel:after {\r\n    content: ' ';\r\n    font-size: inherit;\r\n    display: block;\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    top: 33%;\r\n    bottom: 40%;\r\n    //border-top: 2px solid #F00;\r\n    border-bottom: 1px solid #F00;\r\n}\r\naz-presentation {\r\n\tposition: absolute;\r\n    display: block;\r\n\twidth : 100%;\r\n\theight : 100%;\r\n\ttop :50%;\r\n\tleft :50%;\r\n    transform: translate(50%, 50%);\r\n    transform-origin: top left 0;\r\n    transform-style: preserve-3d;\r\n\tperspective :1000px;\r\n\tperspective-origin: 50% 50%;\r\n    transition: transform 0.3s ease-in 0s;\r\n}\r\naz-slide {\r\n\tposition: absolute;\r\n    display: block;\r\n\ttransform-style: preserve-3d;\r\n\ttransform-origin: 50% 50% 50%;\r\n    width: 900px;\r\n    height: 700px;\r\n\toverflow: hidden;\r\n    padding: 20px 30px;\r\n\r\n    background-color: white;\r\n    border: 2px solid rgb(0, 0, 0);\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .1);\r\n    text-shadow: 0 2px 2px rgba(0, 0, 0, .1);\r\n\r\n    font-family: 'PT Serif', georgia, serif;\r\n    font-size: 30px;\r\n    line-height: 36px;\r\n    letter-spacing: -1px;\r\n\t\r\n\tmargin: 0;\r\n    opacity: 0.3;\r\n\tz-index: 10;\r\n\t\t  \r\n    -webkit-transition: opacity 1s;\r\n    -moz-transition:    opacity 1s;\r\n    -ms-transition:     opacity 1s;\r\n    -o-transition:      opacity 1s;\r\n    transition:         opacity 1s;\r\n}\r\n\r\naz-slide.active{\r\n\topacity: 1;\r\n\tz-index: 100;\r\n}\r\n\r\naz-slide > div.title {\r\n\tfont-size: 1.2em;\r\n    line-height: 1.4em;\r\n\tfont-family: Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;\r\n\tfont-weight:bold;\r\n\tbackground-color: #777;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n\tbox-shadow: 3px 3px rgba(0, 0, 0, .3);\r\n    color: white;\r\n    display: inline-block;\r\n    left: -5%;\r\n    padding: 1px 15px;\r\n    position: relative;\r\n    text-align: center;\r\n    top: -12px;\r\n    width: 95%;\r\n}", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _transformUtils = __webpack_require__(16);

	var _transformUtils2 = _interopRequireDefault(_transformUtils);

	var _cssUtils = __webpack_require__(17);

	var _nodeUtils = __webpack_require__(18);

	var _nodeUtils2 = _interopRequireDefault(_nodeUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import * as Css from './css-utils';


	var AzSlideElement = function (_HTMLElement) {
		_inherits(AzSlideElement, _HTMLElement);

		function AzSlideElement() {
			_classCallCheck(this, AzSlideElement);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AzSlideElement).apply(this, arguments));
		}

		_createClass(AzSlideElement, [{
			key: 'createdCallback',
			value: function createdCallback() {}
		}, {
			key: 'attachedCallback',
			value: function attachedCallback() {
				this.render();
			}
		}, {
			key: 'attributeChangedCallback',
			value: function attributeChangedCallback(attrName, oldVal, newVal) {}
		}, {
			key: 'render',
			value: function render() {
				var attrs = (0, _nodeUtils2.default)(this);

				this.transformations = new _transformUtils2.default().translate(attrs.tx, attrs.ty, attrs.tz).rotate(attrs.rx, attrs.ry, attrs.rz).scale(attrs.scale).transformations();
				(0, _cssUtils.applyTransform)(this, 'translate(-50%,-50%) ' + this.transformations.transform);

				if (this.hasAttribute('start') || this.id === "start") {
					this.moveTo();
				}
			}
		}, {
			key: 'moveTo',
			value: function moveTo() {
				this.parentNode.currentActive = this;
				(0, _cssUtils.removeAllClass)('active');
				(0, _cssUtils.addClass)(this, 'active');
				(0, _cssUtils.applyTransform)(this.parentNode, this.transformations.reverseTransform);
			}
		}]);

		return AzSlideElement;
	}(HTMLElement);

	document.registerElement('az-slide', AzSlideElement);

/***/ },
/* 16 */
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
				this.reverseTransform = 'translate3d(' + -1 * (x ? x : '0') + 'px, ' + -1 * (y ? y : '0') + 'px, ' + -1 * (z ? z : '0') + 'px) ' + this.reverseTransform;
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
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.applyTransform = applyTransform;
	exports.css = css;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.removeAllClass = removeAllClass;
	function applyTransform(element, transform) {
		css(element, {
			position: "absolute",
			transform: transform,
			transformStyle: "preserve-3d",
			transition: "transform 0.4s ease-in",
			transformOrigin: "50% 50% 50%"
		});
	}
	function css(elem, props) {
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
	function addClass(elem, className) {
		elem.classList ? elem.classList.add(className) : elem.className += ' ' + className;
	}
	function removeClass(elem, className) {
		elem.className = elem.className.replace(className, '');
	}
	function removeAllClass(className) {
		var nodes = document.getElementsByClassName(className);
		for (var i = 0; i < nodes.length; i++) {
			removeClass(nodes[i], className);
		}
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = attributeMap;
	function attributeMap(node) {
		var mapAttr = {};
		for (var i = 0; i < node.attributes.length; i++) {
			var attr = node.attributes[i];
			mapAttr[attr.name] = attr.value ? attr.value : 0;
		}
		return mapAttr;
	}

/***/ }
/******/ ]);