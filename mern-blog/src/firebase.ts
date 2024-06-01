// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {meta} from "@typescript-eslint/eslint-plugin";


declare global{
	interface ImportMeta{
		env: Record<string, string>;
	}
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const API_KEY=import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN=import.meta.env.VITE_AUTH_DOMAIN;
const DATABASE_URL=import.meta.env.VITE_DATABASE_URL;
const PROJECT_ID=import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET=import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID=import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID=import.meta.env.VITE_APP_ID;
const MEASUREMENT_ID=import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	databaseURL: DATABASE_URL,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
