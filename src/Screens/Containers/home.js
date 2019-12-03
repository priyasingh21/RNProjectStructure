import {connect} from "react-redux";
import {getUserData} from "../../Redux/Actions";
import {Home} from '../Components'

const handleLocalAction = (dispatch, action, navigation) => {
    const {type} = action;
    switch (type) {
        case localActions.GET_USER_DATA:
            return dispatch(getUserData());
            break
    }
};
export const localActions = {
    GET_USER_DATA: 'GET_USER_DATA'
};

const mapStateToProps = (state) => {
    const {userData} = state.user;
    return {
        localActions,
        userData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLocalAction: (actionType, navigation) => handleLocalAction(dispatch, actionType, navigation)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
