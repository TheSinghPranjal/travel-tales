import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
// export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector