import tapadoPaño from "../images/griferia-augusta.jpg";
import griferiaAromo from "../images/aromo.jpg";
import ecowood from "../images/porcelanato-ecowood.jpeg";
import evolution from "../images/porcelanato-evolution.jpg";
import subwayBlanco from "../images/revestimiento-subway-blanco.jpg";
import subwayNegro from "../images/revestimiento-subway-negro.jpg";
import mesadaBlanca from "../images/mesada-blanca.jpg";
import mesadaNegra from "../images/mesada-negra.jpg";

export const listadoProductos = [
  {
    id: 1,
    title: "AUGUSTA",
    description:
      "increible tapado que hace juego tanto en prendas informales como formales.",
    price: 20000,
    picture: tapadoPaño,
    stock: 10,
    category: "tapados",
  },
  {
    id: 2,
    title: "AROMO PINK",
    description: "100% lana 100% suavidad",
    price: 8000,
    picture: griferiaAromo,
    stock: 10,
    category: "tapados",
  },
  {
    id: 3,
    title: "SWEATER MANGA GLOBO",
    description:
      "Hermoso sweater OVER SIZE, liviano MEDIA ESTACIÓN. (ES FINO) Es talle único.",
    price: 4500,
    picture: ecowood,
    stock: 10,
    category: "sweaters",
  },
  {
    id: 4,
    title: "SWEATER SWEET",
    description:
      "prenda infaltable para este invierno, largo de 70cm ",
    price: 10600,
    picture: evolution,
    stock: 10,
    category: "sweaters",
  },
  {
    id: 5,
    title: "SUBWAY BLACK",
    description: "babucha artesanal",
    price: 5000,
    picture: subwayBlanco,
    stock: 10,
    category: "pantalones",
  },
  {
    id: 6,
    title: "SUBWAY JEAN",
    description: "jean elastizados, todos los talles.",
    price: 7000,
    picture: subwayNegro,
    stock: 10,
    category: "pantalones",
  },
  {
    id: 7,
    title: "LEGGINS CUORE",
    description:
      "una prenda que viste con todo.",
    price: 50000,
    picture: mesadaBlanca,
    stock: 10,
    category: "leggins",
  },
  {
    id: 8,
    title: "LEGGINS TEBAS",
    description:
      "Un clásico que nunca falla.",
    price: 45000,
    picture: mesadaNegra,
    stock: 10,
    category: "leggins",
  },
];
