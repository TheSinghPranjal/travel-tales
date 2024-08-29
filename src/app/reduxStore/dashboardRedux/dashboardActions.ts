import { getAllTripDetails } from "./dashboardService";

export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA';
export const GET_ALL_TRIP_DETAILS = 'GET_ALL_TRIP_DETAILS';
export const SET_DASHBOARD_LOADER = 'SET_DASHBOARD_LOADER';

export const setTripDetails = (tripDetails: any[]) => ({
    type: GET_ALL_TRIP_DETAILS,
    payload: tripDetails, // Pass the data in the payload
});

export const fetchTripDetails: any = () => {
    return async (dispatch: any) => {
        dispatch({ type: SET_DASHBOARD_LOADER, dashboardLoader: true });
        try {
            const tripDetails = await getAllTripDetails();
            dispatch(setTripDetails(tripDetails)); // Dispatch the action to store trip details
        } catch (error) {
            console.error('Failed to fetch trip details', error);
        } finally {
            dispatch({ type: SET_DASHBOARD_LOADER, dashboardLoader: false });
        }
    };
};
