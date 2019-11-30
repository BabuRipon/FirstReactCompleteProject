import * as actionType from './ActionTypes';

export const addComment=(dishId,rating,author,comment)=>({
    type:actionType.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});