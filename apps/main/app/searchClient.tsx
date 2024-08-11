"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import QuoteCard from "../components/QuoteCard";
import axios from "axios";
import { useRouter } from "next/navigation";
const Search = () => {
  const [query, setquery] = useState("");
  const router=useRouter()

  const onSearch = (e: any) => {
    e.preventDefault();
    router.push("/search?query=" + query);
  };

  return (
    <>
      <div className="flex flex-col w-full items-center my-5">
        <h1 className="text-4xl font-bold">A place for your favourite movie quotes</h1>
        <p className="italic">Search for your favourite movie quotes</p>
      </div>
      <SearchBar query={query} setQuery={setquery} onSubmit={onSearch} />
    </>
  );
};

export default Search;
