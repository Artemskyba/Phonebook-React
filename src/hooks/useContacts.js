import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsError,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const contactsError = useSelector(selectContactsError);

  return {
    contacts,
    isLoading,
    contactsError,
  };
};
