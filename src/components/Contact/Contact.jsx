import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

export const Contact = ({ text, id, tel }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p className={css.text}>{text}</p>
      <p className={css.tel}>{tel}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={16} />
      </button>
    </>
  );
};
