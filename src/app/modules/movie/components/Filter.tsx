import React, { useState } from 'react';
import { KTCard, KTCardBody } from '../../../../_metronic/helpers';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { MovieSelect } from '../../Data/MovieSelect';

type Props = {
  className: string;
  onFilterSubmit: (filters: any) => void;
};

const MovieFilter: React.FC<Props> = ({ className, onFilterSubmit }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedType, setSelectedType] = useState({ value: 'movie', label: 'Movie' });
  const [searchTerm, setSearchTerm] = useState('');


  const handleFilterChange = (selectedOption: any) => {
    setSelectedType(selectedOption);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const filters = {
      type: selectedType.value,
      year: selectedDate ? selectedDate.getFullYear() : null,
      search: searchTerm
    };
    onFilterSubmit(filters);
  };

  return (
    <KTCard>
      <div className='card-header pt-6'>
        <div className='card-title fw-bold fs-3'>Movie Filter</div>
      </div>
      <KTCardBody className='py-4'>
        <Form onSubmit={handleSubmit}>
          <div className='fv-row mb-7'>
            <Form.Label className='fs-7'>Search</Form.Label>
            <div className='d-flex'>
              <div className='input-group'>
                <input type='text' className='form-control form-control-md' value={searchTerm} onChange={handleSearchChange} />
              </div>
            </div>
          </div>
          <div className='fv-row mb-7'>
            <Form.Label className='fs-7'>Type</Form.Label>
            <div className='d-flex'>
              <div className='input-group w-100'>
                <Select
                  className='form-control-md w-100'
                  options={MovieSelect}
                  onChange={handleFilterChange}
                  defaultValue={MovieSelect[0]}
                />
              </div>
            </div>
          </div>

          <div className='fv-row mb-7'>
            <div className='d-flex d-flex-row'>
              <Form.Label className='fs-7'>Year</Form.Label>
            </div>
            <div className='d-flex w-100'>
              <div className='d-flex flex-column '>
                <div className='input-group col-md-6 '>
                  <DatePicker
                    className='form-control form-control-md col-md-12 pe-auto '
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat='yyyy'
                    placeholderText='Year Select'
                    showYearPicker
                    calendarClassName='custom-calendar'
                  />
                  <div className='form-control form-control-md text-center'>
                    <FaCalendarAlt />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='text-start'>
            <Button className='btn-sm w-100' variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </KTCardBody>
    </KTCard>
  );
};

export { MovieFilter };
