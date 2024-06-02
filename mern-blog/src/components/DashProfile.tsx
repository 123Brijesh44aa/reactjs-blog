import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const DashProfile = () => {

	const {currentUser} = useSelector((state:RootState) => state.user);

	return (
		<div className={"flex flex-col items-center justify-center pt-10"}>
			<h1 className={"text-4xl font-semibold text-gray-500 pb-12"}>Profile</h1>
			<form className={"flex flex-col gap-6 w-full"}>

				<div
					className={"w-32 h-32 self-center cursor-pointer overflow-hidden rounded-full ring-4 ring-indigo-600 dark:ring-indigo-900"}>
					<img src={currentUser.user.profilePicture} alt={"user"}
					     className={"rounded-full w-full h-full object-cover"}/>
				</div>

				<div>
					<label htmlFor="username"
					       className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
						Username
					</label>
					<div className="mt-2">
						<input
							id="username"
							name="username"
							type="text"
							placeholder={"username"}
							required
							defaultValue={currentUser.user.username}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300 dark:bg-black dark:ring-gray-500 dark:focus:ring-indigo-600"
							// onChange={(event) => {
							// 	return (
							// 		setFormData(
							// 			{
							// 				...formData,
							// 				email: event.target.value
							// 			}
							// 		)
							// 	);
							// }}
						/>
					</div>
				</div>

				<div>
					<label htmlFor="email"
					       className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
						Email address
					</label>
					<div className="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							placeholder={"example@gmail.com"}
							autoComplete="email"
							required
							defaultValue={currentUser.user.email}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300 dark:bg-black dark:ring-gray-500 dark:focus:ring-indigo-600"
							// onChange={(event) => {
							// 	return (
							// 		setFormData(
							// 			{
							// 				...formData,
							// 				email: event.target.value
							// 			}
							// 		)
							// 	);
							// }}
						/>
					</div>
				</div>

				<div>
					<div className="flex items-start justify-between">
						<label htmlFor="password"
						       className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400 ">
							Password
						</label>
					</div>
					<div className="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							placeholder={"***********"}
							autoComplete="current-password"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300 dark:bg-black dark:ring-gray-500 dark:focus:ring-indigo-600"
							// onChange={(event) => {
							// 	return (
							// 		setFormData(
							// 			{
							// 				...formData,
							// 				password: event.target.value
							// 			}
							// 		)
							// 	);
							// }}
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						// disabled={loading}
					>

						Update

						{/*{*/}
						{/*	loading*/}
						{/*		?*/}
						{/*		(*/}
						{/*			<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"*/}
						{/*			     xmlns="http://www.w3.org/2000/svg"*/}
						{/*			     viewBox="0 0 24 24">*/}
						{/*				<circle className="opacity-25" cx="12" cy="12" r="10"*/}
						{/*				        stroke="currentColor"*/}
						{/*				        strokeWidth="4"/>*/}
						{/*				<path className="opacity-75" fill="currentColor"*/}
						{/*				      d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8V4a4 4 0 00-4 4H0a8 8 0 018-8z"/>*/}
						{/*			</svg>*/}
						{/*		)*/}
						{/*		:*/}
						{/*		"Sign in"*/}
						{/*}*/}

					</button
					>
				</div>

			</form>

			<div className={"w-full flex flex-row justify-between gap-6 mt-6 text-red-500 bg-red-100 dark:bg-red-950 p-4 rounded"}>
				<span className={"cursor-pointer"}>Delete Account</span>
				<span className={"cursor-pointer"}>Sign Out</span>
			</div>

		</div>
	);
};

export default DashProfile;
