export function validateAuth(email, password) {

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  if (validateEmail(email) && password.length >= 6 && password.length <= 9)
    return {
      error: false,
      message: "логин успешен",
    };
  else {
    let message = "";
    let type = "";

    if (!validateEmail(email)) {
      message = "некорректный email";
      type = "email";
    } else if (password.length < 6) {
      message = "пароль меньше 6 символов";
      type = "password";
    } else if (password.length > 9) {
      message = "пароль больше 9 символов";
      type = "password";
    }

    return {
      error: true,
      message,
      type,
    };
  }
}
