import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <style>{`
        .clickable-text {
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .clickable-text:hover {
          color: #0d6efd !important;
        }
        .icon-clickable {
          cursor: pointer;
          transition: color 0.3s ease;
          color: white;
        }
        .icon-clickable:hover {
          color: #0d6efd !important;
        }
      `}</style>

      <footer className="bg-dark text-white pt-5 pb-3 my-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-md-3">
              <h4 className="fw-bold mb-3">MusicStore</h4>
              <p>
                Descubre las mejores ofertas en tu ciudad y ahorra hasta un 70%.
              </p>
            </div>

            <div className="col-12 col-md-3">
              <h4 className="fw-bold mb-3">Explorar</h4>
              <ul className="list-unstyled">
                <li>
                  <span className="text-white-50 clickable-text">Ofertas</span>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
              <h4 className="fw-bold mb-3">Empresa</h4>
              <ul className="list-unstyled">
                <li>
                  <span className="text-white-50 clickable-text">Sobre nosotros</span>
                </li>
                <li>
                  <span className="text-white-50 clickable-text">Contacto</span>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
              <h4 className="fw-bold mb-3">Legal</h4>
              <ul className="list-unstyled">
                <li>
                  <span className="text-white-50 clickable-text">Términos y condiciones</span>
                </li>
                <li>
                  <span className="text-white-50 clickable-text">Política de privacidad</span>
                </li>
                <li>
                  <span className="text-white-50 clickable-text">Cookies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-3 mb-md-0">
              © 2025 MusicStore. Todos los derechos reservados.
            </p>
            <div className="d-flex">
              <span className="icon-clickable me-3">
                <BsFacebook size={24} />
              </span>
              <span className="icon-clickable me-3">
                <BsTwitter size={24} />
              </span>
              <span className="icon-clickable">
                <BsInstagram size={24} />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
