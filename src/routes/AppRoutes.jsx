import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Market from "../pages/Market";
import Portfolio from "../pages/Portfolio";
import Transactions from "../pages/Transactions";
import Navbar from "../components/layout/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/market" element={<Market />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
