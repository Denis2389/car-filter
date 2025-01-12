import { useState } from 'react';
import styles from '../Home/Home.module.css'
import modal from './Modal.module.css'

function CarItem({ car }) {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

    return (
      <div key={car.id} className={styles.item}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${car.image})` }}
        ></div>
        <div className={styles.info}>
          <h2>{car.name}</h2>
          <p>${car.price}</p>
          <button onClick={handleOpenModal}>Read more</button>
        </div>
        {isOpen && (
          <div className={modal.modal}>
            <div className={modal.modalContent}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>Car details</h2>
                <button className={modal.btn} onClick={handleCloseModal}>
                  Close
                </button>
              </div>
              <h3 className={modal.carName}>{car.name}</h3>
              <p className={modal.carDesc}>{car.description}</p>
            </div>
          </div>
        )}
      </div>
    );
}

export default CarItem;