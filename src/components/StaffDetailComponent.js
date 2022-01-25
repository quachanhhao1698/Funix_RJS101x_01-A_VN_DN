import React,{Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import {ROLE} from '../shared/staffs';



function RenderStaff({staff}) {
    if(staff != null){
        return(
            <div className="row">

                <div className="col-12 col-sm-4 col-md-3 mt-3">
                    <div>
                        <CardImg width="100%" height="100%" src={staff.image} alt={staff.name} />
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-9 mt-3">
                <div>
                    <CardBody>
                        <CardTitle>Họ và Tên: {staff.name}</CardTitle>
                        <RenderLevel level={staff.salaryScale}/>
                       
                        <CardText>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name} </CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã đi làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </div>

                </div>
        </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

function RenderLevel({level}){
   
        if(level > 1){
            return (
                <CardText>Chức vụ: {ROLE.MANAGER_STAFF}</CardText>
            );
        }else {
            return (
                <CardText>Chức vụ: {ROLE.NORMAL_STAFF}</CardText>
            );
        }
    
}


function StaffDetailComponent(props) {
    let staff=props.staff;
    console.log(props.staff);

    if(props.staff){
        staff = (
            <div className="row">
                <RenderStaff staff={props.staff} />
            </div>
        )
    }else {
        staff = <div>fsdfsdfsd</div>
    }

    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            {staff}
        </div>
    );
}

export default StaffDetailComponent;