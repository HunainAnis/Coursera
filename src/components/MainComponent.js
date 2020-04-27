import React from 'react';
import '../App.css';
import Menu from './MenuComponent';
import DishDetail from '../components/DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { addComment } from '../Redux/ActionCreators';


const mapStateToProps = state => {
    return {
      dishes : state.dishes,
      comments : state.comments,
      promotions : state.promotions,
      leaders : state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

class Main extends React.Component {
  render() {
    const HomePage = () => {
      return(
          <Home
              dish={this.props.dishes.filter(dish=>(dish.featured))[0]}
              promotion={this.props.promotions.filter(pro=>(pro.featured))[0]}
              leader={this.props.leaders.filter(lead=>(lead.featured))[0]}

          />
      );
    }
  
    const DishWithId = ({match}) => {
      return(
        <DishDetail
          dish={this.props.dishes.filter(dish=>dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter(comment=>comment.dishId === parseInt(match.params.dishId,10))}
          addComment={this.props.addComment}
        />
      )
    }
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/Home' component={HomePage} />
        <Route exact path='/Menu' component={()=><Menu dishes = {this.props.dishes} />} />
        <Route exact path='/Menu/:dishId' component={DishWithId} />
        <Route exact path='/Contactus' component={Contact} />
        <Redirect to="/Home" />
      </Switch>
      {/* <Menu dishes = {this.state.dishes}
            onClick = {(dishId)=>this.onDishSelect(dishId)} /> */}
      {this.props.selectedDish && <DishDetail dish={this.props.dishes.filter((dish)=> dish.id === this.props.selectedDish)[0]} />}
      <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));  