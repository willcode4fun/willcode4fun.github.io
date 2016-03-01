export default function replaceSpaces(str) {
	let rawStr = String(str);
	return rawStr.replace(/\n/g,"<br/>");
};