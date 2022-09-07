import React from 'react'

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        birthData: ''
    }

    constructor(props) {
        super(props);
        this.handleChangeFN = this.handleChangeFN.bind(this);
        this.handleChangeLN = this.handleChangeLN.bind(this);
        this.handleChangeBD = this.handleChangeBD.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFN(e) {
        const firstName = e.target.value
        this.setState({
            firstName
        })
    }

    handleChangeLN(e) {
        const lastName = e.target.value
        this.setState({
            lastName
        })
    }

    handleChangeBD(e) {
        const birthData = e.target.value
        this.setState({
            birthData
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
    

    render() {

        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <label>First Name</label>
                    <input type='text' value={this.state.firstName} onChange={this.handleChangeFN}></input>
                    </p>
                    <p>
                    <label>Last Name</label>
                    <input type='text' value={this.state.lastName} onChange={this.handleChangeLN}></input>
                    </p>
                    <p>
                    <label>Date of birth</label>
                    <input type='date' value={this.state.birthData} onChange={this.handleChangeBD}></input>
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