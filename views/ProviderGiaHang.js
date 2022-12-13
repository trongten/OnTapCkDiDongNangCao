import { useContext, createContext, useState } from "react";

const DATAContext = createContext();

function Provider({ children }) {
  const [giohang, setGiohang] = useState([]);
  return (
    <DATAContext.Provider value={{ giohang, setGiohang }}>
      {children}
    </DATAContext.Provider>
  );
}
export { DATAContext, Provider };
