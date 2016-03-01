require("./az-slide");
import './presentation.css';

class AzPresentationElement extends HTMLElement {

	createdCallback() {
		this.currentActive = 'start';
		this.bindKeyEvents();
	};
	
	attachedCallback() { };
	
	attributeChangedCallback(attrName, oldVal, newVal) { };
	
	bindKeyEvents() {
		let self = this;
		window.addEventListener('keydown', function(event) {
			//console.log("keydown:"+event);
			event = event || window.event;
			var code = event.keyCode;
			if (event.charCode && code == 0){
				code = event.charCode;
			}
			if(self.move(code)){
				event.preventDefault();
			}
		}, false);
	};
	move(code){
		console.log("move:"+code);
		if(this.currentActive){
			switch(code){
				case 38 : this.previousDetail();return true;
				case 40 : this.nextDetail();return true;
				case 37 : this.previousSlide();return true;
				case 39 : this.nextSlide();return true;
				default: return false;
			};
		}
	}
	nextSlide(){
		this.showSlide(this.currentActive.getAttribute("next"));
	};
	previousSlide(){
		this.showSlide(document.querySelector('[next='+this.currentActive.id+']').id);
	};
	nextDetail(){
		this.showSlide(this.currentActive.getAttribute("detail"));
	};
	previousDetail(){
		this.showSlide(document.querySelector('[detail='+this.currentActive.id+']').id);
	};
	showSlide(slideId){
		console.log("showSlide:"+slideId);
		if(slideId){
			document.getElementById(slideId).moveTo();
		}
	}
}
document.registerElement('az-presentation', AzPresentationElement);