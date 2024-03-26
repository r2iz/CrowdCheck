import { db } from "./initdb";
import { collection, doc, getDoc } from "firebase/firestore";

export const get = async (exhibitionId: number) => {
    const exhibitionRef = collection(db, "exhibition");
    const exhibitionDoc = doc(exhibitionRef, exhibitionId.toString());
    const exhibitionSnapshot = await getDoc(exhibitionDoc);
    return exhibitionSnapshot.data();
};
