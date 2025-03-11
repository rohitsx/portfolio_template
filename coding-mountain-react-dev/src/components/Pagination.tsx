import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  
  // Show at most 5 page numbers, with ellipsis if needed
  const getPageRange = () => {
    const range = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      // Always show first and last page
      // Show current page and 1 or 2 pages around it
      
      if (currentPage <= 3) {
        // Near beginning
        for (let i = 1; i <= 4; i++) {
          range.push(i);
        }
        range.push('ellipsis');
        range.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near end
        range.push(1);
        range.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          range.push(i);
        }
      } else {
        // Middle
        range.push(1);
        range.push('ellipsis');
        range.push(currentPage - 1);
        range.push(currentPage);
        range.push(currentPage + 1);
        range.push('ellipsis');
        range.push(totalPages);
      }
    }
    
    return range;
  };
  
  return (
    <div className="flex items-center justify-center mt-6 space-x-1">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-2 py-1 rounded text-sm ${
          currentPage === 1 ? 'text-gray-400 cursor-default' : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        Previous
      </button>
      
      {getPageRange().map((page, index) => 
        page === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-500">...</span>
        ) : (
          <button
            key={`page-${page}`}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 rounded text-sm ${
              currentPage === page 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        )
      )}
      
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 rounded text-sm ${
          currentPage === totalPages ? 'text-gray-400 cursor-default' : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
