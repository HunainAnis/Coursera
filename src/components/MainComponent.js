import React from 'react';
import '../App.css';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from '../components/DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    }
  }
  render() {
    const HomePage = () => {
      return(
          <Home
              dish={this.state.dishes.filter(dish=>(dish.featured))[0]}
              promotion={this.state.promotions.filter(pro=>(pro.featured))[0]}
              leader={this.state.leaders.filter(lead=>(lead.featured))[0]}

          />
      );
    }
  
    const DishWithId = ({match}) => {
      return(
        <DishDetail
          dish={this.state.dishes.filter(dish=>dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter(comment=>comment.dishId === parseInt(match.params.dishId,10))}
        />
      )
    }
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/Home' component={HomePage} />
        <Route exact path='/Menu' component={()=><Menu dishes = {this.state.dishes} />} />
        <Route exact path='/Menu/:dishId' component={DishWithId} />
        <Route exact path='/Contactus' component={Contact} />
        <Redirect to="/Home" />
      </Switch>
      {/* <Menu dishes = {this.state.dishes}
            onClick = {(dishId)=>this.onDishSelect(dishId)} /> */}
      {this.state.selectedDish && <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />}
      <Footer />
    </div>
  );
}
}

export default Main;  