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
              <li></li>
              <li></li>
              <li></li>
              <li style={{height:'85%', border: '1px solid #E8E8E8'}}></li>
              <li className='main_aside_last_li' style={{border: '1px solid #E8E8E8'}}><p></p></li>
          </aside>
          
          <section className='main_section'>
          <div className='page_classification'>
              <button className={'page_classification_button'}></button>
              <p style={{color:'#333333', fontSize:'3vh'}}>Create User</p>
            </div>
          <div className='main_field'>
             <Form/>
          </div>
          </section>
        </main>
      </div>
    )
  }
}