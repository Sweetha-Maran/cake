import React from "react";
import "../App.css";

const About = () => {
  return (
    <>
      {/* ===== About Section ===== */}
      <section className="about-container container my-5">
        <div className="row align-items-center">

          {/* Image Section */}
          <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
            <img
              src="./images/a5.jpg"
              alt="Our Cake Story"
              className="img-fluid rounded about-img"
            />
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-7">
            <h2 className="fw-bold mb-3 text-dark">
              Our <span className="text-danger">Story</span>
            </h2>
            <p className="text-muted">
              Welcome to <strong>Cake Heaven</strong> — where every bite tells a
              story of love, flavor, and craftsmanship. What started as a small
              family kitchen has grown into a destination for dessert lovers who
              crave something truly special.
            </p>
            <p className="text-muted">
              Each of our cakes is baked with premium ingredients and decorated
              with passion. From chocolate drips to classic red velvet, we blend
              creativity with perfection to make your celebrations unforgettable.
            </p>
            <button className="btn btn-dark mt-3">
              Learn More
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
