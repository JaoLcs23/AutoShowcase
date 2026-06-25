import React from 'react';
import { NavLink } from 'react-router-dom';
import { CarFront, Home, Info, LayoutList, ArrowLeftRight } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} glass-panel`}>
      <div className={styles.brand}>
        <CarFront size={32} className={styles.logoIcon} />
        <h1>AutoShowcase</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            <Home size={18} /> Início
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/catalog" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            <LayoutList size={18} /> Catálogo
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/compare" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            <ArrowLeftRight size={18} /> Comparar
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            <Info size={18} /> Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
