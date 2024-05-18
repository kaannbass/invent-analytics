import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomLoading from '../../modules/movie/components/CustomLoading';
import { MovieDetail } from '../../modules/movie/api/_model';
import { fetchMoviesDetail } from '../../modules/movie/api/_request';
import { DataInfo } from '../../modules/movie/components';
const DetailPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        if (id) {
          const movieData = await fetchMoviesDetail(id);
          setData(movieData);
          console.log(movieData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovieData();
  }, [id]);

  if (!data) {
    return <CustomLoading />;
  }

  const DataInfoList = [
    { title: 'Plot', movieData: data.Plot },
    { title: 'Actors', movieData: data.Actors },
    { title: 'Awards', movieData: data.Awards },
    { title: 'BoxOffice', movieData: data.BoxOffice },
    { title: 'Runtime', movieData: data.Runtime },
    { title: 'DVD', movieData: data.DVD },
    { title: 'Director', movieData: data.Director },
    { title: 'Genre', movieData: data.Genre },
    { title: 'Language', movieData: data.Language },
  ];

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img className='h-auto d-inline-block' src={data.Poster} alt={data.Title} />
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <div className='text-gray-800 text-hover-primary fs-2 fw-bold me-1 cursor-none'>{data.Title}</div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <div className='text-gray-400 text-hover-primary fs-4 fw-bold me-1 cursor-none'>{data.Released}</div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <div className='text-gray-400 text-hover-primary fs-5 fw-bold me-1 cursor-none'>{data.Year}</div>
                </div>
              </div>
              <div className=''>
                {data.imdbRating && (
                  <span
                    className={`badge ${data.imdbRating < '6.0' ? 'bg-warning' : 'bg-success'}`}
                    style={{ fontSize: '1.2rem', padding: '0.3rem 0.6rem' }}
                  >
                    {data.imdbRating}
                  </span>
                )}
              </div>
            </div>
            <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
              <div className='card-body p-9'>
                {DataInfoList.map((item, index) => (
                  <DataInfo key={index} title={item.title} movieData={item.movieData} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
