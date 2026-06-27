import React, { useState, useEffect } from 'react';
import { cars } from '../../data/cars';
import { ArrowLeftRight, Check, X } from 'lucide-react';
import styles from './Compare.module.css';

const Compare = () => {
  const [car1Id, setCar1Id] = useState(cars[0].id);
  const [car2Id, setCar2Id] = useState(cars[1].id);

  useEffect(() => {
    document.body.className = 'theme-default';
  }, []);

  const car1 = cars.find(c => c.id === Number(car1Id));
  const car2 = cars.find(c => c.id === Number(car2Id));


  const parseNum = (str) => {
    const num = parseFloat(str.replace(/[^\d.,]/g, '').replace(',', '.'));
    return isNaN(num) ? 0 : num;
  };

  const getWinnerClass = (val1, val2, reverse = false) => {
    const n1 = parseNum(val1);
    const n2 = parseNum(val2);
    
    if (n1 === n2) return styles.neutral;
    
    if (reverse) {

      return n1 < n2 ? styles.winner : styles.loser;
    }

    return n1 > n2 ? styles.winner : styles.loser;
  };

  return (
    <div className={styles.compareContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Comparador de Veículos</h1>
        <p className={styles.subtitle}>Coloque dois gigantes lado a lado e decida seu favorito.</p>
      </header>

      <div className={styles.selectors}>
        <div className={styles.selectWrapper}>
          <select value={car1Id} onChange={(e) => setCar1Id(e.target.value)} className={styles.select}>
            {cars.map(c => <option key={`c1-${c.id}`} value={c.id}>{c.brand} {c.name}</option>)}
          </select>
        </div>
        
        <div className={styles.vsIcon}>
          <ArrowLeftRight size={32} />
        </div>

        <div className={styles.selectWrapper}>
          <select value={car2Id} onChange={(e) => setCar2Id(e.target.value)} className={styles.select}>
            {cars.map(c => <option key={`c2-${c.id}`} value={c.id}>{c.brand} {c.name}</option>)}
          </select>
        </div>
      </div>

      {(car1 && car2) && (
        <div className={`${styles.comparisonTable} glass-panel`}>
          <div className={styles.row}>
            <div className={styles.col}>
               <img src={car1.image} alt={car1.name} className={styles.carImage} />
               <h3 className={styles.carName}>{car1.name}</h3>
            </div>
            <div className={styles.colCenter}></div>
            <div className={styles.col}>
               <img src={car2.image} alt={car2.name} className={styles.carImage} />
               <h3 className={styles.carName}>{car2.name}</h3>
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} ${getWinnerClass(car1.technicalSpecs.horsepower, car2.technicalSpecs.horsepower)}`}>
              {car1.technicalSpecs.horsepower}
            </div>
            <div className={styles.colCenter}>Potência</div>
            <div className={`${styles.col} ${getWinnerClass(car2.technicalSpecs.horsepower, car1.technicalSpecs.horsepower)}`}>
              {car2.technicalSpecs.horsepower}
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} ${getWinnerClass(car1.topSpeed, car2.topSpeed)}`}>
              {car1.topSpeed}
            </div>
            <div className={styles.colCenter}>Velocidade Máxima</div>
            <div className={`${styles.col} ${getWinnerClass(car2.topSpeed, car1.topSpeed)}`}>
              {car2.topSpeed}
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} ${getWinnerClass(car1.acceleration, car2.acceleration, true)}`}>
              {car1.acceleration}
            </div>
            <div className={styles.colCenter}>0-100 km/h</div>
            <div className={`${styles.col} ${getWinnerClass(car2.acceleration, car1.acceleration, true)}`}>
              {car2.acceleration}
            </div>
          </div>
          
          <div className={styles.row}>
            <div className={styles.col}>{car1.technicalSpecs.engine}</div>
            <div className={styles.colCenter}>Motor</div>
            <div className={styles.col}>{car2.technicalSpecs.engine}</div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>{car1.price}</div>
            <div className={styles.colCenter}>Preço Médio</div>
            <div className={styles.col}>{car2.price}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compare;
