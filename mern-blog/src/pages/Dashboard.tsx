import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import DashSidebar from "@/components/DashSidebar";
import DashProfile from "@/components/DashProfile";

const Dashboard = () => {

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
		<div className={"min-h-full w-full pb-12"}>
			<div className={"flex flex-col md:flex-row justify-start  gap-8"}>

				<div className={"md:min-h-screen bg-gray-50 dark:bg-zinc-950 border-e border-gray-300 dark:border-gray-800"}>
					{/*  Sidebar  */}
					<DashSidebar/>
				</div>
				{/*  Profile if tab=profile  */}
				<div className={"md:min-h-screen max-w-lg mx-auto w-full"}>
					{
						tab === "profile" && <DashProfile/>
					}
				</div>
			</div>
		</div>
	)
}

export default Dashboard
