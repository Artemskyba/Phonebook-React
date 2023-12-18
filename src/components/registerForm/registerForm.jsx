import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
        <label htmlFor="userName">
          Set your name
          <Field id="userName" name="userName" type="text" placeholder="Name" />
          <ErrorMessage name="userName" />
        </label>
        <label htmlFor="userEmail">
          Set your email
          <Field
            id="userEmail"
            name="userEmail"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="userEmail" />
        </label>
        <label htmlFor="userPassword">
          Set password
          <Field
            id="userPassword"
            name="userPassword"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage name="userPassword" />
        </label>
        <button type="submit">Sign UP</button>
      </Form>
    </Formik>
  );
};
