import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="pt-6 md:pt-0 md:pl-6">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="border p-2 rounded"
        placeholderText="Date"
      />
    </div>
  );
};

export default Calendar;
