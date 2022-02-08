import React, { Component } from 'react';
import {Col,Card,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderDepartments({department}) {
return(
  <Card key={department.id}>
      <CardTitle className={""}>{department.name}</CardTitle>
      <CardText>Số lượng nhân viên : {department.numberOfStaff}</CardText>
  </Card>
);
}

export default function DepartmentsComponent(props) {

  const departmentList = props.departments.map((department)=>{
    return(
      <Col className={"col-12 col-md-6 col-lg-4 mt-3"}>
        <RenderDepartments department={department}/>
      </Col>
    );

  });
 return(
   <div className='container mt-3'>
      <div className="col-12">
        <h3>Phòng Ban</h3>
        <hr/>
      </div>
     <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
          <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
      </div>
     <div className='row mt-3 mb-3'>
      {departmentList}
     </div>
   </div>
 );
}
