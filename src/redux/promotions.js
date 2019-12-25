// import {PROMOTIONS} from '../shared/promotions';
import * as actionType from './ActionTypes';

export const Promotions=(state={
    isLoading:true,
    errMess:null,
    promotions:[]
},action)=>{
    switch(action.type){
        case actionType.ADD_PROMOS:
            return {...state,errMess:null,isLoading:false,promotions:action.payload}
        case actionType.PROMOS_LOADING:
            return {...state,isLoading:true,errMess:null,promotions:[]}
        case actionType.PROMOS_FAILED:
             return {...state,errMess:action.payload,isLoading:false,promotions:[]}
        default:
            return state;
    }
}