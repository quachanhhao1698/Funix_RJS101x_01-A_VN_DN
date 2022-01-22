import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
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
              <RenderCard item={props.dish} />
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
