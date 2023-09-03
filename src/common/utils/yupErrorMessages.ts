export const yupErrorMessages = {
	requiredError() {
		return "The field is required";
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
		return `The password must contain minimum 8 and maximum 16 characters, 
    at least one uppercase letter, one lowercase letter, one number and special character`;
	},
	passwordConfirmError() {
		return "The password must be the same";
	}
};
