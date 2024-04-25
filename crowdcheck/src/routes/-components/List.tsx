interface ListProps {
    name: string;
    type: string;
    classroom: string;
    congestion: string;
}

export function List(props: ListProps) {
    return(
        <div className="container px-5 py-12 mx-auto">
            <div className="py-8 flex flex-wrap md:flex-nowrap border-b-2 border-gray-200">
                <div className="md:w-64 md:mb-0 mb-4 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-200">
                        {props.type}
                    </span>
                    <span className="text-gray-200 text-sm">{props.congestion}</span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-200 title-font mb-2">
                        {props.name}
                    </h2>
                    <p className="leading-relaxed text-gray-200">
                        {props.classroom}
                    </p>
                </div>
            </div>
        </div>
    );
}