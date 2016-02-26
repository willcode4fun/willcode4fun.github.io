import 'prettify/prettify.js';
import 'prettify/lang-tree.js';
import 'prettify/lang-cmd.js';
import 'prettify/prettify.css';
import 'prettify/styles/sunburst.css';
import replaceSpaces from "./text-utils";

const template = `<div class="code-title"></div><pre class="prettyprint"></pre>`;

class FormatCodeElement extends HTMLElement {

	createdCallback() { };
	
	attachedCallback() { this.render(); };
	
	attributeChangedCallback(attrName, oldVal, newVal) { this.render(); };
	
	render() {
		const coloredHTML = prettyPrintOne(replaceSpaces(this.innerHTML.trim()), this.getAttribute("lang"));
		this.innerHTML = template;
		this.lastChild.innerHTML = coloredHTML;
		this.appendTitle(this.getAttribute("file-name"));
	}
	
	appendTitle(text){
		if(text) {
			this.firstChild.appendChild(document.createTextNode(text));
		}
	}
}
document.registerElement('az-format-code', FormatCodeElement);