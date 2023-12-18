import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>
        <b>{user.email}</b>
      </p>
      <button onClick={() => dispatch(logOut())}>LOGOUT</button>
    </div>
  );
};
