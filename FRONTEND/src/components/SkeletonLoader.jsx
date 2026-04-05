import React from 'react'

function SkeletonLoader({ length }) {
    return (
        <div className="grid grid-cols-5 gap-5 p-3">
            {Array.from({ length: length }).map((_, i) => (
                <div key={i} className='bg-white/60 p-1 w-30 h-48 border border-dashed rounded-2xl cursor-pointer md:h-68 md:w-70 md:p-4'/>
            ))}
        </div>
    )
}

export default SkeletonLoader;
