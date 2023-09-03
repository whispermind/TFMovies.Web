export const formValidation = {
	email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
	nickname: /^[a-zA-Z]+$/g,
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_+=])[A-Za-z\d-_+=]{8,}$/
};
