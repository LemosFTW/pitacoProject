import { CardComponentProps } from "@/interfaces/types";


export default function CardComponent({
    name,
    date,
    time,
    duration,
    location,
    description,
    draggableProps,
    dragHandleProps,
    innerRef
}: CardComponentProps) {
    return (
        <div
            ref={innerRef}
            {...draggableProps}
            {...dragHandleProps}
            className="bg-white rounded-lg shadow-sm p-3 mb-2 hover:shadow-md transition-shadow cursor-pointer"
        >
            <h3 className="font-medium text-gray-800 mb-2">{name}</h3>
            
            <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{date} às {time}</span>
                </div>

                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{duration}</span>
                </div>

                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{location}</span>
                </div>

                {description && (
                    <div className="mt-2 text-gray-700 border-t pt-2">
                        <p className="line-clamp-2">{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}