import {COMMENTS} from '../shared/comments';
import * as actionType from './ActionTypes';

export const Comments=(state=COMMENTS,action)=>{
    switch(action.type){
        case actionType.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.length;
            comment.date=new Date().toISOString();
            console.log("comment is :"+comment);
            return state.concat(comment);

        default:
            return state;
    }
}