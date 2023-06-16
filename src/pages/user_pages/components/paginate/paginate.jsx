/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./index.css";
import ItemResults from "../item_result";
import { useNavigate } from "react-router-dom";
import { useQuery } from "pages/user_pages/components/search_form";
import axios from "axios";
import { configAPI } from "pages/user_pages/constants";
import LoadingPage from "components/loading_page";

// Example items, to simulate fetching from another resources.

function Items({ currentItems, type }) {
  return (
    <div className="container mx-auto space-y-4 px-5 py-4">
      {currentItems &&
        currentItems.map((item, i) => (
          <ItemResults key={i} movie={item} type={type} />
        ))}
    </div>
  );
}

function PaginatedItems({ type, url }) {
  const [items, setItems] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const currentItems = items.results;
  const pageCount = items.total_pages;
  const serachType = type === "movie" ? type : "tv";
  const navigate = useNavigate();
  let query = useQuery();
  const queryString = query.get("query");
  const [isPageloaded, setIsPageloaded] = useState(false);
  url = url
    ? url
    : `https://api.themoviedb.org/3/search/${serachType}?query=${queryString}&include_adult=false&language=en-US&page=${
        currentPage + 1
      }`;
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  useEffect(() => {
    setCurrentPage(0);
  }, [type]);
  useEffect(() => {
    setIsPageloaded(false);
    axios
      .get(url, configAPI)
      .then((res) => {
        setItems(res.data);
        setIsPageloaded(true);
      })
      .catch((e) => {
        navigate("/500");
      });
  }, [queryString, currentPage, type]);

  return !isPageloaded ? (
    <LoadingPage />
  ) : (
    <>
      <Items currentItems={currentItems} type={type} />
      <ReactPaginate
        className="paginate mx-auto mb-5 flex w-fit items-center rounded-md bg-white"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
    </>
  );
}
export default PaginatedItems;
