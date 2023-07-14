import React, { useState } from 'react';
import Calendar from './Calendar';

const FlightSearchForm = () => {
  const [startDay, setStartDay] = useState('');
  const [startingLocation, setStartingLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [maxResults, setMaxResults] = useState(10);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the API query using the entered form data
    const sixMonthsPrior = calculateSixMonthsPrior(startDay);
    const sixMonthsAfter = calculateSixMonthsAfter(startDay);

    // Make the API call using the entered form data and calculated dates
    // Use the Amadeus SDK or any HTTP library of your choice to make the API call

    // Example API call using fetch
    fetch(
      `API_ENDPOINT?originLocationCode=${startingLocation}&destinationLocationCode=${destination}&departureDate=${date}&adults=${adults}&children=${children}&max=${maxResults}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const calculateSixMonthsPrior = (startDay) => {
    // Implement your logic to calculate six months prior to startDay
    // You can use a library like moment.js or write custom date manipulation code
    // Replace the following line with your implementation
    const sixMonthsPrior = 'YOUR_CALCULATION';

    return sixMonthsPrior;
  };

  const calculateSixMonthsAfter = (startDay) => {
    // Implement your logic to calculate six months after startDay
    // Replace the following line with your implementation
    const sixMonthsAfter = 'YOUR_CALCULATION';

    return sixMonthsAfter;
  };

  return (
    <div className="h-screen w-screen bg-transparent" >
    <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
      <div className="border border-gray-300 p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-7 gap-6 max-w-sm mx-auto">
          <div className="col-span-2">
            <input
              type="text"
              id="startingLocation"
              className="border p-2 rounded"
              value={startingLocation}
              onChange={(e) => setStartingLocation(e.target.value)}
              placeholder="Starting Location"
            />
          </div>
          <div className="col-span-2">
            <input
              type="text"
              id="destination"
              className="border p-2 rounded"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination"
            />
          </div>
          <div className="col-span-1">
            <input
              type="number"
              id="adults"
              className="border p-2 rounded"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              placeholder="Adults"
            />
          </div>
          <div className="col-span-1">
            <input
              type="number"
              id="children"
              className="border p-2 rounded"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              placeholder="Children"
            />
          </div>
          <div className="col-span-1">
            <input
              type="number"
              id="maxResults"
              className="border p-2 rounded"
              value={maxResults}
              onChange={(e) => setMaxResults(e.target.value)}
              placeholder="Max Results"
            />
          </div>
          <div className="col-span-2">
            <Calendar selectedDate={selectedDate} handleDateChange={handleDateChange} />
          </div>
          <div className="col-span-2 flex justify-center">
            <button className="mt-10 p-2 border w-1/4 rounded-md bg-gray-800 text-white">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default FlightSearchForm;
