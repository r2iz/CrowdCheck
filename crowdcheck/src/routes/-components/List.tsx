interface ListProps {
    name: string;
    type: string;
    classroom: string;
    congestion: string;
}

export function List(props: ListProps) {
    return(
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">
                                {props.type}
                            </span>
                            <span className="mt-1 text-gray-500 text-sm">{props.congestion}</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                {props.name}
                            </h2>
                            <p className="leading-relaxed text-gray-600">
                                {props.classroom}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}