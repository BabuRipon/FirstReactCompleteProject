import{createStore,combineReducers,applyMiddleware}from 'redux';
import{Dishes}from './dishes';
import{Comments}from './comments';
import{Leaders}from './leaders';
import{Promotions}from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms}from 'react-redux-form';
import { InitialFeedback } from './form';


export const configureStore=()=>{
   const store=createStore(
       combineReducers({
           dishes:Dishes,
           promotions:Promotions,
           comments:Comments,
           leaders:Leaders,
           ...createForms({
               feedback:InitialFeedback
           })
       }),
      applyMiddleware(thunk,logger)
   )

   return store;
}