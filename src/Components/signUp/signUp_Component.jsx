import React, {useEffect, useContext} from 'react';
import Input from '../../Views/input/input';
import logoSVG from './logo.svg';
import useFormValdation from '../../Hooks/useformValidation';
import ValidateAuth from './validate';
import useLocalStorage from '../../Hooks/useLocalStorage';
import {ThemeContext} from '../../Context/themeContext';
import {SIGNUP} from '../../Graphql/mutations';
import ThemeToggle from '../themeChanger';
import {AuthContext} from '../../Context/authContext';
import {useMutation} from '@apollo/react-hooks';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [Signup, {data, error}] = useMutation(SIGNUP);
  const [, curTheme] = useContext(ThemeContext);
  const context = useContext(AuthContext);
  const {setLoc} = useLocalStorage('auth');
  const {
    handleChange,
    handleSubmit,
    handleFocus,
    focus,
    values,
    errors,
    isSubmitting,
  } = useFormValdation(INITIAL_STATE, ValidateAuth);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        Signup({
          variables: {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
          },
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      setLoc(data.signUp);
      context.login(data.signUp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div
      className="p-10 h-screen"
      style={{backgroundColor: curTheme.background}}
    >
      <ThemeToggle />
      <div class="h-16"></div>
      <img class="m-auto" src={logoSVG} alt="logoSVG" />
      <form onSubmit={handleSubmit}>
        <div class="text-center mt-5 uppercase text-2xl text-gray-700 font-helvetica-rounded">
          Register
        </div>
        <div class="mt-10">
          <Input
            title="First Name"
            type="text"
            name="firstname"
            placeholder="Homer"
            error={errors.fname}
            focused={focus === 'fname'}
            handleChange={handleChange}
            handleFocus={handleFocus}
            value={values.firstname}
            style={{color: curTheme.textColor}}
          />
          <Input
            title="Last Name"
            type="text"
            name="lastname"
            placeholder="Homer"
            error={errors.lname}
            focused={focus === 'lname'}
            handleChange={handleChange}
            handleFocus={handleFocus}
            value={values.lastname}
            style={{color: curTheme.textColor}}
          />
          <Input
            title="Email"
            type="email"
            name="email"
            placeholder="email@mail.com"
            error={errors.email}
            focused={focus === 'email'}
            handleChange={handleChange}
            handleFocus={handleFocus}
            value={values.email}
            style={{color: curTheme.textColor}}
          />
          <Input
            title="Password"
            type="password"
            name="password"
            placeholder=""
            error={errors.password}
            focused={focus === 'password'}
            handleChange={handleChange}
            handleFocus={handleFocus}
            value={values.password}
            style={{color: curTheme.textColor}}
          />
          <Input
            title="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder=""
            error={errors.confirmPassword}
            focused={focus === 'confirmPassword'}
            handleChange={handleChange}
            handleFocus={handleFocus}
            value={values.confirmPassword}
            style={{color: curTheme.textColor}}
          />
        </div>
        <div class="m-auto mt-10 p-4 cursor-pointer  color1-bg rounded-lg lg:w-1/5 md:w-1/4 sm:w-1/4 text-center">
          <button
            class="m-auto font-medium text-white outline-none"
            type="submit"
            disabled={isSubmitting}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
