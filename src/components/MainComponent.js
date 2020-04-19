import React from 'react';
import '../App.css';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from '../components/DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onDishSelect=this.onDishSelect.bind(this)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish : dishId})
}
  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/Home' component={HomePage} />
        <Route exact path='/Menu' component={()=><Menu dishes = {this.state.dishes} />} />
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