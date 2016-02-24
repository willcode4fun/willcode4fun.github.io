import TransformBuilder from "./transform-utils";
import CssUtils from "./css-utils";

class AzSlideElement extends HTMLElement {
	createdCallback() {
		const rx = this.getAttribute("rx");
		const ry = this.getAttribute("ry");
		const rz = this.getAttribute("rz");
		const tx = this.getAttribute("tx");
		const ty = this.getAttribute("ty");
		const tz = this.getAttribute("tz");
		const scale = this.getAttribute("scale");

		this.transformations = new TransformBuilder()
			.translate(tx,ty,tz)
			.rotate(rx,ry,rz)
			.scale(scale)
			.transformations();
		if(this.hasAttribute("start")){
			this.moveTo();
		}
		//console.log("Transformation : " + this.transformations.transform);
		CssUtils.applyTransform(this, "translate(-50%,-50%) "+this.transformations.transform);
	};
	
	attachedCallback() {

	};
	
	attributeChangedCallback(attrName, oldVal, newVal) {

	};

	moveTo(){
		this.parentNode.currentActive = this;
		CssUtils.removeAllClass("active");
		CssUtils.addClass(this,"active");
		CssUtils.applyTransform(this.parentNode, this.transformations.reverseTransform);
	}
}
document.registerElement('az-slide', AzSlideElement);