import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreativeShowcase from '../../components/CreativeShowcase/CreativeShowcase';
import { cars } from '../../data/cars';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const featuredCar = cars[1];

  useEffect(() => {
    document.body.className = 'theme-default';
  }, []);

  return (
    <div className={styles.homeContainer}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Explore o Mundo Automotivo</h1>
          <p className={styles.subtitle}>
            Dos supercarros de luxo às camionetes rurais. Encontre o carro perfeito para o seu estilo.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={() => navigate('/catalog')}
          >
            Explorar Catálogo
          </button>
        </div>
      </header>

      <section className={styles.featuredSection}>
        <CreativeShowcase featuredCar={featuredCar} />
      </section>

      <section className={styles.infoSection}>
        <div 
          className={`${styles.infoCard} glass-panel`}
          onClick={() => navigate('/catalog', { state: { category: 'supercarros' } })}
          style={{ cursor: 'pointer' }}
        >
          <h3>Supercarros</h3>
          <p>O melhor da engenharia nas cidades.</p>
        </div>
        <div 
          className={`${styles.infoCard} glass-panel`}
          onClick={() => navigate('/catalog', { state: { category: 'camionetes' } })}
          style={{ cursor: 'pointer' }}
        >
          <h3>Camionetes</h3>
          <p>Robustez e potência no campo.</p>
        </div>
        <div 
          className={`${styles.infoCard} glass-panel`}
          onClick={() => navigate('/catalog', { state: { category: 'populares' } })}
          style={{ cursor: 'pointer' }}
        >
          <h3>Populares</h3>
          <p>Economia e tradição nas rodovias.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
