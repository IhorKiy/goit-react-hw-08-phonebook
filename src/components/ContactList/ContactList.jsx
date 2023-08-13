import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filter);

  let filteredContact;

  if (contacts) {
    filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters)
    );
  }

  return (
    <ul className={css.list}>
      {filteredContact.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact text={contact.name} id={contact.id} tel={contact.phone} />
        </li>
      ))}
    </ul>
  );
};
