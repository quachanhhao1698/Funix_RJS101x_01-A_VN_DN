import React,{Component} from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Button} from 'reactstrap';


class StaffComponent extends Component {
    constructor(props) {
        super(props);
    }
    onStaffSelect(staffs){
        this.setState({selectedStaff: staffs});
    }

    render() {

        const staffList=this.props.staffs.map((staffs)=> {
            return (
                <div key={staffs.id} className=" list col-12 col-md-6 col-lg-4 mt-4">
                    <Card  onClick = {() => this.onStaffSelect(staffs)}>
                        <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                        <CardBody>
                            <CardTitle >{staffs.name}</CardTitle>
                        </CardBody>
                    </Card>

                </div>
            );
        });

        return(
            <>
            {staffList}
            </>
        )
    }

}

export default StaffComponent;