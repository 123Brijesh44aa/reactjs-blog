import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import {BiSolidUser} from "react-icons/bi";
import {ArrowRight} from "lucide-react";

const DashSidebar = () => {

	const location = useLocation();
	const [tab, setTab] = useState("");

	useEffect(
		() => {
			const urlSearchParams = new URLSearchParams(location.search);
			const tabFromUrl = urlSearchParams.get("tab");

			if (tabFromUrl) {
				setTab(tabFromUrl);
			}
		},
		[tab]
	);

	return (
		<div className={"flex flex-col items-start gap-5 p-3"}>
			<Link to={"/dashboard?tab=profile"} className={` w-full flex flex-row justify-between items-center gap-20 bg-gray-200 ${tab==="profile"?"ring-1 ring-indigo-600":""} dark:bg-gray-800 rounded p-2`}>
				<div className={"flex flex-row justify-start items-center gap-2"}>
					<BiSolidUser className={"h-5 w-5 dark:text-gray-600"}/>
					<p className={"text-gray-500 font-normal text-md"}>Profile</p>
				</div>
				<p className={"rounded px-4 font-normal text-sm "}>
					User
				</p>
			</Link>

			<button className={" w-full flex flex-row justify-between items-center gap-20 bg-gray-200 dark:bg-gray-800 rounded p-2"}>
				<div className={"flex flex-row justify-start items-center gap-2"}>
					<ArrowRight className={"h-5 w-5 dark:text-gray-600"}/>
					<p className={"text-gray-500 font-normal text-md"}>Sign Out</p>
				</div>
			</button>
		</div>
	);
};

export default DashSidebar;
