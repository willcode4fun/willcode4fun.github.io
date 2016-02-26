export function applyTransform(element, transform){
	css(element,  {
			position: "absolute",
			transform: transform,
			transformStyle: "preserve-3d",
			transition: "transform 0.4s ease-in",
			transformOrigin: "50% 50% 50%"
		});
}
export function css(elem, props){
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
export function addClass(elem, className){
	elem.classList ? elem.classList.add(className) : elem.className += ' '+className;
}
export function removeClass(elem, className){
	elem.className = elem.className.replace( className, '' );
}
export function removeAllClass(className){
	let nodes = document.getElementsByClassName(className);
	for (let i = 0; i < nodes.length; i++) {
		removeClass(nodes[i], className);
	}
}
