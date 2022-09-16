import React from 'react';
import './MainPage.css';
import Form from '../Form/Form';


export default class MainPage extends React.Component {

  render() {

    return(
      <div className='MainPage'>
        <header className='main_header'>
          <div className='user_management'>Usermanagement</div>
          <div className='user_initials'></div>
        </header>
        <Form/>
      </div>
    )
  }
}