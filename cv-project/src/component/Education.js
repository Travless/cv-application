import React from "react";

class Education extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            education: {
                school: '',
                degree: '',
                grad: '',
            }
        };

        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleDegreeChange = this.handleSchoolChange.bind(this);
        this.handleGradChange = this.handleGradChange.bind(this);
    }

    handleSchoolChange = (e) => {
        this.setState({
            education: {
                school: e.target.value
            }
        });
    };

    handleDegreeChange = (e) => {
        this.setState({
            education: {
                degree: e.target.value
            }
        });
    };

    handleGradChange = (e) => {
        this.setState({
            education: {
                grad: e.target.value
            }
        })
    }


    render(){
        return(
            <form className="form">
                <div className="schoolCont">
                    <label htmlFor="schoolInput" >School Name: </label>
                    <input type="text" id="schoolInput" value={this.state.education.school} onChange={this.handleSchoolChange} />
                </div>
                <div className="degreeCont" >
                    <label htmlFor="degreeInput" >Degree: </label>
                    <input type="text" id="degreeInput" value={this.state.education.degree} onChange={this.handleDegreeChange} />
                </div>
                <div className="gradDateCont" >
                    <label htmlFor="gradDateInput" >Graduation Year: </label>
                    <input type="date" id="gradDateInput" value={this.state.education.grad} onChange={this.handleGradChange} />
                </div>
                <button className="submit" type="submit">Submit</button>
            </form>
        )
    }
}

export default Education;