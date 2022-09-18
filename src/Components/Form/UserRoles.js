import React from 'react';
import './UserRoles.css';

export default class UserRoles extends React.Component {

  render() {

    return(
      <div className='UserRoles'>
        <p className='user_roles_header'>Applications, Systems & User Roles</p>
        <div className='select_header'>
          <p>Select the application, systems and User Roles for wich the user shoud be autorised.</p>
          <p>Selected:</p>
        </div>
        <div className='user_roles_main'>
          
        </div>
      </div>
    )
  }
}