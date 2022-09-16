import React from 'react';
import './MainPage.css';
import Form from '../Form/Form';


export default class MainPage extends React.Component {

  render() {

    return(
      <div className='MainPage'>
        <header className='main_header'>
          <div>Usermanagement</div>
          <div></div>
        </header>
        <Form/>
      </div>
    )
  }
}