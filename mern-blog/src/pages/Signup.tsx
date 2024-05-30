import {images} from "@/utils/constants";
import {Link, useNavigate} from "react-router-dom";
import Logo from "@/components/Logo";
import React, {useState} from "react";

interface SignupFormDataType {
	username: string;
	email: string;
	password: string;
}

const InitialSignupFormData: SignupFormDataType = {
	username: "",
	email: "",
	password: "",
}

const Signup = () => {

	const [formData, setFormData] = useState<SignupFormDataType>(InitialSignupFormData);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	console.log(formData);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError(null);
		if (!formData.username || !formData.email || !formData.password) {
			return setError("Please fill out all fields.");
		}
		if (formData.password.length < 8) {
			return setError("Password must be at least 6 characters long.");
		}
		// check if email is valid
		// regex for email validation
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
			return setError("Invalid email address.");
		}

		try {
			setLoading(true);
			setError(null);
			const res = await fetch("http://localhost:3009/api/auth/signup", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.success) {
				setSuccess(data.message);
				setLoading(false);
				setError(null);
				navigate("/sign-in");
			}
			if (!data.success) {
				setError(data.message);
				setLoading(false);
				setSuccess(null);
			}
			console.log(data);
		} catch (error: any) {
			setError("Something went wrong. Please try again.");
			setSuccess(null);
			setLoading(false);
		}
	}

	return (
		<>
			<div className={"min-h-screen mt-20"}>
				<div className={"flex p-3 w-full mx-auto flex-col gap-3 md:flex-row md:items-center"}>

					{/*  left  */}

					<div className={"flex-1"}>
						<div className={"px-10 lg:px-28"}>

							<div className={"mb-10"}>
								<Logo width={"400"} height={"200"}/>
								<h1 className={"text-2xl font-bold text-gray-800 py-3"}>Sign Up with your email and
									password or with Google</h1>
								<p>Dive into a world where curiosity meets creativity. Sign up to join our community and
									stay updated with the latest posts. It's all about sharing stories and insights, one
									post at a time.</p>
							</div>

							<form
								onSubmit={handleSubmit}
								className={"flex flex-col justify-between items-start gap-6"}>

								<div
									className={"w-full"}>
									<label
										className={"text-gray-800 font-medium"}>
										Your username
									</label>
									<input id={"username"}
									       name={"username"}
									       type={"text"}
									       autoComplete={"username"}
									       placeholder={"Username"}
									       onChange={(event) => {
										       return (
											       setFormData(
												       {
													       ...formData, username: event.target.value.trim(),
												       }
											       )
										       );
									       }}
									       className={"w-full mt-2 px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-btn_bg rounded-md"}
									/>

								</div>

								<div
									className={"w-full"}>
									<label className={"text-gray-800 font-medium"}>
										Your email
									</label>
									<input
										id={"email"}
										name={"email"}
										type={"email"}
										autoComplete={"email"}
										placeholder={"example@gmail.com"}
										onChange={(event) => {
											return (
												setFormData(
													{
														...formData, email: event.target.value.trim(),
													}
												)
											);
										}}
										className={"w-full mt-2 px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-btn_bg rounded-md"}
									/>

								</div>

								<div
									className={"w-full"}>
									<label className={"text-gray-800 font-medium"}>
										Your password
									</label>
									<input
										id={"password"}
										name={"password"}
										type={"password"}
										autoComplete={"new-password"}
										placeholder={"Password"}
										onChange={(event) => {
											return (
												setFormData(
													{
														...formData, password: event.target.value.trim(),
													}
												)
											);
										}}
										className={"w-full mt-2 px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-btn_bg rounded-md"}
									/>
								</div>

								{
									error && (
										<div className={"w-full px-4 py-2 bg-red-100 text-red-600 rounded-md"}>
											{error}
										</div>
									)
								}

								{
									success && (
										<div className={"w-full px-4 py-2 bg-green-100 text-green-600 rounded-md"}>
											{success}
										</div>
									)
								}

								<div
									className={"w-full"}>
									<button
										type={"submit"}
										disabled={loading}
										className={"w-full mt-2 px-4 py-2 bg-btn_bg font-medium text-white rounded-md"}
									>
										{
											loading ? (<span className={"pl-3"}>Loading...</span>) : "Sign Up"
										}
									</button>
								</div>

								<div className={"w-full"}>
									<p className={"w-full  px-4 py-1 font-medium"}>
										Have an account?
										<span>
											<Link to={"/sign-in"} className={"text-indigo-600"}>
												 &nbsp;Sign in
											</Link>
										</span>
									</p>
								</div>

							</form>

						</div>
					</div>


					{/*  right  */}
					<div className={"flex-1 hidden md:block"}>
						<div className={"grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"}>
							{
								images.map((image, index) => {
									return (
										<div
											className={`overflow-hidden rounded-xl ${index === 5 ? "col-span-3" : (index === 7 ? "col-span-2 row-span-2" : (index === 10 ? "row-span-3" : (index === 14 || index === images.length ? "col-span-2" : "")))}`}
											key={index}
										>
											<img
												className={`w-full h-40 object-cover ${index === 7 || index === 10 ? "h-[100%]" : ""}`}
												src={image.url}
												alt={image.url}
											/>
										</div>
									)
								})
							}

						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default Signup;
