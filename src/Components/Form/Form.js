import React from 'react'

class Form extends React.Component {

    state = {
      surName: '',
      firstName: '',
      userName: '',
      email:'',
      realm: ''

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
            <p className='foto'><span>Build</span></p>
          </div>
          <form onSubmit={this.handleSubmit}>  
            <input type='text' name='surName' placeholder='Surname' value={this.state.surName} onChange={this.handleChange}></input>
            <input type='text' name='firstName' placeholder='Firstname' value={this.state.firstName} onChange={this.handleChange}></input>
            <input type='text' name='userName' placeholder='Username' value={this.state.userName} onChange={this.handleChange}></input>
            <input type='email' name='email' placeholder='Email adress' value={this.state.email} onChange={this.handleChange}></input>
            
            <select name='realm' placeholder='Realm' value={this.state.realm} onChange={this.handleChange}>
              <option value='lbbwImmo'>LBBW Immo</option>
            </select>
          </form>
        </div>
          
      )
    }
}

export default Form;