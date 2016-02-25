export default class TextUtils{
	static replaceSpaces(str) {
		let str1 = String(str);
		return str1.replace(/\n/g,"<br/>");
	};
}