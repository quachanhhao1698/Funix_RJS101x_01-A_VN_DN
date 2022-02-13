import React,{ useState} from "react";
import {Card,CardImg,CardBody,CardTitle,Button,ButtonGroup,Col,Row,Container,Input} from 'reactstrap';
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

        const staffList = props.staffs
        //Lọc nhân viên có tên trùng với keyword
        .filter((val) => {
            if(keyWord === "") {
                return val;
            }
            else if(val.name.toLowerCase().includes(keyWord.toLocaleLowerCase())) { 
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





        return(
            <Container className={"mb-3"} >
                
               <Row>
               <Col className="col-12">
                    <h3 className="mt-3">Nhân Viên</h3>
                    <hr/>
                </Col>
                               
               </Row>
                
                <Row>
                    <Col className="col-12 col-sm-6 col-md-9">
                        <h5>Chọn số cột</h5>
                        <ButtonGroup>
                            <Button onClick={() => setCol(0)}>Mặc định</Button>
                            <Button onClick={() => setCol(6)}>2</Button>
                            <Button onClick={() => setCol(4)}>3</Button>
                            <Button onClick={() => setCol(3)}>4</Button>
                        </ButtonGroup>
                    </Col>

                    <Col className="col-0 col-sm-6 col-md-3 mt-2">
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
                        <Button color='danger' onClick={()=> setKeyWord("")}>Làm trống</Button>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <Button className="mt-2" color='success'><i className="fa fa-plus"></i> Thêm nhân viên</Button>
                    </Col>
                </Row>

                                    
                <Row>                    
                    {staffList}
                </Row>

                <Row className={"m-3"}>
                    <h5>Bấm vào nhân viên để xem thông tin</h5>
                    <br/>
                   
                </Row>               
                
            </Container>
        );
    
}

export default StaffListComponent;
