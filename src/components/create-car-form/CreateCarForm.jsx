import { useState } from 'react';
import styles from '../create-car-form/CreateCarForm.module.css'

const clearData = {
  price: "",
  name: "",
  image: "",
};

const CreateCarForm = ({ setCars }) => {

const [data, setData] = useState(clearData)

const handleCreate = (e) => {
    e.preventDefault();
    setCars(prev => [{ id: prev.length + 1, ...data }, ...prev])
    setData(clearData)
    
}

  return (
    <form className={styles.form}>
        <input placeholder="Name" value={data.name} onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} />
        <input type='number' placeholder="Price" value={data.price} onChange={(e) => setData(prev => ({ ...prev, price: e.target.value }))}/>
        <input placeholder="Image" value={data.image} onChange={(e) => setData(prev => ({ ...prev, image: e.target.value }))}/>

        <button onClick={handleCreate}>Create</button>
    </form>
  )
}

export default CreateCarForm;