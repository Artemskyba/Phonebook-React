import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">REGISTER</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
    </>
  );
};
