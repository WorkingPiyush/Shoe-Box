function Loading() {
    return (
        <div className="absolute h-full w-full flex items-center justify-center z-100 bg-gray-100/60 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 text-sm">Loading</p>
            </div>
        </div>
    )
}

export default Loading
