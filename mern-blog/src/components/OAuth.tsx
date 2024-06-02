import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {app} from "@/firebase";
import {useDispatch} from "react-redux";
import {signInSuccess} from "@/redux/user/userSlice";
import {useNavigate} from "react-router-dom";

const OAuth = ({title}:{title:string}) => {

	const auth = getAuth(app);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleGoogleClick = async () => {
		const provider = new GoogleAuthProvider();
		provider.setCustomParameters({prompt: "select_account"});
		try {
			const resultFromGoogle = await signInWithPopup(auth, provider);
			const res = await fetch("http://localhost:3009/api/auth/google", {
				method: "POST",
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify({
					name: resultFromGoogle.user.displayName,
					email: resultFromGoogle.user.email,
					googlePhotoUrl: resultFromGoogle.user.photoURL,
				}),
			});
			const data = await res.json();
			if (res.ok){
				dispatch(signInSuccess(data));
				navigate("/");
			}
		} catch (error){
			console.log(error);
		}
	}

	return (
		<div>
			<button
				className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-black dark:border-gray-600"
				type={"button"}
				onClick={handleGoogleClick}
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

				<span className="">&nbsp;&nbsp;{title}</span>
			</button>
		</div>
	);
};

export default OAuth;
