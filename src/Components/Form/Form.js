import React from 'react'

class Form extends React.Component {

    state = {
        value: '',
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        const value = e.target.value
        this.setState({
            value
        })
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log(this.state.value);
    }
    

    render() {

        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <label>First Name</label>
                    <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                    </p>
                    <p>
                    <label>Last Name</label>
                    <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                    </p>
                    <p>
                    <label>Date of birth</label>
                    <input type='date' value={this.state.value} onChange={this.handleChange}></input>
                    </p>
                    <p className='submitButton'>
                        <button>
                            Submit
                        </button>
                    </p>
                </form>
            </div>
            
        )
    }
}

export default Form;