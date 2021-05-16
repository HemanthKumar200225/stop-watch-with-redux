import * as actions from './Actions/ActionTypes';

function TimeReducer( state = 0 , action)
{
    switch(action.type){
        case actions.START:
            return state + 1;
        case actions.STOP:
            return state - 1;
        // case actions.LAP:
        //     return state - 1;
        case actions.RESET:
            return state = 0;
        default:
            return state;
    }
}

export default TimeReducer;