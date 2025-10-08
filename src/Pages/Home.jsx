import React from "react";
import "../App.css";

const Home = () => {
  return (
    <>
      {/* ===== Carousel Section ===== */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active boopathi">
            <img src="./images/a1.jpg" className="d-block w-100 boopathi-img" alt="..." />
          </div>
          <div className="carousel-item boopathi">
            <img src="./images/a4.jpg" className="d-block w-100 boopathi-img" alt="..." />
          </div>
          <div className="carousel-item boopathi">
            <img src="./images/a5.jpg" className="d-block w-100 boopathi-img" alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ===== Shop By Cake Section ===== */}
      <div className="container text-center my-5">
        <h2 className="fw-bold mb-4">
          Shop By <span className="text-danger">Cake</span>
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          <div className="cake-card">
            <img src="./images/a6.webp" alt="Tall and Fancy" />
            <p className="fw-bold mt-3">TALL AND FANCY</p>
          </div>

          <div className="cake-card">
            <img src="./images/a7.webp" alt="Exotic Cakes" />
            <p className="fw-bold mt-3">EXOTIC CAKES</p>
          </div>

          <div className="cake-card">
            <img src="./images/a8.webp" alt="Premium Cakes" />
            <p className="fw-bold mt-3">PREMIUM CAKES</p>
          </div>

          <div className="cake-card">
            <img src="./images/a9.webp" alt="Designer Cakes" />
            <p className="fw-bold mt-3">DESIGNER CAKES</p>
          </div>
        </div>
      </div>

    {/* ===== Cakes Collection Section ===== */}
<div className="container cake-section my-5">
  <div className="text-center">
    <h2 className="fw-bold mb-4">
      Our <span className="text-danger">Cake Collection</span>
    </h2>
    <p className="text-muted">
      Delicious cakes made with love — perfect for every celebration!
    </p>
  </div>

  <div className="cake-grid mt-4">
    <div className="cake-item">
    <img src="./images/a16.jpeg"></img>
      <div className="cake-info">
        <h5>Chocolate Delight</h5>
        <p>Rich & creamy layers of dark chocolate.</p>
      </div>
    </div>

    <div className="cake-item">
    <img src="./images/a15.jpg"></img>
      <div className="cake-info">
        <h5>Red Velvet</h5>
        <p>Classic red velvet with silky cream cheese frosting.</p>
      </div>
    </div>

    <div className="cake-item">
     <img src="./images/a17.webp"></img>
      <div className="cake-info">
        <h5>Blueberry Bliss</h5>
        <p>Soft vanilla sponge topped with blueberry glaze.</p>
      </div>
    </div>

    
  </div>
</div>

      {/* ===== Description Section ===== */}
      <div className="container my-5">
        <div className="con-title">
          <p className="fs-4 fw-bold text-center mb-4">
            Our Newly Launched Best Selling
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12">
            <p className="iniyan">
              <i>
                A cake is a sweet, baked dessert typically made from flour, sugar, eggs, and fat, often served at celebrations like birthdays and weddings.
                Cakes vary widely in type and preparation, serving a central role in many cultures and a wide range of culinary and festive purposes.
              </i>
            </p>
          </div>
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 text-center">
            <img src="./images/a8.webp" className="h-75 w-75 rounded" alt="Best selling cake" />
          </div>
        </div>
      </div>

      {/* ===== Our Speciality Section ===== */}
      <div className="container text-center my-5">
        <h2 className="fw-bold mb-5">
          Our <span className="text-danger">Speciality</span>
        </h2>

        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-3">
            <div className="special-box">
              <img src="./images/a10.png" alt="Safe & Hygienic" className="special-icon" />
              <p>Safe & Hygienic Bakery</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="special-box">
              <img src="./images/a11.png" alt="Delivery" className="special-icon" />
              <p>Delivery in 700+ Cities</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="special-box">
              <img src="./images/a12.png" alt="Trusted" className="special-icon" />
              <p>Trusted By 20 Million</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="special-box">
              <img src="./images/a13.png" alt="Service" className="special-icon" />
              <p>Services in 18000+ pincodes</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Newsletter Section ===== */}
      <div className="newsletter-section py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="newsletter-text mb-4 mb-md-0">
            <h3>
              Know The Sweet <span className="highlight">Deal First !</span>
            </h3>
            <p>Sign up to our newsletter and get to know the sweets first!</p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control email-input"
                placeholder="Enter your email address"
              />
              <button className="btn btn-subscribe">Subscribe</button>
            </div>
          </div>
          <div className="newsletter-img">
            <img src="./images/a14.jpg" alt="cake" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
