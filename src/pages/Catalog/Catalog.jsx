import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import FilterBar from '../../components/FilterBar/FilterBar';
import CarCard from '../../components/CarCard/CarCard';
import { cars, categories } from '../../data/cars';
import styles from './Catalog.module.css';

const Catalog = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();


  const category = searchParams.get('category') || location.state?.category || 'all';
  const searchTerm = searchParams.get('search') || '';

  const setCategory = (newCat) => {
    setSearchParams(prev => {
      if (newCat === 'all') prev.delete('category');
      else prev.set('category', newCat);
      return prev;
    });
  };

  const setSearchTerm = (newTerm) => {
    setSearchParams(prev => {
      if (!newTerm) prev.delete('search');
      else prev.set('search', newTerm);
      return prev;
    });
  };


  useEffect(() => {
    if (category === 'all') {
      document.body.className = 'theme-default';
    } else {
      const selectedCategory = categories.find(cat => cat.id === category);
      if (selectedCategory) {
        document.body.className = `theme-${selectedCategory.theme}`;
      }
    }
  }, [category]);

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || car.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.catalogContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Catálogo de Veículos</h1>
        <p className={styles.subtitle}>Encontre a máquina perfeita para você.</p>
      </header>


      <FilterBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />


      {filteredCars.length > 0 ? (
        <div className={styles.grid}>
          {filteredCars.map((car) => (
            <CarCard 
              key={car.id}
              {...car} // Passing all properties to be destructured inside CarCard
            />
          ))}
        </div>
      ) : (
        <div className={`${styles.emptyState} glass-panel`}>
          <h2>Nenhum veículo encontrado</h2>
          <p>Tente ajustar os filtros de busca.</p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
