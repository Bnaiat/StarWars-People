import React, { useState } from "react";
import { CircleLoader } from "react-spinners";

import Card from "./Card";
import Details from "./Details";

function Display({ data, fetchData }) {
  const [details, setDetails] = useState("");
  const [displayLoading, setDisplayLoading] = useState(false);
  const [displayError, setDisplayError] = useState("");

  return (
    <>
      {!details ? (
        <div className="cardlist_wrapper">
          {data.map((item) => (
            <Card
              item={item}
              key={item.uid}
              fetchData={fetchData}
              setDetails={setDetails}
              setDisplayLoading={setDisplayLoading}
              setDisplayError={setDisplayError}
            />
          ))}
        </div>
      ) : displayError ? (
        <div className="loading_wrapper">
          <h1>Something Wrong, {displayError}...</h1>
        </div>
      ) : displayLoading ? (
        <div className="loading_wrapper">
          <CircleLoader size={"75px"} />
        </div>
      ) : (
        <Details details={details} setDetails={setDetails} />
      )}
    </>
  );
}

export default Display;
