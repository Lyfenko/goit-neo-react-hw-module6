import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters')
      .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/, 'Дозволені тільки літери англійської та української абеток'),
    number: Yup.string().required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values.name, values.number));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit" className={styles.addButton}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
