import React from 'react'

class Form extends React.Component {

    state = {
      surName: '',
      firstName: '',
      userName: '',
      email:'',
      realm: 'lbbwImmo',
      password: '',
      confirmPas:'',
      checkbox: false
    }

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      const { name, value } = e.target;
      this.setState({
          [name]: value
      })
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
    }
    

    render() {

    console.log(this.state);

      return(

        <div className='create-user-wrapper'>
          <div className='create-user-header'>
            <p className='foto'><span>Bild</span></p>
          </div>
          <form onSubmit={this.handleSubmit}>  
            <input type='text' name='surName' placeholder='Surname' value={this.state.surName} onChange={this.handleChange}/>
            <input type='text' name='firstName' placeholder='Firstname' value={this.state.firstName} onChange={this.handleChange}/>
            <input type='text' name='userName' placeholder='Username' value={this.state.userName} onChange={this.handleChange}/>
            <input type='email' name='email' placeholder='Email adress' value={this.state.email} onChange={this.handleChange}/>
            
            <select name='realm' placeholder='Realm' value={this.state.realm} onChange={this.handleChange}>
              <option value='lbbwImmo'>LBBW Immo</option>
            </select>

           
            <p style={{width:'86%', marginTop:'25px', fontWeight: 'bold'}}>Password</p>
            <input type='password' name='password' placeholder='Password' style={{marginTop:'0'}} value={this.state.password} onChange={this.handleChange}/>
            <input type='password' name='confirmPas' placeholder='Confirm Password' style={{marginTop:'0'}} value={this.state.confirmPas} onChange={this.handleChange}/>
            
            <div className='checkbox-div'>
              <input type='checkbox' name='checkbox' className='checkbox-input' style={{width:'20px', margin:'15px 10px 15px 0'}} value={this.state.checkbox}/> 
              <p style={{display:'inline-block'}}>Temporary Password</p>
            </div>
          </form>
          <p><hr style={{width: '600px'}}/></p>
        </div>
        
          
      )
    }
}

export default Form;