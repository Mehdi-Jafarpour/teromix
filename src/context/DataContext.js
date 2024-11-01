import { createContext, useContext, useState, useEffect } from 'react';
import data from '../data.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(null);

  useEffect(() => {
    setSharedData(data);
  }, []);

  return (
    <DataContext.Provider value={sharedData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
