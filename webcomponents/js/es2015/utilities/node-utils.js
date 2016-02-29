export default function attributeMap(node){
	let mapAttr = {};
	if(node.attributes){
		for (let attr of node.attributes) {
			mapAttr[attr.name] = attr.value?attr.value:0;
		}
	}
	return mapAttr;
}