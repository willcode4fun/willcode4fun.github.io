export default function attributeMap(node){
	let mapAttr = {};
	for(let i = 0; i < node.attributes.length; i++){
		let attr = node.attributes[i];
		mapAttr[attr.name] = attr.value?attr.value:0;
	}
	return mapAttr;
}