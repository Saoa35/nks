import React from 'react'

class Form extends React.Component {

    state = {
        surName: '',
        firstName: '',
        userName: '',
        email:'',


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

        return(

            <div className='create-user-wrapper'>
                

                <div>
                <form onSubmit={this.handleSubmit}>
                    
                  <input type='text' name='surName' placeholder='Surname' value={this.state.surName} onChange={this.handleChange}></input>
                  <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}></input>
                  <input type='text' name='userName' value={this.state.userName} onChange={this.handleChange}></input>
                  <input type='email' name='email' value={this.state.email} onChange={this.handleChange}></input>
                </form>
            </div>
            </div>
            
        )
    }
}

export default Form;