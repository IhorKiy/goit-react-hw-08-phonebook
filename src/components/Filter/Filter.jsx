import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from 'components/Filter/Filter.module.css';

const initialValue = {
  filter: '',
};

export function Filter() {
  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    dispatch(addFilter(event.target.value.toLowerCase()));
  };

  return (
    <div className={css.form}>
      <h3>Find contacts by name</h3>

      <Formik initialValues={initialValue}>
        <Form onChange={handleChange}>
          <label htmlFor="find">
            <Field
              className={css.input}
              type="text"
              name="filter"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></Field>
          </label>
        </Form>
      </Formik>
    </div>
  );
}
