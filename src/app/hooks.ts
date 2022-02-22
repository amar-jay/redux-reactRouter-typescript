import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { ThunkAction, Action } from '@reduxjs/toolkit';

type AppDispatchType = typeof store.dispatch;
export type AppSelectorType = ReturnType<typeof store.getState>;

// super `useDispatch` and `useSelector` created used throughout the application
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppSelectorType> = useSelector;



export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppSelectorType,
  unknown,
  Action<string>
>;
