import { AnyAction, CombinedState, combineReducers } from 'redux'
import dashboardSlice from './dashboardRedux/dashboardSlice'
import { DashboardState } from './dashboardRedux/dashboardType'


export type RootState = CombinedState<{
    dashboardState: DashboardState
}>

const rootReducer = (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
        dashboardSlice
    })
    return combinedReducer(state, action)
}

export default rootReducer