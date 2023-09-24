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
    description: "I recently had the service of using this home service company for electrical repairs, and plumbing service. They did a fantastic job on all fronts! The workers were not only skilled but also friendly and professional. ",
    headline: "Ajay Tiwari",
    image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=996&t=st=1695406407~exp=1695407007~hmac=940398e4ae1e6e050dec8b0dc8b690e6afb81c333e343123011a39f36b75485f"
  },
  {
    description: " They completed the repairs promptly, and the CCTV installation was flawless. I was particularly impressed with their guaranteed work. I highly recommend this company for anyone looking for dependable home services.",
    headline: "Ranjana chauhan",
    image: "https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?w=996&t=st=1695406665~exp=1695407265~hmac=f9d4e7d61f5d7e2005fdfc868a42fdb1b9f5f612a409e22c98b6da42c9b5e670"
  },
  {
    description: " Their workers are not only highly skilled but also respectful and punctual. Knowing that they offer guaranteed work gives me peace of mind.",
    headline: "Manoj Singh",
    image: "https://img.freepik.com/free-photo/businessman-black-suit-promoting-something_114579-15897.jpg?w=996&t=st=1695406515~exp=1695407115~hmac=d1945886364851df351e4abd411a7b913399ca1aa6733609f5d9bc81bca2ab67"
  },
  {
    description: "I've used this home service company multiple times for electrical, plumbing, and CCTV needs, and they have never disappointed. Their workers are true professionals who take pride in their work.",
    headline: "Bharti Sharma",
    image: "https://img.freepik.com/free-photo/business-woman-posing-suit-white-background-high-quality-photo_114579-62304.jpg?w=996&t=st=1695406636~exp=1695407236~hmac=291df73d106e010efed1a4eaf4bb5f686afcc385e01fd88c99c799a54c0cb07c"
  },
  {
    description: "This home service company is a homeowner's dream come true. Their workers are like a dream team for all your repair needs.",
    headline: "Vineet yadav",
    image: "https://img.freepik.com/free-photo/businessman-black-suit-promoting-something_114579-15897.jpg?w=996&t=st=1695406515~exp=1695407115~hmac=d1945886364851df351e4abd411a7b913399ca1aa6733609f5d9bc81bca2ab67"
  },
  {
    description: " The work is not only of the highest quality but also backed by a guarantee that provides peace of mind. I can't thank them enough for their excellent service and professionalism.",
    headline: "Neha Singh",
    image: "https://img.freepik.com/free-photo/medium-shot-woman-holding-smartphone_23-2149461756.jpg?w=996&t=st=1695407386~exp=1695407986~hmac=ba9a747e6b7bc7b2c727aa4fd854349099e85a82e06323c2dbf36eee8a810ca5"
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
                        {/* <h6 class="font-weight-bold my-3">Founder at ET Company</h6> */}
                        <ul class="list-unstyled d-flex justify-content-center">
                          <li>
                            <AiOutlineStar style={{color:"black",fontSize:"20px"}} />
                          </li>
                          <li>
                            <AiOutlineStar style={{color:"black",fontSize:"20px"}} />
                          </li>
                          <li>
                            <AiOutlineStar style={{color:"black",fontSize:"20px"}} />
                          </li>
                          <li>
                            <AiOutlineStar style={{color:"black",fontSize:"20px"}} />
                          </li>
                          <li>
                            <AiOutlineStar style={{color:"black",fontSize:"20px"}} />
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