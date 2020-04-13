import React, {useContext} from 'react';
import Input from '../../Views/input/input';
import Logo from '../../Views/logo/logo';
import useFormValdation from '../../Hooks/useformValidation';
import ValidateAuth from './validate';

import {ThemeContext} from '../../Context/themeContext';
import ThemeToggle from '../themeChanger';


// TODO: UI features
// 1. Border animation
// 2. Tick Icon
// 3. on Error/Success status
// 4. Button Disable/Enable
// 5. Loading animation
// 6. Dark Mode with animation
// 7. Error Handling

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const {
    handleChange,
    handleSubmit,
    handleFocus,
    focus,
    values,
    errors,
    isSubmitting,
  } = useFormValdation(INITIAL_STATE, ValidateAuth);

  const [, curTheme] = useContext(ThemeContext);

  return (
    <div
      className="p-10 h-screen"
      style={{backgroundColor: curTheme.background}}
    >
      <ThemeToggle />
      <div class="h-16"></div>
      <Logo />
      <form onSubmit={handleSubmit}>
        <div class="text-center mt-5 uppercase text-2xl text-gray-700 font-helvetica-rounded">
          Register
        </div>
        <div class="mt-10">
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
