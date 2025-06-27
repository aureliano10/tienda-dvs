import React from "react";

const Newsletter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-9 col-lg-9 mx-auto px-3 px-sm-4">
          <div className="bg-dark text-white py-5 px-3 rounded">
            <div className="container text-center">
              <h3 className="fw-bold mb-4">Suscríbete a nuestro newsletter</h3>
              <p className="mb-4">
                Recibe las mejores ofertas directamente en tu correo
              </p>

              <form
                className="d-flex flex-column flex-sm-row gap-2 mx-auto"
                style={{ maxWidth: "500px" }}
              >
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="form-control py-3"
                  disabled
                />
                <button
                  type="button"
                  className="btn btn-danger py-3 px-4 ms-sm-2"
                  able
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
