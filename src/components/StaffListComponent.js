import React,{Component} from "react";
import {Card,CardImg,CardBody,CardTitle,Button,ButtonGroup,Col,Row,Container, CardText} from 'reactstrap';
import StaffDetail from "./StaffDetailComponent";
import '../App.css';
import {ROLE} from '../shared/staffs';


class StaffList extends Component{
    constructor(props) {
    super(props);

    this.state = {
        selectedStaff:null,
        // column:3,
        selectedClolumn:{
            desktop: 2,
            tablet: 4,
            mobile: 6
        }
        };
        this.onClickColDefault = this.onClickColDefault.bind(this);
        this.onClickCol2 = this.onClickCol2.bind(this);
        this.onClickCol3 = this.onClickCol3.bind(this);
        this.onClickCol4 = this.onClickCol4.bind(this);
        this.onClickCol6 = this.onClickCol6.bind(this);
    }

    onStaffSelect(staffs){
        this.setState({selectedStaff: staffs});
    }

    

    onClickCol2() {
        this.setState({
            // column:6,
            selectedClolumn:{
                desktop: 6,
                tablet: 6,
                mobile: 6
            }
        });
    }

    onClickCol3() {
        this.setState({
            // column:4,
            selectedClolumn:{
                desktop: 4,
                tablet: 4,
                mobile: 4
            }});
    }

    onClickCol4() {
        this.setState({
            // column:3,
            selectedClolumn:{
                desktop: 3,
                tablet: 3,
                mobile: 3
            }});
    }
    
    onClickCol6() {
        this.setState({
            // column:2,
            selectedClolumn:{
                desktop: 2,
                tablet: 2,
                mobile: 2
            }});
    }

    onClickColDefault() {
        this.setState({
            // column:6,
            selectedClolumn:{
                desktop: 2,
                tablet: 4,
                mobile: 6
            }
        });
    }

    render() {

        // let classname = 'col-lg-';
        // classname += this.state.column;

        let countStaffs=this.props.staffs.length;

        const staffList=this.props.staffs.map((staffs)=> {
            return (

                
                <Col
                    key={staffs.id}
                    xs={this.state.selectedClolumn.mobile}
                    md={this.state.selectedClolumn.tablet}
                    lg={this.state.selectedClolumn.desktop}                
                    className={"mt-3"}
                    // className={classname}
                    >

                    <Card className={"mt-3 card"} onClick = {() => this.onStaffSelect(staffs)}>
                        <CardImg className={"cardImage"} width="100%" src={staffs.image} alt={staffs.name} />
                        <CardBody width="100%" className={"cardBody"}>
                            <CardTitle className={"cardTitle"}>{staffs.name}</CardTitle>
                        </CardBody>
                    </Card>

                </Col>
            );
        });



        return(
            <Container className={"mb-3 container"} >

                <Row className={"mt-3"}>
                     <Col>
                            <h5>Chọn số cột :</h5>
                       
                            <ButtonGroup>
                            <Button onClick={this.onClickColDefault}>Mặc định</Button>
                            <Button onClick={this.onClickCol2}>2</Button>
                            <Button onClick={this.onClickCol3}>3</Button>
                            <Button onClick={this.onClickCol4}>4</Button>
                            {/* <Button onClick={this.onClickCol6}>6</Button> */}
                            </ButtonGroup>
                        </Col>
                        
                    
                        <h5>Số lượng nhân viên : {countStaffs} </h5>
                </Row>

                <h4 className="mt-4">Nhân viên</h4>
                <hr/>
                    
                <Row>
                    
                    {staffList}
                </Row>

                <Row className={"m-3"}>
                    <h5>Bấm vào tên nhân viên để xem thông tin</h5>
                </Row>

                <Row id="staff-detail">
                    <StaffDetail selectedStaff={this.state.selectedStaff}/>
                </Row>
                
            </Container>
        );
    }
}

export default StaffList;
