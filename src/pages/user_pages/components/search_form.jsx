import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
export default function SearchForm() {
  const navigate = useNavigate();
  let query = useQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    navigate(`/search?query=${data.get("search")}`);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <label
        // for="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          name="search"
          type="search"
          id="default-search"
          className="block w-full rounded-md border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
          placeholder="Search for a movie, tv show......"
          defaultValue={query.get("query")}
          required
        />
        <button
          type="submit"
          className="absolute bottom-2.5 right-2.5 rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}
