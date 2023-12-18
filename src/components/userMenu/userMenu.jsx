import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserMenuLabel } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuLabel>
      <p>
        <b>{user.email}</b>
      </p>
      <Button
        type="submit"
        variant="contained"
        endIcon={<LogoutIcon />}
        style={{ width: '150px', height: '30px', fontSize: '16px' }}
        color="success"
        onClick={() => dispatch(logOut())}
      >
        LOGOUT
      </Button>
    </UserMenuLabel>
  );
};
