export default function ColumnComponent({ name, children }: { name: string, children?: React.ReactNode }) {
    return (
        <div className="flex flex-col w-72 bg-gray-100 rounded-lg shadow-sm">
            <div className="p-3 bg-gray-200 rounded-t-lg border-b border-gray-300">
                <h3 className="font-medium text-gray-700">{name}</h3>
            </div>
            <div className="p-2 flex-1 min-h-[200px] ">
                {children}    
            </div>
        </div>
    )
}