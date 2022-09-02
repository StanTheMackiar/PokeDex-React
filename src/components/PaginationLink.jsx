import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationLink({ page, setPage, pokemons }) {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [navPages, setNavPages] = useState(46);

  useEffect(() => {
    setPage((parseFloat(query.get("page") || 1)));
  }, [search]);

  useEffect(() => {
    if(pokemons) setNavPages(Math.ceil(pokemons / 20));
  }, [pokemons]);


  return (
    <Pagination
      page={page}
      count={navPages}
      color="primary"
      shape="rounded"
      siblingCount={0}
      sx={{
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}
