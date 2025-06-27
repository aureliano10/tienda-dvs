import React from "react";
import CategoryCard from "../components/CategoryCard";

const RelatedContent = () => {
  const categories = [
    {
      id: "guitarras",
      name: "Guitarras",
      deals: [
        {
          id: 1,
          title: "Fender Stratocaster",
          image: "https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1200,
        },
        {
          id: 2,
          title: "Gibson Les Paul",
          image: "https://images.unsplash.com/photo-1625159510807-03f1d1b52bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1500,
        },
        {
          id: 3,
          title: "Ibanez GRG",
          image: "https://images.unsplash.com/photo-1672499030987-87bb93ae800c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 950,
        },
        {
          id: 4,
          title: "Yamaha F310",
          image: "https://images.unsplash.com/photo-1737085595556-129d05ce0e03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 300,
        },
      ],
    },
    {
      id: "bajos",
      name: "Bajos",
      deals: [
        {
          id: 5,
          title: "Fender Jazz Bass",
          image: "https://plus.unsplash.com/premium_photo-1664194584456-c25febbccb2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1100,
        },
        {
          id: 6,
          title: "Ibanez SR300",
          image: "https://images.unsplash.com/photo-1485278537138-4e8911a13c02?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 900,
        },
        {
          id: 7,
          title: "Yamaha TRBX",
          image: "https://images.unsplash.com/photo-1462965326201-d02e4f455804?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 800,
        },
        {
          id: 8,
          title: "Music Man StingRay",
          image: "https://images.unsplash.com/photo-1618530089935-3030738b8c7b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1600,
        },
      ],
    },
    {
      id: "baterias",
      name: "Baterías",
      deals: [
        {
          id: 9,
          title: "Pearl Export",
          image: "https://images.unsplash.com/photo-1658624899476-a507d243c373?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1300,
        },
        {
          id: 10,
          title: "Tama Imperialstar",
          image: "https://images.unsplash.com/photo-1653395339043-340a32e90a45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1400,
        },
        {
          id: 11,
          title: "Yamaha Stage Custom",
          image: "https://images.unsplash.com/photo-1708961465136-e24550f3acd5?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1200,
        },
        {
          id: 12,
          title: "Mapex Mars",
          image: "https://images.unsplash.com/photo-1568153354382-6bcd1d46568b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1000,
        },
      ],
    },
    {
      id: "amplificadores",
      name: "Amplificadores",
      deals: [
        {
          id: 13,
          title: "Fender Champion",
          image: "https://images.unsplash.com/photo-1606598102483-238adb6da9bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 300,
        },
        {
          id: 14,
          title: "Marshall DSL40",
          image: "https://images.unsplash.com/photo-1699567364860-cf5e05224338?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 750,
        },
        {
          id: 15,
          title: "Orange Crush",
          image: "https://images.unsplash.com/photo-1587687747420-b45f676dca73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 400,
        },
        {
          id: 16,
          title: "Vox AC30",
          image: "https://images.unsplash.com/photo-1650733051639-32c5ab7273af?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 950,
        },
      ],
    },
  ];

  return (
    <section className="col-12 col-sm-10 col-md-9 col-lg-9 mx-auto px-3 px-sm-4 py-5">
      <h2 className="fs-3 fw-bold mb-5 text-center">También te puede interesar</h2>

      {categories.map((category) => (
        <div key={category.id} className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="fs-4 fw-bold mb-0">{category.name}</h3>
            <a href="#" className="text-danger text-decoration-none">
              Ver más →
            </a>
          </div>

          <div className="row g-3">
            {category.deals.map((deal) => (
              <div key={`${category.id}-${deal.id}`} className="col-12 col-sm-6 col-md-3">
                <CategoryCard offer={deal} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default RelatedContent;
