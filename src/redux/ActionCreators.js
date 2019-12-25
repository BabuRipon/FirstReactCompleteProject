import * as actionType from './ActionTypes';
// import {DISHES} from '../shared/dishes';
import {baseUrl} from "../shared/baseUrl";


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

    // setTimeout(()=>{
    //     dispatch(addDishes(DISHES));
    // },2000);
    return fetch(baseUrl+'dishes')
           .then(res=>{
               if(res.ok){
                   return res;
               }else{
                   var err=new Error("Error"+res.status+":"+res.statusText);
                   err.res=err;
                   throw err;
               }
           },
          err=>{var errmess=new Error(err.message);
                throw errmess;    
             } )
           .then(response=>response.json())
           .then(dishes=>dispatch(addDishes(dishes)))
           .catch(err=>dispatch(dishesFailed(err.message)))
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

export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading());

    return fetch(baseUrl+"promotions")
        .then(res=>{
            if(res.ok){
                return res;
            }else{
                var err=new Error("Error"+res.status+":"+res.statusText);
                err.res=err;
                throw err;
            }
        },
        err=>{var errmess=new Error(err.message);
            throw errmess;    
        } )
         .then(response=>response.json())
         .then(promos=>dispatch(addPromos(promos)))
         .catch(err=>dispatch(promosFailed(err.message)))
}

export const promosLoading=()=>({
    type:actionType.PROMOS_LOADING
});

export const promosFailed=(errmess)=>({
    type:actionType.PROMOS_FAILED,
    payload:errmess
})

export const addPromos=(promos)=>({
    type:actionType.ADD_PROMOS,
    payload:promos,
})

export const fetchComments=()=>(dispatch)=>{
    return fetch(baseUrl+"comments")
            .then(res=>{
                if(res.ok){
                    return res;
                }else{
                    var err=new Error("Error"+res.status+":"+res.statusText);
                    err.res=err;
                    throw err;
                }
            },
            err=>{var errmess=new Error(err.message);
                throw errmess;    
            } )
        .then(res=>res.json())
        .then(comments=>dispatch(addComments(comments)))
        .catch(err=>dispatch(commentsFailed(err.message)))
}

export const commentsFailed=(errmess)=>({
    type:actionType.COMMENTS_FAILED,
    payload:errmess,
})

export const addComments=(comments)=>({
    type:actionType.ADD_COMMENTS,
    payload:comments,
})