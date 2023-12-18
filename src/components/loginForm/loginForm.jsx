import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import { login } from 'redux/auth/operations';
import { FieldLabel, Form } from './loginForm.styled';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        userEmail: '',
        userPassword: '',
      }}
      onSubmit={({ userEmail, userPassword }) => {
        dispatch(
          login({
            email: userEmail,
            password: userPassword,
          })
        );
      }}
    >
      <Form>
        <FieldLabel htmlFor="userEmail">
          Enter your email
          <Field
            id="userEmail"
            name="userEmail"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="userEmail" />
        </FieldLabel>
        <FieldLabel htmlFor="userPassword">
          Enter password
          <Field
            id="userPassword"
            name="userPassword"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage name="userPassword" />
        </FieldLabel>
        <Button
          type="submit"
          variant="contained"
          endIcon={<LoginIcon />}
          style={{ width: '169px', height: '30px' }}
          color="success"
        >
          Log IN
        </Button>
      </Form>
    </Formik>
  );
};
