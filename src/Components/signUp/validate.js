const validateAuth = values => {
  let errors = {};

  // Email Errors
  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[@A-z0-9._%+-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  // Password Errors
  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password should be greater than 8 charactors';
  }

  // Password Confirmation
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Passoword is Required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword =
      'Password should me the same as the one Entered in the Password section of the form';
  }

  return errors;
};

export default validateAuth;
