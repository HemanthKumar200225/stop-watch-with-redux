import * as actions from './Actions/ActionTypes';

function TimeReducer( state=[], action)
{
    switch(action.type){
        case actions.START:
            return [
                ...state,
            ];
        default:
            return state;
    }
}

export default TimeReducer;