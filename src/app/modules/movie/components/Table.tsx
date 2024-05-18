import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type Props = {
  className: string;
  data: Movie[];
  currentPage: number;
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const MovieTable: React.FC<Props> = ({ className, data, currentPage, pageCount, onPageChange }) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Movie Table</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-120px text-start'>Poster</th>
                <th className='min-w-150px text-start'>Title</th>
                <th className='min-w-150px text-start'>Year</th>
                <th className='min-w-150px text-start'>imdbID</th>
                <th className='min-w-160px text-end'>Type</th>
              </tr>
            </thead>
            <tbody>
              {data.map((movie) => (
                <tr key={movie.imdbID}>
                  <td className='fw-bold'>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '100px', maxHeight: '150px', borderRadius: 10 }} />
                    </Link>
                  </td>
                  <td className='fw-bold'>
                    <Link className='fw-bold text-dark' to={`/movie/${movie.imdbID}`}>
                      {movie.Title}
                    </Link>
                  </td>
                  <td className='fw-bold'>{movie.Year}</td>
                  <td className='fw-bold'>{movie.imdbID}</td>
                  <td className='fw-bold'>{movie.Type}</td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={5} className='text-center'>No movies found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='d-flex justify-content-center'>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            forcePage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { MovieTable };
