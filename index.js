function splitText(input) {
	return input.split(/;|\r?\n/).filter(Boolean);
}

function reverse() {
	var stringsInput = document.getElementById("stringsInput");
	var strings = stringsInput.value;
	var separator = document.getElementById("charInMiddle").value;
	var ending = document.getElementById("end").value;
	var stringsToReverse = splitText(strings);
	var reversedStrings = stringsToReverse.map((str) => {
		let parts = str.split(separator);
		if (parts.length === 2) {
			return parts[1].trim() + separator.trim() + parts[0].trim() + ending.trim();
		} else {
			return str;
		}
	});
	var result = reversedStrings.join("\n").trim();
	stringsInput.value = result;
	return result;
}
