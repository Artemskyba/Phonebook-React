import { useAuth } from 'hooks/useAuth';
import { StyledNav, StyledNavLink } from './navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </StyledNav>
  );
};
