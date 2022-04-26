import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems }) => {
  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = totalItems / currentPage > 3;

  const disabledBtn = <button className="btn" disabled></button>;

  const goPrevButton = isPrevPageAvailable ? (
    <button className="btn" onClick={goPrev}>
      ←
    </button>
  ) : (
    disabledBtn
  );

  const goNextButton = isNextPageAvailable ? (
    <button className="btn" onClick={goNext}>
      →
    </button>
  ) : (
    disabledBtn
  );

  return (
    <div className="pagination">
      {goPrevButton}
      <span className="pagination__page">{currentPage}</span>
      {goNextButton}
    </div>
  );
};

export default Pagination;
