import React,{Component} from "react";
import {Media} from 'reactstrap';
import {STAFFS} from '../shared/staffs';

class StaffList extends Component{
    constructor(props) {
    super(props);

    this.state = {
        staffs:STAFFS
        }
    }

    render() {

        const staffList=this.state.staffs.map((staffs)=> {
            return (
                <div key={staffs.id} className="col-12 col-md-5 mt-1">
                    <Media tag="li">
                        <Media heading>{staffs.name}</Media>
                    </Media>

                </div>
            );
        });

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
