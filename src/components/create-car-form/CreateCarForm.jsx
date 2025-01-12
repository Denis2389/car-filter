import { useState } from 'react';
import styles from '../create-car-form/CreateCarForm.module.css'

const clearData = {
  price: "",
  name: "",
  description: "",
  image: ""
};

const CreateCarForm = ({ setCars }) => {

const [data, setData] = useState(clearData)

const handleCreate = (e) => {
  e.preventDefault();

  setCars((prev) => {
    const newCars = [{ id: prev.length + 1, ...data }, ...prev];
    localStorage.setItem("cars", JSON.stringify(newCars));
    return newCars;
  });
  
  setData(clearData);
};

const isFormValid = data.name && data.price && data.image && data.description;

  return (
    <form className={styles.form}>
      <input
        placeholder="Write car name"
        value={data.name}
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
      />
      <input
        type="number"
        placeholder="Write car price"
        value={data.price}
        onChange={(e) =>
          setData((prev) => ({ ...prev, price: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Write description"
        value={data.description}
        onChange={(e) =>
          setData((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <input
        placeholder="Write link to img"
        value={data.image}
        onChange={(e) =>
          setData((prev) => ({ ...prev, image: e.target.value }))
        }
      />
      <button onClick={handleCreate} disabled={!isFormValid}>
        Create
      </button>
    </form>
  );
}

export default CreateCarForm;