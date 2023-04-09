import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Link = {
  website: string;
  url: string;
};
export type Post = {
  uid: string;
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  links?: string[];
};

type IinitialStateType = {
  modal: boolean;
  posts: Post[];
};

const initialState: IinitialStateType = {
  modal: false,
  posts: [
    {
      id: "1",
      uid: "pdrojack",
      links: ["http://spotify.com/pdrojack"],
      caption: "Hello this is mellow",
      media_url: "http://media.url",
      media_type: "image",
    },
  ],
};

export const postSlice = createSlice({
  name: "post",

  initialState,

  reducers: {
    flipModal: (state) => {
      state.modal = !state.modal;
    },

    getProducts: (state, action: PayloadAction<string>) => {
      // find product by movie id
    },

    addProduct: (state, action: PayloadAction<number>) => {
      // Get Input about product and add it to DB
    },
  },
});

export const selectPosts = (state: RootState) => state.post.posts;
export const selectModal = (state: RootState) => state.post.modal;

export const { getProducts, addProduct, flipModal } = postSlice.actions;

export default postSlice.reducer;
