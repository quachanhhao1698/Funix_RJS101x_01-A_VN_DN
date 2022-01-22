import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';


    function RenderDish({dish}) {
        if (dish != null)
            return (
              <div className="col-12 col-md-6 mt-4">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
              </div>

            );
        else
            return (
                <div></div>
            );
    }
    function RenderComments({comments}) {
        if (comments != null) {
            return (
                <div  className="col-12 col-md-6 mt-4">
                    <h4>Comments</h4>
                    {comments.map(comment => (
                        <ul key={comment.id} className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>---{comment.author} , {dateFormat(comment.date,"dd/mm/yyyy") }</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );

        }
    }
    
    function DishDetail(props){

        let dish;
        // console.log(this.props.dish);
        console.log('Dishdetail Component render invoked');

        if (props.dish) {
          
            dish = (
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            )
          
        } else {
            dish = <div></div>
        }

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>

                {dish}
            </div>
        );

    }

export default DishDetail;