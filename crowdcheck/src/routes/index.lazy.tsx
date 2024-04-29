import { useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { data } from "../libs/list";
import { expData } from "../libs/exp";
import { getData, Congestion } from "../libs/fetch";
import { List } from "./-components/List";


export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const [congestions, setCongestions] = useState<Congestion[]>([]);
    const [currentFloor, setCurrentFloor] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const floors = [...new Set(data.items.map(item => item?.floor))].sort();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        // 初回レンダリング時にデータを取得
        getData().then(data => setCongestions(data));
        setIsLoading(false);
    }, []);

    const uniqueItems = congestions.reduce((unique, congestion) => {
        const exhibition = data.items.find(d => d.exhibitionId === congestion.exhibitionId && d.floor === floors[currentFloor]);
        if (exhibition) {
            unique.push(congestion);
        }
        return unique;
    }, [] as Congestion[]);

    return (
        <div className="relative isolate overflow-hidden bg-gray-800 h-screen w-full">
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-10"
                    style={{
                        clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
                    style={{
                        clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <header className="h-12 flex flex-col sm:flex-row justify-between items-center pl-4 w-full absolute mt-6">
                <h1 className="text-4xl text-gray-200 font-semibold">混雑状況 / {floors[currentFloor] === 5 ? "その他" : floors[currentFloor] === 6 ? "ピロティ" : `${floors[currentFloor]}階`}</h1>
                <div className="sm:hidden absolute top-0 right-0 mt-2 mr-4">
                    <button onClick={toggleMenu}>
                        <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
                <div className={`flex flex-wrap justify-center sm:justify-end ${menuOpen ? "" : "hidden sm:flex"}`}>
                    {floors.map((floor, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 m-1 flex-shrink-0 ${currentFloor === index ? "text-blue-500" : "text-gray-500"}`}
                            onClick={() => setCurrentFloor(index)}
                        >
                            {floor === 5 ? "その他" : floor === 6 ? "ピロティ" : `${floor}階`}
                        </button>
                    ))}
                </div>
            </header>
            <div className="mt-24 h-screen overflow-auto">
                {isLoading ? (
                    <div className="loader">Loading...</div>
                ) : (
                    uniqueItems.filter((congestion) => {
                        const exhibition = data.items.find(d => d.exhibitionId === congestion?.exhibitionId);
                        return exhibition?.floor === floors[currentFloor];
                    }).map((congestion) => {
                        const exhibition = data.items.find(d => d.exhibitionId === congestion?.exhibitionId);
                        const exp = expData.items.find(d => d.id === exhibition?.id);
                        if (exhibition) {
                            return <List name={exhibition.name} congestion={congestion?.nowCongestion} type={exhibition.type} classroom={exhibition.classroom} exp={exp?.exp} />;
                        }
                    })
                )}
            </div>
        </div>
    );
}