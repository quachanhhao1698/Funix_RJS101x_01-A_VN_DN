import React,{ useState} from "react";
import {Card,CardImg,CardBody,CardTitle,Button,Col,Row,Container,Input,Modal,ModalBody,ModalHeader,Form,FormGroup,Label} from 'reactstrap';
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







function StaffListComponent(props) {
    

        const [col, setCol] = useState(0); 
        // Số lượng nhân viên
        let countStaffs=props.staffs.length;

        const[keyWord, setKeyWord]= useState('');
        const[searchItem, setSearchItem] = useState('')
        const[togleModal,setTogleModal] = useState(false);

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

                <Col key={staffs.id}
                    xs={col || "6"}
                    md={col || "4"}
                    lg={col || "2"}                
                    className={"mt-3"}
                    >
                        <RenderStaffs staff={staffs} onclick={props.onClick}/>
                    

                </Col>
            );
        });

        const handleSearch = ()=>{
            setSearchItem(keyWord)
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
                    <Col className={'col-12 col-md-5 mt-2'}>
                        <Input type="text" id="search" name="search" value={keyWord}
                                placeholder="Tìm kiếm"
                                onChange={(e)=>{ setKeyWord(e.target.value)}}
                        />
                    </Col>
                    <Col className={'col-12 col-md-3 mt-2'}>
                        <Button color='primary' onClick={handleSearch}>Tìm</Button>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <Button className="mt-2" color='success'
                                onClick={()=>{setTogleModal(!togleModal)}}
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

                {<Modal isOpen={togleModal} toggle={()=> setTogleModal(false)}>
                    <ModalHeader toggle={()=> setTogleModal(false)}>Thêm nhân viên</ModalHeader>

                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="staffName">Tên</Label>
                                <Input type="text" id="staffName" name="staffName" placeholder="Nhập họ và tên"/>

                                <Label htmlFor="dOB">Ngày sinh</Label>
                                <Input type="date" id="dOB" name="dOB"/>

                                <Label htmlFor="startDate">Ngày vào công ty</Label>
                                <Input type="date" id="startDate" name="startDate"/>

                                <Label htmlFor="department">Phòng ban</Label>
                                <Input type="text" id="department" name="department" placeholder="Nhập tên phòng ban"/>

                                

                                <Label htmlFor="salaryScale">Hệ số lương</Label>
                                <Input type="text" id="salaryScale" name="salaryScale" value="1"/>

                                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                                <Input type="text" id="annualLeave" name="annualLeave" value="0"/>

                                <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                                <Input type="text" id="overTime" name="overTime" value="0"/>

                                <Button className="mt-2" color="primary"
                                        >
                                            Thêm</Button>

                                

                                
                            </FormGroup>
                        </Form>
                    </ModalBody>
                   
                </Modal>              
                }
                 
                
            </Container>
        );
    
}

export default StaffListComponent;
