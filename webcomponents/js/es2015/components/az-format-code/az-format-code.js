require("prettify/prettify.js");
import 'prettify/prettify.css';
import './sunburst.css';
const template = require("html!./template.html");

class FormatCodeElement extends HTMLElement {

	createdCallback() {
		const coloredHTML = prettyPrintOne(this.replaceText(this.innerHTML.trim()));
		this.innerHTML = template;
		this.childNodes[0].innerHTML = coloredHTML;
		this.appendTitle(this.getAttribute("file-name"));
	};
	
	attachedCallback() { };
	
	attributeChangedCallback(attrName, oldVal, newVal) { };
	
	replaceText(str) {
		let str1 = String(str);
		return str1.replace(/\n/g,"<br/>");
	};
	
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