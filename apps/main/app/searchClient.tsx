"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import QuoteCard from "../components/QuoteCard";

const Search = () => {
  const [query, setquery] = useState("");

  return (
    <div className="flex flex-col p-2 py-6 m-h-screen">
      <div className="flex flex-col w-full items-center my-5">
        <h1 className="text-5xl font-bold">Indo MovieQUO DB</h1>
        <p className="italic">Search for your favourite movie quotes</p>
      </div>
      <SearchBar query={query} setQuery={setquery} />
      <QuoteCard query={query} />
    </div>
  );
};

export default Search;
