import React from 'react';


const FaqSection = () => {
    return (
        <div className='py-5' style={{ backgroundColor: "#e1e1e1" }}>
            <div className='container py-4' >
                <div className="row justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center mb-2">
                        <h3 className="fw-bold mb-4">Frequently Asked Questions</h3>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item p-2">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Why Repairinminute for home service?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                You should choose us because we provide a guarantee of prompt service and assured problem resolution. Our service charges are fixed, meaning we don't add any extra fees.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item p-2">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                How Do I Book a Worker for my home service?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Booking a worker is simple! You can fill out the form above or click "Start Booking" for the specific service you need. Alternatively, you can call us directly, and our team will assist you in scheduling your service.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item p-2">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Are There Any Additional Charges After the Visiting charge?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                No, our visiting charges are fixed for the specific task you request. If any components need replacement, you will be informed about the MRP (Maximum Retail Price) beforehand.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item p-2">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                What About the Warranty for the Work and Replacements?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                We offer a one-month warranty for the specific work you book with us. Component warranties may vary by manufacturer or company. Please inquire about specific warranties for replacement parts.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item p-2">
                        <h2 className="accordion-header" id="headingFive">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                What If the Worker Charges More Than the Visiting Charge?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                In the rare event that a worker charges more than the agreed-upon visiting charge, please don't hesitate to call us. Our team will promptly address and resolve any such issues to ensure fair and transparent service.
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default FaqSection;
