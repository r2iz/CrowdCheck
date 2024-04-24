interface CardProps {
    name: string;
    type: string;
    classroom: string;
    congestion: string;
}

export function Card(props: CardProps) {
    return (
        <div className="m-4">
            <div className="">
                <a href="#" className="block max-w-sm m-4 h-56 w-80 ">
                    <div className="px-6 py-4">
                        <div className="flex justify-between">
                            <p className="font-bold text-4xl text-gray-300">{props.name}</p>
                        </div>
                        <p className="font-bold text-3xl text-gray-300 mb-2">{props.congestion}</p>
                        <p className="font-normal text-gray-300">{props.classroom}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};