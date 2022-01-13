import React,{Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
import {ROLE} from '../shared/staffs';



class StaffDetail extends Component {

    renderStaff(staffs){
        if(staffs != null){
            return(
                <div className="col-12 col-sm-6 col-md-4  mt-1">
                    <Card>
                        <CardImg width="100%" src={staffs.image} alt={staffs.name} />

                        <CardBody>
                            <CardTitle>Họ và Tên: {staffs.name}</CardTitle>
                            {this.renderLevel(this.props.selectedStaff)}
                            <CardText>Ngày sinh: {dateFormat(staffs.doB,"dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(staffs.startDate,"dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {staffs.department.name} </CardText>
                            <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
                            <CardText>Số ngày đã đi làm thêm: {staffs.overTime}</CardText>
                        </CardBody>
                    </Card>
            </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderLevel(staffs){
        let level = staffs.salaryScale;
        if(staffs != null){
            if(level > 1){
                return (
                    <CardText>Chức vụ: {ROLE.MANAGER_STAFF}</CardText>
                );
            }else {
                return (
                    <CardText>Chức vụ: {ROLE.NORMAL_STAFF}</CardText>
                );
            }
        }else{
            return <div></div>
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
        }else {
            staff = <div></div>
        }

        return (
            <div className="container">
                {staff}
            </div>
        );
    }
}

export default StaffDetail;