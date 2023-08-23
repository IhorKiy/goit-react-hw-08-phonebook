import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import css from 'components/ContactForm/contactForm.module.css';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const initialValue = {
  name: '',
  tel: '',
};

let userSchema = object({
  name: string().min(3).required(),
  tel: number().min(7).max(7).required(),
});

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
        const nameExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (nameExists) {
      alert(`${form.elements.name.value} is already in contacts`);
    } else {
      dispatch(addContact({ name:form.elements.name.value, number:form.elements.number.value }));
    }

    form.reset();
  };

  return (
    <Formik initialValues={initialValue} validationSchema={userSchema}>
      <Form onSubmit={handleSubmit}>
        <>
          <h1 className={css.h1}>Phonebook</h1>
          <div className={css.form}>
            <p>Name</p>
            <Field
              className={css.field}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
            <p>Number</p>
            <Field
              className={css.field}
              type="number"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // value={number}
              required
            />
            <ErrorMessage name="number" />
            <Button type="submit">Add contact</Button>
          </div>
        </>
      </Form>
    </Formik>
  );
}
