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
          <div className='user_roles_list'>
          
          <li>
            <input
            type="checkbox"
            id="access"
            name="access"
            value="access" checked/>
          <label for="access"> .ACCESS</label>
            <li>
              <input
              type="checkbox"
              id="accessManager"
              name="accessManager"
              value="accessManager" checked/>
              <label for="access"> Access Manager</label>
            </li>
          </li>
          
          </div>
          <div className='selected_roles'></div>
        </div>
      </div>
    )
  }
}