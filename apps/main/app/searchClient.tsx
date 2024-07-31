"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import QuoteCard from "../components/QuoteCard";
import axios from "axios";

const Search = () => {
  const [query, setquery] = useState("");

  const onSearch = (e: any) => {
    e.preventDefault();
    console.log(e.target)
  };

  return (
    <>
      <div className="flex flex-col w-full items-center my-5">
        <h1 className="text-4xl font-bold">A place for your favourite movie quotes</h1>
        <p className="italic">Search for your favourite movie quotes</p>
      </div>
      <SearchBar query={query} setQuery={setquery} onSubmit={onSearch} />
      <QuoteCard query={query} />
    </>
  );
};

export default Search;
