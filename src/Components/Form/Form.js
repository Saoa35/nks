import React from 'react'

class Form extends React.Component {

    state = {
        value: '',
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        const value = e.target.value
        this.setState({
            value
        })
    }

    render() {

        return(

            <div>
                <form>
                    <label>First Name</label>
                    <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                </form>
            </div>
            
        )
    }
}

export default Form;