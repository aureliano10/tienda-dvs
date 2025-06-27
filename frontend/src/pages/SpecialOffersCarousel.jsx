import React from "react";

const SpecialOffersCarousel = () => {
  // Contenido simulado para vista visual (sin lógica)
  const mockOffers = [
    {
      id: 1,
      title: "Guitarra Eléctrica Fender",
      city: "Buenos Aires",
      descripcion: "Sonido clásico con excelente terminación.",
      image: "https://images.unsplash.com/photo-1706356104839-5d3a4e8eb35f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Bajo Yamaha 5 cuerdas",
      city: "Córdoba",
      descripcion: "Ideal para sesiones en vivo y estudio.",
      image: "https://images.unsplash.com/photo-1617161034978-3aa9d79a9f57?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Batería Acústica Pearl",
      city: "Rosario",
      descripcion: "Potente y duradera para todas tus performances.",
      image: "https://images.unsplash.com/photo-1676912004492-0fa09f28fe2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Amplificador Marshall 50W",
      city: "Mendoza",
      descripcion: "Un clásico para guitarra eléctrica.",
      image: "https://images.unsplash.com/photo-1545932447-c5f8dbf04576?q=80&w=1022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="py-5 bg-white col-12 col-sm-10 col-md-9 col-lg-9 mx-auto px-3 px-sm-4">
      <div className="container">
        <h2 className="text-center mb-4">Ofertas Especiales</h2>

        <div className="position-relative">
          <div className="row">
            {mockOffers.map((offer) => (
              <div key={offer.id} className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm">
                  <div
                    className="card-img-top"
                    style={{
                      backgroundImage: `url(${offer.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "200px"
                    }}
                  ></div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0">{offer.title}</h5>
                      <span className="badge bg-primary">{offer.city}</span>
                    </div>
                    <p className="card-text text-muted small flex-grow-1">
                      {offer.descripcion}
                    </p>
                    <button className="btn btn-outline-danger btn-sm mt-3 w-100">
                      Más información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flechas (sin funcionalidad) */}
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
            disabled
          >
            &#8592;
          </button>
          <button
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
            disabled
          >
            &#8594;
          </button>
        </div>

        {/* Paginación visual estática */}
        <div className="d-flex justify-content-center mt-3">
          {[...Array(2)].map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm rounded-circle mx-1 ${
                index === 0 ? "btn-danger" : "btn-secondary"
              }`}
              style={{ width: "12px", height: "12px", padding: 0 }}
              disabled
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersCarousel;
