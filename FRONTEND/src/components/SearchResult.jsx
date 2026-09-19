import { ThreeDot } from "react-loading-indicators";
import ImgCard from "./ImgCard"

function SearchResult({ shoe }) {

    if (!shoe) {
        return (
            <div className="min-h-screen flex justify-center items-center text-6xl">
                <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
            </div>
        );

    }
    return (
        <div>
            <div className='flex justify-center flex-wrap mt-1 w-fit bg-gray-500/15 rounded-xl'>
                {shoe.map(shoe => {
                    return <ImgCard key={shoe.id} shoe={shoe} />
                })}
            </div >
        </div>
    )
}

export default SearchResult