import { dashboardActions } from '../reduxExports';

const dashboardInitialState: DashboardState = {
    dashboardLoader: false,
    tripDetails: [],
};

const dashboardReducer = (state: DashboardState = dashboardInitialState, action: DashboardAction) => {
    switch (action.type) {
        case dashboardActions.SET_DASHBOARD_LOADER:
            return {
                ...state,
                dashboardLoader: action.dashboardLoader,
            };
        case dashboardActions.GET_ALL_TRIP_DETAILS:
            return {
                ...state,
                tripDetails: action.tripDetails, // Make sure it uses action.payload
            };
        default:
            return state;
    }
};

export default dashboardReducer;
