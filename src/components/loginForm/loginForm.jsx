import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from 'redux/auth/operations';

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
        <button type="submit">Log IN</button>
      </Form>
    </Formik>
  );
};
