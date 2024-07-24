import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Process } from '../types/process';
import { AppThunk } from '../store';

interface ProcessState {
  process: Process | null;
}

const initialState: ProcessState = {
  process: null,
};

export const reducers = {
    processItem(state: ProcessState, action: PayloadAction<Process>) {
      state.process = action.payload;
    },
    resetProcessItem(state: ProcessState) {
      state.process = null;
    },
  }

const slice = createSlice({
  name: 'process',
  initialState,
  reducers,
});

export const { processItem, resetProcessItem } = slice.actions;

export const processItemAction = (value: Process): AppThunk => async (dispatch) => {
  dispatch(processItem(value));
};

export const resetProcessItemAction = (): AppThunk => async (dispatch) => {
  dispatch(resetProcessItem());
};

export const { reducer } = slice;

