import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import StaffList from './components/StaffListComponent';


function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ứng dụng quản lú nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <StaffList/>
    </div>
  );
}

export default App;
