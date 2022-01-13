import React,{Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class staffDetail extends Component {

    renderStaff(staffs){
        if(staffs != null){
            <div className="col-12 col-sm-6 col-md-4  mt-1">
                <Card>
                    <CardTitle>Họ và tên: {staffs.name}</CardTitle>
                    <CardText>Ngày sinh: {staffs.doB}</CardText>
                    <CardText>Ngày vào công ty: {staffs.startDate}</CardText>
                    <CardText>Phòng ban:{staffs.department} </CardText>
                    <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staffs.overTime}</CardText>
                </Card>

            </div>
        }
    }

    render (){
        let staff;
        if(this.props.selectedStaff){
            staff = (
                <div className="row">
                    {this.renderStaff(this.props.selectedStaff)}
                </div>
            )
        }

        return (
            <div className="container">
                {staff}
            </div>
        );
    }
}

export default staffDetail;