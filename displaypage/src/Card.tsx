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
                <FontAwesomeIcon icon={faPerson} size="4x" style={{color: "white"}} className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} size="4x" style={{color: "white"}} className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} size="4x" style={{color: "white"}} className="text-gray-800" />
            </div>
        );
    } else if (props.congestion === "Middle") {
        return (
            <div className="">
                <FontAwesomeIcon icon={faPerson} size="4x" style={{color: "white"}} className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} size="4x" style={{color: "white"}} className="text-gray-800" />
            </div>
        );
    } else {
        return (
            <div className="">
                <FontAwesomeIcon icon={faPerson} size="4x" style={{color: "white"}} className="text-gray-800" />
            </div>
        );
    }
};

const LowCardCSS = "low-card";
const MediumCardCSS = "medium-card";
const HighCardCSS = "high-card";

export const Card = (props: CardProps) => {
    // 背景色を取得
    let cardCSS;
    switch (props.congestion) {
        case "Low":
            cardCSS = LowCardCSS;
            break;
        case "Medium":
            cardCSS = MediumCardCSS;
            break;
        case "High":
            cardCSS = HighCardCSS;
            break;
        default:
            cardCSS = LowCardCSS;
    }

    return (
        <div className="m-4">
            <div className={cardCSS}>
                <a href="#" className="block max-w-sm m-4 h-56 w-80 ">
                    <div className="px-6 py-4">
                        <div className="flex justify-between">
                            <p className="font-bold text-4xl text-gray-300">{props.name}</p>
                        </div>
                        <p className="font-bold text-3xl text-gray-300 mb-2">{props.congestion}</p>
                        <p className="font-normal text-gray-300">{props.classroom}</p>
                    </div>
                    <div className="flex justify-center">
                        <Icons congestion={props.congestion} />
                    </div>
                </a>
            </div>
        </div>
    );
};