import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Redirect } from 'react-router-dom';
import {
  Form,
  FormGroup,
  FormLabel,
  LoginContaner,
  Title,
  LoginButton,
  ContentLink,
  RightContentLink,
  InfoBox,
} from './login.style';
import { InputField } from '../ uielements ';
import { auth } from '../firebase';
import { extractErrorValue } from '../helper/errorType';

export const loginSteps = {
  signUpForm: 'sign-up-form',
  signInForm: 'sign-in-form',
  resetPassword: 'reset-password',
};

const Login = () => {
  const [activeLoginStep, setActiveLoginStep] = useState(loginSteps.signInForm);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [weakPassword, setWeakPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      <Redirect to="/home" />;
    } catch (error: any) {
      const errorMessage = error.message;
      setLoading(false);
      if (errorMessage.includes('invalid-email')) {
        const error: any = extractErrorValue(errorMessage);
        setError(error);
      } else {
        setWeakPassword(true);
      }
    }
  };

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      <Redirect to="/home" />;
    } catch (error: any) {
      const errorMessage: any = extractErrorValue(error.message);
      setLoading(false);
      setError(errorMessage);
    }
  };

  const handleResetPassword = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      setActiveLoginStep(loginSteps.signInForm);
      setEmail('');
    } catch (error: any) {
      const errorMessage: any = extractErrorValue(error.message);
      setLoading(false);
      setError(errorMessage);
    }
  };

  const renderSignInForm = () => {
    return (
      <Form>
        <FormLabel>Sign In to Willeder</FormLabel>
        <FormGroup>
          <Title>
            Email Address{' '}
            {(error === 'invalid-email' || error === 'user-not-found') && (
              <span>Invalid email address provided </span>
            )}
          </Title>
          <InputField
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            isError={error === 'invalid-email' || error === 'user-not-found'}
          />
        </FormGroup>
        <FormGroup>
          <Title>
            Password{' '}
            {(error === 'wrong-password' || error === 'user-not-found') && (
              <span>Invalid password provided</span>
            )}
          </Title>
          <InputField
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            isError={error === 'wrong-password' || error === 'user-not-found'}
          />
        </FormGroup>
        <LoginButton onClick={(e) => handleSignIn(e)} disabled={loading}>
          Sign In
        </LoginButton>
      </Form>
    );
  };

  const renderSignUpForm = () => {
    return (
      <Form>
        <FormLabel>Welcome To Willeder</FormLabel>
        <FormGroup>
          <Title>
            Email Address{' '}
            {error === 'invalid-email' && <span>Please enter a valid email address</span>}
          </Title>
          <InputField
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            isError={error === 'invalid-email'}
          />
        </FormGroup>
        <FormGroup>
          <Title>
            Password {weakPassword && <span>Password must contain at least 6 characters</span>}
          </Title>
          <InputField
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            isError={weakPassword}
          />
        </FormGroup>
        <LoginButton onClick={(e) => handleSignUp(e)} disabled={loading}>
          Sign Up
        </LoginButton>
      </Form>
    );
  };

  const renderResetPassword = () => {
    return (
      <Form>
        <FormLabel>Reset your Password</FormLabel>
        <FormGroup>
          <Title>
            Email Address{' '}
            {error === 'invalid-email' && <span>Please enter a valid email address</span>}
          </Title>
          <InputField
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            isError={error === 'invalid-email'}
          />
        </FormGroup>
        <InfoBox>
          The provided email address will receive an email containing instructions to reset your
          password. Follow the instructions in the email to reset your password. Once you have reset
          your password, return to the application and enter your correct credentials to log in.
        </InfoBox>
        <LoginButton onClick={(e) => handleResetPassword(e)} disabled={loading}>
          Reset Password
        </LoginButton>
      </Form>
    );
  };

  const renderLoginSteps = () => {
    switch (activeLoginStep) {
      case loginSteps.signInForm:
        return renderSignInForm();
      case loginSteps.signUpForm:
        return renderSignUpForm();
      case loginSteps.resetPassword:
        return renderResetPassword();
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

      {activeLoginStep === loginSteps.signInForm && (
        <RightContentLink>
          Forgot password ?{' '}
          <span onClick={() => setActiveLoginStep(loginSteps.resetPassword)}>
            Click here to reset
          </span>
        </RightContentLink>
      )}
    </LoginContaner>
  );
};

export default Login;
