import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import headerTexts from './header.json';

function Header({ language, changeLanguage }) {
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState('fotocvweb.jpeg');

  const handleImageClick = () => {
    if (currentImage === 'fotocvweb.jpeg') {
      setCurrentImage('Snapchat-334355325.jpg');
    } else {
      setCurrentImage('fotocvweb.jpeg');
    }
  };

  // Define una función para manejar la descarga del CV y mostrar la alerta
  const handleDownloadCV = (e) => {
    e.preventDefault(); // Prevenir la acción predeterminada del enlace
    alert('Descargando CV en PDF...');
    
    // Seleccionar el archivo correcto basado en el idioma
    const fileToDownload = language === 'en' ? '/CV-Jose-Manuel-Blondel-Moya-english.pdf' : '/CV-Jose-Manuel-Blondel-Moya.pdf';
    
    // Después de la alerta, simular un clic en el enlace para descargar el archivo
    const link = document.createElement('a');
    link.href = fileToDownload;
    link.download = fileToDownload.split('/').pop();
    link.click();
  };

  return (
    <header>
      <div className="header-content">
        {/* Agrega la imagen encima del título con una clase específica */}
        <img ref={imageRef} className="profile-image" src={currentImage} alt="Mi Foto" onClick={handleImageClick} />
        {/* Utiliza la prop 'language' para acceder a los textos correspondientes */}
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>{headerTexts.title[language]}</h1>
        <p style={{ fontSize: '24px', color: '#fff', marginBottom: '30px' }}>{headerTexts.subtitle[language]}</p>
        <a href="#" onClick={handleDownloadCV} style={{ textDecoration: 'none' }}>
          <Button
            className="shake download-button" // Agrega la clase 'download-button'
            variant="contained"
            color="primary"
            startIcon={<CloudDownloadIcon />}
          >
            {/* Utiliza la prop 'language' para acceder al texto del botón de descarga */}
            {headerTexts.downloadButton[language]}
          </Button>
        </a>
      </div>
      {/* <svg className='marea' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L16,101.3C32,139,64,213,96,213.3C128,213,160,139,192,106.7C224,75,256,85,288,85.3C320,85,352,75,384,101.3C416,128,448,192,480,192C512,192,544,128,576,117.3C608,107,640,149,672,154.7C704,160,736,128,768,144C800,160,832,224,864,250.7C896,277,928,267,960,234.7C992,203,1024,149,1056,160C1088,171,1120,245,1152,234.7C1184,224,1216,128,1248,90.7C1280,53,1312,75,1344,96C1376,117,1408,139,1424,149.3L1440,160L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg> */}
    </header>
  );
}

export default Header;
