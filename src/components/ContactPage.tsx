import ContactForm from "./ContactForm";
import styles from "./ContactPage.module.css";
import Image from "next/image";
import logo from "../assets/logolight.svg";

export default function ContactPage() {
  return (
    <div className={styles.bg}>
      <main className={styles.main}>
        {/* Left Section: Text and Buttons */}
        <section className={styles.left}>
          <div className={styles.buttonRow}>
            <button className={styles.primaryBtn}>Contact Us</button>
            <button className={styles.secondaryBtn}>Join Us</button>
          </div>
          <h1 className={styles.heading}>
            Want to Know More?<br />Reach Out to us!
          </h1>
          <p className={styles.subtext}>We Will get back to you asap!</p>
          <Image
            src={logo}
            alt="KIIT Entrepreneurship Cell Logo"
            className={styles.logo}
            width={180}
            height={60}
            priority
          />
        </section>
        {/* Right Section: Contact Form */}
        <section className={styles.right}>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
