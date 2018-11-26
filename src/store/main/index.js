import defaultState from  './defaultState'
import { CHANGE_TABINDEX ,CHANGE_PDISSHOW} from "./actiontypes";


import connect from '@connect';
// 给connect 添加可配置的actionCreators
import actionCreators from './actionCreators'

connect.addActions({
    main: actionCreators
})

const reducer = (previousState = defaultState ,action ) =>{
    let newState = JSON.parse(JSON.stringify(previousState));
    switch(action.type){
        case CHANGE_TABINDEX: newState.tabIndex = action.val;break;
        case CHANGE_PDISSHOW:newState.pdIsSHow = !newState.pdIsSHow; break;
        default:return previousState
    }
    return newState
}
export default reducer