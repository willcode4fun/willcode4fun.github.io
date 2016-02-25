require("prettify/prettify.js");
require("prettify/lang-tree.js");
import TextUtils from "./text-utils";
import 'prettify/prettify.css';
import './sunburst.css';

const template = require("html!./template.html");

class FormatCodeElement extends HTMLElement {

	createdCallback() { };
	
	attachedCallback() { this.render(); };
	
	attributeChangedCallback(attrName, oldVal, newVal) { };
	
	render() {
		const coloredHTML = prettyPrintOne(TextUtils.replaceSpaces(this.innerHTML.trim()), this.getAttribute("lang"));
		this.innerHTML = template;
		this.childNodes[0].innerHTML = coloredHTML;
		this.appendTitle(this.getAttribute("file-name"));
	}
	
	appendTitle(text){
		if(text) {
			var titleNode = document.createElement("div");
			titleNode.className = "code-title";
			titleNode.appendChild(document.createTextNode(text));
			this.insertBefore(titleNode, this.firstChild);
		}
	}
}
document.registerElement('az-format-code', FormatCodeElement);