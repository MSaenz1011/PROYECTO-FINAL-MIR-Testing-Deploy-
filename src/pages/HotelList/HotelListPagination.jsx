import React from "react";
import "./HotelListPagination.css";

function HotelListPagination({
  maxNpages,
  actualPage,
  setActualPage,
  refProp,
}) {
  const specialChar = ["<<", ">>"];
  // const myRef = useRef(null);

  const scrollToTop = () => {
    refProp.current.scrollIntoView({behavior: "smooth"});
  };



  const firstPage = () => {
    scrollToTop();
    setActualPage(0);
  };

  const nextPage = () => {
    scrollToTop();
    setActualPage(actualPage + 1);
  };

  const prePage = () => {
    scrollToTop();
    setActualPage(actualPage - 1);
    scrollToTop();
  };

  const lastPage = () => {
    scrollToTop();
    setActualPage(maxNpages - 1);
    scrollToTop();
  };

  return (
    <div className="pagination-ctn">
      <button
        className={actualPage > 0 ? "act-chk" : "dis-chk"}
        disabled={actualPage > 0 ? false : true}
        onClick={firstPage}
      >
        ❮❮
      </button>
      <button
        className={actualPage > 0 ? "act-chk" : "dis-chk"}
        disabled={actualPage > 0 ? false : true}
        onClick={prePage}
      >
        {actualPage}
      </button>
      <input
        type="text"
        className="actual"
        placeholder={`${actualPage + 1} / ${maxNpages}`}
      ></input>
      <button
        className={actualPage < maxNpages - 1 ? "act-chk" : "dis-chk"}
        disabled={actualPage < maxNpages - 1 ? false : true}
        onClick={nextPage}
      >
        {actualPage + 2}
      </button>
      <button
        className={actualPage < maxNpages - 1 ? "act-chk" : "dis-chk"}
        disabled={actualPage < maxNpages - 1 ? false : true}
        onClick={lastPage}
      >
        ❯❯
      </button>
    </div>
  );
}

export default HotelListPagination;
