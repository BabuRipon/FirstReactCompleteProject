import * as actionType from './ActionTypes';
import {DISHES} from '../shared/dishes';

export const addComment=(dishId,rating,author,comment)=>({
    type:actionType.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading=()=>({
    type:actionType.DISHES_LOADING,
});

export const dishesFailed=(errmess)=>({
    type:actionType.DISHES_FAILED,
    payload:errmess,
});

export const addDishes=(dishes)=>({
    type:actionType.ADD_DISHES,
    payload:dishes,
});