import React, {useEffect, useContext} from 'react';
import Input from '../../Views/input/input';
import logoSVG from './logo.svg';
import {useApolloClient} from '@apollo/react-hooks';
import {SIGNIN} from '../../Graphql/query';
import {ThemeContext} from '../../Context/themeContext';
import ThemeToggle from '../themeChanger';
import {AuthContext} from '../../Context/authContext';
import useFormValdation from '../../Hooks/useformValidation';
import useLocalStorage from '../../Hooks/useLocalStorage';
import ValidateAuth from './validate';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const SignIn = () => {
  const {
    handleChange,
    handleSubmit,
    handleFocus,
    focus,
    values,
    errors,
    isSubmitting,
  } = useFormValdation(INITIAL_STATE, ValidateAuth);

  const context = useContext(AuthContext);

  const {setLoc} = useLocalStorage('auth');

  const client = useApolloClient();

  const [, curTheme] = useContext(ThemeContext);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        const caller = async () => {
          const {data} = await client.query({
            query: SIGNIN,
            variables: values,
          });
          if (data) {
            setLoc(data.signIn);
            context.login(data.signIn);
          }
        };
        caller();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  
  return (
    <div
      className="p-10 h-screen"
      style={{backgroundColor: curTheme.background}}
    >
      <ThemeToggle />
      <div class="h-16"></div>
      <img class="m-auto" src={logoSVG} alt="logoSVG" />
      <form onSubmit={handleSubmit}>
        <div class="text-center mt-5 text-2xl uppercase text-gray-700 font-helvetica-rounded">
          Login
        </div>
        <div class="mt-10">
          <Input
            title="Email"
            type="email"
            name="email"
            placeholder=""
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
            placeholder="more than 8 charactors"
            error={errors.password}
            focused={focus === 'password'}
            handleChange={handleChange}
            handleFocus={handleFocus}
            value={values.password}
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

export default SignIn;
