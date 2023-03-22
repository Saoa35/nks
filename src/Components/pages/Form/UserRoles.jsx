import React from "react";

export const UserRoles = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     access: false,
  //     accessManager: false,
  //     card: false,
  //     cardManagement: false,
  //     certify: false,
  //     external: false,
  //     defaultUser: false,
  //     onboardingManager: false,
  //     externalEmplManag: false,
  //     fm: false,
  //     om: false,
  //     visit: false,
  //     visitorManag: false,
  //     facilityManag: false,
  //     hostOfVisitors: false,
  //     receptionist: false,
  //     preregisterVisit: false,
  //     wTime: false,
  //     checklistenManag: false,
  //     dijitalIdentity: false,
  //     dimManag: false,
  //     employeeNetwork: false,
  //     fotoApp: false,
  //     onboarding: false,
  //     roomsResources: false,
  //     userIdentity: false
  //   }

  // this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   const { type, checked, name, value } = e.target;
  //   const currValue = type ==='checkbox' ? checked : value;

  //   this.setState({
  //       [name]: currValue
  //   })
  // }

  return (
    <div className="UserRoles">
      <p className="user_roles_header">Applications, Systems & User Roles</p>
      <div className="select_header">
        <p>
          Select the application, systems and User Roles for wich the user shoud
          be autorised.
        </p>
        <p style={{ marginLeft: "20px" }}>Selected:</p>
      </div>
      <div className="user_roles_main">
        <div className="user_roles_list">
          <li className="major_li">
            <input
              type="checkbox"
              id="access"
              name="access"
              // value={this.state.access}
              // onChange={this.handleChange}
            />
            <label> .ACCESS</label>
            <div className="minor_div">
              <input
                type="checkbox"
                id="accessManager"
                name="accessManager"
                // value={this.state.accessManager}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Access Manager</label>
            </div>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="card"
              name="card"
              // value={this.state.card}
              // onChange={this.handleChange}
            />
            <label> .CARD</label>
            <div className="minor_div">
              <input
                type="checkbox"
                id="cardManagement"
                name="cardManagement"
                // value={this.state.cardManagement}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Card Management</label>
            </div>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="certify"
              name="certify"
              // value={this.state.certify}
              // onChange={this.handleChange}
            />
            <label> .СERTIFY</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="external"
              name="external"
              // value={this.state.external}
              // onChange={this.handleChange}
            />
            <label> .EXTERNAL</label>
            <div className="minor_div">
              <input
                type="checkbox"
                id="defaultUser"
                name="defaultUser"
                // value={this.state.defaultUser}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Default-User</label>
            </div>
            <div className="minor_div">
              <input
                type="checkbox"
                id="onboardingManager"
                name="onboardingManager"
                // value={this.state.onboardingManager}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Onboarding Manager</label>
            </div>
            <div className="minor_div">
              <input
                type="checkbox"
                id="externalEmplManag"
                name="externalEmplManag"
                // value={this.state.externalEmplManag}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> External Employee Management</label>
            </div>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="fm"
              name="fm"
              // value={this.state.fm}
              // onChange={this.handleChange}
            />
            <label> .FM</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="om"
              name="om"
              // value={this.state.om}
              // onChange={this.handleChange}
            />
            <label> .OM</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="visit"
              name="visit"
              // value={this.state.visit}
              // onChange={this.handleChange}
            />
            <label> .VISIT</label>
            <div className="minor_div">
              <input
                type="checkbox"
                id="visitorManag"
                name="visitorManag"
                // value={this.state.visitorManag}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Visitor Management</label>
            </div>
            <div className="minor_div">
              <input
                type="checkbox"
                id="facilityManag"
                name="facilityManag"
                // value={this.state.facilityManag}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Facility Management</label>
            </div>
            <div className="minor_div">
              <input
                type="checkbox"
                id="hostOfVisitors"
                name="hostOfVisitors"
                // value={this.state.hostOfVisitors}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Host Of Visitors</label>
            </div>
            <div className="minor_div">
              <input
                type="checkbox"
                id="receptionist"
                name="receptionist"
                // value={this.state.receptionist}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Receptionist</label>
            </div>
            <div className="minor_div">
              <input
                type="checkbox"
                id="preregisterVisit"
                name="preregisterVisit"
                // value={this.state.preregisterVisit}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> Preregister VISIT</label>
            </div>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="wTime"
              name="wTime"
              // value={this.state.wTime}
              // onChange={this.handleChange}
            />
            <label> .WTime</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="checklistenManag"
              name="checklistenManag"
              // value={this.state.checklistenManag}
              // onChange={this.handleChange}
            />
            <label> #Checklisten Management</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="dijitalIdentity"
              name="dijitalIdentity"
              // value={this.state.dijitalIdentity}
              // onChange={this.handleChange}
            />
            <label> #DijitalIdentityManagement</label>
            <div className="minor_div">
              <input
                type="checkbox"
                id="dimManag"
                name="dimManag"
                // value={this.state.dimManag}
                // onChange={this.handleChange}
              />
              <p></p>
              <label> DIM-Management</label>
            </div>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="employeeNetwork"
              name="employeeNetwork"
              // value={this.state.employeeNetwork}
              // onChange={this.handleChange}
            />
            <label> #Employee Network</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="fotoApp"
              name="fotoApp"
              // value={this.state.fotoApp}
              // onChange={this.handleChange}
            />
            <label> #FotoApp</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="onboarding"
              name="onboarding"
              // value={this.state.onboarding}
              // onChange={this.handleChange}
            />
            <label> #Onboarding</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="roomsResources"
              name="roomsResources"
              // value={this.state.roomsResources}
              // onChange={this.handleChange}
            />
            <label> #Rooms & Resources</label>
          </li>

          <li className="major_li">
            <input
              type="checkbox"
              id="userIdentity"
              name="userIdentity"
              // value={this.state.userIdentity}
              // onChange={this.handleChange}
            />
            <label> #UserIdentity</label>
          </li>
        </div>
        <div className="selected_roles"></div>
      </div>
    </div>
  );
};
