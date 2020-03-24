const validateSuggestion = values => {
  let errors = {};

  // Email Title
  if (!values.title) {
    errors.title = 'Title is Required';
  }

  // Auther Errors
  if (!values.author) {
    errors.author = 'Auther is Required';
  }

  // Category Confirmation
  if (!values.category) {
    errors.category = 'Category is Required';
  }
  return errors;
};

export default validateSuggestion;
