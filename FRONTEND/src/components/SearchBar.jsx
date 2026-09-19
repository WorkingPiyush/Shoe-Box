import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { getSearchResult } from "../api/usersOrders";
import ProductGrid from "../sections/ProductGrid";
import ImgCard from "./ImgCard";

function SearchBar({ searchResult, setSearchResult, setIsSearching }) {
  const [keyword, setKeyword] = useState("");
  const searchSection = location.pathname.split("/")[2]

  useEffect(() => {
    const value = keyword.trim();
    if (!value || value.length <= 2) {
      setIsSearching(false)
      setSearchResult([]);
      return;
    }
    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setIsSearching(true);
        const response = await getSearchResult(value, {
          signal: controller.signal,
        }, searchSection);
        setSearchResult(response);
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("Search failed:", error);
        }
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    }
  }, [keyword, searchSection])

  // console.log("searchResult", searchResult)
  return (
    <div className="flex items-center justify-center relative mb-2 md:w-xl ">
      <input
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search about Shoe..."
        className='outline-none border rounded-sm text-2xl px-4 py-1.5 w-full'
      />
      <CiSearch className="text-4xl text-gray-600 bg-white rounded-sm cursor-pointer absolute right-2 active:scale-95" />
    </div>
  )
}

export default SearchBar