import React from "react";
import image1 from "../../images/porcelanato.jpg";
import image2 from "../../images/revestimiento.jpg";
import image3 from "../../images/griferia.jpg";
import image4 from "../../images/mesadas.jpg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="productos">
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/tapados"}>
            <img src={image1} alt="tapados" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/tapados"}>Tapados</Link>
        </div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/tapados"}>
            <img src={image2} alt="leggins" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/tapados"}>Leggins</Link>
        </div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/sweaters"}>
            <img src={image3} alt="sweaters" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/sweaters"}>Sweaters</Link>
        </div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/pantalones"}>
            <img src={image4} alt="pantalones" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/pantalones"}>Pantalones</Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
