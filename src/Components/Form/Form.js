import React from 'react'

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        birthData: ''
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
                <header className='create-user-header'>

                </header>

                <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}></input>
                    
                    <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}></input>
                    
                    <input type='date' name='birthData' value={this.state.birthData} onChange={this.handleChange}></input>

                    <p className='submitButton'>
                        <button>
                            Submit
                        </button>
                    </p>
                </form>
            </div>
            </div>
            
        )
    }
}

export default Form;