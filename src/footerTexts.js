const currentYear = new Date().getFullYear();

const footerTexts = {
  "easterEggTitle": {
    "es": "¡Easter Egg!",
    "en": "¡Easter Egg!",
    "cat": "¡Easter Egg!"
  },
  "easterEggText": {
    "es": "¡Has encontrado el easter egg!!",
    "en": "You have found the easter egg!!",
    "cat": "Has trobat l'easter egg!!"
  },
  "copyRight": {
    "es": "© " + currentYear + " Jose Manuel Blondel Moya. Todos los derechos reservados.",
    "en": "© " + currentYear + " Jose Manuel Blondel Moya. All rights reserved.",
    "cat": "© " + currentYear + " Jose Manuel Blondel Moya. Tots els drets reservats."
  }
};

export default footerTexts;


// "© " + new Date().getFullYear() + 