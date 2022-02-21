import React,{ Component }      from 'react';
import StaffListComponent       from './StaffListComponent';
import {Switch,Route,Redirect,withRouter}  from 'react-router-dom';
import { connect }              from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import StaffDetailComponent from './StaffDetailComponent';
import DepartmentsComponent from './DepartmentsComponent';
import PayrollComponent from './PayrollComponent';


const mapStateToProps = state => {
  return{
      staffs: state.staffs,
      staffsPayroll: state.staffsPayroll,
      departments: state.departments,
      staffDepartments: state.departments
  }
}

class MainComponent extends Component {

 

  render() {

    const StaffWithId = ({match}) => {
      return(
          <StaffDetailComponent
            staff={this.props.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} 
            
          />
      );
    }; 

      return(
          <div>
            <Header/>
            <Switch>
              <Route exact path="/nhanvien"          component={()=> <StaffListComponent staffs={this.props.staffs} departments={this.props.staffDepartments}/>}/>
              <Route       path="/nhanvien/:staffId" component={StaffWithId} />
              <Route exact path="/phongban"          component={()=> <DepartmentsComponent departments={this.props.departments} />} />
              <Route exact path="/bangluong"         component={()=> <PayrollComponent  payroll={this.props.staffsPayroll}/>} />
              
              <Redirect to="/nhanvien" />

            </Switch>
            <Footer />
            
          </div>
      );

  }
}

export default withRouter(connect(mapStateToProps)(MainComponent));

