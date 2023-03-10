export default function LoadingSkeleton() {
    return (
        <div
            className="relative p-4 min-w-[300px] lg:min-w-auto bg-[#f5f5f5] rounded-lg overflow-hidden rounded-lg mr-6 lg:mr-0 last:mr-0"
        >
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}