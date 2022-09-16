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
      confirmPas:'',
      checkbox: false
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
          [name]: currValue,
      })
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
    }

    // componentDidMount() {
      // {if(this.state.password.value !== this.state.confirmPas.value) {
      //   alert('Введенный Вами пароль не совпадает с подтверждением!')
        // console.log(this.state.password.value);
      // }}
      // console.log(this.state);
    // }
    

    render() {

    

      return(

        <div className='Form'>
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
            
            <select name='realm' value={this.state.realm} onChange={this.handleChange}>
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
              name='confirmPas' 
              placeholder='Confirm Password' 
              style={{marginTop:'0'}} 
              value={this.state.confirmPas} 
              onChange={this.handleChange}
            />
            
            <div className='checkbox-div'>
              <input 
                type='checkbox' 
                name='checkbox' 
                style={{width:'20px', margin:'15px 10px 15px 0'}} 
                value={this.state.checkbox} 
                onChange={this.handleChange}
              /> 
              <p style={{display:'inline-block'}}>Temporary Password</p>
            </div>

            {/* <button>
              Get state value
            </button> */}

          </form>
          <div><hr style={{width: '600px'}}/></div>
        </div>
          
      )
    }
}

export default Form;