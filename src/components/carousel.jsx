import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // We'll add some custom styles here

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://img.freepik.com/free-photo/sunny-meadow-landscape_1112-134.jpg?ga=GA1.1.319397782.1743918535&semt=ais_hybrid&w=740"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Sample description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-761.jpg?ga=GA1.1.319397782.1743918535&semt=ais_hybrid&w=740"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Sample description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://img.freepik.com/free-photo/beautiful-view-green-fields-sunrise-captured-canggu-bali_181624-14146.jpg?ga=GA1.1.319397782.1743918535&semt=ais_hybrid&w=740"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Sample description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
