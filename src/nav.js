import React, { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// Importa el JSON de las etiquetas de la barra de navegación
import navLabels from './nav.json';

function Nav({ texts, language, changeLanguage }) {
  // Estado para mantener el tema oscuro
  const [darkMode, setDarkMode] = useState(false);
  // Estado para controlar si el menú está abierto o cerrado en dispositivos móviles
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      {/* Renderiza el menú hamburguesa solo en dispositivos móviles */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className={mobileMenuOpen ? 'mobile-menu-open' : ''}>
        {/* Renderiza las etiquetas de la barra de navegación según el idioma seleccionado */}
        {Object.keys(navLabels.nav[language]).map((labelKey) => (
          <li key={labelKey} className="shake">
            <a
              href={labelKey === 'inicio' ? '#top' : `#${labelKey}`}
              onClick={toggleMobileMenu}
            >
              {navLabels.nav[language][labelKey]}
            </a>
          </li>
        ))}
        <li>
          <button
            className="dark-mode-button shake"
            onClick={toggleDarkMode}
            style={{
              backgroundColor: darkMode ? "#fff" : "#007bff",
              color: darkMode ? "#343a40" : "#fff",
            }}
          >
            {darkMode ? <WbSunnyIcon /> : <Brightness4Icon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
