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
  } 

  return errors;
};

export default validateAuth;
