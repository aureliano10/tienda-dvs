import React from "react";

const PromoBanner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-9 col-lg-9 mx-auto px-3 px-sm-4">
          <div
            className="bg-primary bg-gradient rounded-4 overflow-hidden mb-4"
            style={{
              borderRadius: "20px", // Refuerzo visual por si Bootstrap no aplica
            }}
          >
            <div className="container text-center py-5 px-3">
              <h3 className="fs-2 fw-bold text-white mb-3">
                ¡Seguimos sonando con vos!
              </h3>
              <p className="fs-5 text-light mb-4">
                ¡Gracias por elegir instrumentos que inspiran!
              </p>
              <div className="d-flex justify-content-center">
                <div
                  className="px-4 py-2 rounded-3"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span className="text-white fw-medium">
                    MusicStore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
