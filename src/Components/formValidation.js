import {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../Context/authContext';

const useFormValidaton = (initialState, validate) => {
  const context = useContext(AuthContext);

  const [values, setValues] = useState(initialState);
  const [focus, setFocus] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      console.log(errors);
      if (noErrors) {
        console.log('Autenticated! ', values);        
        setValues(initialState);
        setSubmitting(false);

        context.login(values);
        // callback(); // This is a function called to undergo the mutations
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleFocus = e => {
    const validationErrors = validate(values);
    setFocus(e.target.name);
    setErrors(validationErrors);
  };

  const handleChange = e => {
    const validationErrors = validate(values);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setFocus(e.target.name);
    setErrors(validationErrors);
  };

  const handleSubmit = e => {
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
