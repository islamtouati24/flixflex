import NavBar from "../components/navbar";
import PaginatedItems from "../components/paginate/paginate";
import SearchForm from "../components/search_form";

export default function MoviesPage(params) {
  const { type, url } = params;
  return (
    <>
      <NavBar />
      <div className="container mx-auto space-y-3 px-5 pt-20">
        <SearchForm />
      </div>
      <PaginatedItems type={type} url={url} />
    </>
  );
}
