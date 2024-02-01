import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

const useShowsDetails = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    setInfo(jsonData);
  };

  return info;
};

export default useShowsDetails;
