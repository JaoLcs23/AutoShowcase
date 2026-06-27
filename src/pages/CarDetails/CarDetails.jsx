import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Flag, Calendar, Zap, Gauge, DollarSign, Info, Activity, Weight, Settings } from 'lucide-react';
import { cars } from '../../data/cars';
import styles from './CarDetails.module.css';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {

    window.scrollTo(0, 0);
    document.body.className = 'theme-default';
    
    const foundCar = cars.find(c => c.id === parseInt(id));
    setCar(foundCar);
  }, [id]);

  if (!car) {
    return (
      <div className={styles.notFound}>
        <h2>Carro não encontrado.</h2>
        <button onClick={() => navigate('/catalog')} className={styles.backBtn}>
          <ArrowLeft size={18} /> Voltar ao Catálogo
        </button>
      </div>
    );
  }

  return (
    <div className={styles.detailsContainer}>
      <button onClick={() => navigate(-1)} className={`${styles.backBtn} glass-panel`}>
        <ArrowLeft size={18} /> Voltar
      </button>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.imageSection}>
            <img src={car.image} alt={car.name} className={styles.mainImage} />
          </div>

          <div className={`${styles.historySection} glass-panel`}>
            <h3><Info size={20} className={styles.iconH3} /> História da {car.brand}</h3>
            <p>{car.brandHistory}</p>
          </div>
        </div>

        <div className={`${styles.infoSection} glass-panel`}>
          <div className={styles.header}>
            <span className={styles.brand}>{car.brand}</span>
            <h1 className={styles.title}>{car.name}</h1>
          </div>

          <p className={styles.description}>{car.description}</p>

          <h3 className={styles.sectionTitle}>Ficha Técnica</h3>
          <div className={styles.specsGrid}>
            <div className={styles.specItem}>
              <Settings className={styles.specIcon} />
              <div>
                <span className={styles.specLabel}>Motor</span>
                <span className={styles.specValue}>{car.technicalSpecs.engine}</span>
              </div>
            </div>

            <div className={styles.specItem}>
              <Activity className={styles.specIcon} />
              <div>
                <span className={styles.specLabel}>Potência</span>
                <span className={styles.specValue}>{car.technicalSpecs.horsepower}</span>
              </div>
            </div>

            <div className={styles.specItem}>
              <Gauge className={styles.specIcon} />
              <div>
                <span className={styles.specLabel}>Vel. Máxima</span>
                <span className={styles.specValue}>{car.topSpeed}</span>
              </div>
            </div>

            <div className={styles.specItem}>
              <Zap className={styles.specIcon} />
              <div>
                <span className={styles.specLabel}>0 a 100 km/h</span>
                <span className={styles.specValue}>{car.acceleration}</span>
              </div>
            </div>
            
            <div className={styles.specItem}>
              <Calendar className={styles.specIcon} />
              <div>
                <span className={styles.specLabel}>Ano/Modelo</span>
                <span className={styles.specValue}>{car.year}</span>
              </div>
            </div>
            
            <div className={styles.specItem}>
              <Flag className={styles.specIcon} />
              <div>
                <span className={styles.specLabel}>Origem</span>
                <span className={styles.specValue}>{car.origin}</span>
              </div>
            </div>
          </div>

          <div className={styles.priceSection}>
            <DollarSign className={styles.priceIcon} />
            <span className={styles.price}>{car.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
