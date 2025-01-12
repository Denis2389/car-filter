import { useEffect, useState } from 'react';
import CarItem from '../car-item/CarItem.jsx';
import CreateCarForm from '../create-car-form/CreateCarForm.jsx';
import { cars as carsData } from './cars.data.js';

function Home() {
  const [cars, setCars] = useState(carsData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedCard = JSON.parse(localStorage.getItem('cars')) || cars;
    setCars(savedCard)
  }, [cars])

  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(search.toLowerCase())
    )
  }
  );

  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', width: '1280px', margin: 'auto'}}>
      <h1 style={{ padding: '10px' }}>Bmw catalog</h1>
      <input
        style={{ width: '300px', height: '30px', padding: '5px', borderRadius: '10px', border: 'none', marginBottom: '20px'}}
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