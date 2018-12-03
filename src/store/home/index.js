import defaultState from './defaultState'
import { GET_SWIPERLIST } from './actionTypes'

import {connect} from 'refit-connect';
// 给connect 添加可配置的actionCreators
import actionCreators from './actionCreators'

connect.addActionCreator({
    home: actionCreators
})

const reducer = (previousState = defaultState,action) =>{
    let newState = JSON.parse(JSON.stringify(previousState))
    switch(action.type){
        case GET_SWIPERLIST +'_FULFILLED': 
            newState.swiperList = action.payload.data.Data; break;
        default: return previousState
    }
    return newState
}


export default reducer