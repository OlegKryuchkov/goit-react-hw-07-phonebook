import React from 'react';
import style from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={style.item}>
      <span className={style.itemName}>{name}:</span>
      <span className={style.itemNumber}>{number}</span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={style.delete_btn}
      >
        x
      </button>
    </li>
  );
};

export default ContactItem;
