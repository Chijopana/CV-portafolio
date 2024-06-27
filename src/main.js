import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import ProjectIcon from "@mui/icons-material/Description";
import ContactIcon from "@mui/icons-material/Mail";
import mainTexts from "./main.json";
import { PeopleAltOutlined, ChatOutlined, EmojiObjectsOutlined } from '@mui/icons-material';
import { WebOutlined, CodeOutlined, DesignServicesOutlined } from '@mui/icons-material';
import Header from "./header.js"; // Importa el componente Header

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import "swiper/css/effect-fade";

function Main({ changeLanguage }) {
  const [language, setLanguage] = useState("es");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar que el nombre solo contenga letras y espacios
    const nameRegex = /^[a-zA-Z\s]*$/;

    // Validar nombre y correo electrónico utilizando expresiones regulares
    if (formData.nombre.trim() === "") {
      alert(mainTexts.alertNameError[language]);
return;
}

if (!nameRegex.test(formData.nombre)) {
  alert(mainTexts.alertNameFormatError[language]);
  return;
}

if (!emailRegex.test(formData.email)) {
  alert(mainTexts.alertEmailError[language]);
  return;
}

// Enviar datos al servidor
fetch('http://localhost:5000/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then(response => {
  if (response.ok) {
    alert(mainTexts.alertMessage[language]);
    setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar el formulario
  } else {
    alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
  }
})
.catch(error => {
  console.error('Error:', error);
  alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
});
};

const changeLanguageInMain = (lang) => {
setLanguage(lang); // Actualiza el estado local de language en Main
changeLanguage(lang); // Llama a la función changeLanguage pasada como prop desde App.js
};

return (
<main className={isDarkMode ? "dark-mode" : ""}>
<div className="language-buttons">
<Button onClick={() => changeLanguageInMain("es")}>ES</Button>
<Button onClick={() => changeLanguageInMain("en")}>EN</Button>
<Button onClick={() => changeLanguageInMain("cat")}>CAT</Button>
</div>

<section id="proyectos" className="centered">
    <h2>
      <ProjectIcon /> {mainTexts.proyectos[language]}
    </h2>

    <div id="carouselExample" className="carousel slide image-container">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="calculadora.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="buscapalabras.jpeg" className="d-block w-100" alt="..." />
        </div>
        {/* <div className="carousel-item">
          <img src="elbicho.jpg" className="d-block w-100" alt="..." />
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>



<section id="experiencia" className="centered">
  <h2>
    <WorkIcon /> {mainTexts.experiencia[language]}
  </h2>
  <div className="experience-item">
    {mainTexts.experienciaContent[language].map((content, index) => (
      <div key={index}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    ))}
  </div>
</section>

<section id="estudios" className="centered">
  <h2>
    <SchoolIcon /> {mainTexts.estudios[language]}
  </h2>
  <div className="study-item">
    {mainTexts.estudiosContent[language].map((content, index) => (
      <div key={index}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    ))}
  </div>
</section>

  <section id="habilidades" className="centered">
    <h2>
      <CodeIcon /> {mainTexts.habilidades[language]}
    </h2>
    <div className="skills row">
      <div className="soft-skills col-12 col-md-6">
        <h3>{mainTexts.habilidadesBlandas[language]}</h3>
        <div>
          <PeopleAltOutlined fontSize="large" />
          <p>{mainTexts.habilidadesBlandasContent[language]["Trabajo en equipo"]}</p>
        </div>
        <div>
          <ChatOutlined fontSize="large" />
          <p>{mainTexts.habilidadesBlandasContent[language]["Comunicación efectiva"]}</p>
        </div>
        <div>
          <EmojiObjectsOutlined fontSize="large" />
          <p>{mainTexts.habilidadesBlandasContent[language]["Resolución de problemas"]}</p>
        </div>
      </div>
      <div className="technical-skills col-12 col-md-6">
        <h3>{mainTexts.habilidadesTecnicas[language]}</h3>
        <div>
          <WebOutlined fontSize="large" />
          <p>{mainTexts.habilidadesTecnicasContent[language]["Desarrollo web"]}</p>
        </div>
        <div>
          <CodeOutlined fontSize="large" />
          <p>{mainTexts.habilidadesTecnicasContent[language]["Programación en JavaScript"]}</p>
        </div>
        <div>
          <DesignServicesOutlined fontSize="large" />
          <p>{mainTexts.habilidadesTecnicasContent[language]["Diseño de interfaces"]}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contacto" className="centered">
    <h2>
      <ContactIcon /> {mainTexts.contacto[language]}
    </h2>
    <div className="contact-info">
      <p>Teléfono: +34 632485849</p>
      <p>Correo electrónico: jose7blondel@gmail.com</p>
    </div>
    <form onSubmit={handleSubmit} action="/enviar-correo" method="post">
      <div>
        <label htmlFor="nombre">
          {mainTexts.placeholderNombre[language]}:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">
          {mainTexts.placeholderEmail[language]}:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mensaje">
          {mainTexts.placeholderMensaje[language]}:
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
        ></textarea>
      </div>
      <Button
        className="shake"
        type="submit"
        variant="contained"
        endIcon={<SendIcon />} // Agregar el ícono al final del botón
      >
        {mainTexts.buttonText[language]}
      </Button>
    </form>
  </section>
</main>
);
}

export default Main;