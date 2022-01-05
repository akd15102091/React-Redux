const initialState = {} ;

const changePerson = (state =initialState, action) => {
    switch(action.type){
        case "SHOW_SINGLE_PERSON_INFO" : return action.data ;
        default : return state;
    }
}

export default changePerson;