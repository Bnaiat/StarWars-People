import React from "react";

function Card({
  item,
  fetchData,
  setDetails,
  setDisplayLoading,
  setDisplayError,
}) {
  const clickHandler = () => {
    setDetails("loading");
    setDisplayLoading(true);
    fetchData(item.url, setDetails, setDisplayError, setDisplayLoading);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      clickHandler();
    }
  };
  return (
    <div
      className="card_wrapper"
      onClick={clickHandler}
      role={"button"}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <h2>{item.name}</h2>
    </div>
  );
}

export default Card;
