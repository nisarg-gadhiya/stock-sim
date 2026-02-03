import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [cashBalance, setCashBalance] = useState(100000);
  const [holdings, setHoldings] = useState([]);
  const [transactions, setTransactions] = useState([]);

  return (
    <PortfolioContext.Provider
      value={{
        cashBalance,
        setCashBalance,
        holdings,
        setHoldings,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
