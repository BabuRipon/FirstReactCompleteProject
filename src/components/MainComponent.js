import React,{Component} from 'react';
import Menu from './ComponentMenu';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch,Redirect,Route} from 'react-router-dom';


class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      leaders:LEADERS,
      comments:COMMENTS,
      promotions:PROMOTIONS,
    }
  }


  render(){

   const HomePage=()=>{
     return(
       <Home 
         dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
         promotion={this.state.promotions.filter((dish)=>dish.featured)[0]}
         leader={this.state.leaders.filter((dish)=>dish.featured)[0]}
       />
     )
   }

    return(
       <div className="App">
          <Header /> 
          <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
              <Route exact path="/contactus"  component={Contact} />
              <Redirect to="/home" />
          </Switch>
         <Footer />
       </div>
    );
  }
}

export default Main;
