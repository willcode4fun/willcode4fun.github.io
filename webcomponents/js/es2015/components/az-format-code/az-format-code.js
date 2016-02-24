require("prettify/prettify.js");
import 'prettify/prettify.css';
import './sunburst.css';
const template = require("html!./template.html");

class FormatCodeElement extends HTMLElement {
	replaceText(str) {
		let str1 = String(str);
		return str1.replace(/\n/g,"<br/>");
	};

	createdCallback() {
		const coloredHTML = prettyPrintOne(this.replaceText(this.innerHTML));
		this.innerHTML = template;
		this.childNodes[0].innerHTML = coloredHTML;
	};
	
	attachedCallback() {

	};
	
	attributeChangedCallback(attrName, oldVal, newVal) {

	};
}
document.registerElement('az-format-code', FormatCodeElement);