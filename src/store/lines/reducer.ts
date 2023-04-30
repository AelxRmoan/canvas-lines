import { createReducer } from '@reduxjs/toolkit';
import { addCoordinate } from './actions';

type State = {
  start: number | null,
  end: number | null
};

const initialState: State = {
  start: null,
  end: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addCoordinate.fulfilled, (state, action) => {
    state.start = action.payload.start;
    state.end = action.payload.end;
  });
});
