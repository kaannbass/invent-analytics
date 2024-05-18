import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieFilter, MovieTable } from '../../modules/movie/components';
import { Movie } from '../../modules/movie/api/_model';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);

  const moviesPerPage = 10;

  useEffect(() => {
    fetchData({});
  }, []);

  const fetchData = async (filters: any, page: number = 0) => {
    try {
      const params: any = {
        apikey: '8b24bdda',
        s: filters.search || 'Pokemon',
        page: page + 1
      };
      if (filters.type) params.type = filters.type;
      if (filters.year) params.y = filters.year;
      const response = await axios.get('http://www.omdbapi.com/', { params });
      setMovies(response.data.Search || []);
      setTotalMovies(parseInt(response.data.totalResults, 10));
    } catch (error) {
      console.error('Error fetching data from OMDB API:', error);
    }
  };

  const handleFilterSubmit = (filters: any) => {
    setCurrentPage(0);
    fetchData(filters, 0);
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    fetchData({}, selectedItem.selected);
  };

  return (
    <>
      <div className='row g-5 g-xl-12'>
        <div className='col-xl-3'>
          <MovieFilter className='card-xxl-stretch mb-xl-3' onFilterSubmit={handleFilterSubmit} />
        </div>
        <div className='col-xl-9'>
          <MovieTable
            className='card-xxl-stretch mb-5 mb-xl-8'
            data={movies}
            currentPage={currentPage}
            pageCount={Math.ceil(totalMovies / moviesPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export { HomePage };
