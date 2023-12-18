import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 30px;
  text-decoration: none;
  color: whitesmoke;
  border-radius: 6px;
  padding: 4px 6px;
  background: #55735d;
  transition: all 200ms ease-in;
  max-height: 30px;
  &:hover,
  :focus {
    background: #5a7685;
  }
`;
