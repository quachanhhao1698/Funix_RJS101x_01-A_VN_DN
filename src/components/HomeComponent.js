import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMess}) {

    if(isLoading) {
      return (
        <Loading/>
      );
    } else if(errMess) {
      return (
        <h4>{errMess}</h4>
      );
    }
    return(
        <Card>
          <CardImg src={item.image} alt={item.name}/>
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
    );
}

export default function Home(props) {
  return(
      <div className="container">
          <div className="row align-items-start">
            <div className="c0l-12 col-md m-2 mt-4">
              <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
            </div>
            <div className="c0l-12 col-md m-2 mt-4">
              <RenderCard item={props.promotion} />
            </div>
            <div className="c0l-12 col-md m-2 mt-4">
              <RenderCard item={props.leader} />
            </div>
          </div>
      </div>
  )
}
