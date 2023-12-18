import { useSelector } from 'react-redux';
import { ContactText, ContactsItem, ContactsList } from './contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
              <Button
                type="button"
                variant="contained"
                endIcon={<DeleteIcon />}
                style={{
                  width: '110px',
                  height: '27px',
                  fontSize: '14px',
                  padding: '5px',
                }}
                color="success"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};
