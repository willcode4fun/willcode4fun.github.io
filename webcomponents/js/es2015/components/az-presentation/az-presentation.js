require("./az-slide");
import './presentation.css';

class AzPresentationElement extends HTMLElement {

	constructor(){
		super();
		this.currentActive = 'start';
	};

	createdCallback() {
		this.bindKeyEvents();
		
	};
	
	bindKeyEvents() {
		let self = this;
		window.addEventListener('keypress', function(evt) {
			evt = evt || window.event;
			if(self.move(evt.keyCode)){
				evt.preventDefault();
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
	showSlide(slideId){
		console.log("showSlide:"+slideId);
		if(slideId){
			document.getElementById(slideId).moveTo();
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
	
	
	attachedCallback() {
	};
	
	attributeChangedCallback(attrName, oldVal, newVal) {

	};
}
document.registerElement('az-presentation', AzPresentationElement);