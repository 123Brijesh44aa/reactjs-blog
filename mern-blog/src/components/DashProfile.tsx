import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
// import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
// import {app} from "@/firebase";

// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import Compressor from 'compressorjs';
import { encode, decode } from 'base64-arraybuffer';



const DashProfile = () => {

	const {currentUser} = useSelector((state: RootState) => state.user);
	const [imageFile, setImageFile] = useState<File | null>(null);
	const filePickerRef = useRef<HTMLInputElement | null>(null);
	const [imageFileUploadProgress, setImageFileUploadProgress] = useState<string | null>(null);
	const [imageFileUploadError, setImageFileUploadError] = useState<string | null>(null);
	const [imageURL, setImageURL] = useState<string | null>('');

	console.log("Progress", imageFileUploadProgress);
	console.log("Error", imageFileUploadError);
	console.log("Image File", imageFile);
	// console.log("Image File URL", imageFileUrl);
	console.log("Image URL", imageURL);


	const handleImageChange = (e: any) => {
		try {

			const file = e.target.files[0];
			// Check if file size is less than 2MB
			if (file.size <= 2 * 1024 * 1024) {
				setImageFile(file);
				setImageFileUploadError(null); // Clear any previous error messages

			} else {
				// Set an error message to state
				setImageFileUploadError("File size must be less than 2MB");
				setImageFile(null);
			}
		} catch (error: any){
			setImageFileUploadError(error.message);
		}

	}


	const handleImageUpload = () => {
		try {
			if (imageFile) {
				new Compressor(imageFile, {
					quality: 0.8, // Adjust quality here (0 to 1)
					success(result) {
						const reader = new FileReader();
						reader.onloadend = () => {
							if (reader.result instanceof ArrayBuffer) {
								const base64String = encode(reader.result);
								// Here you can send `base64String` to your backend and store it in your database
								setImageURL(`data:image/jpeg;base64,${base64String}`);
							}
						};
						reader.readAsArrayBuffer(result);
					},
					error(err) {
						console.error('Error during image compression:', err);
						setImageFileUploadError("Error during image compression");
					},
				});
			}
		} catch (error:any){
			setImageFileUploadError(error.message);
		}
	}

	useEffect(
		() => {
			handleImageUpload()
		},
		[imageFile]
	)


		return (
			<div className={"flex flex-col items-center justify-center pt-10"}>
				<h1 className={"text-4xl font-semibold text-gray-500 pb-12"}>Profile</h1>
				<form className={"flex flex-col gap-6 w-full"}>

					<div>
						<input type="file" accept={"image/*"} onChange={handleImageChange} ref={filePickerRef} hidden/>
					</div>

					<div
						className={"w-32 h-32 self-center cursor-pointer overflow-hidden rounded-full ring-4 ring-indigo-600 dark:ring-indigo-900"}
						onClick={() => filePickerRef.current && filePickerRef.current?.click()}
					>
						<img src={imageURL || currentUser.user.profilePicture} alt={"user"}
						     className={"rounded-full w-full h-full object-cover"}/>
					</div>

					{
						imageFileUploadProgress &&
                      <div className={"w-full p-2 bg-green-100 dark:bg-green-900 rounded"}>
                          <p className={"text-green-500 dark:text-green-200"}>Image
                              Uploaded {imageFileUploadProgress}%</p>
                      </div>
					}

					{
						imageFileUploadError &&
                      <div className={"w-full p-2 bg-red-100 dark:bg-red-900 rounded"}>
                          <p className={"text-red-500 dark:text-red-200"}>{imageFileUploadError}</p>
                      </div>
					}

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

				<div
					className={"w-full flex flex-row justify-between gap-6 mt-6 text-red-500 bg-red-100 dark:bg-red-950 p-4 rounded"}>
					<span className={"cursor-pointer"}>Delete Account</span>
					<span className={"cursor-pointer"}>Sign Out</span>
				</div>

			</div>
		);
	}

export default DashProfile;
