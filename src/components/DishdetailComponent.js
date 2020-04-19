import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        this.renderComments=this.renderComments.bind(this)
        this.state = {

        }
    }
    renderComments(dish) {
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
    render() {
        console.log(this.props)
        return(
            <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h1>Comments</h1>
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
            </div>
        )
    }
}

export default DishDetail;