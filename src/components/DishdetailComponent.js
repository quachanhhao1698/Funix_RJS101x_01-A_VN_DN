import React,{useState} from 'react';
import { 
    Card, CardImg, CardText, CardBody, CardTitle,
    Breadcrumb,BreadcrumbItem,
    Modal, ModalHeader, ModalBody, Label, Button 
        } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import { Control,LocalForm,Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';




    function RenderDish({dish}) {
        if (dish != null)
            return (
              <div className="col-12 col-md-6 mt-4">
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
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
    function RenderComments({comments, addComment, dishId}) {
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

                    <CommentForm dishId={dishId} addComment={addComment}/>
                    
                </div>
            );
        }
        else {
            return (
                <div></div>
            );

        }
    }

    function CommentForm(props) {
        const [toggleModal, setToggleModal] = useState(false);
        
        //validate
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => (val) && (val.length >= len);
        //Add comment
        const handleSubmit=(values)=> {
            props.addComment(props.dishId, values.rating, values.author, values.comment);
            setToggleModal(false);

        }
        return(
            <div>
                <Button outline onClick={ ()=> setToggleModal(true) }>
                                        <span className="fa fa-sign-in fa-lg"></span> Comment
                                    </Button>
                
            <Modal isOpen={ toggleModal } toggle={ ()=> setToggleModal(false) } centered>
                <ModalHeader toggle={ ()=> setToggleModal(false)}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=> {handleSubmit(values)}}>
                        <div className='form-group'>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select className='form-control' model=".rating" id="rating" name="rating"
                            >
                                <option value={'1'}>1</option>
                                <option value={'2'}>2</option>
                                <option value={'3'}>3</option>
                                <option value={'4'}>4</option>
                                <option value={'5'}>5</option>
                            </Control.select>

                            <Label htmlFor="author">Yourname</Label>
                            <Control.text model=".author" id="author" name="author" className='form-control'
                            validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}/>
                                <Errors
                                    className='text-danger' model='.author' show='touched'
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                        </div>

                        <div className="form-group" >
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea rows={6} model=".comment" name="comment" className='form-control'
                            />
                            
                        </div>
                        <Button type="submit" value="submit" color="primary" >Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>);
    }
    
    function DishDetail(props){
        
        
        let dish;
        // console.log(this.props.dish);

        if(props.isLoading) {
            return(
                <div className='container'>
                    <div className='row'>
                        <Loading />
                    </div>
                </div>
            );
        }else if(props.errMess) {
            return(
                <div className='container'>
                    <div className='row'>
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }

        if (props.dish) {
          
            dish = (
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                                    addComment={props.addComment}
                                    dishId={props.dish.id} />
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