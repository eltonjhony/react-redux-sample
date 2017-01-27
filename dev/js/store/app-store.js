import {createStore} from 'redux'
import {combineReducers} from 'redux'

import userReducer from '../reducers/user-reducer'

const allReducers = combineReducers({
    userReducer: userReducer
})

const store = createStore(allReducers);

export default store;