"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Contact Us</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.input}
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className={styles.input}
          value={form.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={styles.textarea}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
