import React from "react";
import Search from "./searchClient";
import Header from "../components/Header";
import { GridPattern } from "@ui/components/grid"
const page = () => {
  return (
    <div className="relative flex  w-full items-center min-h-screen flex-col justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className=
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-80 inset-y-[-60%] h-[200%] skew-y-12"
      />
      <Header />
      <Search />
    </div>
  );
};

export default page;
