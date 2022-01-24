import React,{ Component }      from 'react';
import { STAFFS,DEPARTMENTS }   from '../shared/staffs';
import StaffListComponent       from './StaffListComponent';
import {Switch,Route,Redirect}  from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffDetailComponent from './StaffDetailComponent';


export default class MainComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS

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
              <Route exact path="/nhanvien" component={()=> <StaffListComponent staffs={this.state.staffs}/> } />
              <Redirect to="/nhanvien" />
            </Switch>
            
            <Footer />
            
          </div>
      );

  }
}

