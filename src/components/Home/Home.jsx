import { useState } from 'react';
import CarItem from '../car-item/CarItem.jsx';
import CreateCarForm from '../create-car-form/CreateCarForm.jsx';
import { cars as carsData } from './cars.data.js';

function Home() {
  const [cars, setCars] = useState(carsData);
  const [search, setSearch] = useState("");
  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(search.toLowerCase())
    )
  }
  );

  return (
    <div>
      <h1>Bmw catalog</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CreateCarForm setCars={setCars} />
      <div>
        {search === '' || filteredCars.length ? (
          filteredCars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>No cars</p>
        )}
      </div>
    </div>
  );
}

export default Home