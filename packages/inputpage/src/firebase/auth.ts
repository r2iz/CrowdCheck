import { getAuth,  signInWithRedirect, signOut, GoogleAuthProvider } from "firebase/auth";
import { app } from "./init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithRedirect(auth, provider);
};

const signOutUser = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, signOutUser };