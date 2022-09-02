import React from 'react'
import styled from "styled-components";

const MySearch = styled.input`
  width: 15rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  margin: 1rem;
  background-color: rgb(105, 15, 15);
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  color: wheat;
  padding: 1rem;
  &&::placeholder {
    color: wheat;
    text-align: center;
  }
`;


const SearchBar = ({ search, setSearch, setPage }) => {

    const handleChange = e => {
      setPage(1)
      setSearch(e.target.value)
    }
    

  return (
    <MySearch
    type="text"
    placeholder="Name, ID or Type..."
    value={search}
    onChange={handleChange}
  ></MySearch>
  )
}

export default SearchBar