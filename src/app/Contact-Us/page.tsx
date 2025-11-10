"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    console.log("Form submission initiated", e);
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          {/* Left: Email Form */}
          <div className={styles.formContainer}>
            <h2>Email Us</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
               {/* ✅ Add your Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="7d2e859f-16f8-4a6e-9f8c-9b6c95d34e89" />

              <label htmlFor="fname">First Name *</label>
              <input type="text" id="fname" name="fname" placeholder="Your first name" required />

              <label htmlFor="lname">Last Name *</label>
              <input type="text" id="lname" name="lname" placeholder="Your last name" required />

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message"></textarea>

              <button type="submit">Submit</button>

              {/* Success or Error Message */}
              {status === "sending" && <p style={{ color: "blue" }}>Sending...</p>}
              {status === "success" && <p style={{ color: "green" }}>Message sent successfully!</p>}
              {status === "error" && <p style={{ color: "red" }}>Oops! Something went wrong.</p>}
            </form>
          </div>

          {/* Right: Address */}
          <div className={styles.addressContainer}>
            <h2>Apply Here</h2>

            <div className={styles.addressBlock}>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:promentorguild@gmail.com" className={styles.emailLink}>
                  promentorguild@gmail.com
                </a>
              </p>
              <p>"Reach us by just one click"</p>
              <button
                className={styles.formButton}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfvZVbr_YphfVQGGDJKeZiAmYFufp4EGxcadkmvZdAqyX-6-w/viewform",
                    "_blank"
                  )
                }
              >
                Fill Out Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
