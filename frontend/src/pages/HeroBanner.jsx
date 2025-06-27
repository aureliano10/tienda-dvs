import React from "react";

const HeroBanner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-9 col-lg-9 mx-auto px-3 px-sm-4">
          <div
            className="position-relative bg-danger bg-gradient overflow-hidden mb-4 mt-5"
            style={{
              background: "linear-gradient(to right, #ef4444, #dc2626)",
              borderRadius: "20px",
            }}
          >
            <div className="container-fluid py-5 px-4">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <h2
                    className="text-white fw-bold mb-3"
                    style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}
                  >
                   Ofertas únicas en instrumentos musicales
                  </h2>
                  <p
                    className="text-light mb-4"
                    style={{
                      fontSize: "clamp(1rem, 3vw, 1.25rem)",
                      color: "#fecaca",
                    }}
                  >
                    Explorá nuestras categorías y encontrá el sonido que buscás: guitarras, bajos, baterías y más.
                  </p>

                  <a
                    href="#"
                    className="btn bg-white text-danger fw-semibold px-4 py-2 rounded-3 shadow-sm"
                  >
                    Explorar ofertas
                  </a>
                </div>
              </div>
            </div>

            <div
              className="position-absolute rounded-circle d-none d-md-block"
              style={{
                width: "16rem",
                height: "16rem",
                backgroundColor: "#f87171",
                opacity: 0.2,
                bottom: 0,
                right: 0,
                transform: "translate(5rem, 5rem)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
