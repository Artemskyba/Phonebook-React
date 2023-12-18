import { AuthNav } from 'components/authNav/authNav';
import { Navigation } from 'components/navigation/navigation';
import { UserMenu } from 'components/userMenu/userMenu';
import { useAuth } from 'hooks/useAuth';
import { Header } from './bar.styled';

export const Bar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
