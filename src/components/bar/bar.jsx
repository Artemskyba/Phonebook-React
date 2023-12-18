import { AuthNav } from 'components/authNav/authNav';
import { Navigation } from 'components/navigation/navigation';
import { UserMenu } from 'components/userMenu/userMenu';
import { useAuth } from 'hooks/useAuth';

export const Bar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
