import React from "react";

const CategoryCard = ({ offer }) => {
  // Datos visuales fijos o tomados desde el objeto `offer`
  const {
    title = "Nombre del producto",
    image = "https://via.placeholder.com/300x200?text=Instrumento",
    price = 1000,
    discountPrice = 700,
    rating = 4,
    reviews = 25,
    buyers = 50,
  } = offer;

  return (
    <div
      className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden"
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            height: "200px",
            objectFit: "cover",
            width: "100%",
            backgroundColor: "#f0f0f0"
          }}
          loading="lazy"
        />

        <span className="position-absolute top-0 end-0 bg-danger text-white small px-2 py-1 m-2 rounded">
          30% OFF
        </span>
      </div>

      <div className="p-3">
        <h5 className="fw-bold mb-2 fs-5 text-truncate card-title-hover">
          {title}
        </h5>

        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-star-fill text-warning me-1"></i>
          <i className="bi bi-star-fill text-warning me-1"></i>
          <i className="bi bi-star-fill text-warning me-1"></i>
          <i className="bi bi-star-fill text-warning me-1"></i>
          <i className="bi bi-star text-secondary me-1"></i>
          <small className="text-muted ms-2">({reviews})</small>
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex justify-content-start align-items-center mb-1">
            <span className="fw-bold text-danger fs-5">${discountPrice}</span>
            <small className="text-muted text-decoration-line-through ms-2">
              ${price}
            </small>
          </div>
          <div className="d-flex justify-content-end">
            <small className="text-muted">{buyers} comprados</small>
          </div>
        </div>
      </div>

      <style>{`
        .card:hover .card-title-hover {
          color: #dc3545;
        }
        .card-img-top {
          transition: opacity 0.3s ease;
        }
        .card-img-top:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default CategoryCard;
