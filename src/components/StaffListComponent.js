import React,{Component} from "react";
import {Media} from 'reactstrap';
import {STAFFS} from './shared/staffs.jsx'

class StaffList extends Component{
    constructor(props) {
    super(props);

    this.state = {
        staffs:STAFFS
        }
    }

    render() {
        const staffList;
        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {staffList}
                    </Media>
                </div>
            </div>
        );
    }
}

export default StaffList;
