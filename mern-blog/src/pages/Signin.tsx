import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


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
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	console.log(formData);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError(null);
		if (!formData.email || !formData.password) {
			return setError("Please fill out all fields.");
		}

		try {
			setLoading(true);
			setError(null);
			const res = await fetch("http://localhost:3009/api/auth/signin", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.success) {
				setLoading(false);
				setError(null);
				navigate("/");
			}
			if (!data.success) {
				setError(data.message);
				setLoading(false);
			}
			console.log(data);
		} catch (error: any) {
			setError("Something went wrong. Please try again.");
			setLoading(false);
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
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit} method="POST">
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
							>
								Sign in
							</button>
						</div>

						<div>
							<a
								href="#"
								className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							>
								<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M19.6 10.23c0-.64-.06-1.24-.16-1.82H10v3.44h5.56c-.24 1.3-.94 2.4-1.98 3.14v2.62h3.22c1.88-1.74 2.96-4.3 2.96-7.38z"
										fill="#4285F4"/>
									<path
										d="M10 20c2.7 0 4.94-.9 6.59-2.42l-3.22-2.62c-.9.6-2.04.96-3.37.96-2.59 0-4.78-1.75-5.57-4.1H1.13v2.58C2.76 17.84 6.13 20 10 20z"
										fill="#34A853"/>
									<path
										d="M4.43 12.82c-.21-.6-.33-1.24-.33-1.9s.12-1.3.33-1.9V6.44H1.13C.41 7.86 0 9.38 0 10.92s.41 3.06 1.13 4.48l3.3-2.58z"
										fill="#FBBC05"/>
									<path
										d="M10 4.04c1.47 0 2.78.5 3.82 1.46l2.85-2.85C14.94.93 12.7 0 10 0 6.13 0 2.76 2.16 1.13 5.44l3.3 2.58c.79-2.35 2.98-4.1 5.57-4.1z"
										fill="#EA4335"/>
								</svg>

								<span className="">&nbsp;&nbsp;Sign in with Google</span>
							</a>
						</div>

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

