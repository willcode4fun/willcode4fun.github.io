import TransformBuilder from 'utilities/transform-utils';
import {applyTransform, removeAllClass, addClass} from 'utilities/css-utils';
//import * as Css from './css-utils';
import attributeMap from 'utilities/node-utils';

class AzSlideElement extends HTMLElement {
	createdCallback() {	};
	
	attachedCallback() { this.render();	};
	
	attributeChangedCallback(attrName, oldVal, newVal) { this.render(); };
	
	render() {
		const attrs = attributeMap(this);

		this.transformations = new TransformBuilder()
			.translate(attrs.tx, attrs.ty, attrs.tz)
			.rotate(attrs.rx, attrs.ry, attrs.rz)
			.scale(attrs.scale)
			.transformations();		
		applyTransform(this, 'translate(-50%,-50%) '+this.transformations.transform);
		
		if(this.hasAttribute('start')){
			this.moveTo();
		}
	}
	moveTo(){
		this.parentNode.currentActive = this;
		removeAllClass('active');
		addClass(this,'active');
		applyTransform(this.parentNode, this.transformations.reverseTransform);
	}
}
document.registerElement('az-slide', AzSlideElement);