import React from "react";

class GeneralInfo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            general: {
                name: '',
                email: '',
                phone: '',
            },
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    // Input event handlers
    handleNameChange = (e) => {
        this.setState({
            general: {
                name: e.target.value
            }
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            general: {
                email: e.target.value
            }
        });
    };

    handlePhoneChange = (e) => {
        this.setState({
            general: {
                phone: e.target.value
            }
        });
    };


    // // Submit event handler
    // handleSubmit = (e) => {

    // }


    render(){
        return(
            <form className="form" >
                <div className="name-cont">
                    <label htmlFor="nameInput" >Name: </label>
                    <input type='text' id="nameInput" value={this.state.general.name} onChange={this.handleNameChange} ></input>
                </div>
                <div className="email-cont">
                    <label htmlFor="emailInput" >Email: </label>
                    <input type='email' id="emailInput" value={this.state.general.email} onChange={this.handleEmailChange} ></input>
                </div>
                <div className="phone-cont">
                    <label htmlFor="phoneInput" >Phone Number: </label>
                    <input type='tel' id="phoneInput" value={this.state.general.phone} onChange={this.handlePhoneChange} ></input>
                </div>
                <button type="submit" className="submit-button" >Submit</button>
            </form>
        )
    }
}

export default GeneralInfo;