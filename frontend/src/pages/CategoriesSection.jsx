import React from "react";

const CategoriesSection = () => {
  const categories = [
    { id: "guitarras", name: "Guitarras", icon: "🎸" },
    { id: "bajos", name: "Bajos", icon: "🎵" },
    { id: "baterias", name: "Baterías", icon: "🥁" },
    { id: "amplificadores", name: "Amplificadores", icon: "🔊" },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container col-12 col-sm-10 col-md-9 col-lg-9 mx-auto px-3 px-sm-4">
        <h2 className="h4 fw-bold mb-4 text-center">
          Explorá nuestras categorías principales
        </h2>
        <div className="row g-3">
          {categories.map((category) => (
            <div className="col-6 col-md-3" key={category.id}>
              <div
                className="btn border border-light w-100 py-3 d-flex flex-column align-items-center justify-content-center rounded shadow-sm"
                style={{ backgroundColor: "#f8f9fa", cursor: "default" }}
              >
                <span className="fs-2 mb-2">{category.icon}</span>
                <span className="fw-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
