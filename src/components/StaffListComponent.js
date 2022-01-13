import React,{Component} from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import staffDetail from "./StaffDetailComponent";

class StaffList extends Component{
    constructor(props) {
    super(props);

    this.state = {
        selectedStaff:null
        }
    }

    onStaffSelect(staffs){
        this.setState({selectedStaff: staffs});
    }

    render() {

        const staffList=this.props.staffs.map((staffs)=> {
            return (
                <div key={staffs.id} className="col-12 col-sm-6 col-md-4  mt-1">
                    <Card onClick = {() => this.onStaffSelect(staffs)}>
                        <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                        <CardBody>
                            <CardTitle >{staffs.name}</CardTitle>
                        </CardBody>
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

                    <div className="row">
                        <staffDetail selectedStaff={this.state.selectedStaff}/>
                    </div>
                
            </div>
        );
    }
}

export default StaffList;
