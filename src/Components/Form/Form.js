import React from 'react';
import './Form.css';

class Form extends React.Component {

    state = {
      surName: '',
      firstName: '',
      userName: '',
      email:'',
      realm: 'lbbwImmo',
      password: '',
      confirmPassword:'',
      checkbox: false,
      errors: ''
    }

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      const { type, checked, name, value } = e.target;
      const currValue = type ==='checkbox' ? checked : value;

      this.setState({
          [name]: currValue
      })
    }

    handleSubmit(e) {
      e.preventDefault();

      (this.state.password !== this.state.confirmPassword) 
        ? this.setState({ errors: 'The password you entered does not match with the confirmation'})
        : this.setState({ errors : ''});

        console.log(this.state);
      }


    render() {

    

      return(

        <div className='Form'>
          <div className='static_header'>
            <div className='user_information'>User Information</div>
            <div style={{width:'15%'}}><hr/></div>
            <div className='user_roles'>Applications, Systems & User Roles</div>
          </div>
          <div className='create-user-header'>
            <p className='foto'><span>Bild</span></p>
          </div>
          <form onSubmit={this.handleSubmit}>  
            <input 
              type='text' 
              name='surName' 
              placeholder='Surname' 
              value={this.state.surName} 
              onChange={this.handleChange}
            />

            <input 
              type='text' 
              name='firstName' 
              placeholder='Firstname' 
              value={this.state.firstName} 
              onChange={this.handleChange}
            />

            <input 
              type='text' 
              name='userName' 
              placeholder='Username' 
              value={this.state.userName} 
              onChange={this.handleChange}
            />

            <input 
              type='email' 
              name='email' 
              placeholder='Email adress' 
              value={this.state.email} 
              onChange={this.handleChange}
            />
            
            <select 
              name='realm' 
              value={this.state.realm} 
              style={{width: '87%', borderColor: 'rgb(163, 156, 156)'}} 
              onChange={this.handleChange}>
              <option value='lbbwImmo'>LBBW Immo</option>
            </select>
           
            <p style={{width:'86%', marginTop:'25px', fontWeight: 'bold'}}>Password</p>

            <input 
              type='password' 
              name='password' 
              placeholder='Password' 
              style={{marginTop:'0'}} 
              value={this.state.password} 
              onChange={this.handleChange}
            />

            <input 
              type='password' 
              name='confirmPassword' 
              placeholder='Confirm Password' 
              style={{marginTop:'0'}} 
              value={this.state.confirmPassword} 
              onChange={this.handleChange}
            />

            <div className="error">
              {this.state.errors ? this.state.errors : ''}
              </div>
            
            <div className='checkbox-div'>
              <input 
                type='checkbox' 
                name='checkbox' 
                value={this.state.checkbox} 
                onChange={this.handleChange}
              /> 
              <p style={{display:'inline-block' }}>Temporary Password</p>
            </div>
            <div><hr style={{width: '600px'}}/></div>

            <div className='buttons_footer'>
            <button className='buttons cansel_button'>
              Cancel
            </button>
            <button className='buttons save_button'>
              Save
            </button>
            </div>
          </form>
        </div>
          
      )
    }
}

export default Form;