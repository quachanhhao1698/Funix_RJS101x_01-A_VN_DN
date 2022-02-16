import React,{ useRef, useState} from "react";
import {Card,CardImg,CardBody,CardTitle,Button,Col,Row,Container,Input,Modal,ModalBody,ModalHeader,Form,FormGroup,Label, ButtonGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function RenderStaffs({staff,onClick}){
    return(
        <Card className={"mt-3 card-nv"}>
            <Link to={`/nhanvien/${staff.id}`}>
                <CardImg className={"cardImg-nv"} width="100%" src={staff.image} alt={staff.name} />
                <CardBody width="100%" className={"cardBody-nv"}>
                    <CardTitle className={"cardTitle-nv"}>{staff.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    );
}

function Department({department}) {
    return(
        <option>{department.name}</option>
    );
}

function StaffListComponent(props) {    

        const [col, setCol] = useState(0); 
        // Số lượng nhân viên
        let countStaffs=props.staffs.length;

        // const[keyWord, setKeyWord]= useState('');
        const inputRef = useRef(null);
        const [toggleModal,setToggleModal] = useState(false);
        const [searchItem, setSearchItem] = useState('');

        const [name, setName] = useState('');
        const [dOB, setDOB] = useState('');
        const [salaryScale, setSalaryScale] = useState('1');
        const [startDate, setStartDate] = useState('');
        const [department, setDepartment] = useState('');
        const [annualLeave, setAnnualLeave] = useState('0');
        const [overTime, setOverTime] =useState('0');


        const [newStaffs, setNewStaffs] = useState([]);

        const staffDepartment = props.departments.map((department)=>{
            return(
                    <Department department={department}/>             
            );
        })
        
        const staffList = props.staffs
        //Lọc nhân viên có tên trùng với keyword
        .filter((val) => {
            if(searchItem === "") {
                return val;
            }
            else if(val.name.toLowerCase().includes(searchItem.toLocaleLowerCase())) { 
                return val;
            }
        })
        //Hiển thị danh sách nhân viên
        .map((staffs)=> {
            return (
                <Col key={staffs.id} xs={col || "6"} md={col || "4"} lg={col || "2"} className={"mt-3"} >
                        <RenderStaffs staff={staffs} onclick={props.onClick}/>
                </Col>
            );
        });

        console.log(props.staffs);

        const handleSearch = () =>{
           setSearchItem(inputRef.current.value);
        }

        const clearInput = () =>{
            setName('');
            setDOB('');
            setSalaryScale('1');
            setStartDate('');
            setDepartment('');
            setAnnualLeave('0');
            setOverTime('0');
        }

        const handleAdd= () =>{

            let staffId = countStaffs + 1;

            let newStaff = {   id:staffId,
                            name: name,
                            doB: dOB,
                            salaryScale: salaryScale,
                            startDate: startDate,
                            department: department,
                            annualLeave:annualLeave,
                            overTime:overTime,
                            image: '/assets/images/alberto.png'
                        };
                        props.staffs.push(newStaff);
            setNewStaffs([...newStaffs, newStaff]);
            setToggleModal(false);
            clearInput();
            

            alert(JSON.stringify(newStaff));
            console.log(newStaff);
        }


        return(
            <Container className={"mb-3"} >
                
               <Row>
               <Col className="col-12">
                    <h3 className="mt-3">Nhân Viên</h3>
                    <hr/>
                </Col>
                               
               </Row>    
                <Row>
                    {/* <Col className="col-12 col-sm-6 col-md-9">
                        <h5>Chọn số cột</h5>
                        <ButtonGroup>
                            <Button onClick={() => setCol(0)}>Mặc định</Button>
                            <Button onClick={() => setCol(6)}>2</Button>
                            <Button onClick={() => setCol(4)}>3</Button>
                            <Button onClick={() => setCol(3)}>4</Button>
                        </ButtonGroup>
                    </Col> */}

                    <Col className="col-12 col-md-12 mt-2">
                        <h5>Số lượng nhân viên : {countStaffs}</h5>
                    </Col>
                    
                </Row>
                <Row>
                    {/* Search sử dụng controlled */}

                    {/* <Col className={'col-12 col-md-5 mt-2'}>
                        <Input type="text" id="search" name="search" value={keyWord}
                                placeholder="Tìm kiếm"
                                onChange={(e)=>{ setKeyWord(e.target.value)}}
                        />
                    </Col>
                    <Col className={'col-12 col-md-3 mt-2'}>
                        <Button color='primary' onClick={handleSearch}>Tìm</Button>
                    </Col> */}

                    {/* Search sử dụng uncontrolled  */}
                    <Col className={'col-12 col-md-5 mt-2'}>
                        <Form>
                            <Input type="text" id="search" name="search" placeholder="Tìm kiếm" innerRef={inputRef} />    
                        </Form>
                    </Col>
                    <Col className={'col-12 col-md-3 mt-2'}>
                        <ButtonGroup>
                            <Button color='primary' onClick={handleSearch}>Tìm</Button>
                            <Button color='danger' onClick={()=> inputRef.current.value=""}>Xóa</Button>
                        </ButtonGroup>

                    </Col>
                    

                    <Col className="col-12 col-md-4">
                        <Button className="mt-2" color='success'
                                onClick={()=>{setToggleModal(!toggleModal)}}
                        >
                            <i className="fa fa-plus"></i> Thêm nhân viên</Button>
                    </Col>
                </Row>             
                <Row>                    
                    {staffList}
                </Row>
                <Row className={"m-3"}>
                    <h5>Bấm vào nhân viên để xem thông tin</h5>
                    <br/>
                   
                </Row>
                {<Modal isOpen={toggleModal} toggle={()=> setToggleModal(false)}>
                    <ModalHeader toggle={()=> setToggleModal(false)}>Thêm nhân viên</ModalHeader>

                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="staffName">Tên</Label>
                                <Input  type="text" id="staffName" name="staffName" placeholder="Nhập họ và tên"
                                        value={name} onChange={(e)=> setName(e.target.value)}

                                />

                                <Label htmlFor="dOB">Ngày sinh</Label>
                                <Input  type="date" id="dOB" name="dOB"
                                        value={dOB} onChange={(e)=> setDOB(e.target.value)}
                                />

                                <Label htmlFor="startDate">Ngày vào công ty</Label>
                                <Input  type="date" id="startDate" name="startDate"
                                        value={startDate} onChange={(e)=> setStartDate(e.target.value)}
                                />

                                <Label htmlFor="department">Phòng ban</Label>
                                <select className='form-control' id="department" name="department"
                                         value={department} onChange={(e)=> setDepartment(e.target.value)} >
                                             <option></option>
                                            {staffDepartment} 
                                </select>
                                <br/>
                                {/* <Input  type="text" id="department" name="department" placeholder="Nhập tên phòng ban"
                                        value={department} onChange={(e)=> setDepartment(e.target.value)}
                                /> */}

                                

                                <Label htmlFor="salaryScale">Hệ số lương</Label>
                                <Input  type="text" id="salaryScale" name="salaryScale"
                                        value={salaryScale} onChange={(e)=> setSalaryScale(e.target.value)}
                                />

                                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                                <Input  type="text" id="annualLeave" name="annualLeave"
                                        value={annualLeave} onChange={(e)=> setAnnualLeave(e.target.value)}
                                />

                                <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                                <Input  type="text" id="overTime" name="overTime"
                                        value={overTime} onChange={(e)=> setOverTime(e.target.value)}
                                />


                                

                                
                                <Button className="mt-2" color="primary" onClick={() => handleAdd() }>Thêm</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                   
                </Modal>              
                }
                 
                
            </Container>
        );
    
}

export default StaffListComponent;
