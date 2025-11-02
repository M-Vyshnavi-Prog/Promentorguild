"use client";

import styles from "./contact.module.css";

export default function ContactPage() {
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
            <form className={styles.form}>
              <label htmlFor="fname">First Name *</label>
              <input type="text" id="fname" name="fname" placeholder="Your first name" required />

              <label htmlFor="lname">Last Name *</label>
              <input type="text" id="lname" name="lname" placeholder="Your last name" required />

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Right: Address */}
          <div className={styles.addressContainer}>
            <h2>Address</h2>

            <div className={styles.addressBlock}>
              <h3>USA Headquarters</h3>
              <p>
                300 Decker Dr., Suite 335,
                <br /> Irving, TX 75062
              </p>
            </div>

            <div className={styles.addressBlock}>
              <h3>Regional Office</h3>
              <p>
                3540 W Sahara #E6-135,
                <br /> Las Vegas, NV 89102
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
