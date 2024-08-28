import { dashboardActions } from '../reduxExports';


const dashboardInitialState: DashboardState = {
    dashboardLoader: false,

}

const dashboardReducer = (state: DashboardState = dashboardInitialState, action: DashboardAction) => {
    switch (action.type) {
        case dashboardActions.SET_DASHBOARD_LOADER:
            return {
                ...state,
                dashboardLoader: action.dashboardLoader,
            }
        default:
            return state;

    }
}

export default dashboardReducer;