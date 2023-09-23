export const yupErrorMessages = {
	requiredError(subject?: string) {
		return `The ${subject || "field"} is required`;
	},
	minError(minValue: number) {
		return `Minimum field length is ${minValue}`;
	},
	maxError(maxValue: number) {
		return `Maximum field length is ${maxValue}`;
	},
	emailError() {
		return "The email must be correct";
	},
	onlyLettersError() {
		return "The field may contain only letters";
	},
	passwordError() {
		return `The password field must be at least 8 characters long and contain only Latin letters, 
		at least one uppercase letter, one lowercase letter, one number, and one special character from this list  -, _, +, =.`;
	},
	passwordConfirmError() {
		return "The password must be the same";
	},
	attachmentSize(size: number) {
		return `The attachment must be less than ${size}mb`;
	},
	tagsLimit(amount: number) {
		return `The tags limit is ${amount}`;
	},
	traillingSpace() {
		return "The field cannot include leading and trailing spaces";
	}
};
