import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { Redirect } from 'react-router-dom';
import {
  NavbarLeft,
  NavbarLogo,
  NavbarRight,
  NavbarWrapper,
  SignUpButton,
  Title,
} from './navbar.style';
import Logo from '../../assets/willeder.png';
import { auth } from '../../firebase';
import { AuthContext } from '../../auth/authContext';
import { extractNameFromEmail } from '../../helper';

const Navbar = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      <Redirect to="/" />;
      window.localStorage.clear();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const user: any = useContext(AuthContext);

  return (
    <NavbarWrapper>
      <NavbarLeft>
        <NavbarLogo src={Logo} />
      </NavbarLeft>
      <NavbarRight>
        <Title>Welcome back, {extractNameFromEmail(user?.email)}!</Title>
        <SignUpButton onClick={handleSignOut}>Sign Up</SignUpButton>
      </NavbarRight>
    </NavbarWrapper>
  );
};

export default Navbar;
