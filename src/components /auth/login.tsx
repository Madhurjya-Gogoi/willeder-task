import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Redirect } from 'react-router-dom';
import {
  Form,
  FormGroup,
  FormLabel,
  LoginContaner,
  Title,
  LoginButton,
  ContentLink,
} from './login.style';
import { screenSizes } from '../helper/style.helper';
import { InputField } from '../ uielements ';
import { auth } from '../firebase';

export const loginSteps = {
  signUpForm: 'sign-up-form',
  signInForm: 'sign-in-form',
};

const Login = () => {
  const [activeLoginStep, setActiveLoginStep] = useState(loginSteps.signInForm);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: screenSizes.xxl });

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      <Redirect to="/home" />;
    } catch (error: any) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      <Redirect to="/home" />;
    } catch (error: any) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  console.log(error, 'error');
  const renderSignInForm = () => {
    return (
      <Form>
        <FormLabel>Sign In to Willeder</FormLabel>
        <FormGroup>
          <Title>Email Address</Title>
          <InputField
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Title>Password</Title>
          <InputField
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </FormGroup>
        <LoginButton onClick={(e) => handleSignIn(e)}>Sign In</LoginButton>
      </Form>
    );
  };
  const renderSignUpForm = () => {
    return (
      <Form>
        <FormLabel>Welcome To Willeder</FormLabel>
        <FormGroup>
          <Title>Email Address</Title>
          <InputField
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Title>Password</Title>
          <InputField
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </FormGroup>
        <LoginButton onClick={(e) => handleSignUp(e)}>Sign Up</LoginButton>
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
