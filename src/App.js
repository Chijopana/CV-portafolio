import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';
import SplashScreen from './SplashScreen';
import navTexts from './nav.json';
import headerTexts from './header.json';
import mainTexts from './main.json';
import footerTexts from './footer.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    // Simula una carga asincrónica con un temporizador
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia esto al tiempo que desees para la página de carga

    // Limpia el temporizador al desmontar el componente para evitar fugas de memoria
    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      {isLoading ? (
        <SplashScreen /> // Muestra la página de carga si isLoading es verdadero
      ) : (
        <div>
          <Nav texts={navTexts} language={language} changeLanguage={changeLanguage} />
          <Header texts={headerTexts} language={language} changeLanguage={changeLanguage} />
          <Main texts={mainTexts} language={language} changeLanguage={changeLanguage} />
          <Footer texts={footerTexts} language={language} changeLanguage={changeLanguage} />
        </div>
      )}
    </div>
  );
}

export default App;
