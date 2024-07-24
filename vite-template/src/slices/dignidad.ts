import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Dignidad } from '../types/dignidad';
import { AppThunk } from '../store';

interface DignidadState {
  dignidad: Dignidad | null;
}

const initialState: DignidadState = {
    dignidad: null,
};

export const reducers = {
    dignidadItem(state: DignidadState, action: PayloadAction<Dignidad>) {
      state.dignidad = action.payload;
    },
    resetDignidadItem(state: DignidadState) {
      state.dignidad = null;
    },
  }

const slice = createSlice({
  name: 'dignidad',
  initialState,
  reducers,
});

export const { dignidadItem, resetDignidadItem } = slice.actions;

export const dignidadItemAction = (value: Dignidad): AppThunk => async (dispatch) => {
  dispatch(dignidadItem(value));
};

export const resetDignidadItemAction = (): AppThunk => async (dispatch) => {
  dispatch(resetDignidadItem());
};

export const { reducer } = slice;

