import React from 'react'

function SkeletonLoading() {
    return (
        <div className="p-4 rounded-lg sm:h-[55vh] md:h-[80vh]">
            <div className="h-full w-full rounded 
    bg-[linear-gradient(90deg,#eee_25%,#ddd_37%,#eee_63%)] 
    bg-shimmer animate-shimmer" />
        </div>
    )
}

export default SkeletonLoading
