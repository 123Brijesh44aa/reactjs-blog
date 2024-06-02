import {createSlice} from "@reduxjs/toolkit";

export interface ThemeSliceType{
	theme: string;
}

const initialState: ThemeSliceType = {
	theme: "light",
}

const themeSlice = createSlice(
	{
		name: "theme",
		initialState,
		reducers: {
			toggleTheme: (state) => {
				state.theme = state.theme === "light" ? "dark" : "light";
			},
		}
	}
);

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;