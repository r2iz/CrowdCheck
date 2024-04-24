import { useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { data } from "../libs/list";
import { getData, Congestion } from "../libs/fetch";
import { List } from "./-components/List";
import { Card } from "./-components/Card";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const [congestions, setCongestions] = useState<Congestion[]>([]);
    const [currentFloor, setCurrentFloor] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const floors = [...new Set(data.items.map(item => item.floor))].sort();
    const itemsPerPage = 10;

    useEffect(() => {
        getData().then(data => setCongestions(data));
        const timer = setInterval(() => {
            getData().then(data => setCongestions(data));
        }, 10 * 60 * 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFloor(prevFloor => (prevFloor + 1) % floors.length);
            setCurrentPage(0);
        }, 5000);
        return () => clearInterval(timer);
    }, [floors]);

    const uniqueItems = congestions.reduce((unique, congestion) => {
        const exhibition = data.items.find(d => d.exhibitionId === congestion.exhibitionId && d.floor === floors[currentFloor]);
        if (exhibition) {
            unique.push(congestion);
        }
        return unique;
    }, [] as Congestion[]);

    return(
        <>
            <div className="relative isolate overflow-hidden bg-gray-800 h-screen w-full">
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
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
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>
            <div>
                {uniqueItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((congestion) => {
                    const exhibition = data.items.find(d => d.exhibitionId === congestion?.exhibitionId);
                    if (exhibition) {
                        return <Card name={exhibition.name} congestion={congestion?.nowCongestion} type={exhibition.type} classroom={exhibition.classroom} />;
                    }
                    return null;
                })}
            </div>
        </>
    );
}