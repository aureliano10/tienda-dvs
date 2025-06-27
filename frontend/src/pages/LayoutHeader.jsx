import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const LayoutHeader = () => {
 
  return (
    <>
     <header className="sticky-top bg-white shadow-sm">
  <div className="container d-flex align-items-center py-3 flex-wrap">
    {/* LOGO */}
    <div className="d-flex align-items-center me-auto me-md-4" role="button">
      <i className="bi bi-house-fill fs-2 text-danger me-2" />
      <h1 className="fs-4 fw-bold mb-0">MusicApp</h1>
    </div>

    {/* MOBILE CART + USER */}
    <div className="d-flex d-md-none align-items-center gap-3 order-md-last">
      <button className="position-relative btn btn-link p-0">
        <i className="bi bi-cart fs-4 text-dark" />
        <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
          3
        </span>
      </button>

      <div className="dropdown">
        <button
          className="btn btn-link dropdown-toggle p-0 border-0"
          data-bs-toggle="dropdown"
        >
          <i className="bi bi-person-circle fs-4 text-dark" />
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><button className="dropdown-item">Mi Perfil</button></li>
          <li><button className="dropdown-item">Crear Servicio</button></li>
          <li><button className="dropdown-item">Mis Compras</button></li>
          <li><button className="dropdown-item">Mis Reservas</button></li>
          <li><button className="dropdown-item">Panel Admin</button></li>
          <li><button className="dropdown-item">Newsletter</button></li>
          <li><hr className="dropdown-divider" /></li>
          <li><button className="dropdown-item">Cerrar Sesión</button></li>
        </ul>
      </div>

      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <i className="bi bi-list fs-3" />
      </button>
    </div>

    {/* DESKTOP SEARCH + CART + USER */}
    <div className="d-flex flex-column flex-md-row flex-grow-1 align-items-md-center mt-3 mt-md-0">
      <form className="d-flex flex-grow-1 align-items-center me-md-4">
        <input
          type="text"
          className="form-control me-2 rounded-pill"
          placeholder="Busca restaurantes, spas, actividades..."
          readOnly
        />
        <div
          className="d-flex align-items-center bg-light px-3 py-2 rounded-pill"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-geo-alt-fill me-2 text-secondary" />
          <span className="text-muted small">Madrid</span>
        </div>
      </form>

      <div className="d-none d-md-flex align-items-center gap-3 ms-auto">
        <button className="position-relative btn btn-link p-0">
          <i className="bi bi-cart fs-4 text-dark" />
          <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
            3
          </span>
        </button>

        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle p-0 border-0"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-person-circle fs-4 text-dark" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><button className="dropdown-item">Mi Perfil</button></li>
            <li><button className="dropdown-item">Crear Servicio</button></li>
            <li><button className="dropdown-item">Mis Compras</button></li>
            <li><button className="dropdown-item">Mis Reservas</button></li>
            <li><button className="dropdown-item">Panel Admin</button></li>
            <li><button className="dropdown-item">Newsletter</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item">Cerrar Sesión</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav p-3 border-top">
      <li className="nav-item py-2">
        <button className="nav-link btn btn-link">Ofertas del día</button>
      </li>
      <li className="nav-item py-2">
        <button className="nav-link btn btn-link">Restaurantes</button>
      </li>
      <li className="nav-item py-2">
        <button className="nav-link btn btn-link">Belleza y spa</button>
      </li>
      <li className="nav-item py-2">
        <button className="nav-link btn btn-link">Viajes</button>
      </li>
    </ul>
  </div>
</header>

    </>
  );
};

export default LayoutHeader;