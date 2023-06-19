import axios from "axios";
import { useEffect, useState } from "react";

import { fetchUrl } from "../constants";

const useFetchBills = () => {
  const [loading, setLoading] = useState(false);

  const fetchBills = async () => {
    try {
      const { data, status } = await axios.get(fetchUrl);
      if (status === 200) {
        setLoading(false);
      }
    } catch (error) {
      console.error("error occured while fetching tshirts ", error);
    }
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return { loading };
};

export default useFetchBills;
