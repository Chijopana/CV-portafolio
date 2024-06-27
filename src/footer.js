import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Swal from 'sweetalert2';
import footerTexts from './footerTexts.js';

function Footer({ language, changeLanguage }) { // Utiliza la función changeLanguage pasada como prop
  const handleEasterEggClick = () => {
    Swal.fire({
      title: footerTexts.easterEggTitle[language],
      text: footerTexts.easterEggText[language],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Mathias_Pogba.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'reirse de mathias',
    });
  };

  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className=" align-items-center">
            <a href="https://www.linkedin.com/in/jose-manuel-blondel-moya-aab835305/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 25, margin: 5, color: '#ffffff' }} />
            </a>
            <a href="https://github.com/Chijopana" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ fontSize: 25, margin: 5, color: '#ffffff' }} />
            </a>
            <a href="https://www.instagram.com/joseblondel1/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ fontSize: 25, margin: 5, color: '#ffffff' }} />
            </a>
            <div
              style={{
                width: '2px',
                height: '2px',
                backgroundColor: 'black',
                cursor: 'pointer',
                marginLeft: '1px',
              }}
              onClick={handleEasterEggClick}
            />
          </div>
          <div className="">
            <p>{footerTexts.copyRight[language]}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
