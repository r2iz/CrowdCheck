import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
    name: string;
    type: string;
    classroom: string;
    congestion: string;
}

interface iconsProps {
    congestion: string;
}

const Icons = (props: iconsProps) => {
    if (props.congestion === "High") {
        return (
            <div className="">
                <FontAwesomeIcon icon={faPerson} size="4x" className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} size="4x" className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} size="4x" className="text-gray-800" />
            </div>
        );
    } else if (props.congestion === "Middle") {
        return (
            <div className="">
                <FontAwesomeIcon icon={faPerson} size="4x" className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} size="4x" className="text-gray-800" />
            </div>
        );
    } else {
        return (
            <div className="">
                <FontAwesomeIcon icon={faPerson} size="4x" className="text-gray-800" />
            </div>
        );
    }
};

// 背景色を決定する関数
const getBackgroundColor = (congestion: string) => {
    switch (congestion) {
        case "High":
            return "bg-red-300/60";
        case "Middle":
            return "bg-yellow-300/60";
        default:
            return "bg-green-300/60";
    }
};

export const Card = (props: CardProps) => {
    // 背景色を取得
    const backgroundColor = getBackgroundColor(props.congestion);

    return (
        <>
            <a href="#" className={`block max-w-sm m-4 h-56 w-64 ${backgroundColor} border-gray-200/30 backdrop-blur-lg rounded-lg border shadow-lg overflow-hidden`}>
                <div className="px-6 py-4">
                    <div className="flex justify-between">
                        <p className="font-bold text-xl text-gray-800">{props.name}</p>
                    </div>
                    <p className="font-bold text-2xl text-gray-800 mb-2">{props.congestion}</p>
                    <p className="font-normal text-gray-700">{props.classroom}</p>
                </div>
                <div className="flex justify-center">
                    <Icons congestion={props.congestion} />
                </div>
            </a>
        </>
    );
};