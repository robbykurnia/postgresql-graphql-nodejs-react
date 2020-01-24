import React from "react";

const Intro = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={`https://i.picsum.photos/id/101/600/300.jpg`}
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Expose</h2>
            <p>Image Decription</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={`https://i.picsum.photos/id/201/600/300.jpg`}
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Expose</h2>
            <p>Image Decription</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={`https://i.picsum.photos/id/301/600/300.jpg`}
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Expose</h2>
            <p>Image Decription</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Intro;
