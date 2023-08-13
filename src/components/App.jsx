import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import './App.module.css';
import { getError, getIsLoading } from "redux/selectors";
import{fetchContacts} from'../redux/operations'



function App() {

const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-main">
        <Layout>
          <ContactForm />
          <Filter />
           {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
          
        </Layout>
      </header>
    </div>
  );
}


export default App;