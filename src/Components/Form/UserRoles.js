import React from 'react';
import './UserRoles.css';

export default class UserRoles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      access: false,
      accessManager: false,
      card: false,
      cardManagement: false,
      certify: false,
      external: false,
      defaultUser: false,
      onboardingManager: false,
      externalEmplManag: false,
      fm: false,
      om: false,
      visit: false,
      visitorManag: false,
      facilityManag: false,
      hostOfVisitors: false,
      receptionist: false,
      preregisterVisit: false,
      
    }
  }

  render() {

    return(
      <div className='UserRoles'>
        <p className='user_roles_header'>Applications, Systems & User Roles</p>
        <div className='select_header'>
          <p>Select the application, systems and User Roles for wich the user shoud be autorised.</p>
          <p style={{marginLeft:'20px'}}>Selected:</p>
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

          <li className='major_li'>
            <input
            type="checkbox"
            id="certify"
            name="certify"
            value="certify"/>
            <label> .СERTIFY</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="external"
            name="external"
            value="external"/>
            <label> .EXTERNAL</label>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="defaultUser"
              name="defaultUser"
              value="defaultUser"/>
              <p></p>
              <label> Default-User</label>
            </div>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="onboardingManager"
              name="onboardingManager"
              value="onboardingManager"/>
              <p></p>
              <label> Onboarding Manager</label>
            </div>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="externalEmplManag"
              name="externalEmplManag"
              value="externalEmplManag"/>
              <p></p>
              <label> External Employee Management</label>
            </div>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="fm"
            name="fm"
            value="fm"/>
            <label> .FM</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="om"
            name="om"
            value="om"/>
            <label> .OM</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="visit"
            name="visit"
            value="visit"/>
            <label> .VISIT</label>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="visitorManag"
              name="visitorManag"
              value="visitorManag"/>
              <p></p>
              <label> Visitor Management</label>
            </div>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="facilityManag"
              name="facilityManag"
              value="facilityManag"/>
              <p></p>
              <label> Facility Management</label>
            </div>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="hostOfVisitors"
              name="hostOfVisitors"
              value="hostOfVisitors"/>
              <p></p>
              <label> Host Of Visitors</label>
            </div>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="receptionist"
              name="receptionist"
              value="receptionist"/>
              <p></p>
              <label> Receptionist</label>
            </div>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="preregisterVisit"
              name="preregisterVisit"
              value="preregisterVisit"/>
              <p></p>
              <label> Preregister VISIT</label>
            </div>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="wTime"
            name="wTime"
            value="wTime"/>
            <label> .WTime</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="checklistenManag"
            name="checklistenManag"
            value="checklistenManag"/>
            <label> #Checklisten Management</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="dijitalIdentity"
            name="dijitalIdentity"
            value="dijitalIdentity"/>
            <label> #DijitalIdentityManagement</label>
            <div className='minor_div'>
              <input
              type="checkbox"
              id="dimManag"
              name="dimManag"
              value="dimManag"/>
              <p></p>
              <label> DIM-Management</label>
            </div>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="employeeNetwork"
            name="employeeNetwork"
            value="employeeNetwork"/>
            <label> #Employee Network</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="fotoApp"
            name="fotoApp"
            value="fotoApp"/>
            <label> #FotoApp</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="onboarding"
            name="onboarding"
            value="onboarding"/>
            <label> #Onboarding</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="roomsResources"
            name="roomsResources"
            value="roomsResources"/>
            <label> #Rooms & Resources</label>
          </li>

          <li className='major_li'>
            <input
            type="checkbox"
            id="userIdentity"
            name="userIdentity"
            value="userIdentity"/>
            <label> #UserIdentity</label>
          </li>

          </div>
          <div className='selected_roles'></div>
        </div>
      </div>
    )
  }
}