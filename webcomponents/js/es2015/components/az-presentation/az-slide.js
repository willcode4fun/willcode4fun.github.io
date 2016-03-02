import TransformBuilder from 'utilities/transform-utils';
import {applyTransform, removeClass, addClass} from 'utilities/css-utils';
//import * as Css from './css-utils';
import attributeMap from 'utilities/node-utils';

class AzSlideElement extends HTMLElement {
	createdCallback() {	};
	
	attachedCallback() { this.render();	};
	
	attributeChangedCallback(attrName, oldVal, newVal) { };
	
	render() {
		const attrs = attributeMap(this);

		this.transformations = new TransformBuilder()
			.translate(attrs.tx, attrs.ty, attrs.tz)
			.rotate(attrs.rx, attrs.ry, attrs.rz)
			.scale(attrs.scale)
			.transformations();
    this.transformationsActive = new TransformBuilder()
			.translate(attrs.tx, attrs.ty, attrs.tz)
			.rotate(attrs.rx, attrs.ry, attrs.rz)
			.scale(1.2)
			.transformations();	      
		applyTransform(this, 'translate(-50%,-50%) '+this.transformations.transform);
		
		if(this.hasAttribute('start') || this.id === "start"){
			this.moveTo();
		}
	}
	moveTo(){
		this.parentNode.currentActive = this;
    let nodes = document.getElementsByClassName('active');
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].moveOut();
    }

		addClass(this,'active');
    applyTransform(this, 'translate(-50%,-50%) '+this.transformationsActive.transform);
		applyTransform(this.parentNode, this.transformations.reverseTransform);
	}
  moveOut(){
    removeClass(this, 'active');
    applyTransform(this, 'translate(-50%,-50%) '+this.transformations.transform);
  }
}
document.registerElement('az-slide', AzSlideElement);