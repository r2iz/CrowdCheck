import { db } from "./initdb";
import { collection, doc, setDoc } from "firebase/firestore";

export const set = async (updatedDate: Date, nowCongestion: string , exhibitionId: number) => {
    const exhibitionRef = collection(db, 'exhibition');
    const exhibitionDoc = doc(exhibitionRef, exhibitionId.toString());
    await setDoc(exhibitionDoc, {
        updatedDate: updatedDate,
        nowCongestion: nowCongestion,
    });

};