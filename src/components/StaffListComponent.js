import React,{ useState} from "react";
import {Card,CardImg,CardBody,CardTitle,Button,ButtonGroup,Col,Row,Container} from 'reactstrap';
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




function StaffList(props) {

        const [col, setCol] = useState(0);
    
        // Số lượng nhân viên
        let countStaffs=props.staffs.length;
        // console.log(countStaffs)

        const staffList=props.staffs.map((staffs)=> {
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
            <Container className={"mb-3 "} >
                
                <div className="col-12">
                    <h3 className="mt-3">Nhân Viên</h3>
                    <hr/>
                </div>
                
                <Row>
                    <div className="col-12 col-sm-6 col-md-8">
                    <h5>Chọn số cột</h5>
                    <ButtonGroup>
                        <Button onClick={() => setCol(0)}>Mặc định</Button>
                        <Button onClick={() => setCol(6)}>2</Button>
                        <Button onClick={() => setCol(4)}>3</Button>
                        <Button onClick={() => setCol(3)}>4</Button>
                    </ButtonGroup>
                    </div>

                    <div className="col-0 col-sm-6 col-md-4 mt-3">
                        <h5>Số lượng nhân viên : {countStaffs}</h5>
                    </div>
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

export default StaffList;
