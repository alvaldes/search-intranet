import React, { useEffect, useState } from 'react';

const Pagination = ({
  totalData,
  dataPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const [pages, setPages] = useState([]);
  const [num, setNum] = useState(1);
  const pagination = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ];
  useEffect(() => {
    let aux = [];
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
      aux.push(i);
    }
    setPages(aux);
  }, []);

  const Prev = () => {
    if (currentPage > 1) {
      setCurrentPage(--currentPage);
      currentPage < pages.length - 2 &&
        currentPage > 2 &&
        pages.length &&
        setNum((prev) => --prev);
    }
  };

  const Next = () => {
    if (currentPage < pages.length) {
      setCurrentPage(++currentPage);
      currentPage > 3 &&
        currentPage < pages.length - 1 &&
        setNum((prev) => ++prev);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={Prev}
        className={`h-8 border-2 border-r-0 border-gray-800 px-4 rounded-l-lg ${
          currentPage === 1
            ? `hover:cursor-not-allowed`
            : `hover:bg-gray-800 hover:text-white`
        }`}
        disabled={currentPage === 1}
      >
        {`<`}
      </button>
      {pagination.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page.page)}
            className={`h-8 border-2 border-r-0 border-gray-800 w-8 ${
              currentPage === page.page && `bg-gray-800 text-white`
            }`}
          >
            {page.page}
          </button>
        );
      })}
      <button
        onClick={Next}
        className={`h-8 border-2 border-gray-800 rounded-r-lg px-4 ${
          currentPage === pages.length
            ? `hover:cursor-not-allowed`
            : `hover:bg-gray-800 hover:text-white`
        }`}
        disabled={currentPage === pages.length}
      >
        {`>`}
      </button>
    </div>
  );
};

export default Pagination;
