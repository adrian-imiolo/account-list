import { useState, useEffect } from "react";
import { fetchAccounts } from "./services/api";
import AccountList from "./components/AccountList";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccounts();
        setAccounts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching accounts:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="container mx-auto p-4">
          <AccountList accounts={accounts} />
        </div>
      )}
    </div>
  );
};

export default App;
