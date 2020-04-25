import {useState, useEffect} from 'react';



// Custom Hook to handle Signup and Login forms
const useFormValidaton = (initialState, validate) => {


  const [values, setValues] = useState(initialState);
  const [focus, setFocus] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        console.log('Autenticated! ', values.email);
        setSubmitting(false);
        setValues(initialState);
      
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleFocus = (e) => {
    const validationErrors = validate(values);
    setFocus(e.target.name);
    setErrors(validationErrors);
  };

  const handleChange = (e) => {
    const validationErrors = validate(values);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setFocus(e.target.name);
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    
    const validationErrors = validate(values);
    e.preventDefault();
    setErrors(validationErrors);
    setSubmitting(true);
    
  };

  return {
    handleChange,
    handleSubmit,
    handleFocus,
    focus,
    values,
    errors,
    isSubmitting,
  };
};

export default useFormValidaton;
