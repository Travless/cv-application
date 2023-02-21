import React from "react";

class Experience extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            experience: {
                company: '',
                position: '',
                tasks: [],
                start: '',
                end: '',
            }
        }
    }

    render(){
        return(
            <form className="form" >
                <div className="companyNameCont" >
                    <label htmlFor="companyNameInput" >Company Name: </label>
                    <input type="text" id="companyNameInput" value={} onChange={} />
                </div>
                <div className="positionTitleCont" >
                    <label htmlFor="positionTitleInput" >Position Title: </label>
                    <input type="text" id="positionTitleInput" value={} onChange={} />
                </div>
                <div className="tasksCont" >
                    <label htmlFor="tasksInput" >Job Responsibilities: </label>
                    <input type="text" id="tasksInput" value={} onChange={} />
                </div>
                <div className="startCont" >
                    <label htmlFor="startInput" >Start Date: </label>
                    <input type="text" id="startInput" value={} onChange={} />
                </div>
                <div className="endCont" >
                    <label htmlFor="endInput" >End Date: </label>
                    <input type="text" id="endInput" value={} onChange={} />
                </div>
                <button className="submit" type="submit" >Submit</button>
            </form>
        )
    }
}

export default Experience;