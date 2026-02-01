import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";
import Auth from "../pages/Auth";

import Dashboard from "../pages/Dashboard";
import Market from "../pages/Market";
import Portfolio from "../pages/Portfolio";
import Transactions from "../pages/Transactions";

import ProtectedLayout from "../components/layout/ProtectedLayout";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/auth" element={<Auth />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/market" element={<Market />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
};

export default AppRoutes;
