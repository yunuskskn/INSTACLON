export default function reducers(state, action) {
    switch(action.type){
        case "USER_LOGIN":
            return {...state, userName: action.payload.userName, password: action.payload.password }
        default:
            return state
    }
}