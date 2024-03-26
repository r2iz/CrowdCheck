import { selectedTeamIdState, congestionState, lastSubmittedDateState } from "../../../state";
import { useRecoilState } from "recoil";

import { set } from "../../../firebase/db/set";

export const InputBody = () => {
    const [congestion, setCongestion] = useRecoilState(congestionState);
    const [lastSubmittedDate, setSubmittedDate] = useRecoilState(lastSubmittedDateState);
    const [exhibitionId] = useRecoilState(selectedTeamIdState);

    const handleClick = (value: string) => {
        setCongestion(value);
    };

    const handleSubmit = async () => {
        setSubmittedDate(new Date());
        if (!congestion || !exhibitionId) {
            alert("混雑度を選択してください");
            return;
        }
        const now = new Date();
        if (lastSubmittedDate && now.getTime() - lastSubmittedDate.getTime() < 5 * 60 * 1000) {
            alert("5分以内に送信したため、送信できません");
            return;
        }
        await set(new Date(), congestion, exhibitionId);
        alert("送信しました");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">現在の混雑度を選択してください</h1>
            <div className=" space-y-2">
                <button 
                    className={`px-4 py-2 border m-8 border-indigo-600 rounded ${congestion === "Low" ? "bg-indigo-600 text-white" : "text-indigo-600"}`}
                    onClick={() => handleClick("Low")}
                >
                    低
                </button>
                <button 
                    className={`px-4 py-2 border m-8 border-indigo-600 rounded ${congestion === "Medium" ? "bg-indigo-600 text-white" : "text-indigo-600 "}`}
                    onClick={() => handleClick("Medium")}
                >
                    中
                </button>
                <button 
                    className={`px-4 py-2 border m-8 border-indigo-600 rounded ${congestion === "High" ? "bg-indigo-600 text-white" : "text-indigo-600"}`}
                    onClick={() => handleClick("High")}
                >
                    高
                </button>
            </div>
            <button
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
                onClick={() => handleSubmit()}
            >
                送信
            </button>
        </div>
    );
};
