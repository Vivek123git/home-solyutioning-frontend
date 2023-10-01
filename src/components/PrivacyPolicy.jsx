import React,{useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const PrivacyPolicy = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <Navbar />
            <div className='container py-4' >
                <div className="row justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center mb-2">
                        <h3 className="fw-bold mb-4">Privacy and Policy</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                        <p>
                            At Repairinminute, we are committed to protecting the privacy of our
                            customers. This privacy policy outlines the type of personal information
                            we collect, how we use it, and how we protect it.
                        </p>
                        <p>
                            {" "}
                            For Customers Information we collect: We may collect personal information
                            from you when you use our services, such as your name, address, phone
                            number, email address, images, location and information about your issue.
                            We may also collect information about your interactions with our website,
                            including your IP address and browsing history.
                        </p>
                        <p>
                            How we use your information: We use your personal information to provide
                            our services to you, including repairing your Home appliances, designing,
                            and other services that you request. We may also use your information for
                            marketing purposes, such as sending you promotional emails or text
                            messages. You can opt out of marketing communications at any time.
                        </p>
                        <p>
                            How we protect your information: We take reasonable steps to protect your
                            personal information from unauthorized access, use, or disclosure. We use
                            industry-standard security measures, including encryption and firewalls,
                            to protect your information.
                        </p>
                        <p>
                            Sharing your information: We may share your personal information with
                            third-party service providers that help us provide our services to you.
                            For example, we may share your information with providers in order to
                            repair your appliance or other issues. We may also share your information
                            with law enforcement agencies if required by law.
                        </p>
                        <p>
                            Your rights: You have the right to access, correct, or delete your
                            personal information. You can also request that we restrict the processing
                            of your information or transfer it to another company. To exercise these
                            rights, please contact us using the information below.
                        </p>
                        <p>
                            Changes to this privacy policy: We may update this privacy policy from
                            time to time. If we make significant changes to the policy, we will notify
                            you by email or by posting a notice on our website.
                        </p>
                        <p>
                            Contact us: If you have any questions or concerns about our privacy policy
                            or the way we handle your personal information, please contact us at our
                            website. Please note that unless specifically defined in this Policy,
                            capitalized terms shall have the same meaning ascribed to them in our
                            Privacy Policy, for any query please contact us at +91-91*******, or you
                            repairinminute@gmail.com
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy