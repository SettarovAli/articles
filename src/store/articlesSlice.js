import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    articlesLoaded: (state, action) => {
      return action.payload;
    },
  },
});

export const { articlesLoaded } = articlesSlice.actions;

export default articlesSlice.reducer;

export const fetchArticles = () => async (dispatch) => {
  const response = await axios.get(
    "https://api.spaceflightnewsapi.net/v3/articles"
  );
  dispatch(articlesLoaded(response.data));
};
