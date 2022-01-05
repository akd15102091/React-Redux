import changePerson from "./personReducer"

import {combineReducers} from "redux"

const rootReducer = combineReducers({
    changePerson
}) ;

export default rootReducer;