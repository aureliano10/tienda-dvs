import React from "react";

const FeaturedDeals = () => {
  const deals = [
    {
      id: "guitarras",
      title: "Guitarras en oferta",
      image: "https://images.unsplash.com/photo-1508186736123-44a5fcb36f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "bajos",
      title: "Bajos eléctricos",
      image: "https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "baterias",
      title: "Baterías completas",
      image: "https://plus.unsplash.com/premium_photo-1682600101268-ac20dfc2cb80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "amplificadores",
      title: "Amplificadores potentes",
      image: "https://images.unsplash.com/photo-1545932447-c5f8dbf04576?q=80&w=1022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-9 mx-auto px-3 px-sm-4">
        <h2 className="mb-4 fw-bold fs-4 text-center">Ofertas destacadas</h2>
        <div className="row g-4">
          {deals.map((deal) => (
            <div className="col-12 col-md-6 col-lg-3" key={deal.id}>
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={deal.image}
                  className="card-img-top"
                  alt={deal.title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{deal.title}</h5>
                  <p className="card-text text-muted">
                    ¡Descubrí lo mejor en {deal.id} ahora!
                  </p>
                  <a href="#" className="btn btn-outline-danger btn-sm mt-2">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
