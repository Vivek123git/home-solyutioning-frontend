import React, { useEffect } from 'react'
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
                        <h3 className="fw-bold mb-4">Term and Condition</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                        <p>
                            These Terms &amp; Conditions of Service apply to all users of the Repairinminute service.
                             Information provided by our users through the Repairinminute
                            Service may contain links to third-party websites that are not owned or
                            controlled by Repairinminute. Repairinminute has no control over and assumes
                            no responsibility for, the content, privacy policies, or practices of any
                            third-party websites.
                        </p>
                        <p>
                            Also, Repairinminute does not assume any liability for any mistakes,
                            misstatements of law, defamation, omissions, falsehood, obscenity,
                            pornography, or profanity in the statements, opinions, representations, or
                            any other form of third-party content on the Site. In addition, Repairinminute
                             will not and cannot censor or edit the content of any third-party
                            site. By using the Service, you expressly acknowledge that the information
                            and opinions in the third-party content represent solely the thoughts of
                            the author and are neither endorsed by nor does it necessarily reflect
                            Repairinminute's belief.
                        </p>
                        <p>
                            Service: Home &amp; appliance repair providers may charge a service fee to
                            cover the cost of diagnosing the issue with your appliance. This fee may
                            be waived if you agree to the repair. Repair costs: The cost of repairing
                            your home or appliance will depend on the type of repair needed and the
                            parts required. The provider will provide you with a quote for the repair
                            before beginning work.
                        </p>
                        <p>
                            Warranty: Most home &amp; appliance repair providers will offer a warranty
                            for the work performed. The warranty may vary depending on the company,
                            but it typically covers the repair work and any parts used.
                        </p>
                        <p>
                            Payment: Payment for any home repair services is usually due upon
                            completion of the work. You may be required to discuss this before the
                            work begins. Cancellation: If you need to cancel your appointment, you
                            should do so as soon as possible. Some providers may charge a cancellation
                            fee if you cancel within a certain timeframe. Liability: Providers
                            typically have liability insurance to cover any damage that may occur
                            while they are working on your appliance or home. However, it's always a
                            good idea to check with the provider to make sure they have adequate
                            coverage.
                        </p>
                        <p>
                            Privacy: Repairinminute respect your privacy and keep any personal
                            information you provide confidentially. Safety: We should prioritize
                            safety and follow all necessary safety guidelines when working on-site.
                            Repairinminute shall not be responsible for any damages, claims, or other
                            liability arising from or related to your use of any third-party website
                        </p>
                        <p>
                            Please note that unless specifically defined in this Policy, capitalized
                            terms shall have the same meaning ascribed to them in our Terms and
                            Conditions, available at https://www.repairinminute.com/term-condition (“Terms”).
                            Please read this Policy in consonance with the Terms.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy