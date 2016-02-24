export default class CssUtils{
	static applyTransform(element, transform){
		CssUtils.css(element,  {
                position: "absolute",
                transform: transform,
                transformStyle: "preserve-3d",
				transition: "transform 0.3s ease-in",
				transformOrigin: "50% 50% 50%"
            });
	}
	static css(elem, props){
		var key;
        for ( key in props ) {
            if ( props.hasOwnProperty(key) ) {
				const cKey = key[0].toUpperCase() + key.substr(1);
				elem.style["webkit"+cKey] = props[key];
				elem.style["moz"+cKey] = props[key];
				elem.style["ms"+cKey] = props[key];
				elem.style["o"+cKey] = props[key];
				elem.style[key] = props[key];
            }
        }
        return elem;
	}
	static addClass(elem, className){
		elem.classList ? elem.classList.add(className) : elem.className += ' '+className;
	}
	static removeClass(elem, className){
		elem.className = elem.className.replace( className, '' );
	}
	static removeAllClass(className){
		let nodes = document.getElementsByClassName(className);
		for (let i = 0; i < nodes.length; i++) {
			CssUtils.removeClass(nodes[i], className);
		}
	}
}