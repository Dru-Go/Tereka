const validateAuth = values => {
  let errors = {};

  var Repository = [
    {email: 'drumac2@mail.com', password: 'aaaaaaaaa'},
    {email: 'a@mail.com', password: 'aaaaaaaaa'},
    {email: 'few@mail.com', password: 'aaaaaaaaa'},
  ];

  const result = Repository.find(user => user.email === values.email && user.password === values.password);
  
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

  // Login
  if (!result) {
    errors.loggingIn = 'User with this email is not found';
  }

  return errors;
};

export default validateAuth;
