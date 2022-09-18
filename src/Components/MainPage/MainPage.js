import React from 'react';
import './MainPage.css';
import Form from '../Form/Form';


export default class MainPage extends React.Component {

  render() {

    return(
      <div className='MainPage'>
        <header className='main_header'>
          <div className='user_management'>
            <span>Usermanagement</span>
          </div>
          <div className='user_initials'>
            <p>JH</p>
          </div>
        </header>

        <main className='main_main'>
          <aside className='main_aside'>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </aside>
          <section className='main_section'>
            <div className='page_clasification'>
              
            </div>
            <Form/>
          </section>
        </main>
      </div>
    )
  }
}