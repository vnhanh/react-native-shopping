const validateUsername = username => {
  let message = '';

  if (username === '') {
    message = 'email is empty';
  } else if (!/^[a-zA-Z\d]*$/.test(username)) {
    message = 'email should not include special character';
  }

  return message;
};

const validatePassword = password => {
  let message = '';

  if (password === '') {
    message = 'password is empty';
  } else if (password.length < 4) {
    message = 'password is too shot';
  }

  return message;
};

export {validateUsername, validatePassword};
