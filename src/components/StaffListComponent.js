import React,{Component} from "react";
import {Card,CardTitle} from 'reactstrap';

class StaffList extends Component{
    constructor(props) {
    super(props);

    this.state = {
        selectStaff:null
        }
    }

    onStaffSelect(staffs){
        this.setState({selectStaff: staffs});
    }

    render() {

        const staffList=this.props.staffs.map((staffs)=> {
            return (
                <div key={staffs.id} className="col-12 col-sm-6 col-md-4  mt-1">
                    <Card onClick = {() => this.onStaffSelect(staffs)}>
                        <CardTitle heading>{staffs.name}</CardTitle>
                    </Card>

                </div>
            );
        });

        return(
            <div className="container">
                
                    <div className="row">
                        {staffList}
                    </div>
                    <div>
                        <p>Bấm vào tên nhân viên để xem thông tin</p>
                    </div>
                
            </div>
        );
    }
}

export default StaffList;
