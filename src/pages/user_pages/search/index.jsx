import { useState } from "react";
import NavBar from "../components/navbar";
import PaginatedItems from "../components/paginate/paginate";
import SearchForm from "../components/search_form";

export default function SearchPage() {
  const [type, setType] = useState("movie");
  const handleClick = (selected) => {
    if (selected !== type) {
      setType(selected);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto space-y-3 px-5 pt-20">
        <SearchForm />
        <div className="flex items-center space-x-5">
          {["movie", "serie"].map((element) => (
            <button
              className={`flex items-center justify-center rounded-lg p-2 text-white ${
                type === element ? "bg-red-700" : "hover:bg-gray-500/40"
              }`}
              onClick={(_) => {
                handleClick(element);
              }}
            >
              {element.charAt(0).toUpperCase() + element.slice(1)}s
            </button>
          ))}
        </div>
      </div>
      <PaginatedItems type={type} />
    </>
  );
}
