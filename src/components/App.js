import './App.css';
import {BrowserRouter as Router,Switch,Routes} from 'react-router-dom';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import React,{useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([])
  const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,{id:uuidv4(),...contact}])
  }

  const removeContactHandler=(id)=>{
    const newContactList = contacts.filter((contacts)=>{
      return contacts.id!==id;
    })
    setContacts(newContactList)
  }

  useEffect(()=>{
    const retrieveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[contacts])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])
  return (
    <div className='ui container'>
      <Router>
        <Header/>
        <hr></hr>
        <Routes path='/add' component={AddContact}></Routes>
        
        <AddContact addContactHandler={addContactHandler}/>
        <br></br>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      </Router>
      
    </div>
  );
}

export default App;
