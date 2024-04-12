import { useEffect, useState } from 'react';
import { Card } from "./Card";
import { data } from "./list";

interface Congestion {
    exhibitionId: number;
    nowCongestion: string;
    updatedAt: Date;
}

async function getData(): Promise<Congestion[]> {
    const response = await fetch("https://us-central1-crowd-level-system.cloudfunctions.net/getCongestion");
    const data = await response.json();
    return data;
}

function App() {
    const [congestions, setCongestions] = useState<Congestion[]>([]);
    const [currentFloor, setCurrentFloor] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const floors = [...new Set(data.items.map(item => item.floor))].sort();
    const itemsPerPage = 10;

    useEffect(() => {
        // 初回レンダリング時にデータを取得
        getData().then(data => setCongestions(data));
    
        // 10分ごとにデータを更新
        const timer = setInterval(() => {
            getData().then(data => setCongestions(data));
        }, 10 * 60 * 1000); // 10分をミリ秒に変換
    
        // コンポーネントのクリーンアップ時にタイマーをクリア
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFloor(prevFloor => (prevFloor + 1) % floors.length);
            setCurrentPage(0);
        }, 10000);
        return () => clearInterval(timer);
    }, [floors]);

    const currentItems = congestions.reduce((unique, congestion) => {
        const exhibition = data.items.find(d => d.exhibitionId === congestion.exhibitionId && d.floor === floors[currentFloor]);
        if (exhibition && !unique.some(item => item.exhibitionId === congestion.exhibitionId)) {
            unique.push(congestion);
        }
        return unique;
    }, [] as Congestion[]);

    return (
        <div className="h-screen w-full bg-gradient-to-br from-violet-900 via-pink-700 to-orange-700 flex items-center justify-center">
            <header className="backdrop-blur-fg bg-gray-200/30 shadow-lg h-12 flex items-center pl-4 w-full absolute top-0">
                <h1 className="text-2xl text-gray-900 font-bold">{floors[currentFloor]}階</h1>
            </header>
            <div className="flex flex-wrap justify-center mt-24">
                {currentItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((congestion) => {
                    const exhibition = data.items.find(d => d.exhibitionId === congestion.exhibitionId);
                    if (exhibition) {
                        return <Card key={congestion.exhibitionId} name={exhibition.name} congestion={congestion.nowCongestion} type={exhibition.type} classroom={exhibition.classroom} />;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default App;