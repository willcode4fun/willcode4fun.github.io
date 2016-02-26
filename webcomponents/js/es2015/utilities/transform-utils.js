export default class TransformBuilder{
	constructor(){
		this.transform = '';
		this.reverseTransform = '';
	}
	rotate(x,y,z){
		if(x){
			this.transform += ` rotateX(${x}deg)`;
			this.reverseTransform = `rotateX(${-1*x}deg) `+ this.reverseTransform;
		}
		if(y){
			this.transform += ` rotateY(${y}deg)`;
			this.reverseTransform = `rotateY(${-1*y}deg) `+ this.reverseTransform;
		}
		if(z){
			this.transform += ` rotateZ(${z}deg)`;
			this.reverseTransform = `rotateZ(${-1*z}deg) `+ this.reverseTransform;
		}
		return this;
	}
	translate(x,y,z){
		//if(x && y && z){
			this.transform += `translate3d(${x?x:'0'}px, ${y?y:'0'}px, ${z?z:'0'}px)`;
			this.reverseTransform = `translate3d(${-1*(x?x:'0')}px, ${-1*(y?y:'0')}px, ${-1*(z?z:'0')}px) `+ this.reverseTransform;
		//}
		return this;
	}
	scale(scale){
		if(scale){
			this.transform += ` scale(${scale} ) `;
			this.reverseTransform = `scale(${1/scale}) `+ this.reverseTransform;
		}
		//this.reverseTransform = `scale(${-1*scale}) `+ this.reverseTransform;
		return this;
	}
	perspective(p){
		this.transform += ` perspective( ${p}px) `;
		return this;
	}
	transformations(){
		return {
			"transform" : this.transform,
			"reverseTransform" : this.reverseTransform
		}
	}
}