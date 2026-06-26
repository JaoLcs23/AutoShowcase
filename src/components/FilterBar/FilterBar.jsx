import React from 'react';
import { Search } from 'lucide-react';
import styles from './FilterBar.module.css';

const FilterBar = ({ searchTerm, onSearchChange, category, onCategoryChange, categories }) => {
  return (
    <div className={`${styles.filterBar} glass-panel`}>
      <div className={styles.searchContainer}>
        <Search size={20} className={styles.searchIcon} />
        <input 
          type="text" 
          placeholder="Buscar modelo, marca..." 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.categoryContainer}>
        <select 
          value={category} 
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="all">Todas as Categorias</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
