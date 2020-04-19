import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';


    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    function RenderComments({dish}) {
        return(
            <div>
                {dish.comments.map(review=>{
                    return(
                        <ul className='list-unstyled'>
                            <li>{review.comment}</li>
                            <li>--{review.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(review.date)))}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
    const DishDetail = (props) => {
        if(props.dish) {
        // console.log(props)
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h1>Comments</h1>
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            </div>
        )
        // eslint-disable-next-line no-unused-expressions
        }else{<div></div>}
    }

export default DishDetail;