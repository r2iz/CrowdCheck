import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { List } from './-components/List';
import { Header } from '../-components/Header';

import { selectedTeam } from "../../state";
import { useRecoilState } from "recoil";

export const Route = createLazyFileRoute("/select")({
  component: Select,
});

function Select() {
    const navigate = useNavigate();
    const [team, setTeam] = useRecoilState(selectedTeam);
    const onclick = () => {
        if (team === null) {
            alert("団体を選択してください");
            return;
        }
        navigate({
            to: '/input',
        });
    }

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full space-y-8">
                    <div className="flex flex-col justify-center items-center">
                        <List />
                        <button onClick={ () => onclick() } className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        決定
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}