import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
    .initializeApp({
        apiKey: "AIzaSyCJ4UPn-agiRtK_AC2CsmpHaG-kHuki2C4",
        authDomain: "unichat-9ea60.firebaseapp.com",
        projectId: "unichat-9ea60",
        storageBucket: "unichat-9ea60.appspot.com",
        messagingSenderId: "338746060856",
        appId: "1:338746060856:web:69809ab7d6f95511dc76cd",
    })
    .auth();
