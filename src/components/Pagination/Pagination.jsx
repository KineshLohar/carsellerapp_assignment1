import React from 'react';
import './pagination.css';
import { Link } from 'react-router-dom';

const Pagination = ({ totalPosts, lastPostIndex, postsPerPage, currentPage, setCurrentPage }) => {


  let pages = [];
  
  //counting total number of pages to add
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= pageNumbers; i++) {
    pages.push(i);
  }

  return (
    <div className='pagination'>
      <div className="pageNumbers">
        {/* Showing number of cards on page from total number  */}
        {lastPostIndex > totalPosts ? totalPosts : lastPostIndex} from {totalPosts} 
      </div>
      <div className="pages">

        {/* Showing prev button only if page is greater than 1 */}
        {currentPage > 1 && (
          <Link to={`/page/${currentPage - 1}`} className='pageBtn' onClick={() => setCurrentPage(currentPage - 1)}>
            Prev
          </Link>
        )}


        {/* Mapping the total number of pages to navigate */}
        {pages.map((page, index) => (
          <Link
            to={`/page/${page}`}
            key={index}
            className={`pageBtn ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Link>
        ))}
        
        {/* Showing next button only if current page is less than total pages */}
        {currentPage < pageNumbers && (
          <Link to={`/page/${currentPage + 1}`} className='pageBtn' onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
