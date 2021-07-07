import React, { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";

import Display from "./components/Display";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchUrl = "https://www.swapi.tech/api/people";

  const fetchData = (url, setData, setError, loadingStatus) => {
    fetch(url)
      .then((resolve) => resolve.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => loadingStatus(false));

    return () => {};
  };

  useEffect(() => {
    fetchData(fetchUrl, setData, setError, setLoading);
  }, []);

  return (
    <>
      {error ? (
        <div className="loading_wrapper">
          <h1>{error}...</h1>
        </div>
      ) : loading ? (
        <div className="loading_wrapper">
          <CircleLoader size={"75px"} />
        </div>
      ) : (
        <Display
          data={data.results}
          fetchData={fetchData}
          setLoading={setLoading}
        />
      )}
    </>
  );
}

export default App;
