import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signInFailure, signInStart, signInSuccess} from "@/redux/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import OAuth from "@/components/OAuth";


interface SigninFormDataType {
	email: string;
	password: string;
}

const InitialSigninFormData: SigninFormDataType = {
	email: "",
	password: "",
}

export default function Signin() {

	const [formData, setFormData] = useState<SigninFormDataType>(InitialSigninFormData);
	const navigate = useNavigate();
	const {loading, error} = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	console.log(formData);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!formData.email || !formData.password) {
			return dispatch(signInFailure("Please fill all the fields"));
		}

		try {
			dispatch(signInStart());
			const res = await fetch("http://localhost:3009/api/auth/signin", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.success) {
				dispatch(signInSuccess(data));
				navigate("/");
			}
			if (!data.success) {
				dispatch(signInFailure(data.message));
			}
			console.log(data);
		} catch (error: any) {
			dispatch(signInFailure("Something went wrong. Please try again"));
		}
	}

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src={'/src/assets/images/website-logo-600.svg'}
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-400">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit} method="POST">
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300 dark:bg-black dark:ring-gray-500 dark:focus:ring-indigo-600"
									onChange={(event) => {
										return (
											setFormData(
												{
													...formData,
													email: event.target.value
												}
											)
										);
									}}
								/>
							</div>
						</div>

						<div>
							<div className="flex items-start justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400 ">
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
									onChange={(event) => {
										return (
											setFormData(
												{
													...formData,
													password: event.target.value
												}
											)
										);
									}}
								/>
							</div>
						</div>

						{
							error && (
								<div className={"w-full px-4 py-2 bg-red-100 text-red-600 rounded-md"}>
									{error}
								</div>
							)
						}

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								disabled={loading}
							>
								{
									loading
										?
										(
											<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											     xmlns="http://www.w3.org/2000/svg"
											     viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10"
												        stroke="currentColor"
												        strokeWidth="4"/>
												<path className="opacity-75" fill="currentColor"
												      d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8V4a4 4 0 00-4 4H0a8 8 0 018-8z"/>
											</svg>
										)
										:
										"Sign in"
								}

							</button>
						</div>

					{/*	Google sign-in */}
						<OAuth title={"Sign in with Google"}/>

					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Don&apos;t Have an account?{' '}
						<a href="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Sign Up
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

