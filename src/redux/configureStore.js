import{createStore,combineReducers}from 'redux';
import{Dishes}from './dishes';
import{Comments}from './comments';
import{Leaders}from './leaders';
import{Promotions}from './promotions';

export const configureStore=()=>{
   const store=createStore(
       combineReducers({
           dishes:Dishes,
           promotions:Promotions,
           comments:Comments,
           leaders:Leaders,
       })
   )

   return store;
}