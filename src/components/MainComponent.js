import React,{ Component }    from 'react';
import { STAFFS,DEPARTMENTS } from '../shared/staffs';
import StaffListComponent     from './StaffListComponent';
import Header from './Header';
import Footer from './Footer';


export default class MainComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS

    };
  }

  render() {
      return(
          <div>
            <Header/>
            <StaffListComponent staffs={this.state.staffs}/>
            <Footer />
          </div>
      );

  }
}

