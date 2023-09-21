import Carousel from "react-multi-carousel";
 import "react-multi-carousel/lib/styles.css";
import { AiOutlineStar } from 'react-icons/ai'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const items = [
  {
    description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "Malasiya",
    image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
  },
  {
    description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "The TajMahal",
    image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
  },
  {
    description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "Indonesia",
    image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
  },
  {
    description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "London",
    image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
  },
  {
    description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "Paris",
    image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
  },
  {
    description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "Paris",
    image: "https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
  },
  // Add other items here...
];

const Customer = () => {
  return (
    <>
     <section style={{ color: "#000", backgroundColor: "#e1e1e1" }}>
          <div class="container py-5">
            <div class="row d-flex justify-content-center">
              <div class="col-md-10 col-xl-8 text-center">
                <h3 class="fw-bold mb-4">What people say about us!</h3>
                <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                  We give awesome services see how customer love us
                </p>
              </div>
            </div>

            <div class="row text-center">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={true}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
      >
       
              {items.map((elem, id) => {
                return (
                  <><div class="col-md-10 ">
                    <div class=" card">
                      <div class="card-body py-4 mt-2">
                        <div class="d-flex justify-content-center mb-4">
                          <img src={elem.image}
                            class="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <h5 class="font-weight-bold">{elem.headline}</h5>
                        <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                        <ul class="list-unstyled d-flex justify-content-center">
                          <li>
                            <AiOutlineStar />
                          </li>
                          <li>
                            <AiOutlineStar />
                          </li>
                          <li>
                            <AiOutlineStar />
                          </li>
                          <li>
                            <AiOutlineStar />
                          </li>
                          <li>
                            <i class="fas fa-star-half-alt fa-sm text-info"></i>
                          </li>
                        </ul>
                        <p class="mb-2">
                          <i class="fas fa-quote-left pe-2"></i>{elem.description}
                        </p>
                      </div>
                    </div>
                  </div></>
                )
              })}

              
            
      </Carousel>;
      </div>
          </div>
        </section>

    </>
  )
}
export default Customer;