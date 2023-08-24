export const formValidation = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  nickname: /^[a-zA-Z]+$/g,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}/g
};
