import { createAsyncThunk } from '@reduxjs/toolkit';


type Coordinates = {
  start: number,
  end: number
}

export const addCoordinate = createAsyncThunk<Coordinates, Coordinates>(
  "addCoordinate",
  async (payload) => {

    return payload;
  },
);
