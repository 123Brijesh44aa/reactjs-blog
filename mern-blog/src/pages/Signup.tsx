import {images} from "@/utils/constants";
import {Link} from "react-router-dom";
import Logo from "@/components/Logo";

const Signup = () => {

	return (
		<>
			<div className={"min-h-screen mt-20"}>
				<div className={"flex p-3 w-full mx-auto flex-col gap-3 md:flex-row md:items-center"}>

					{/*  left  */}

					<div className={"flex-1"}>
						<div className={"px-10 lg:px-28"}>

							<div className={"mb-10"}>
								<Logo width={"400"} height={"200"}/>
								<h1 className={"text-2xl font-bold text-gray-800 py-3"}>Sign Up with your email and password or with Google</h1>
								<p>Dive into a world where curiosity meets creativity. Sign up to join our community and stay updated with the latest posts. It's all about sharing stories and insights, one post at a time.</p>
							</div>

							<form className={"flex flex-col justify-between items-start gap-6"}>

								<div className={"w-full"}>
									<label className={"text-gray-800 font-medium"}>
										Your username
									</label>
									<input id={"username"} name={"username"} type={"text"} autoComplete={"username"}
									       placeholder={"Username"}
									       className={"w-full mt-2 px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-btn_bg rounded-md"}/>
								</div>

								<div className={"w-full"}>
									<label className={"text-gray-800 font-medium"}>
										Your email
									</label>
									<input id={"email"} name={"email"} type={"email"} autoComplete={"email"}
									       placeholder={"example@gmail.com"}
									       className={"w-full mt-2 px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-btn_bg rounded-md"}/>
								</div>

								<div className={"w-full"}>
									<label className={"text-gray-800 font-medium"}>
										Your password
									</label>
									<input id={"password"} name={"password"} type={"password"}
									       autoComplete={"new-password"} placeholder={"Password"}
									       className={"w-full mt-2 px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-btn_bg rounded-md"}/>
								</div>

								<div className={"w-full"}>
									<button type={"submit"}
									        className={"w-full mt-2 px-4 py-2 bg-btn_bg font-medium text-white rounded-md"}>
										Sign Up
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
											className={`overflow-hidden rounded-xl ${index === 5 ? "col-span-3" : (index === 7 ? "col-span-2 row-span-2" : (index === 10 ? "row-span-3" : (index === 14 || index === images.length ? "col-span-2" : "")))}`}>
											<img
												className={`w-full h-40 object-cover ${index === 7 || index === 10 ? "h-[100%]" : ""}`}
												key={index}
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
