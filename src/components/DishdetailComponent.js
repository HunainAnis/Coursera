import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';


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
    function RenderComments({dish, addComment, dishId}) {
        const required = (val)=> val && val.length;
        const maxLength = len => val => !val || val.length <= len;
        const minLength = len => val => val && val.length >= len;
        const [isOpen, setIsOpen] = useState(false)


        function handleSubmit(e) {
                const date = new Date().toISOString()
                console.log(date)
                setIsOpen(!isOpen);
                addComment(dishId, e.rating, e.name, e.comment);  
        }



        console.log(dish)
        return(
            <div>
                {dish.map(review=>{
                    return(
                        <ul key={review.id} className='list-unstyled'>
                            <li>{review.comment}</li>
                            <li>--{review.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(review.date)))}</li>
                        </ul>
                    )
                })}
                <Button outline onClick={()=>setIsOpen(!isOpen)} >
                    <span className="fa fa-pencil"></span> Add Comment
                </Button>
            <Modal isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={values=>handleSubmit(values)}>
                        <Row className='col-12'>
                            <Label htmlFor='rating' md={12}>Rating</Label>
                            <Col md={12}>
                                <Control.select model='.rating' name='rating'
                                className='form-control'
                                validators={{
                                    required
                                }}
                                >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Control.select>
                                <Errors
                                    className='text-danger'
                                    model='.rating'
                                    show='touched'
                                    messages={{
                                        required:'Required'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className='col-12'>
                            <Label htmlFor='name' md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model='.name' name='name'
                                                className='form-control'
                                                placeholder='Your Name'
                                                validators={{
                                                    required,
                                                    minLength: minLength(3),
                                                    maxLength: maxLength(15)
                                                }}
                                                />
                                <Errors
                                    className='text-danger'
                                    model='.name'
                                    show='touched'
                                    messages={{
                                        required:'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 or less characters'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className='col-12'>
                            <Label htmlFor='comment' md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model='.comment' name='comment'
                                                    className='form-control'
                                                    rows='12' />
                            </Col>
                        </Row>
                        <Row className='col-12'>
                            <Col md={12}>
                                <Button type='submit' color='primary'>Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        )
    }
    const DishDetail = (props) => {
        

        if(props.dish) {
        // console.log(props)
        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/Menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h1>Comments</h1>
                        <RenderComments dish={props.comments}
                                        addComment={props.addComment}
                                        dishId={props.dish.id}
                        />
                    </div>
                </div>
            </div>

        )
        // eslint-disable-next-line no-unused-expressions
        }
    }

export default DishDetail;