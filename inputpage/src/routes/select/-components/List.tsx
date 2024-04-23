import { useRecoilState } from "recoil";
import { selectedTeam, selectedTeamIdState, userState } from "../../../state";
import { data } from "../../../list";
import { useEffect } from "react";

const items = data.items;

export const List = () => {
    const [team, setTeam] = useRecoilState(selectedTeam);
    const [user, setUser] = useRecoilState(userState);
    const [teamId, setTeamId] = useRecoilState(selectedTeamIdState);

    const onChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTeam(e.target.value);
        const selectedItem = items.find(item => item.name === e.target.value);
        if (selectedItem) {
            setTeamId(selectedItem.exhibitionId!);
        }
    };

    useEffect(() => {
        console.log(team);
    }, [team]);

    return (
        <div className="flex items-center mb-6">
            <select onChange={(e) => onChanged(e)} className="flex items-center justify-center mt-1 w-18 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="" id="">
                <option value="" selected hidden>選択してください</option>
                {items.map((item) => (
                    <option key={item.name} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};