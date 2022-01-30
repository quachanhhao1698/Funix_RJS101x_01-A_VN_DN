import React from 'react';
import {Card,CardTitle,CardText,Col} from 'reactstrap';


function RenderListPayrollOfStaffs({staff}){

    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const salary = (parseFloat(staff.salaryScale) * basicSalary) + (parseFloat(staff.overTime) * overTimeSalary);

    return(

        <Card key={staff.id}>
            <CardTitle>{staff.name}</CardTitle>
            <CardText>Mã nhân viên: {staff.id}</CardText>
            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
            <input type={"text"} disabled value={"Lương: " + salary.toFixed(1)}/>

        </Card>
    );
}

export default function PayrollComponent(props) {
    const payrollOfStaffs = props.payroll.map((payroll) =>{

        return(
            <Col className="col-12 col-md-6 col-lg-4 mt-3">
                <RenderListPayrollOfStaffs staff={payroll}/>
            </Col>
        );

    });
    
  return(
      <div className='container mt-3'>
        <div className="col-12">
            <h3>Bảng lương</h3>
            <hr/>
        </div>
        <div className='row mb-3'>
            {payrollOfStaffs}
        </div>
      </div>
  );
}
