import { useSelector } from 'react-redux';
import {
  selectAuthError,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authError = useSelector(selectAuthError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    authError,
  };
};
