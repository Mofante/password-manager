export default function generatePassword() {
	const lowerChars = [
		"q",
		"w",
		"e",
		"r",
		"t",
		"y",
		"u",
		"i",
		"o",
		"p",
		"a",
		"s",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l",
		"z",
		"x",
		"c",
		"v",
		"b",
		"n",
		"m",
	];
	const symbols = [
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"-",
		"_",
		"=",
		"+",
		",",
		".",
		"<",
		">",
		"?",
	];

	const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	let password = "";
	let limit = 16;
	let howManyNumbers = Math.ceil(Math.random() * 5);
	limit -= howManyNumbers;
	let howManyUpper = Math.ceil(Math.random() * 3);
	limit -= howManyUpper;
	let howManySymbols = Math.ceil(Math.random() * 3);
	limit -= howManySymbols;
	let howManyLower = limit;

	for (let i = 0; i < howManyNumbers; i++) {
		password += numbers[Math.floor(Math.random() * numbers.length)];
	}
	for (let i = 0; i < howManyUpper; i++) {
		password +=
			lowerChars[Math.floor(Math.random() * lowerChars.length)].toUpperCase();
	}
	for (let i = 0; i < howManySymbols; i++) {
		password += symbols[Math.floor(Math.random() * symbols.length)];
	}
	for (let i = 0; i < howManyLower; i++) {
		password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
	}

	let a = password.split(""),
		n = a.length;

	for (let i = n - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}
	return a.join("");
}
