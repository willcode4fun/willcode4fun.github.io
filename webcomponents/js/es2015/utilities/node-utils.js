export default function attributeMap(node){
	let mapAttr = {};
	for (let attr of node.attributes) {
		mapAttr[attr.name] = attr.value?attr.value:0;
	}
	return mapAttr;
}