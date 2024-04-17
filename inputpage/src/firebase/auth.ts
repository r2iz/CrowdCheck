import { getAuth,  signInWithRedirect, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
};

const signInWithGooglePopup = async () => {
    await signInWithPopup(auth, provider);
};

const signOutUser = () => {
    signOut(auth);
};

export { auth, signInWithGooglePopup, signInWithGoogle, signOutUser };