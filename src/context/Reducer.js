import * as actions from './Actions'

const Reducer = ( state , action ) => {
    switch (action.type) {
        case actions.LoginStart:
            return{
                user:null,
                isFetching:true,
                error: false
            }
        case actions.LoginSuccess:
            return{
                user:action.payload,
                isFetching:false,
                error: false
            }
        case actions.LoginFailure:
            return{
                user:null,
                isFetching:true,
                error: true
            }
        case actions.Logout:
            return{
                user:null,
                isFetching:false,
                error: false
            }
        default:
            return state
    }
};

export default Reducer;