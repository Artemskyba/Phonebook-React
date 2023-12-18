import styled from 'styled-components';

import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  max-width: 200px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.label`
  font-size: 20px;
`;
