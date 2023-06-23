import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Form,
  FormGroup,
  FormLabel,
  LoginContaner,
  Title,
  LoginButton,
  ContentLink,
} from './login.style';
import { InputField } from '../ uielements /inputField';
import { screenSizes } from '../helper/style.helper';

export const loginSteps = {
  signUpForm: 'sign-up-form',
  signInForm: 'sign-in-form',
};

const Login = () => {
  const [activeLoginStep, setActiveLoginStep] = useState(loginSteps.signInForm);

  const isMobile = useMediaQuery({ maxWidth: screenSizes.xxl });

  const renderSignInForm = () => {
    return (
      <Form>
        <FormLabel>Sign In to Willeder</FormLabel>
        <FormGroup>
          <Title>Email Address</Title>
          <InputField placeholder="Enter your email address" />
        </FormGroup>
        <FormGroup>
          <Title>Password</Title>
          <InputField placeholder="Enter your password" />
        </FormGroup>
        <LoginButton>Sign In</LoginButton>
      </Form>
    );
  };
  const renderSignUpForm = () => {
    return (
      <Form>
        <FormLabel>Welcome To Willeder</FormLabel>
        <FormGroup>
          <Title>Email Address</Title>
          <InputField placeholder="Enter your email address" />
        </FormGroup>
        <FormGroup>
          <Title>Password</Title>
          <InputField placeholder="Enter your password" />
        </FormGroup>
        <LoginButton>Sign Up</LoginButton>
      </Form>
    );
  };

  const renderLoginSteps = () => {
    switch (activeLoginStep) {
      case loginSteps.signInForm:
        return renderSignInForm();
      case loginSteps.signUpForm:
        return renderSignUpForm();
      default:
        return null;
    }
  };

  return (
    <LoginContaner>
      {loginSteps.signInForm === activeLoginStep ? (
        <ContentLink>
          New user ?{' '}
          <span onClick={() => setActiveLoginStep(loginSteps.signUpForm)}>
            Click here to sign up
          </span>
        </ContentLink>
      ) : (
        <ContentLink>
          Existing user ?{' '}
          <span onClick={() => setActiveLoginStep(loginSteps.signInForm)}>
            Click here to sign in
          </span>
        </ContentLink>
      )}
      {renderLoginSteps()}
    </LoginContaner>
  );
};

export default Login;
