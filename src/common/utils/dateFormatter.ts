export function dateFormatter(date: string) {
	const dateObject = new Date(Date.parse(date));
	const dateFormatted = `${dateObject.toLocaleDateString("en-GB", { month: "long" })} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;

	return dateFormatted;
}
