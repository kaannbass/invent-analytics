import React, { FC } from 'react';

interface DataInfoProps {
    title: string;
    movieData: string | number;
}

const DataInfo: FC<DataInfoProps> = ({ title, movieData }) => {
  return (
    <div className='row mb-7'>
      <label className='col-lg-4 fw-semibold text-muted'>{title}</label>
      <div className='col-lg-8 fv-row'>
        <span className='fw-semibold fs-6'>{movieData}</span>
      </div>
    </div>
  );
};

export default DataInfo;
