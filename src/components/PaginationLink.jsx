import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import SearchContext from "../context/SearchContext";

export default function PaginationLink({ pokemons }) {
  const { page, setPage } = useContext(SearchContext)
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [ navPages, setNavPages ] = useState(46);

  useEffect(() => {
    setPage(parseFloat(query.get("page") || page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (pokemons) setNavPages(Math.ceil(pokemons / 20));
    if (!pokemons) setNavPages(1);
  }, [pokemons]);

  return (
    <nav>
      <Pagination
        page={page}
        count={navPages}
        shape="rounded"
        color={"primary"}
        siblingCount={0}
        sx={{
          margin: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/?page=${item.page}`}
            {...item}
          />
        )}
      />
    </nav>
  );
}
