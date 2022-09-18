import React from 'react';
import './UserRoles.css';

export default class UserRoles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

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
          
          <li className='major_li'>
            <input
            type="checkbox"
            id="access"
            name="access"
            value="access"/>
            <label> .ACCESS</label>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="accessManager"
              name="accessManager"
              value="accessManager"/>
              <p></p>
              <label> Access Manager</label>
            </div>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="card"
            name="card"
            value="card"/>
            <label> .CARD</label>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="cardManagement"
              name="cardManagement"
              value="cardManagement"/>
              <p></p>
              <label> Card Management</label>
            </div>
          </li>

          </div>
          <div className='selected_roles'></div>
        </div>
      </div>
    )
  }
}