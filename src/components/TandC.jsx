import React from "react";
import './footlinks.css';
import Footer from "./Footer";

const TandC = () => {
  return (
    <>
    <div className="tandc-container">
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Welcome to Jigyasa Hospital.</strong> By accessing or using our
        services, you agree to be bound by the following terms and conditions.
        Please read them carefully before proceeding.
      </p>
      <ol>
        <li>
          <h2>Medical Disclaimer</h2>
          <p>
            All content and services provided by Jigyasa Hospital are intended for
            informational purposes only. They should not be treated as medical
            advice. Always consult a qualified healthcare professional for any
            diagnosis, treatment, or medical concerns.
          </p>
        </li>
        <li>
          <h2>Appointments and Cancellations</h2>
          <p>
            Patients can book appointments through our website, by phone, or in
            person. We request that cancellations or rescheduling be done at least
            24 hours in advance. Repeated no-shows may affect future appointment
            scheduling.
          </p>
        </li>
        <li>
          <h2>Privacy and Confidentiality</h2>
          <p>
            Jigyasa Hospital respects patient confidentiality. All personal and
            medical information shared with us is protected and will not be
            disclosed to any third party without patient consent, except as
            required by law. Please refer to our Privacy Policy for more details.
          </p>
        </li>
        <li>
          <h2>Billing and Payments</h2>
          <p>
            All services rendered must be paid in accordance with our billing
            policy. Patients are responsible for understanding the costs involved
            in their treatment. Any discrepancies in billing must be reported
            within 7 days from the date of service.
          </p>
        </li>
        <li>
          <h2>Use of Website</h2>
          <p>
            By using our website, you agree not to engage in any activity that may
            harm, disrupt, or misuse our digital services. Unauthorized use or
            attempts to access restricted areas may result in legal action.
          </p>
        </li>
        <li>
          <h2>Limitation of Liability</h2>
          <p>
            Jigyasa Hospital shall not be held liable for any direct or indirect
            damages arising from the use of our services or website. All
            treatments and procedures are carried out under standard medical
            protocols, and outcomes may vary based on individual conditions.
          </p>
        </li>
        <li>
          <h2>Modifications to Terms</h2>
          <p>
            We reserve the right to change these Terms and Conditions at any time.
            It is your responsibility to review this page periodically. Continued
            use of our services indicates your acceptance of any updates.
          </p>
        </li>
        <li>
          <h2>Contact Information</h2>
          <p>
            For any queries regarding these Terms and Conditions, you can reach us
            at:<br />
            <strong>Email:</strong> info@jigyasahospital.com<br />
            <strong>Phone:</strong> +91-7900793333
          </p>
        </li>
      </ol>
     
    </div>
    <Footer/>
    </>
  );
};

export default TandC;
