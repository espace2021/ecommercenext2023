import Link from "next/link";
import React from "react";

const CardProduitSpa = ({ image, title, description, linkButton }) => {
  return (
    <div className="card-produit-spa">
      <div className="shadowed-box">
        <div className="img-container-cp">
          <img className="img-cp" src={image} />
        </div>

        <div className="content-container">
          <div className="title-cp"><h1>{title}</h1></div>
          <div className="description-cp">
            <p>{description}</p>
          </div>
        </div>
      </div>

      {linkButton ? (
        <Link href={linkButton}>
          <div className="shadowed-box">
            <div className="btn-cp">
                <a>Nos tarifs</a>
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default CardProduitSpa;
