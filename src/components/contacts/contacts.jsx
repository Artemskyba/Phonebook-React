import { useSelector } from 'react-redux';
import { ContactText, ContactsItem, ContactsList } from './contacts.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <>
      <ContactsList>
        {filtredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactText>
                {name}: {number}
              </ContactText>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};
