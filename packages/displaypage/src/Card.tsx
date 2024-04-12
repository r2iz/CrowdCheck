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
                <FontAwesomeIcon icon={faPerson} className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} className="text-gray-800" />
            </div>
        );
    } else if (props.congestion === "Middle") {
        return (
            <div className="">
                <FontAwesomeIcon icon={faPerson} className="text-gray-800" />
                <FontAwesomeIcon icon={faPerson} className="text-gray-800" />
            </div>
        );
    } else {
        return (
            <div className="">
                <FontAwesomeIcon icon={faPerson} className="text-gray-800" />
            </div>
        );
    }
};

export const Card = (props: CardProps) => {
    return (
        <>
            <a href="#" className="block max-w-sm m-4 h-48 w-64 bg-gray-200/30 border-gray-200/30 backdrop-blur-lg rounded-lg border shadow-lg overflow-hidden">
                <div className="px-6 py-4">
                    <div className="flex justify-between">
                        <p className="font-bold text-xl text-gray-800">{props.name}</p>
                        <Icons congestion={props.congestion} />
                    </div>
                    <p className="font-bold text-lg text-gray-800 mb-2">{props.congestion}</p>
                    <p className="font-normal text-gray-700">{props.classroom}</p>
                </div>
            </a>
        </>
    );
};