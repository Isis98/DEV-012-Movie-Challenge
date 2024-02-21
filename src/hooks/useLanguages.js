import { useState, useEffect } from "react";
import { API_BASE_URL, API_TOKEN } from "../constants/apiConstants";

const apiLanguageUrl = `${API_BASE_URL}3/configuration/languages`;

const useOriginalLanguages = () => {
  const [languages, setLanguages] = useState([]);
  console.log("🚀 ~ useOriginalLanguages ~ languages:", languages)

  useEffect(() => {
    const headers = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    fetch(apiLanguageUrl, headers)
      .then((response) => response.json())
      .then((response) => {
        setLanguages(response);
      })
      .catch((error) => console.error("Error:", error.message));
  }, []);
  return { languages };
};

export { useOriginalLanguages };
