import React,{Component} from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Button,ButtonGroup} from 'reactstrap';
import StaffDetail from "./StaffDetailComponent";
import $ from 'jquery';
import '../App.css';

class StaffList extends Component{
    constructor(props) {
    super(props);

    this.state = {
        selectedStaff:null,
        column:3  
        };

        this.onClickCol2 = this.onClickCol2.bind(this);
        this.onClickCol3 = this.onClickCol3.bind(this);
        this.onClickCol4 = this.onClickCol4.bind(this);
        this.onClickCol6 = this.onClickCol6.bind(this);
    }

    onStaffSelect(staffs){
        this.setState({selectedStaff: staffs});
    }

    onClickCol2() {
        this.setState({column:6});
    }

    onClickCol3() {
        this.setState({column:4});
    }

    onClickCol4() {
        this.setState({column:3});
    }
    
    onClickCol6() {
        this.setState({column:2});

    }

    render() {

        let classname = 'mt-4 col-12 col-md-6 col-lg-';
        classname += this.state.column;

        const staffList=this.props.staffs.map((staffs)=> {
            return (
                <div  key={staffs.id} className={classname}>
                    <Card onClick = {() => this.onStaffSelect(staffs)}>
                        <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                        <CardBody>
                            <CardTitle >{staffs.name}</CardTitle>
                        </CardBody>
                    </Card>

                </div>
            );
        });



        return(
            <div className="container">

                    <div className="row">
                        <p>Chọn số cột :</p>
                        <ButtonGroup className="col-2">
                        <Button onClick={this.onClickCol2}>2</Button>
                        <Button onClick={this.onClickCol3}>3</Button>
                        <Button onClick={this.onClickCol4}>4</Button>
                        <Button onClick={this.onClickCol6}>6</Button>
                        </ButtonGroup>

                    </div>
                    
                    <div className="row">
                        {staffList}
                    </div>

                    <div>
                        <p>Bấm vào tên nhân viên để xem thông tin</p>
                    </div>
                    <div className="row">
                        <StaffDetail selectedStaff={this.state.selectedStaff}/>
                    </div>
                
            </div>
        );
    }
}

export default StaffList;
