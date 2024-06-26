import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const ThemeProvider = ({children}:{children: React.ReactNode}) => {
	const {theme} = useSelector((state:RootState) => state.theme);
	return (
		<div className={theme}>
			<div className={"bg-white text-gray-700 dark:text-gray-200 dark:bg-black "}>
				{children}
			</div>
		</div>
	);
};

export default ThemeProvider;
