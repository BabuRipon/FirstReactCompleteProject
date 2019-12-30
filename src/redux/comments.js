// import {COMMENTS} from '../shared/comments';
import * as actionType from './ActionTypes';

export const Comments=(state={
    errMess:null,
    comments:[],
    feedbacks:[]
},action)=>{
    switch(action.type){
        case actionType.ADD_COMMENT:
            var comment=action.payload;
            console.log("comment is :"+comment);
            return {...state,comments:state.comments.concat(comment)}
            
        case actionType.ADD_FEEDBACK:
            var feedback=action.payload;
            return{...state,feedbacks:state.feedbacks.concat(feedback)}

        case actionType.COMMENTS_FAILED:
            return{...state,errMess:action.payload,comments:[]}
        case actionType.ADD_COMMENTS:
            return{...state,errMess:null,comments:action.payload}
        default:
            return state;
    }
}