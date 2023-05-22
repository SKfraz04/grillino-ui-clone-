import Carousel from "react-bootstrap/Carousel";
import "../style/banner.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/layerslider/projects/Grillino-Slider-1/hero-img-1-3.jpg"
          alt="First slide"
        />
        {/* <div data-aos="zoom-out-down"> */}
        <img
          src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/layerslider/projects/Grillino-Slider-1/hero-img-1-3-1.png"
          alt="grillino"
          className="img-fluid burger-house"
          width={857}
        />
        {/* </div> */}
        <img
          src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/layerslider/projects/Grillino-Slider-1/hero-img-1-2-2.png"
          alt="discount"
          className="discount"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/layerslider/projects/Grillino-Slider-1/hero-img-1-1-1.png"
          alt="Second slide"
        />
        <img
          src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/layerslider/projects/Grillino-Slider-1/hero-img-1-1-1.png"
          alt="grillino"
          className="img-fluid burger-house"
          width={857}
        />
        <img
          src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/layerslider/projects/Grillino-Slider-1/hero-img-1-2-2.png"
          alt="discount"
          className="discount2"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/layerslider/projects/Grillino-Slider-1/hero-img-1-2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption> 
      </Carousel.Item>*/}
    </Carousel>
  );
}

export default UncontrolledExample;
