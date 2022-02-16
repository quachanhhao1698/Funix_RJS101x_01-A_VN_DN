import React,{ Component }      from 'react';
import { STAFFS,DEPARTMENTS }   from '../shared/staffs';
import StaffListComponent       from './StaffListComponent';
import {Switch,Route,Redirect}  from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffDetailComponent from './StaffDetailComponent';
import DepartmentsComponent from './DepartmentsComponent';
import PayrollComponent from './PayrollComponent';

export default class MainComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      staffs: STAFFS,
      staffsPayroll: STAFFS,
      departments: DEPARTMENTS,
      staffDepartments: DEPARTMENTS
    };
  }

  render() {

    const StaffWithId = ({match}) => {
      return(
          <StaffDetailComponent
            staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} 
            
          />
      );
    }; 

      return(
          <div>
            <Header/>
            <Switch>
              <Route exact path="/nhanvien"          component={()=> <StaffListComponent staffs={this.state.staffs} departments={this.state.staffDepartments}/>}/>
              <Route       path="/nhanvien/:staffId" component={StaffWithId} />
              <Route exact path="/phongban"          component={()=> <DepartmentsComponent departments={this.state.departments} />} />
              <Route exact path="/bangluong"         component={()=> <PayrollComponent  payroll={this.state.staffsPayroll}/>} />
              
              <Redirect to="/nhanvien" />

            </Switch>
            <Footer />
            
          </div>
      );

  }
}

