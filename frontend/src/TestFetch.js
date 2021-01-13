import { json } from "body-parser";
import React, { useState, useEffect } from "react";
const TestFetch = (props) => {
  // With function components you MUST use hooks
  const [apiResponse, setApiResponse] = useState("");
  const callAPI = async () => await fetch("http://localhost:8080/api/users");

  // Component mount functions don't exist anymore, you must use an effect
  useEffect(async () => {
    const res = await callAPI();
    const text = await res.text();
    setApiResponse(text);
  }, []);

  return (
    <div>
      <h1>Welcome to aroe's website</h1>
      <p>{apiResponse}</p>
    </div>
  );
};

export default TestFetch;
