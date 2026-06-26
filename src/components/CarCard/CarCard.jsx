import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gauge, Zap } from 'lucide-react';
import styles from './CarCard.module.css';


const CarCard = ({ id, name, brand, year, topSpeed, acceleration, image, price }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {

    navigate(`/car/${id}`);
  };

  return (
    <div className={`${styles.card} glass-panel`} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        <img src={image} alt={`${brand} ${name}`} className={styles.image} />
        <div className={styles.yearBadge}>{year}</div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.brand}>{brand}</span>
          <h3 className={styles.name}>{name}</h3>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <Gauge size={16} />
            <span>{topSpeed}</span>
          </div>
          <div className={styles.statItem}>
            <Zap size={16} />
            <span>{acceleration}</span>
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button className={styles.detailsBtn}>Ver Detalhes</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
