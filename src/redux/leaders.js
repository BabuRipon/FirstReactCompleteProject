// import {LEADERS} from '../shared/leaders';
import * as actionType from './ActionTypes';

export const Leaders=(state={isLoading:true,
  errMess:null,
  leaders:[]},action)=>{
    switch(action.type){
        case actionType.ADD_LEADER:
            return {...state,isLoading:false,errMess:null,leaders:action.payload}
        case actionType.LEADER_FAILED:
            return{...state,isLoading:false,errMess:action.payload,leaders:[]}
        case actionType.LEADER_LOADING:
            return{...state,isLoading:true,errMess:null,leaders:[]}
        default:
            return state;
    }
}