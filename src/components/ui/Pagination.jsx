// components/ui/Pagination.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  const generatePages = () => {
    pageNumbers.push(1, 2, 3, '...');
  };

  generatePages();

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">

      {/* Кнопка "Previous" */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="w-24 h-10 flex justify-center items-center rounded-md border border-gray-700 bg-black hover:bg-gray-800 text-white transition disabled:opacity-50 "
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      {/* Номера страниц */}
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`w-10 h-10 flex justify-center items-center rounded-md border ${
            page === currentPage
              ? "bg-gray-100 text-black"
              : "bg-black hover:bg-gray-800 text-white"
          } transition`}
        >
          {page}
        </button>
      ))}

      {/* Кнопка "Next" */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-16 h-10 flex justify-center items-center rounded-md border border-gray-700 bg-black hover:bg-gray-800 text-white transition disabled:opacity-50"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>

    </div>
  );
};

export default Pagination;