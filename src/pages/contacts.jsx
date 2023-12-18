import { ContactList } from 'components/contacts/contacts';
import { Filter } from 'components/contacts/contacts-filter';
import { ContactForm } from 'components/form/contacts-form';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const { isLoading, error, contacts } = useContacts();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Loading contacts...</b>}
      {error ? (
        <b>Oops, {error.toLowerCase()}! Please, try again!</b>
      ) : (
        <>
          {contacts.length > 0 && (
            <>
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          )}
        </>
      )}
    </>
  );
}
