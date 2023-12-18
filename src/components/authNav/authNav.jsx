import { NavLabel, StyledNavLink } from './authNav.styled';

export const AuthNav = () => {
  return (
    <NavLabel>
      <StyledNavLink to="/register">SIGN UP</StyledNavLink>
      <StyledNavLink to="/login">LOGIN</StyledNavLink>
    </NavLabel>
  );
};
