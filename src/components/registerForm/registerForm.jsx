import { Formik, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FieldLabel, Form } from './registerForm.styled';
import { Button } from '@mui/material';
import RegisterIcon from '@mui/icons-material/HowToReg';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        userName: '',
        userEmail: '',
        userPassword: '',
      }}
      onSubmit={({ userName, userEmail, userPassword }) => {
        dispatch(
          register({
            name: userName,
            email: userEmail,
            password: userPassword,
          })
        );
      }}
    >
      <Form>
        <FieldLabel htmlFor="userName">
          Set your name
          <Field id="userName" name="userName" type="text" placeholder="Name" />
          <ErrorMessage name="userName" />
        </FieldLabel>
        <FieldLabel htmlFor="userEmail">
          Set your email
          <Field
            id="userEmail"
            name="userEmail"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="userEmail" />
        </FieldLabel>
        <FieldLabel htmlFor="userPassword">
          Set password
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
          endIcon={<RegisterIcon />}
          style={{ width: '169px', height: '30px' }}
          color="success"
        >
          Sign UP
        </Button>
      </Form>
    </Formik>
  );
};
