import Image from "next/image";
import styles from "./leadership.module.css";

export default function LeadershipPage() {
  return (
    <div className={styles.container}>
      {/* CEO Section */}
      <div className={styles.section}>
        {/* Left - Image */}
        <Image
          src="/ceo.jpg"
          alt="CEO"
          width={350}
          height={350}
          className={styles.image}
        />

        {/* Right - Text */}
        <div className={styles.text}>
          <h2 className={styles.title}>CEO’s Message</h2>

          <p className={styles.paragraph}>
            “Welcome to <b>ProMentor Guild</b>". <br></br>Our goal is to help individuals
            and professionals stay ahead by building real-world skills.
            We bring together experienced mentors who offer hands-on training,
            project support, and personalized learning across technology,
            design, and research.
          </p>

          <p className={styles.paragraph}>
            We believe that learning should be flexible, guided by experts,
            and focused on innovation and leadership excellence.
            Whether you’re upskilling or mentoring others, we’re here to
            support your journey toward growth.
          </p>

          <p className={styles.name}>
            Kavya Dubagunta
            <br />
            Founder & CEO, ProMentor Guild
          </p>
        </div>
      </div>

      {/* CTO Section (Reversed Layout) */}
      <div className={`${styles.section} ${styles.reverse}`}>
        {/* Left - Text */}
        <div className={styles.text}>
          <h2 className={styles.title}>CTO’s Message</h2>

          <p className={styles.paragraph}>
          "At <b>ProMentor Guild</b>",<br></br> We focus on integrating innovation and technology
            to create the best mentorship experience. Our team continuously
            develops platforms that make learning engaging and practical.
          </p>

          <p className={styles.paragraph}>
            Technology is not just about tools, it’s about empowering learners
            and mentors to connect, collaborate, and create solutions that
            shape the future.
          </p>

          <p className={styles.name}>
            Kalpana Putrevu
            <br />
            Co-Founder & CTO, ProMentor Guild
          </p>
        </div>

        {/* Right - Image */}
        <Image
          src="/cto.jpg"
          alt="CTO"
          width={350}
          height={350}
          className={styles.image}
        />
      </div>
    </div>
  );
}
