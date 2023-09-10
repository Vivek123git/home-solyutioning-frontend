import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5,
      partialVisibilityGutter: 30
    }
  };

  const items = [
    {
    //   description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    //   headline: "Malasiya",
      image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
    },
    {
        // description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        // headline: "The TajMahal",
        image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
      },
      {
        // description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        // headline: "Indonesia",
        image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
      },
      {
        // description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        // headline: "London",
        image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
      },
      {
        // description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        // headline: "Paris",
        image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
      },
      {
        // description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        // headline: "Paris",
        image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
      },
    // Add other items here...
  ];

  return (
   <> 
   <Container className='carousel-container'> 
     {/* <h3 className='p-0'>Dream Your Next Trip</h3> */}
   <Carousel
   additionalTransfrom={0}
   arrows
   autoPlay
   autoPlaySpeed={150000}
   centerMode={false}
   className="multi-banner-carousel"
   containerClass="container-with-dots"
   dotListClass=""
   draggable={true}
   focusOnSelect={false}
   infinite
   itemClass=""
   keyBoardControl
   minimumTouchDrag={80}
   pauseOnHover
   renderArrowsWhenDisabled={false}
   renderButtonGroupOutside={false}
   renderDotsOutside={false}
   responsive={responsive}
   rewind={false}
   rewindWithAnimation={false}
   rtl={false}
   shouldResetAutoplay
   showDots={false}
   sliderClass=""
   slidesToSlide={1}
   swipeable
 >
   {items.map((item, index) => (
     <WithStyles key={index} description={item.description} headline={item.headline} image={item.image} />
   ))}
 </Carousel>
 </Container>

 </>
  );
};

// Dummy component to represent the WithStyles component.
const WithStyles = ({ description, headline, image }) => (
  
    <div>
    <img width={"95%"} style={{borderRadius:"10px"}} src={image} alt={headline} />
    <div className='carousel-text' >
    <h4>{headline}</h4>
    </div>
    {/* <p>{description}</p> */}
  </div>
);

export default MultiCarousel;