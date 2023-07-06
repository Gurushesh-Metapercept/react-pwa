import React from "react";
import { Route, Routes } from "react-router-dom";
import GettingStarted from "./GettingStarted";
import Home from "./Home";
import ManagingResults from "./ManagingResults";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/getting-started" element={<GettingStarted />} />
      <Route path="/managing-results" element={<ManagingResults />} />
    </Routes>
  );
};

export default AllRoutes;
