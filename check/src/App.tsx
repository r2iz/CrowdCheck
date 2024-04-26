import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./list";
import { Timestamp } from "./timestamp";

async function fetchData() {
  const response = await fetch(
    "https://us-central1-crowd-level-system.cloudfunctions.net/getAdminCongestion"
  );
  const data = await response.json();
  return data.sort(
    (a: Congestion, b: Congestion) =>
      new Timestamp(a.updatedDate._seconds, a.updatedDate._nanoseconds).toDate().getTime() - new Timestamp(b.updatedDate._seconds, b.updatedDate._nanoseconds).toDate().getTime()
  );
}

export interface Congestion {
  exhibitionId: number;
  nowCongestion: string;
  updatedDate: any;
}

interface ListProps {
  name: string;
  type: string;
  classroom: string;
  congestion: string;
  updatedAt: Date;
}

function List(props: ListProps) {
  let text = "不明";
  if (props.updatedAt instanceof Date) {
    text = `${props.updatedAt.getHours()}時${props.updatedAt.getMinutes()}分`;
  }
  return (
    <div className="container px-5 py-6 mx-auto">
      <div className="py-8 flex flex-col md:flex-row flex-wrap md:flex-nowrap border-b-2 border-gray-700">
        <div className="md:w-64 md:mb-0 mb-4 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            {props.type}
          </span>
          <span className="text-gray-700 text-sm">{props.congestion}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-700 title-font mb-2">
            {props.name}
          </h2>
          <p className="leading-relaxed text-gray-700">{props.classroom}</p>
          <p className="text-gray-500 text-xs mt-2">最終更新: {text}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [congestions, setCongestions] = useState<Congestion[]>([]);
  const fetchDataAndUpdate = async () => {
    let data = await fetchData();
    data = data.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    setCongestions(data);
  };

  useEffect(() => {
    fetchDataAndUpdate();
  }, []);

  return (
    <>
      <header className="flex items-center justify-center">
        <button
          onClick={fetchDataAndUpdate}
          className="bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 mt-5 px-4 rounded"
        >
          データ更新
        </button>
      </header>
      <div
        className="flex flex-wrap justify-center mt-20 overflow-auto"
        style={{ maxHeight: "1000px" }}
      >
        {congestions.map((congestion) => {
          const exhibition = data.items.find(
            (d) => d.exhibitionId === congestion?.exhibitionId
          );
          if (exhibition) {
            return (
              <List
                name={exhibition.name}
                congestion={congestion?.nowCongestion}
                type={exhibition.type}
                classroom={exhibition.classroom}
                updatedAt={new Timestamp(congestion.updatedDate._seconds, congestion.updatedDate._nanoseconds).toDate()}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
