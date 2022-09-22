import { useContext, useState, createContext } from "react";

export default function DetailContext({ children }) {
  const [details, setDetails] = useState({
    code: "",
    email: "",
    duration: "",
    instruction: "",
    title: "",
  });
  return (
    <>
      <Detail.Provider value={details}>
        <SetDetail.Provider value={setDetails}>{children}</SetDetail.Provider>
      </Detail.Provider>
    </>
  );
}

export const Detailscon  =()=>{
    return useContext(Detail)
} 
export const SetDetailscon  =()=>{
    return useContext(SetDetail)
} 

export const Detail = createContext();
export const SetDetail = createContext();
