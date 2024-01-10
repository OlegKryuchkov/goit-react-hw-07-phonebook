import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={style.list}>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={handleDeleteContact}
            />
          );
        })
      ) : (
        <li className={style.error}>The list is empty</li>
      )}
    </ul>
  );
};

export default ContactList;
