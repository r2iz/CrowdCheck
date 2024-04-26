import { selectedTeam, selectedTeamIdState, lastSubmittedDateState } from "../../../state";
import { useRecoilState } from "recoil";
import { useNavigate } from "@tanstack/react-router";

import { get } from "../../../firebase/db/get";

export const InputHeader = () => {
    const [team] = useRecoilState(selectedTeam);
    const [lastSubmittedDate, setSubmittedDate] = useRecoilState(lastSubmittedDateState);
    const [teamId] = useRecoilState(selectedTeamIdState);
    const navigate = useNavigate();
    const text = lastSubmittedDate ? `${lastSubmittedDate?.getHours()}時${lastSubmittedDate?.getMinutes()}分` : "未送信";
    const handleBack = () => {
        navigate({
            to: "/select",
        });
    };
    if(text === "未送信") {
        if(teamId) {
            get(teamId).then((data) => {
                if(data!.updatedDate) {
                    setSubmittedDate(data!.updatedDate.toDate());
                }
            });
        }
    }
    return (
        <header className="text-gray-600 body-font fixed w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:justify-between">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:mr-4">
                    <span className="ml-3 text-xl">聖光祭</span>
                </a>
                <div className="flex items-center">
                    <button onClick={handleBack} className="mr-6 text-xl rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">←</button>
                    <span className="mr-6 text-xl text-gray-900">最終送信時刻: {text}</span>
                    <span className="mr-6 text-xl text-gray-900">団体: {team}</span>
                </div>
            </div>
        </header>
    );
};